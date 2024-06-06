import React, { useEffect, useState } from 'react'
import './Navbar.css'

const Navbar = () => {
  const [active, setActive] = useState('list')
  const [toggleIcon, setToggleIcon] = useState('hamburger')
  const [sticky, setSticky] = useState(true)

  const toggle = () => {
    active === 'list' ? setActive('list active') : setActive('list')
    toggleIcon === 'hamburger' ? setToggleIcon('hamburger active') : setToggleIcon('hamburger')
  }

  useEffect(()=> {
    window.addEventListener('scroll', () => {
      window.scrollY > 10 ? setSticky(true) : setSticky(false)
    })
  },[])


  return (
    <div>
      <nav className={`${sticky ? 'darknav' : ''}`}>
            <div className="logo">Logo</div>
            <ul className={active}>
                <li>Home</li>
                <li>About</li>
                <li className='contact'>Contact</li>
            </ul>
            <div onClick={toggle} className={toggleIcon}>
              <div className="line1"></div>
              <div className="line2"></div>
              <div className="line3"></div>
            </div>
        </nav>
    </div>
  )
}

export default Navbar