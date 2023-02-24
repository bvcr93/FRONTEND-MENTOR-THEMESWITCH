import React from "react";
import { useTheme } from "../context/ThemeContext";
import Switch from "@mui/material/Switch";

const Nav = () => {
  const { switchTheme, theme } = useTheme();
  const label = { inputProps: { "aria-label": "Switch demo" } };

  return (
    <div
      className={`md:flex md:justify-between md:w-[67.7%]  mx-auto absolute right-[270px] top-[60px] ${
        theme ? "md:bg-slate-700" : "md:bg-gray-100"
      }`}
    >
      <div className="ml-[500px] md:ml-0 w-full md:w-[67%]">
        <p
          className={`text-2xl font-bold tracking-wide ${
            theme ? "text-white" : "text-gray-800" 
          }`}
        >
          Social Media Dashboard
        </p>
        <p
          className={`text-gray-600 ${theme ? "text-white" : "text-gray-800"}`}
        >
          Total followers: 23,004
        </p>
      </div>
      <div onClick={() => switchTheme()} className="flex md:items-center
       mr-[65px] justify-between md:justify-end ml-[200px] mt-5 md:mt-0
         items-center w-full">
        <p className={`${theme ? "text-slate-200" : "text-slate-600"} md:ml-0 ml-[300px]`}>
          {!theme ? "Dark Mode" : "Light Mode"}
        </p>
        <Switch />
      </div>
    </div>
  );
};

export default Nav;
