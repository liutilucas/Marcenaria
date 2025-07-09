import React from 'react';
import Logo from '../../assets/img/Logo.jpg';
import { IoMdSearch } from "react-icons/io";
import { FaCartShopping } from 'react-icons/fa6';

const Navbar = () => {
  return(
    <div className="shadow-md bg-white dark:bg-gray-900
    dark:text-white duration-200 relative z-40"> 
        {/* upper Navbar */}
            <div className="bg-primary/40 py-2">
                <div className="container flex justify-between items-center"> 
                    <div>
                        <a href="#"
                        className="font-bold
                        text-2xl sm:text-3xl flex gap-2">
                            <img src={Logo} alt="Logo"
                            className="w-10" />
                            Shopsy
                            
                        </a>
                    </div>
                    {/*  */}
                    <div>
                        <div className="relative group hidden sm:block">
                            <input type="text"
                            placeholder="search"
                            className="w-[200px] sm:w-[200px]
                            group-hover:w-[300px] transition-all
                            duration-300 rounded-full border border-gray-300 px-2 py-1
                            focus:outline-none focus:border-1 focus:border-primary" />
                            <IoMdSearch 
                            className="text-gray-500 
                            group-hover:text-primary absolute
                            top-1/2 -translate-y-1/2 right-3"/>
                        </div>
                    </div>
                    {/* order button */}
                    <button
                        onClick={() => alert("ordering not available yet ")}
                        
                        className="group bg-gradient-to-r from-primary to-secondary
                        text-white rounded-full overflow-hidden 
                        flex items-center px-4 py-2 transition-all duration-500">
                    
                    <FaCartShopping className="text-xl" />

                    <span
                        className="ml-2 max-w-0 opacity-0 group-hover:max-w-[100px] group-hover:opacity-100
                        transition-all duration-500 overflow-hidden whitespace-nowrap">
                        Order
                    </span>
                    </button>



                </div>
            </div>
        {/* lower Navbar */}
        <div></div>
    </div>
  ) 
}

export default Navbar