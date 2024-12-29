import React from 'react'

const Notfound = () => {
  return (
    <div className='w-full h-full min-h-screen  flex flex-col items-center justify-center bg-backgroundColor'>
      
      <div className='relative z-50'>
          <span className='w-[60px] h-[60px] cursor-pointer'>
          <img className='w-[60] cursor-pointer  h-[60] object-cover object-center'src="/logo.png" alt="logo" />
          </span>
        </div>

         <h1 className='bg-gradient-to-r cursor-pointer from-primaryText to-secondaryText text-transparent bg-clip-text text-[96px]'>404</h1>
       
    </div>
  )
}

export default Notfound
