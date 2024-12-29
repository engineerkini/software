'use client';

import { Button } from '@/components/ui/button';
import { LogIn, Menu, Phone, Plane, X } from 'lucide-react';
import React, { useState, useEffect } from 'react';

const links = [
  { href: "/#home", label: "Home" },
  { href: "/#services", label: "Services" },
  { href: "/#contact", label: "Contact Us" },
  { href: "/about", label: "About" },
  { href: "/talentroom", label: "Talent room" },

];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle menu open/close
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    // Prevent body scroll when menu is open
    document.body.style.overflow = !menuOpen ? 'hidden' : 'unset';
  };

  // Close menu on link click
  const handleLinkClick = () => {
    setMenuOpen(false);
    document.body.style.overflow = 'unset';
  };

  return (
    <header 
      className={`flex justify-center items-center  fixed top-0 w-full z-50 transition-all duration-300 
        ${scrolled ? 'bg-black/80 backdrop-blur-md shadow-lg' : 'bg-transparent'}
        ${menuOpen ? 'bg-black/90' : ''}`}
    >
      <div className=' container flex justify-between items-center  px-4 md:px-8 lg:px-16'>
        {/* Logo */}
        <div className='relative z-50'>
          <span className='w-[60px] h-[60px] cursor-pointer'>
          <img className='w-[60] cursor-pointer  h-[60] object-cover object-center'src="/logo.png" alt="logo" />
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className='hidden md:block'>
          <ul className='flex space-x-8'>
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className='relative text-white hover:text-gray-300 transition-colors duration-300
                    after:content-[""] after:absolute after:w-full after:h-0.5 
                    after:bg-primaryText after:left-0 after:-bottom-1 after:rounded-full
                    after:scale-x-0 after:transition-transform after:duration-300
                    hover:after:scale-x-100'
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

     <div className=' flex items-center gap-4'>
           {/* Sign Up Button */}
           <div className='relative z-50'>
          <Button className='hover:bg-[#3f3121c5] bg-bgCard text-primaryText px-4 py-2 md:py-3 
            rounded-full transition-all duration-300 flex items-center gap-2'>
            <Plane className="w-4 h-4" />
            <span>Connect with Us</span>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={toggleMenu}
          className='relative z-50 md:hidden text-white p-2 hover:bg-white/10 rounded-full
            transition-colors duration-300'
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
     </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-black/95 backdrop-blur-sm h-screen transition-opacity  bg-opacity-40  duration-300 md:hidden
          ${menuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
        style={{ pointerEvents: menuOpen ? 'auto' : 'none' }}
      >
        <nav className={`flex items-center justify-center h-full transition-transform duration-500
          ${menuOpen ? 'translate-y-0' : '-translate-y-full'}`}>
          <ul className='flex flex-col items-center space-y-8'>
            {links.map((link, index) => (
              <li 
                key={link.href}
                className={`transition-all duration-500 delay-${index * 4000}
                  ${menuOpen ? 'translate-y-0 opacity-100' : '-translate-y-8 opacity-0'}`}
              >
                <a
                  href={link.href}
                  onClick={handleLinkClick}
                  className='text-white  font-light hover:text-gray-300 
                    transition-colors duration-300 relative
                    after:content-[""] after:absolute after:w-full after:h-0.5 
                    after:bg-white after:left-0 after:-bottom-1 after:rounded-full
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