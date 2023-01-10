import React, {useState}from 'react'
import './NavBar.css'
function NavBar() {
  const [color, setColor] = useState(false);
  const updateColor=()=>{
    if (window.scrollY>=100) {
      setColor(true)
    }else{
      setColor(false)
    }
  }

  window.addEventListener('scroll',updateColor)
  return (
    <div className= {color ? 'colorNavbar':'navbar'}>
        <img className='logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="Netflix Logo" />
        <img className='avatar' src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="Avatar" />
    </div>
  )
}
//soorya
export default NavBar