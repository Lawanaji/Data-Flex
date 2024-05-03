import React from 'react';
import logo from '../../assets/logo.svg';
import { Link } from 'react-router-dom';
import { List } from '@phosphor-icons/react';

const Navbar = () => {

  
  return (
     <nav className='w-full h-[80px] bg-white hadow-md flex justify-center bg-NeutralLight items-center fixed left-0 top-0 z-20'> 
        <div className="container">
          <div className="flex justify-between items-center gap-4">
            <Link to={"#"} className='inline-block w-[150px] h-auto'>
              <img src={logo} className='w-full h-full object-cover' alt="Logo" />      
            </Link>

            <div className='hidden w-4/5 md:flex justify-between items-center gap-4'>
              <a href="Home" >Home</a>
              <a href="#choose">Features</a>
              <a href="/Pricing">Pricing</a>
              <a href="/contact">Contact Us</a>
              <button>Sign In</button>
              <button>Sign Up</button>
            </div>

            <List size={32} className='block md:hidden' />

          </div>
        </div>


     </nav>
  );
}

export default Navbar;
