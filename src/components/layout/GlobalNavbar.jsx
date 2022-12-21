import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../img/jt-logo.jpg';
import { pages, settings } from '../../utils/navbar-utils';

const GlobalNavbar = () => {
  const [openNav, setOpenNav] = useState(false);

  function handleNav() {
    setOpenNav(!openNav);
  }

  return (
    <nav className="p-2 bg-white shadow md:flex md:items-center md:justify-between">
      <div className="flex justify-between items-center">
        <div className="">
          <img
            src={logo}
            alt="Jenson-Thievon Group"
            className="md:h-[60px] w-auto h-[45px]"
          />
        </div>
        <div
          className="text-3xl cursor-pointer mx-1 mt-2 md:hidden block"
          onClick={handleNav}
        >
          <ion-icon name={openNav ? 'close' : 'menu'}></ion-icon>
        </div>
      </div>
      <ul
        className={`md:flex md:items-center z-[-1] md:z-auto md:static absolute bg-white w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-2 top-[-400px] transition-all ease-in duration-500 ${
          openNav ? 'top-10 opacity-100' : 'top-[-490px]'
        } md:opacity-100 opacity-0`}
      >
        {pages.map((page) => (
          <li className="mx-4 my-6 md:my-0">
            <NavLink to={`/${page}`}>{page}</NavLink>
          </li>
        ))}
        <button className="bg-green-400 text-white duration-500 px-6 py-2 mx-4 hover:bg-green-500 rounded">
          Contact Us
        </button>
      </ul>
    </nav>
  );
};

export default GlobalNavbar;
