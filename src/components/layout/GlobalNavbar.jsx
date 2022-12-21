import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../img/jt-logo.jpg';
import { pages, settings } from '../../utils/navbar-utils';

const GlobalNavbar = () => {
  return (
    <nav className="p-2 background-white shadow md:flex md:items-center md:justify-between">
      <div className="flex justify-between items-center">
        <span className="">
          <img
            src={logo}
            alt="Jenson-Thievon Group"
            className="md:h-[60px] w-auto h-[45px]"
          />
        </span>
        <span className="text-3xl cursor-pointer md:hidden block">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6"
          >
            <path
              fillRule="evenodd"
              d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
              clipRule="evenodd"
            />
          </svg>
        </span>
      </div>
      <ul className="md:flex md:items-center z-[-1] md:z-auto md:static absolute bg-white w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 md:opacity-100 opacity-0 top-[-400px] transition-all ease-in duration-500">
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
