'use client';

import { Menu, Plane, X } from 'lucide-react';
import { usePathname } from 'next/navigation';
import React, { useState, useEffect } from 'react';

const links = [
  { href: "/#home", label: "Home" },
  { href: "/#services", label: "Services" },
  { href: "/#faq", label: "FAQ" },
  { href: "/#contact", label: "Contact Us" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    document.body.style.overflow = !menuOpen ? 'hidden' : 'unset';
  };

  const handleLinkClick = () => {
    setMenuOpen(false);
    document.body.style.overflow = 'unset';
  };

  const email = process.env.NEXT_PUBLIC_EMAIL;
  const subject = encodeURIComponent(process.env.NEXT_PUBLIC_EMAILSUBJECT as string);
  const body = encodeURIComponent(
    "Hello,\n\nI am contacting your company to:\n\n- Seek guidance and talent support.\n- Discuss potential investment opportunities to support your company.\n\nPlease let me know how we can proceed further.\n\nLooking forward to your response.\n\nBest regards,"
  );

  const mailtoLink = `mailto:${email}?subject=${subject}&body=${body}`;

  return (
    <header
      className={`flex justify-center items-center fixed top-0 w-full z-50 transition-all duration-300 
        ${scrolled ? 'bg-white/80 backdrop-blur-md shadow-lg' : 'bg-transparent'}
        ${menuOpen ? 'bg-white/90' : ''}`}
    >
      <div className='container flex justify-between items-center h-[60px] sm:h-[70px] md:h-[80px] px-3 sm:px-4 lg:px-8'>
        <div className='relative z-50'>
          <span className='w-auto h-[40px] cursor-pointer'>
            <img className='h-[40px] cursor-pointer object-contain' src="/engineer k.png" alt="logo" />
          </span>
        </div>

        <nav className='hidden lg:block'>
          <ul className='flex space-x-4 xl:space-x-8'>
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`${pathname === link.href ? 'border-b-2 border-blue-500 hover:border-none' : ''} 
                    relative transition-colors duration-300 text-sm xl:text-base
                    ${scrolled || menuOpen 
                      ? 'text-blue-900 hover:text-blue-700' 
                      : 'text-blue-300 hover:text-white'
                    }
                    after:content-[""] after:absolute after:w-full after:h-0.5 
                    after:bg-gradient-to-r from-blue-500 to-cyan-500 after:left-0 after:-bottom-1 after:rounded-full
                    after:scale-x-0 after:transition-transform after:duration-300
                    hover:after:scale-x-100`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className='flex items-center gap-2 sm:gap-4'>
          <div className='relative z-50'>
            <a href={mailtoLink} className='bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-3 sm:px-4 py-2 lg:py-3 
            rounded-full transition-all duration-300 flex items-center gap-1 sm:gap-2 hover:shadow-lg text-xs sm:text-sm md:text-base'>
              <Plane className="w-3 h-3 sm:w-4 sm:h-4" />
              <span className='hidden xs:inline'>Connect with Us</span>
            </a>
          </div>

          <button
            onClick={toggleMenu}
            type='button'
            className={`relative z-50 lg:hidden p-1.5 sm:p-2 rounded-full transition-all duration-300
              ${scrolled || menuOpen 
                ? 'text-blue-900 hover:bg-blue-100' 
                : 'text-blue-300 hover:bg-white/10'
              }`}
          >
            {menuOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
          </button>
        </div>
      </div>

      <div
        className={`fixed inset-0 bg-white/95 backdrop-blur-sm h-screen transition-opacity bg-opacity-40 duration-300 lg:hidden
          ${menuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
        style={{ pointerEvents: menuOpen ? 'auto' : 'none' }}
      >
        <nav className={`flex items-center justify-center h-full transition-transform duration-500
          ${menuOpen ? 'translate-y-0' : '-translate-y-full'}`}>
          <ul className='flex flex-col items-center space-y-6 sm:space-y-8'>
            {links.map((link, index) => (
              <li
                key={link.href}
                className={`transition-all duration-500 delay-${index * 4000}
                  ${menuOpen ? 'translate-y-0 opacity-100' : '-translate-y-8 opacity-0'}`}
              >
                <a
                  href={link.href}
                  onClick={handleLinkClick}
                  className='text-blue-900 font-light hover:text-blue-700 text-sm sm:text-base md:text-lg
                    transition-colors duration-300 relative
                    after:content-[""] after:absolute after:w-full after:h-0.5 
                    after:bg-gradient-to-r from-blue-500 to-cyan-500 after:left-0 after:-bottom-1 after:rounded-full
                    after:scale-x-0 after:transition-transform after:duration-300
                    hover:after:scale-x-100'
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;