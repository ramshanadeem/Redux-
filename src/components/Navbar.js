import React,{useState} from 'react';
import logo from '../images/logo.png';
import '../App.css';
import { Link } from 'react-router-dom';

export default function Navbar() {
    const [nav,setnav]=useState(false);
    const changeBackground=()=>{
        if(window.scrollY>=50)
        {
            setnav(true);

        }
        else{
            setnav(false);
        }
    }
    window.addEventListener('scroll',changeBackground);
    return (
        <div>
            <nav className={nav? 'nav active':'nav'}>
                <a href="#" className='logo'>
                    <img src={logo} alt=''></img>
                </a>
                <input type='checkbox' className='menu-btn' id='menu-btn'/>
                <label className='menu-icon' for='menu-btn'>
                    <span className='nav-icon'></span>
                </label>
                <ul className='menu'>
                    <li>
                      <Link to="/" className='active' >Product List</Link>
                    </li>
                    <li>
                    <Link to="/product/:productId" className='active' >Product Detail</Link>
                       </li>
                  

                </ul>
            </nav>
        </div>
    )
}
