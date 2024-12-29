import Link from 'next/link'
import React from 'react'

const Notfound = () => {
  return (
    <div className='w-full h-full min-h-screen  flex flex-col items-center justify-center bg-backgroundColor'>

      <div className='relative z-50'>
        <span className='w-[60px] h-[60px] cursor-pointer'>
          <img className='w-[60] cursor-pointer  h-[60] object-cover object-center' src="/logo.png" alt="logo" />
        </span>
      </div>

<div className='flex flex-col items-center justify-center'>
<h1 className='bg-gradient-to-r cursor-pointer from-primaryText to-secondaryText text-transparent bg-clip-text text-[96px]'>404</h1>
<p className='text-white text-bodyDefault leading-bodySmall'>Unfortunately, this page doesn't exist.</p>
</div>
      <button

        className=" cursor-pointer bg-gradient-to-r from-primaryText to-secondaryText  text-white px-5 py-3 bg-opacity-10 hover:bg-opacity-75 shadow-xl hover:shadow-2xl text-bodyDefault font-[600] rounded-[10px] transition-all duration-300 mt-6"
      >
        <Link className='text-white' href='/'>
          Back to Home
        </Link>

      </button>
    </div>
  )
}

export default Notfound
