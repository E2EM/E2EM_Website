import React from 'react'
import IMG1 from '../images/img1.png'
import I1 from '../images/1.png'
import I2 from '../images/2.png'
import I3 from '../images/3.png'
import I4 from '../images/4.png'
import I5 from '../images/5.png'
import I6 from '../images/6.png'
import w1 from '../images/w1.png'
import w2 from '../images/w2.png'
import w3 from '../images/w3.png'
import w4 from '../images/w4.png'
import w5 from '../images/w5.png'
import ROVE from '../images/rove.png'
import APPSTORE from '../images/appstore.png'
import GPLAY from '../images/googleplay.png'
import CYCMOB from '../images/cycle-mob.png'

const principles = [
    {
        src:I1,
        heading:"Reseach and Development",
        content:"Investing in cutting-edge technology for energy-efficient electric vehicles."
    },
    {
        src:I2,
        heading:"Sustainable Manufacturing Practices",
        content:"Eco-friendly production with renewable energy sources and local sourcing."
    },
    
    {
        src:I3,
        heading:"Connectivity and Mobility Compatibility",
        content:"Seamlessly integrating EVs with smart connectivity and advanced infrastructure communication."
    },
    {
        src:I4,
        heading:"Reseach and Development",
        content:"Investing in cutting-edge technology for energy-efficient electric vehicles."
    },
    {
        src:I5,
        heading:"Reseach and Development",
        content:"Investing in cutting-edge technology for energy-efficient electric vehicles."
    },
    {
        src:I6,
        heading:"Reseach and Development",
        content:"Investing in cutting-edge technology for energy-efficient electric vehicles."
    },

]

const why = [
    {
        src:w5,
        heading:"Local Sourcing",
        content:"Collaborating with local suppliers and manufacturers to support economies."
    },
    {
        src:w1,
        heading:"Affordability",
        content:"Accessible electric vehicles at competitive prices for wider consumer reach."
    },
    
    {
        src:w2,
        heading:"Cutting-Edge Technology",
        content:"Advanced research and development for superior electric mobility solutions."
    },
    {
        src:w3,
        heading:"Sustainable Design",
        content:" Compact and eco-friendly electric vehicles reducing environmental impact."
    },
    {
        src:w4,
        heading:"Renewable Energy Manufacturing",
        content:"State-of-the-art facilities powered by renewable energy sources."
    }

]

export default function Home() {
  return (
    <>
        <div>
            
            <div className='know-main-cont'>
            <h1 className='who-cont'>Who Are We?</h1>
                <div className='row'>
                    <div className='col-md-6 img1-cont'>
                        <img src={IMG1} alt='Img1' className='img1'/>

                    </div>
                    <div className='col-md-5 know-cont'>
                        <div>
                            <h2 className='head-know'>
                                Know About Us
                            </h2>
                        </div>
                        <div>
                            <p className='text-know'>
                            E2EM is a fast-growing start-up dedicated to transforming the electric vehicle (EV) industry and shaping the future of mobility solutions. As a start-up recognised by the Government of India, we are at the forefront of developing cutting-edge micro-mobility solutions and technology products.Our passion at E2EM is to create sustainable and affordable electric vehicles that meet the needs of modern urban commuters.
                            </p>
                            <p  className='text-know'>
We are committed to driving positive change with a team of skilled engineers and visionaries by providing eco-friendly transportation options that improve convenience, efficiency, and connectivity. Join us on this transformative journey as we empower individuals, reduce carbon emissions, and build a greener and smarter mobility future. E2EM can help you discover the power of electric vehicles today.
                            </p>
                        </div>
                        <div>
                            <button type='button' className='learn-btn' >LEARN MORE</button>
                        </div>
                    </div>
                </div>
            </div>


            <div className='principle-cont'>
                <div >
                    <h1 className='principle-head'>
                        Our Core Principles 
                    </h1>
                </div>
                <div>
                    <div className='row principle-main-box'>
                        
                        {
                            principles.map(({src, heading, content})=>{
                                return(
                                    <div className='col-md-3 col-sm-6  principle-box'>
                                    <div>
                                        <img className='principle-img' src={src} alt='1' />
                                        <h3 className='principle-heading'>
                                            {heading}
                                        </h3>
                                        <p className='principle-text'>
                                            {content}
                                        </p>
                                    </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>

            <div>
                <div className='rove-cont'>
                    <div>
                        <img src={ROVE} className='rove-img' alt='rove' />
                    </div>
                    <div>
                        <p className='rove-text'>BE THE PART OF REVOLUTION</p>
                    </div>
                    <div>
                        <button type='button' className='learn-btn' >LEARN MORE</button>
                    </div>
                </div>
            </div>


        </div>



        <div className='why-main-cont'>
            <div>
                <div>
                    <h1 className='why-main-head'>
                        Why Choose E2EM?
                    </h1>
                </div>
                <div className='row principle-main-box'>
                        {
                            why.map(({src, heading, content})=>{
                            return(
                                <div className='col-md-4 col-sm-6  why-box'>
                                    <div className='why-cont'>
                                        <div className='why-img-cont'>
                                        <img className='why-img' src={src} alt='1' />
                                        </div>
                                        <h3 className='why-heading'>
                                            {heading}
                                        </h3>
                                        <p className='why-text'>
                                            {content}
                                        </p>
                                    </div>
                                    </div>
                            )
                        })
                        }
                </div>
                
            </div>
        </div>


        <div>
            <div className='try-main-cont'>
                <div className='try-cont'>
                    <div>
                        <div className='try-head'>
                        Try our app
                        </div>
                        <div className='try-text'>
                        The E2EM vehicles are all app-based. Our app allows you to control them. Get the vehicle's current location, battery information, and so on. To maintain integrity and convenience, two separate login dashboards for Admin and Hub. 
                        </div>
                        <div className='try-text'>
                        The app manages and organises all vehicle-related features such as battery swapping, vehicle maintenance, vehicle allocation, vehicle collection, and Wallet for money addition.
                        </div>
                        <div className='try-download-text'>
                            Download our App Now
                        </div>
                        <div className='download-cont'>
                            <div>
                                <img src={APPSTORE} className='try-download' alt='app'/>
                            </div>
                            <div>
                                <img src={GPLAY} className='try-download' alt='play'/>
                            </div>
                        </div>
                    </div>
                    <div className='cyc-img-cont'>
                        <img src={CYCMOB} alt='cyc-mob' />
                        {/* <img src={MOBILE} className='mobile-img' alt='mobile'/> */}
                        {/* <img src={CYCLE} className='cycle-img' alt='cycle'/> */}
                    </div>
                </div>
            </div>
        </div>
        


        


    </>
  )
}
