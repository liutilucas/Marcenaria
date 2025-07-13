import React from 'react';
import Logo from '../../assets/img/Logo.jpg';
import banho from '../../assets/img/banho.jpg';
import sala from '../../assets/img/sala.jpg';
import quarto from '../../assets/img/quarto.jpg';

// Importações de ícones
import { IoMdSearch } from "react-icons/io";
import { FaCaretDown, FaCartShopping } from 'react-icons/fa6';


import DarkMode from './DarkMode';


const Menu = [
  { id: 1, name: "Home", link: "/" },
  { id: 2, name: "Cozinha", link: "/cozinha" },
  { id: 3, name: "Dormitório", link: "/dormitorio" },
];

const DropdownLinks = [
  { id: 1, name: "Trending Products", link: "/#" },
  { id: 2, name: "Best Selling", link: "/#" },
  { id: 3, name: "Top Rated", link: "/#" },
];

const Home = () => {
  
  return (
    <>
      <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40">
        {/* Upper Navbar */}
        <div className="bg-primary/40 py-2">
          <div className="container mx-auto px-4 flex justify-between items-center">
            {/* Logo */}
            <div>
              <a href="/" className="font-bold text-2xl sm:text-3xl flex gap-2 items-center">
                <img src={Logo} alt="Logo" className="w-10" />
                Marcenaria Brasbol
              </a>
            </div>

            {/* Search + Cart */}
            <div className="flex items-center gap-4">
              {/* Search Bar */}
              <div className="relative group">
                <input
                  type="text"
                  placeholder="Search"
                  className="w-[200px] sm:w-[200px] group-hover:w-[300px] transition-all
                  duration-300 rounded-full border border-gray-300 px-2 py-1
                  focus:outline-none focus-border-1
                  focus:border-primary
                  dark:border-gray-500
                  dark:bg-gray-800"
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
                <DarkMode />
              </div>
            </div>
          </div>
        </div>

        {/* Lower Navbar */}
        <div className="flex justify-center">
          <ul className="sm:flex hidden items-center gap-4">
            {Menu.map((item) => ( // Use 'item' em vez de 'data' para evitar conflito
              <li key={item.id}>
                <a href={item.link} className="inline-block px-4 hover:text-primary duration-200">
                  {item.name}
                </a>
              </li>
            ))}
            {/* Dropdown Links */}
            <li className="group relative cursor-pointer">
              <a href="#" className="flex items-center gap-[2px] py-2">
                Mais
                <span>
                  <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
                </span>
              </a>
              <div className="absolute z-[9999] hidden group-hover:block w-[150px] rounded-md bg-white p-2 text-black shadow-md">
                <ul>
                  {DropdownLinks.map((item) => (
                    <li key={item.id}>
                      <a
                        href={item.link}
                        className="inline-block w-full rounded-md p-2 hover:bg-primary/20"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* ==================================== HERO SECTION (VISUAL) ==================================== */}
      <div className="relative overflow-hidden min-h-[550px] sm:min-h-[650px] bg-gray-100 flex justify-center items-center dark:bg-gray-950 dark:text-white duration-200">
        {/* triângulo laranja centralizado e mais para cima */}
        <div
          className="h-[700px] w-[700px] bg-primary/40 absolute -top-[310px] left-1/2 -translate-x-1/2 rounded-3xl rotate-45 -z-9"
        ></div>

        {/* hero content */}
        <div className="container pb-8 sm:pb-0 relative z-10">
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 items-center">
              {/* text content */}
              <div>
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold">
                  Esse aqui e o h1
                </h1>
                <p className="text-sm mt-4 mb-6">
                  loreewee ewfcwefwefwef wefwefwewekjwdçqdjidewdwe
                  wefwefweokfwemfçwe
                </p>
                <div>
                  <button
                    className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-2 px-4 rounded-full"
                  >
                    Order Now
                  </button>
                </div>
              </div>

              {/* image section */}
              <div>
                <div>
                  <img
                    src={sala} // Usando sala como exemplo para a imagem principal do Hero
                    alt=""
                    className="w-[300px] h-[300px] sm:h-[450px] sm:w-[450px] sm:scale-125 object-contain mx-auto rounded-3xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;