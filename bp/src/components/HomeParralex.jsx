import React from 'react';
import { Parallax } from 'react-parallax';

import aboutbg from '../components/images/t.jpg'
import image1 from '../components/images/bg.jpg'
import image2 from '../components/images/paxel.jpeg'
import image3 from '../components/images/paxel2.png'
import image4 from '../components/images/bg.jpg'
import HomeHero from './HomeHero';
import About from './About';



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
            <div style={{ height: 800 }}>
              <About/>
            </div>
          </Parallax>
          <h1>| | |</h1>
          <Parallax bgImage={ image2 } blur={{ min: -1, max: 5 }}>
            <div style={{ height: 500 }}>
              <div style={inlineStyle}>Dinamic blur</div>
            </div>
          </Parallax>
          <h1>| | |</h1>
          <Parallax bgImage={ image3 } strength={-200} >
            <div style={{ height: 500 }}>
              <div style={inlineStyle}>Reverse direction</div>
            </div>
          </Parallax>
          <h1>| | |</h1>
          <Parallax 
            bgImage={ image4 }
            strength={200}
            renderLayer={precentage => (
              <div 
                style={{
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
            <div style={{ height: 500 }}>
              <div style={inlineStyle}>Render prop</div>
            </div>
          </Parallax>
          <div style={{ height: '100vh' }}></div>
        </div>
        </>
      );
    }
    

    

export default HomeParralex
