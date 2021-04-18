import React from 'react'
import hero1 from '../components/images/hero1.jpg'

function Header() {
  return (
    <div className="App">
      {/* <Header/>
      <HomeParralex/>
      <Footer/> */}
      <section className=' h-screen bg-red-500 bg-cover bg-center' style={{backgroundImage: `url(${hero1})`}}>
        {/* Header section black overlay on bg */}
        <div className=' w-full h-full bg-black absolute top-0 left-0 bg-opacity-60 z-10'>
            {/* Navbar */}
            <nav className='absolute top-0 left-0  w-full h-24 flex items-center bg-black bg-opacity-30 px-12 z-20'>
              <div>
                <a className='text-yellow-400 text-xl font-bold'>
                  OFEGO-EDAFE
                </a>
              </div>
              <div className=' flex justify-end ml-auto gap-x-11 '>
                <a href='' className='block text-yellow-500 text-sm uppercase font-semibold'>
                  HOME
                </a>
                <a href='' className='block text-white text-sm uppercase font-semibold'>
                  ABOUT ME
                </a>
                <a href='' className='block text-white text-sm uppercase font-semibold'>
                  MY PORTFOLIO
                </a>
                <a href='' className='block text-white text-sm uppercase font-semibold'>
                  What i create
                </a>
                <a href='' className='block text-white text-sm uppercase font-semibold'>
                  Pricing
                </a>
                <a href='' className='block text-white text-sm uppercase font-semibold'>
                  Contact Me
                </a>
              </div>
            </nav>
            {/* Header Text */}
            <div className=' w-9/12 mx-auto h-full '>
              <div className=' flex items-center h-full'>
                <div>
                  <h1 className=' text-9xl font-bold text-white text-center leading-tight' style={{textShadow: '0 1px 20px #212121'}}>Focused on brand success</h1>
                  <div className=' mt-16 text-center'>
                    <a className=' bg-yellow-400 px-8 py-3 rounded-full shadow-md text-white uppercase text-sm mr-7'>Contact Me</a>
                    <a className=' bg-yellow-400 px-8 py-3 rounded-full shadow-md text-white uppercase text-sm'>Discover Me</a>
                  </div>
                </div>
              </div>
            </div> 
        </div>

        
      </section>
    </div>
  );
}

export default Header;