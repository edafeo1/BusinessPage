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
            <nav className='text-right sm:text-center ml-80 sm:ml-0 mt-10 sm:mt-0 sm:flex sm:justify-between bg-black bg-opacity-30 px-12 z-20'>
             <div>
               <h1>
               <a href="/" >Ofego Edafe</a>
               </h1>
             </div>

             <div className='space-x-10 items-center space-y-4 sm:space-y-0 sm:flex'>
               <span className='block '>what i do</span>
               <span className='block'>contact</span>
               <span className='block'>portfolio</span>
             </div>

            </nav>
            {/* Header Text */}
            <div className=' w-9/12 mx-auto h-full '>
              <div className=' flex items-center h-full'>
                <div className=''>
                  <h1 className='invisible md:visible text-9xl font-bold text-white text-center leading-tight' style={{textShadow: '0 1px 20px #212121'}}>Focused on brand success</h1>
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