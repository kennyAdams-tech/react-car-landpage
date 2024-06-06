import React from 'react'
import './Action.css'
import pauseIcon from '../../Assets/pause_icon.png'
import playIcon from '../../Assets/play_icon.png'

const Action = ({
   
    heroCount,
    setHeroCount,
    playStatus,
    setPlayStatus,
}) => {
  return (
    <div className="d-flex">
    <div className="btn">
        <button 
        onClick={() =>setHeroCount(0)}
        className={heroCount === 0 ? 'orange' : ''}></button>
        <button 
        onClick={() =>setHeroCount(1)}
        className={heroCount === 1 ? 'orange' : ''}></button>
        <button 
        onClick={() =>setHeroCount(2)}
        className={heroCount === 2 ? 'orange' : ''}></button>
    </div>

    <div className="setPlayStatus">
      <div className="setPlaystatus-content">
        <img src={playStatus ? pauseIcon : playIcon} alt="" onClick={() => setPlayStatus(playStatus ? false : true)} />
        See Video Here
      </div>
    </div>
  </div>
  )
}

export default Action