import React from 'react'
import './Background.css'
import image1 from '../../Assets/image1.png'
import image2 from '../../Assets/image2.png'
import image3 from '../../Assets/image3.png'
import video from '../../Assets/video1.mp4'

const Background = ({heroCount, playStatus}) => {
   if (playStatus) {
     return <video  className='background' autoPlay loop muted>
        <source  src={video} type='video/mp4'/>
     </video>
   } else if (heroCount === 0) {
     return  <img  className='background' src={image1} alt="" />
   } else if (heroCount === 1) {
     return <img  className='background' src={image2} alt="" />
 } else if (heroCount === 2) {
    return <img  className='background' src={image3} alt="" />
 }
}

export default Background