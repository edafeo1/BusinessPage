import React from 'react'
import { DesktopComputerIcon } from '@heroicons/react/solid'
import ImportantDevicesIcon from '@material-ui/icons/ImportantDevices';
import "../index.css"

const iStyle = {
    color: 'white',
    width: '30px',
    height: '40px'
    
    /*
    background: '#fff',
    left: '50%',
    top: '50%',
    position: 'absolute',
    padding: '20px',
    transform: 'translate(-50%, -50%)',
    */
  }

  

function About() {
    return (
        <section id="about">
             <h4 className="mobile-h4">Rocket Icon </h4>

             <div className="block ml-20 mr-20 md:grid grid-cols-3">

                 <div className='flex flex-row mb-10'>          {/* Add Paddings*/}
                     {/*icon*/}
                     <div className=''>
                         <p>Icon</p>
                     </div>

                     {/*Heading*/}
                     <div >
                         <span>Heading</span>
                         <p>I know it’s important to track the growth of your project over time. I’ll monitor and analyse so that I can implement improvements that will keep it developing as you do.</p>
                         
                     </div>
                 </div>

                 <div className='flex flex-row mb-10'>        
                     {/*icon*/}
                     <div>
                         <p className=''>Icon</p>
                     </div>

                     {/*Heading*/}
                     <div>
                         <span>Heading</span>
                         <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam, dicta.</p>
                     </div>
                 </div>

                 <div className='flex ml-auto mr-auto'>
                     {/*icon*/}
                     <div>
                         <p>Icon</p>
                     </div>

                     {/*Heading*/}
                     <div>
                         <span>Heading</span>
                         <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam, dicta.</p>
                     </div>
                 </div>

             </div>
        </section>
       
    )
}

export default About;
