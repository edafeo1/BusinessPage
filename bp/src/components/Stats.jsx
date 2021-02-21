import React from 'react'
import CountUp from "react-countup";
import VisibilitySensor from 'react-visibility-sensor';



function Stats() {

    return (
        <section>
            <div id='stats-wrapper'>

                 
<div id="about-section">
    <div id='paragraph'>
    <CountUp end={100} redraw={true}>
        {({ countUpRef, start }) => (
            <VisibilitySensor onChange={start} delayedCall>
                <span ref={countUpRef} style={{fontSize: '30px'}}/>
            </VisibilitySensor>
        )}
    </CountUp>
        </div>
</div>

<div id="about-section">
    <div id='paragraph'>
    <CountUp end={100} redraw={true}>
        {({ countUpRef, start }) => (
            <VisibilitySensor onChange={start} delayedCall>
                <span ref={countUpRef} style={{fontSize: '30px'}}/>
            </VisibilitySensor>
        )}
    </CountUp>
        </div>
</div>

<div id="about-section">
    <div id='paragraph'>
    <CountUp end={100} redraw={true}>
        {({ countUpRef, start }) => (
            <VisibilitySensor onChange={start} delayedCall>
                <span ref={countUpRef} style={{fontSize: '30px'}}/>
            </VisibilitySensor>
        )}
    </CountUp>
        </div>
</div>


</div>
        </section>
    )
}

export default Stats
