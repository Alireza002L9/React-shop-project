import './Navbar.css'
import cart_icon from '../assets/cart_icon.png'
import logo from '../assets/logo.png'
import { NavLink } from 'react-router-dom'
import { useRef, useState } from 'react'
import { useEffect } from 'react'

const Navbar = ({ handleCategory, cart }) => {
    const focusLi = useRef()
    useEffect(() => {
        const hasEffectRun = localStorage.getItem('hasEffectRun');
    
        if (!hasEffectRun) {
            focusLi.current.focus({ focusVisible: true });
            localStorage.setItem('hasEffectRun', true);
        }
    }, []);
  return (
    <div className='navbar'>
        <div className='nav-logo'>
            <img src={logo} />
            <p>BRAND</p>
        </div>
        <div>
            <ul className='nav-menu'>
                <li><NavLink to='/' className='navLink' ref={focusLi}>Shop</NavLink></li>
                <li onClick={()=> handleCategory('men')}><NavLink to='/ShopCategory' className='navLink'>Men</NavLink></li>
                <li onClick={()=> handleCategory('women')}><NavLink to='/ShopCategory' className='navLink'>Women</NavLink></li>
                <li onClick={()=> handleCategory('kid')}><NavLink to='/ShopCategory' className='navLink'>Kids</NavLink></li>
            </ul>
        </div>
        <div className='nav-login-cart'>
            <NavLink to='/Login'><button className='loginBtn' onClick={() => window.scrollTo(0, 105)}><span>Login</span></button></NavLink>
            <NavLink to='/Cart'><img src={cart_icon} /></NavLink>
            <div className='nav-cart-count'>{cart.length}</div>
        </div>
    </div>
  )
}

export default Navbar