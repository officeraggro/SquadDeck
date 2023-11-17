import React from 'react'
import "../../Styled/nav-bar.css"



const HamburgerMenu = () => {
  
  const handleClick = () => {
   return dropdown()
  }

 const dropdown = () => {

  return (
    <div className='burgerMenuDropdown'>
      <ul>
        <li>Link 1</li>
        <li>Link 2</li>
        <li>Link 3</li>
        <li>Link 4</li>
      </ul>
    </div>
  )
  

  }
  

  return (
    <div className='burger-menu' onClick={handleClick}>
      <div className='burger-menu-bar'></div>
      <div className='burger-menu-bar'></div>
      <div className='burger-menu-bar'></div>
    </div>
  )
}

export default HamburgerMenu