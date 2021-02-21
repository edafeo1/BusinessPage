import React from 'react'
import SimpleCard from './SimpleCard'

function WhatIDo() {
    const heading = 'Lorem ipsum dolor sit amet.'
    const para1 = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, omnis.'
    const para2 = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur, ut.'
    return (
        <section>

            <div style={{ height: 200, backgroundColor: 'gray'}}>
                Testimonial
            </div>
            <h4 classNames>Services We Provide </h4>
            <p>How Can we help?</p>
            <div className="whatido-wrapper">
                
                <div className="card-container">

                    <div className="card">
                        <SimpleCard 
                        heading={heading}
                        para1={para1}
                        para2={para2}
                        />
                    </div>

                </div>

                <div className="card-container">
                    
                <div className="card">
                        <SimpleCard 
                        heading={heading}
                        para1={para1}
                        para2={para2}
                        />
                    </div>

                </div>

                <div className="card-container">
                    
                <div className="card">
                        <SimpleCard 
                        heading={heading}
                        para1={para1}
                        para2={para2}
                        />
                    </div>

                </div>

                <div className="card-container">
                    
                <div className="card">
                        <SimpleCard 
                        heading={heading}
                        para1={para1}
                        para2={para2}
                        />
                    </div>

                </div>

                <div className="card-container">
                    
                <div className="card">
                        <SimpleCard 
                        heading={heading}
                        para1={para1}
                        para2={para2}
                        />
                    </div>

                </div>

                <div className="card-container">
                    
                <div className="card">
                        <SimpleCard 
                        heading={heading}
                        para1={para1}
                        para2={para2}
                        />
                    </div>

                </div>
            </div>
        </section>
    )
}

export default WhatIDo
