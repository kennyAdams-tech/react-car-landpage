import React, { useEffect, useState } from 'react'
import { IoMdArrowDropdown } from 'react-icons/io'
import './Navbar.css'

const Navbar = () => {
  const [active, setActive] = useState('list')
  const [toggleIcon, setToggleIcon] = useState('hamburger')
  const [sticky, setSticky] = useState(true)
  const [activeDropDwIcon, setActiveDropDwIcon] = useState('dropdownIcon')
  const [dropdown, setDropdown] = useState('drop-down')

  const toggle = () => {
    active === 'list' ? setActive('list active') : setActive('list')
    toggleIcon === 'hamburger' ? setToggleIcon('hamburger active') : setToggleIcon('hamburger')
  }

  const dropDownToggle = () => {
      dropdown === 'drop-down' ? setDropdown('drop-down show') : setDropdown('drop-down')

      activeDropDwIcon === 'dropdownIcon' ? setActiveDropDwIcon('dropdownIcon rotate') : setActiveDropDwIcon('dropdownIcon')
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
                  <li className='home'>Home <IoMdArrowDropdown onClick={dropDownToggle} className={activeDropDwIcon}/> <ul className={dropdown}>
                    <li>Dropdown 1</li>
                    <li>Dropdown 2</li>
                    <li>Dropdown 3</li>
                    <li>Dropdown 4</li>
                    </ul>
                </li>
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