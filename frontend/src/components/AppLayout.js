import React, { useContext } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import ThemeContext, { AuthThemes } from "../ThemeContext/ThemeContext";

const AppLayout = ({ children }) => {
  const { themes } = useContext(AuthThemes);
  return (
    // <div className='bg-white'>
    <>
    <Navbar />
    <div
      className={`pt-10 max-w-[100vw] min-h-[100vh] ${
        themes === "dark"
          ? "bg-gray-800 text-gray-100"
          : "bg-slate-200 text-gray-600"
      }`}
      >
  
      <div
        className=" w-screen flex container mx-auto"
      >
        <div className="w-[100px] sm:w-[220px]">
          <Sidebar />
        </div>
        <div className="flex-1">
          <div className="flex">{children}</div>
        </div>
      </div>
    </div>
        </>
  );
};

export default AppLayout;
