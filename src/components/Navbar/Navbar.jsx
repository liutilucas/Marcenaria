import React from 'react';
import Logo from '../../assets/img/Logo.jpg';
import { IoMdSearch } from "react-icons/io";
import { FaCaretDown, FaCartShopping } from 'react-icons/fa6';

import DarkMode from './DarkMode';

const Menu = [
    {
        id: 1,
        name: "Home",
        link: "/#",
    },
    {
        id: 2,
        name: "Top Rated",
        link: "/#services",
    },
    {
        id: 3,
        name: "Kids Wear",
        link: "/#",
    },
];

const DropdownLinks = [

  {
  id: 1,
  name: "Trending Products",
  link: "/#",
  },

  {
    id: 2,
    name: "Best Selling",
    link: "/#",
  },

  {
    id: 3,
    name: "Top Rated",
    link: "/#",
  },
];

const Navbar = () => {
  return (
    <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40">
      
      {/* Upper Navbar */}
      <div className="bg-primary/40 py-2">
        <div className="container mx-auto px-4 flex justify-between items-center">
          
          {/* Logo */}
          <div>
            <a href="#" className="font-bold text-2xl sm:text-3xl flex gap-2 items-center">
              <img src={Logo} alt="Logo" className="w-10" />
              Shopsy
            </a>
          </div>

          {/* Search + Cart */}
          <div className="flex items-center gap-4">
            
            {/* Search Bar */}
            <div className="relative group">
              <input
                type="text"
                placeholder="Search"
                className="w-[150px] sm:w-[200px] group-hover:w-[250px] transition-all
                  duration-300 rounded-full border border-gray-300 px-4 py-1
                  focus:outline-none focus:border-primary"
              />
              <IoMdSearch
                className="text-gray-500 group-hover:text-primary absolute
                  top-1/2 -translate-y-1/2 right-3"
              />
            </div>

            {/* Cart Button */}
            <button
              onClick={() => alert("Ordering not available yet")}
              className="group bg-gradient-to-r from-primary to-secondary
                text-white rounded-full overflow-hidden flex items-center px-4 py-2
                transition-all duration-500"
            >
              <FaCartShopping className="text-xl" />
              <span className="ml-2 max-w-0 opacity-0 group-hover:max-w-[100px] group-hover:opacity-100
                transition-all duration-500 overflow-hidden whitespace-nowrap">
                Order
              </span>
            </button>
            {/* Darkmode Switch */}
            <div>
                <DarkMode/>
            </div>
          </div>
        </div>
      </div>

      {/* Lower Navbar (opcional) */}
      <div className="flex justify-center">
        <ul className="sm:flex hidden items-center
        gap-4">
            {Menu.map((data)=>(
                <li key={data.id}>
                    <a href={data.link}className="inline-block px-4
                    hover:text-primary duration-200"
                    >{data.name}</a>
                </li>
            ))}
            <li className="group relative
            cursor-pointer">
              <a href="#"
              className="flex items-center gap-[2px] py-2">
                Trending
                <span>
                  <FaCaretDown
                  className="transition-all
                  duration-200
                  group-hover:rotate-180"/>
                </span>
              </a>
              <div className="absolute z-[9999]
              hidden group-hover:block w-[150px] rounded-md
              bg-white p-2 text-black">
                <ul>
                  <li>
                    {DropdownLinks.map((data) => (
                      <li key={data.id}>
                        <a href={data.link}>
                          {data.name}
                        </a>
                      </li>                     
                    ))
                    }
                  </li>
                </ul>
              </div>
            </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
