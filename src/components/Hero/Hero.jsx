import React from 'react'
import "./Hero.css"
import arrowBtn from '../../Assets/arrow_btn.png'
import pauseIcon from '../../Assets/pause_icon.png'
import playIcon from '../../Assets/play_icon.png'
import Action from '../Action/Action'

const Hero = ({
    heroData,
    heroCount,
    setHeroCount,
    playStatus,
    setPlayStatus,
}) => {
  return (
    <div className='hero'>
        <p>{heroData.text1}</p>
        <p>{heroData.text2}</p>
        <div className="explore">
            Explore the features <img src={arrowBtn} alt="" />
        </div>

        <Action heroCount={heroCount} setHeroCount={setHeroCount} setPlayStatus={setPlayStatus} playStatus={playStatus}/>

       
    </div>
  )
}

export default Hero