import React from 'react'

const iStyle = {
    color: 'white',
    
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
        <h4 style={iStyle}>Icon</h4>
    </div>

    <div id='paragraph'>
        <h4 style={iStyle}>Heading</h4>
        {/* Message Div */}
        <p style={iStyle}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius, voluptas.</p>
    </div>
</div>

<div id="about-section">
    <div>
        {/* Icon Div */}
        <h4 style={iStyle}>Icon</h4>
    </div>

    <div id='paragraph'>
        <h4 style={iStyle}>Heading</h4>
        {/* Message Div */}
        <p style={iStyle}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et, quidem.</p>
    </div>
</div>

<div id="about-section">
    <div>
        {/* Icon Div */}
        <h4 style={iStyle}>Icon</h4>
    </div>

    <div id='paragraph'>
        <h4 style={iStyle}>Heading</h4>
        {/* Message Div */}
        <p style={iStyle}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod, tempore.</p>
    </div>
</div>
</div>
        </section>
       
    )
}

export default About;
