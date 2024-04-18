import React from 'react'
import { FaShippingFast } from "react-icons/fa";
import './nav.css'
import { AiOutlineSearch } from 'react-icons/ai';
import { MdLogin } from "react-icons/md";
import { CgLogOut } from "react-icons/cg";
import { useAuth0 } from "@auth0/auth0-react";

function Nav() { 
    const { loginWithRedirect, logout } = useAuth0();
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
<div className='user'>
    <div className='icon'>
    <MdLogin />
    </div>
    <div className='btn'>
        <button onClick={() => loginWithRedirect()}>Login</button>
    </div>
</div>

<div className='user'>
    <div className='icon'>
    <CgLogOut />

    </div>
    <div className='btn'>
        <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>Logout</button>
    </div>
</div>

<div className='showProfile'>
const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  return (
    isAuthenticated && (
      <div>
        <img src={user.picture} alt={user.name} />
        <h2>{user.name}</h2>
        <p>{user.email}</p>
      </div>
    )
  );
};
</div>

</div>
      </div>
    </>
  )
}

export default Nav
