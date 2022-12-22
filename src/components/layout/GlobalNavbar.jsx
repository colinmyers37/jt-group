import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../img/jt-logo.jpg';
import { pages, settings } from '../../utils/navbar-utils';
import Button from '../UI/Button';

const GlobalNavbar = () => {
  const [openNav, setOpenNav] = useState(false);

  function handleNav() {
    setOpenNav(!openNav);
  }

  return (
    <div className="shadow-md w-full bg-white">
      <div className="md:flex items-center justify-between bg-transparent py-2 md:px-10 px-7">
        <div
          className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins] 
    text-gray-800"
        >
          <img
            src={logo}
            alt="Jenson-Thievon Group"
            className="md:h-[60px] w-auto h-[45px]"
          />
        </div>

        <div
          onClick={() => setOpenNav(!openNav)}
          className="text-3xl absolute right-5 top-4 cursor-pointer md:hidden"
        >
          <ion-icon name={openNav ? 'close' : 'menu'}></ion-icon>
        </div>

        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-6 transition-all duration-500 ease-in ${
            openNav ? 'top-[73px] ' : 'top-[-490px]'
          }`}
        >
          {pages.map((page) => (
            <li key={page} className="md:ml-8 text-xl md:my-0 my-5">
              <NavLink
                to={`/${page}`}
                className="text-gray-800 hover:text-gray-400 duration-500"
              >
                {page}
              </NavLink>
            </li>
          ))}
          <Button>Contact Us</Button>
        </ul>
      </div>
    </div>
  );
};

export default GlobalNavbar;
