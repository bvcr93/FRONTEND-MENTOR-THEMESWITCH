import React from 'react'
import { useTheme } from '../context/ThemeContext'
import Switch from '@mui/material/Switch';



const Nav = () => {
  const { switchTheme, theme } = useTheme()
  const label = { inputProps: { 'aria-label': 'Switch demo' } };
  

  return (
    <div className={`flex justify-between w-[68.5%] mx-auto absolute right-[270px] top-[60px] ${theme ? 'bg-slate-700' : 'bg-gray-100'}`}>
      <div>
        <p className={`text-2xl font-bold tracking-wide ${theme ? 'text-white' : 'text-gray-800'}`}>Social Media Dashboard</p>
        <p className={`text-gray-600 ${theme ? 'text-white' : 'text-gray-800'}`}>Total followers: 23,004</p>
      </div>
      <div onClick={() => switchTheme()} className="flex items-center">
       <p className={`${theme ? "text-slate-200" : "text-slate-600"}`}>Dark Mode</p>
        <Switch />
  
      </div>
    </div>
  )
}

export default Nav
