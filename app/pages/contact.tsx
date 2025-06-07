'use client'

import React, { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Github,
  Linkedin,
  Twitter,
  MessageSquare,
  Copy,
  Check,
  ArrowRight,
  Sparkles,
} from "lucide-react";

interface ContactCardProps {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  details: string;
  className?: string;
  onClick?: () => void;
  isClickable?: boolean;
}

const ContactCard: React.FC<ContactCardProps> = ({
  icon: Icon,
  title,
  details,
  className = "",
  onClick,
  isClickable = false,
}) => {
  const baseClasses = `
    relative overflow-hidden
    bg-gradient-to-br from-sky-500 via-sky-400 to-cyan-500 
    border border-sky-200/20 backdrop-blur-sm
    rounded-xl p-6 text-center
    shadow-lg shadow-sky-500/25
    h-48 flex flex-col justify-center
    w-full
    ${className}
  `;
  
  const clickableClasses = isClickable 
    ? `cursor-pointer group
       hover:shadow-2xl hover:shadow-sky-500/40
       hover:scale-105 hover:-translate-y-2
       transition-all duration-500 ease-out
       before:absolute before:inset-0 before:bg-gradient-to-br before:from-white/10 before:to-transparent before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300` 
    : "";

  const Component = isClickable ? 'button' : 'div';
  
  return (
    <Component
      className={`${baseClasses} ${clickableClasses}`}
      onClick={isClickable ? onClick : undefined}
    >
      {/* Background pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent"></div>
      
      {/* Animated background circle */}
      <div className={`absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-xl ${isClickable ? 'group-hover:scale-150 transition-transform duration-700' : ''}`}></div>
      
      <div className="relative z-10 flex flex-col items-center justify-center h-full">
        <div className={`inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-white/20 backdrop-blur-sm mb-3 sm:mb-4 ${isClickable ? 'group-hover:bg-white/30 group-hover:scale-110 transition-all duration-300' : ''}`}>
          <Icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
        </div>
        <h3 className="text-white font-bold text-base sm:text-lg md:text-xl mb-2 sm:mb-3 tracking-wide">{title}</h3>
        <p className="text-sky-50 text-xs sm:text-sm md:text-base font-medium leading-relaxed break-words px-2">{details}</p>
        
        {isClickable && (
          <div className="mt-2 sm:mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 text-white mx-auto" />
          </div>
        )}
      </div>
    </Component>
  );
};

