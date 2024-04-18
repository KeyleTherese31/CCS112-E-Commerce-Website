import React from 'react'
import { FaShippingFast } from "react-icons/fa";
import './nav.css'
import { AiOutlineSearch } from 'react-icons/ai';
import { MdLogin } from "react-icons/md";
import { CgLogOut, CgUser} from "react-icons/cg";
import { useAuth0 } from "@auth0/auth0-react";
import {Link} from 'react-router-dom';

function Nav() { 
    const { loginWithRedirect, logout, user, isAuthenticated} = useAuth0();
  return (
    <>
      <div className='header'>

<div className='top_header'>

    <div className='icon'>
<FaShippingFast/>

    </div>

    <div className='info'>

        <p>
            Free Shipping When Shopping upto 1000
        </p>

    </div>
</div>
<div className='mid_header'>
<div className='logo'>
    <img src='image/logo.jpg'alt='logo' style={{ width: '97px', height: '54.5px' }} ></img>
</div>

<div className='search_box'>
    <input type='text' value='' placeholder='search'></input>
    <button><AiOutlineSearch/></button>
</div>
{
    isAuthenticated ?
    <div className='user'>
    <div className='icon'>
    <CgLogOut />

    </div>
    <div className='btn'>
        <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>Logout</button>
    </div>
</div>
:
<div className='user'>
    <div className='icon'>
    <MdLogin />
    </div>
    <div className='btn'>
        <button onClick={() => loginWithRedirect()}>Login</button>
    </div>
</div>
}
</div>
<div className='last_header'>
    <div className='user_profile'>
        {
            isAuthenticated ?
            <>
            <div className='icon'>
                <CgUser />
            </div>
            <div className='info'>
            <h2>{user.name}</h2>
            <p>{user.email}</p>
            </div>
            </>
            :
            <>
             <div className='icon'>
                <CgUser />
            </div>
            <div className='info'>
                <p>Login mo muna account mo</p>
            </div>
            </>
        }
    </div>
    <div className='nav'>
        <ul>
            <li><Link to='/' className='link'>Home</Link></li>
            <li><Link to='/shop' className='link'>Shop</Link></li>
            <li><Link to='/collection' className='link'>Collection</Link></li>
            <li><Link to='/about' className='link'>About</Link></li>
            <li><Link to='/contact' className='link'>Contact</Link></li>
        </ul>
    </div>
    <div className='offer'>
        <p>Flash Sale: Buy 3 Get Freebies</p>
    </div>
</div>
      </div>
    </>
  )
}

export default Nav
