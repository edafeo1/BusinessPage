import React from 'react';
import { Parallax } from 'react-parallax';

import aboutbg from '../components/images/t.jpg'
import image1 from '../components/images/bg.jpg'
import image2 from '../components/images/paxel.jpeg'
import image3 from '../components/images/stats.jpg'
import image4 from '../components/images/bg.jpg'
import HomeHero from './HomeHero';
import About from './About';
import Stats from './Stats';
import WhatIDo from './WhatIDo';



const inlineStyle = {
  background: '#fff',
  left: '50%',
  top: '50%',
  position: 'absolute',
  padding: '20px',
  transform: 'translate(-50%, -50%)',
}

window.addEventListener("scroll", (event) => {
  
  if(window.pageYOffset > 800){
    document.getElementById("header-effect").style.display= 'flex';
  } else {
    document.getElementById("header-effect").style.display= 'block';
  }
  

  // scroll = 800px;
});


function HomeParralex() {
 
    return (

      <>
      <HomeHero/>

        <div style={{ textAlign: 'center' }}>

          <Parallax bgImage={ aboutbg } strength={500} className="parallax-1">

            <div style={{ height: 500 }}>
              <About/>
            </div>

          </Parallax>

          <h1>| | | Slide Across Text</h1>

          <Parallax bgImage={ image3 } blur={{ min: -3, max: 5 }}>

            <div style={{ height: 150 }}>
              <Stats/>
            </div>

          </Parallax>

          <h1>| | | Slide Across Text</h1> {/* Add Hower Effect to this Div */}

          <Parallax bgImage='' strength={-200} >

            <div style={{ height: 800, objectFit: 'contain'}}>
              <WhatIDo/>
            </div>

          </Parallax>

          <h1>| | | Slide accros Text</h1>
          
          <Parallax 
            bgImage=''
            strength={200}
            renderLayer={precentage => (
              <div style={{
                  position: 'absolute',
                  width: '100px',
                  height: '100px',
                  borderRadius: '50%',
                  background: `rgba(255, 123, 23, ${precentage * 1})`,
                  left: '50%',
                  top: '50%',
                  transform: `translate(-50%, -50%) scale(${precentage * 2})`,
                }}
              >
              </div>
            )}
          >
            <div style={{ height: 150, backgroundColor: 'gray'}}>
               Testimonial

            </div>

            <div style={{ height: 500 }}>
              <div style={inlineStyle}>Render prop</div>
            </div>
          </Parallax>
          
        </div>
        </>
      );
    }
    

    

export default HomeParralex
