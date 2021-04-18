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
             <div id='about-wrapper'>

                 
<div id="about-section">

 
    
    <div>
        {/* Icon Div */}
        <ImportantDevicesIcon style={iStyle} className="w-96 h-96"/>
    </div>

    <div id='paragraph' class=''>
        <h4 className="text-white-500">Heading</h4>
        {/* Message Div */}
        <p >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius, voluptas.</p>
    </div>
</div>

<div id="about-section">
    <div>
        {/* Icon Div */}
        <h4 >Icon</h4>
    </div>

    <div id='paragraph'>
        <h4 >Heading</h4>
        {/* Message Div */}
        <p >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et, quidem.</p>
    </div>
</div>

<div id="about-section">
    <div>
        {/* Icon Div */}
        <h4 >Icon</h4>
    </div>

    <div id='paragraph'>
        <h4 >Heading</h4>
        {/* Message Div */}
        <p >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod, tempore.</p>
    </div>
</div>


</div>
        </section>
       
    )
}

export default About;
