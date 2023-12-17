import React, { useEffect, useState } from 'react';
import "../App.css";

// Images Import
import Logo from "../assets/images/logo.svg";
import Searching from "../assets/images/search.svg";

const Header = () => {
  const [hasBorder, setHasBorder] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Add your logic to determine whether the header should have a border
      const shouldHaveBorder = window.scrollY > 0;
      setHasBorder(shouldHaveBorder);
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <header className={`${hasBorder ? 'border-b border-gray-400' : 'bg-white'} fixed w-full top-0 z-50 transition-all ease-in-out duration-300`}>
        {/* Header Inner */}
        <div className='max-w-globalWidth'>

            {/* Logo */}
            <div className='w-1/3'>
                <a href="/">
                    <img src={Logo} alt="LearnDash" />
                </a>
            </div>

            {/* Main Menu */}
            <div className='w-1/3'>
              <ul>

                {/* Products */}
                <li>
                  <a href="/products">Products</a>
                  <ul></ul>
                </li>

                {/* Solutions */}
                <li>
                  <a href="/products">Solutions</a>
                  <ul></ul>
                </li>

                {/* Pricing */}
                <li>
                  <a href="/products">Pricing</a>
                </li>

                {/* Resources */}
                <li>
                  <a href="/products">Resources</a>
                  <ul></ul>
                </li>

                {/* Try LearnDash */}
                <li>
                  <a href="/products">Try LearnDash</a>
                </li>

              </ul>
            </div>

            {/* Search and Sign In */}
            <div className='w-1/3'>

              {/* Search */}
              <div>
                <a href="/search">
                  <img src={Searching} alt="" />
                </a>
              </div>

              {/* Sign In */}
              <div>
                <p>
                  <a href="/sign-in">Sign In</a>
                </p>
              </div>
              
            </div>

        </div>
    </header>
    
  )
}

export default Header