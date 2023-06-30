import React from 'react'
import VIDEO from '../videos/homeVid.mp4';

export default function Video() {
  return (
    <div className='video-cont'>
        <div className='video-text'>
          <h1 className='video-head'>The Way You Travel Matters</h1>
          <button className='video-btn' type='button' >LEARN MORE</button>
        </div>
        <video autoPlay={true} loop={true} muted>
            <source src={VIDEO} type="video/mp4" />
        </video>
    </div>
  )
}
