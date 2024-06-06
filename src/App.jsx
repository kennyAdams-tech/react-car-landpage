import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Background from './components/Background/Background'
import Hero from './components/Hero/Hero'

const App = () => {

  let heroData = [
    {text1: 'Dive into', text2: 'what you love'},
    {text1: 'Indulge', text2: 'your passions'},
    {text1: 'Give in to', text2: 'your passions'},
  ]

  const [heroCount , setHeroCount] = useState(2)
  const [playStatus, setPlayStatus] = useState(false)
  


useEffect(() => {
  setInterval(() => {setHeroCount((count) => { return count === 2 ? 0 : count + 1})}, 3000)
},[])


  
  return (
    <div>
      <Navbar/>
      <Background
      heroCount={heroCount}
      playStatus={playStatus}
      heroData={heroData}
      />
      <Hero
      heroData={heroData[heroCount]}
      heroCount={heroCount}
      setHeroCount={setHeroCount}
      playStatus={playStatus}
      setPlayStatus={setPlayStatus}
      />
    </div>
  )
}

export default App