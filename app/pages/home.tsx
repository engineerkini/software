// HeroSection.tsx
import React from "react";
import { Component, Briefcase } from "lucide-react";
import Link from "next/link";

const HeroSection: React.FC = () => {
  return (
    <section
      id="home"
      className="bg-white w-full h-screen flex items-center justify-center"
    >
      <div className="w-full z-20 flex flex-col items-center justify-center h-full relative">
        {/* Profile image (Desktop only) */}
        <div className="hidden lg:block shadow rounded-full overflow-hidden w-[200px] h-[200px] absolute top-[200px] left-10">
          <img
            className="w-full h-full object-cover"
            src="/me.jpeg"
            alt="Profile"
          />
        </div>

        <div className="md:max-w-4xl mx-auto text-center flex flex-col items-center justify-center">
          {/* Lowered Full-Stack title */}
          <div className="mt-8 mb-6">
            <button
              type="button"
              className="bg-black text-white px-5 py-3 text-sm rounded-full transition-all duration-300"
            >
              Full-Stack Software Engineer
            </button>
          </div>

          {/* Headline */}
          <div className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500 px-5 md:px-[50px] text-3xl sm:text-4xl md:text-7xl font-semibold tracking-tight leading-tight animate-fade-in">
            <p>
              Building digital <br /> experiences that
            </p>
            <span
              className="text-4xl md:text-6xl pt-2"
              style={{ WebkitTextFillColor: "#000", color: "#000" }}
            >
              transform ideas into elegant solutions.
            </span>
          </div>

          {/* Description */}
          <p className="px-5 sm:max-w-lg text-[16px] text-gray-400 text-center mx-auto leading-[20px] animate-fade-in-delay mt-4">
            Specialized in creating seamless web applications with modern
            technologies. From concept to deployment, I design and develop
            solutions that are performant, scalable, and user-focused.
          </p>

          {/* Buttons */}
          <div className="flex gap-4 justify-center mt-8">
            <Link href="/#contact">
              <button
                type="button"
                className="px-8 py-3 rounded-md font-medium text-white bg-gradient-to-r from-blue-500 to-cyan-500 shadow-lg hover:opacity-90 transition-all duration-300"
                style={{ boxShadow: "0 4px 15px rgba(59, 130, 246, 0.3)" }}
              >
                <span className="flex items-center justify-center gap-2">
                  <Component className="w-[14px] h-[14px]" /> Let's Talk
                </span>
              </button>
            </Link>
            <Link href="/#services">
              <button
                type="button"
                className="px-8 py-3 rounded-md font-medium text-white bg-gradient-to-r from-blue-500 to-cyan-500 border duration-300"
              >
                <span className="flex items-center justify-center gap-2">
                  <Briefcase className="w-[14px] h-[14px]" /> My Skills
                </span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
