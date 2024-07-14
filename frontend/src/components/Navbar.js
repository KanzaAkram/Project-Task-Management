import React, { useContext } from 'react'

import { TbBrandVscode } from "react-icons/tb";
import { Link } from 'react-router-dom';
import Toggle from './Toggle';
import { AuthThemes } from '../ThemeContext/ThemeContext';
const Navbar = () => {
  const { themes,setthemes } = useContext(AuthThemes);
  const toggleTheme = () => {
    setthemes(themes === "dark" ? "light" : "dark");
  };

  return (

    <div className={`shadow h-14 flex justify-between ${themes==="dark"?("bg-gray-700 text-gray-100"):("bg-gray-100 text-gray-700")}`}>

      <div className='flex justify-center gap-1'>
        <div><TbBrandVscode size={25} /></div>
        <div className='font-bold text-xl'>Project Management</div>
      </div>
      <div>
        <span>

      <Link to={"/"}>Home</Link>
        </span>
        <span>
            <button className="p-0 mt-1" onClick={toggleTheme}>
              {themes === "dark" ? (
                // <RxMoon size={20} />
                <Toggle/>
              ) : (
                // <IoSunnyOutline size={20} />
                <Toggle/>
              )}
            </button>
          </span>
      </div>
    </div>
  )
}

export default Navbar