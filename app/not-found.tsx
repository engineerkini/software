'use client';

import React, { Suspense } from 'react';
import Link from 'next/link';
import LoadingBar from './components/LoadingBar';


const Notfound = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LoadingBar />
      <div className="w-full h-full min-h-screen flex flex-col items-center justify-center bg-backgroundColor">
        <div className="relative z-50">
          <span className="w-[60px] h-[60px] cursor-pointer">
            <img
              className="w-[60px] h-[60px] object-cover object-center"
              src="/logo.png"
              alt="logo"
            />
          </span>
        </div>

        <div className="flex flex-col items-center justify-center">
          <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-amber-500 cursor-pointer text-[96px]">
            404
          </h1>
          <p className="text-white text-bodyDefault leading-bodySmall">
            Unfortunately, this page doesn't exist.
          </p>
        </div>
        <button
          className="px-8 py-3 rounded-md mt-5 font-medium text-white bg-gradient-to-r from-pink-500 to-amber-500 shadow-lg hover:opacity-90 transition-all duration-300"
          style={{
            boxShadow: '0 4px 15px rgba(255, 146, 91, 0.3)',
          }}
        >
          <Link className="text-white" href="/">
            Back to Home
          </Link>
        </button>
      </div>
    </Suspense>
  );
};

export default Notfound;