const ContactSection = () => {
  const [emailCopied, setEmailCopied] = useState(false);
  const [phoneCopied, setPhoneCopied] = useState(false);

  const email = "engineerkini@gmail.com";
  const phoneNumber = "+254719248067";
  
  const subject = "Software Development Inquiry";
  const body = `Hello Engineer.K,

I am reaching out regarding:

- A potential software development project
- Collaboration opportunity
- Other professional inquiry

Looking forward to connecting with you.

Best regards,`;

  const copyToClipboard = async (text: string, setCopied: (value: boolean) => void) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
      return true;
    } catch (err) {
      alert(`Copy failed. Value: ${text}`);
      return false;
    }
  };

  const handleEmailClick = async () => {
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    try {
      window.location.href = mailtoLink;
      await copyToClipboard(email, setEmailCopied);
    } catch (error) {
      await copyToClipboard(email, setEmailCopied);
    }
  };

  const handlePhoneClick = async () => {
    try {
      window.location.href = `tel:${phoneNumber}`;
      await copyToClipboard(phoneNumber, setPhoneCopied);
    } catch (error) {
      await copyToClipboard(phoneNumber, setPhoneCopied);
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Call Me",
      details: phoneNumber,
      isClickable: true,
      onClick: handlePhoneClick,
    },
    {
      icon: Mail,
      title: "Email Me",
      details: email,
      isClickable: true,
      onClick: handleEmailClick,
    },
    {
      icon: MapPin,
      title: "Location",
      details: "Nairobi, Westlands, Kenya",
      isClickable: false,
    },
  ];

  return (
    <section id="contact" className="relative w-full bg-gradient-to-b from-gray-50 to-white py-8 sm:py-12 md:py-16 lg:py-24 overflow-hidden" style={{
      backgroundImage: "url('https://images.unsplash.com/photo-1528460033278-a6ba57020470?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
    }}>
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-48 sm:w-64 md:w-80 lg:w-96 h-48 sm:h-64 md:h-80 lg:h-96 bg-sky-500/5 rounded-full blur-3xl" aria-hidden="true"></div>
      <div className="absolute bottom-0 right-0 w-48 sm:w-64 md:w-80 lg:w-96 h-48 sm:h-64 md:h-80 lg:h-96 bg-cyan-500/5 rounded-full blur-3xl" aria-hidden="true"></div>
      
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center max-w-4xl mx-auto mb-8 sm:mb-12 md:mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 bg-sky-50 text-sky-600 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6">
            <Sparkles className="w-3 sm:w-4 h-3 sm:h-4" aria-hidden="true" />
            Let's Connect
          </div>
          
          <h2 className="text-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
            Ready to{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 via-sky-400 to-cyan-500 animate-pulse">
              bring your project
            </span>{" "}
            to life?
          </h2>
          
          <p className="text-gray-600 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed max-w-2xl mx-auto mb-6 sm:mb-8 md:mb-10 px-4 sm:px-0">
            Let's collaborate to build something amazing together. Whether you need a custom web application, 
            technical consultation, or just want to discuss ideas, I'm here to help transform your vision into reality.
          </p>

          <button
            onClick={handleEmailClick}
            className="group relative inline-flex items-center gap-2 sm:gap-3 bg-gradient-to-r from-sky-500 to-cyan-500 text-white px-4 sm:px-6 md:px-8 lg:px-10 py-2.5 sm:py-3 md:py-4 rounded-full text-sm sm:text-base md:text-lg font-semibold
                     hover:from-sky-600 hover:to-cyan-600 hover:shadow-2xl hover:shadow-sky-500/25 hover:scale-105
                     focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2
                     transition-all duration-300 overflow-hidden"
            aria-label={emailCopied ? "Email copied to clipboard" : "Connect with me via email"}
          >
            <div className="absolute inset-0 bg-white/10 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-out"></div>
            
            {emailCopied ? (
              <>
                <Check className="w-4 sm:w-5 h-4 sm:h-5 animate-bounce" aria-hidden="true" /> 
                <span>Email Copied!</span>
              </>
            ) : (
              <>
                <MessageSquare className="w-4 sm:w-5 h-4 sm:h-5 group-hover:rotate-12 transition-transform duration-300" aria-hidden="true" /> 
                <span>Connect with Me</span>
                <ArrowRight className="w-3 sm:w-4 h-3 sm:h-4 group-hover:translate-x-1 transition-transform duration-300" aria-hidden="true" />
              </>
            )}
          </button>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-5xl mx-auto mb-8 sm:mb-12 md:mb-16 lg:mb-20">
          {contactInfo.map((info, index) => (
            <div key={info.title} className="relative w-full animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <ContactCard 
                icon={info.icon}
                title={info.title}
                details={info.details}
                isClickable={info.isClickable}
                onClick={info.onClick}
              />
              {((info.title === "Email Me" && emailCopied) || 
                (info.title === "Call Me" && phoneCopied)) && (
                <div className="absolute -top-2 -right-2 sm:-top-3 sm:-right-3 bg-green-500 text-white px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-xs font-medium flex items-center gap-1 animate-bounce shadow-lg z-20">
                  <Check className="w-3 h-3" aria-hidden="true" />
                  Copied!
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Social Links */}
        <div className="text-center mb-6 sm:mb-8 md:mb-12">
          <h3 className="text-black text-lg sm:text-xl md:text-2xl font-bold mb-4 sm:mb-6 md:mb-8">Find me on</h3>
          <div className="flex justify-center gap-4 sm:gap-6 md:gap-8">
            {[
              { href: "https://github.com/engineerkini", icon: Github, label: "GitHub" },
              { href: "https://www.linkedin.com/in/kini-esther-306729327/", icon: Linkedin, label: "LinkedIn" },
              { href: "https://x.com/EngineerBrown7", icon: Twitter, label: "Twitter" }
            ].map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={`Visit my ${label} profile`}
                className="group relative p-2.5 sm:p-3 md:p-4 rounded-full bg-gray-100 hover:bg-sky-50 transition-all duration-300 hover:scale-110 hover:shadow-lg
                         focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2"
              >
                <Icon className="w-5 sm:w-6 md:w-7 h-5 sm:h-6 md:h-7 text-gray-600 group-hover:text-sky-500 transition-colors duration-300" aria-hidden="true" />
                <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-black text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
                  {label}
                </span>
              </a>
            ))}
          </div>
        </div>

        {/* Email Fallback */}
        <div className="text-center">
          <p className="text-gray-500 text-xs sm:text-sm mb-2 sm:mb-3 md:mb-4">
            Having trouble with the email link? 
          </p>
          <button
            onClick={() => copyToClipboard(email, setEmailCopied)}
            className="group inline-flex items-center gap-2 text-sky-500 hover:text-sky-600 text-xs sm:text-sm font-medium 
                     hover:bg-sky-50 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full transition-all duration-300
                     focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2"
            aria-label="Copy email address to clipboard"
          >
            <Copy className="w-3 sm:w-4 h-3 sm:h-4 group-hover:scale-110 transition-transform duration-300" aria-hidden="true" />
            Copy email address directly
          </button>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
