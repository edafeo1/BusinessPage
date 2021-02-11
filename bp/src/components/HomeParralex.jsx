import React from 'react';
import { Parallax } from 'react-parallax';

import image1 from '../components/bg.jpg'
import image2 from '../components/paxel.jpeg'
import image3 from '../components/paxel2.png'
import image4 from '../components/bg.jpg'



const inlineStyle = {
  background: '#fff',
  left: '50%',
  top: '50%',
  position: 'absolute',
  padding: '20px',
  transform: 'translate(-50%, -50%)',
}

function HomeParralex() {
    return (
        <div style={{ textAlign: 'center' }}>
          <Parallax bgImage={ image1 } strength={500}>
            <div style={{ height: 500 }}>
              <div style={inlineStyle}>HTML inside the parallax</div>
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
      );
    }
    

    

export default HomeParralex
