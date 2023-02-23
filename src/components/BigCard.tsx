import { useTheme } from '../context/ThemeContext'
import React from 'react'

type Props = {
    id: number
    username: string
    folowers: number
    today: number
    icon: string
    flOrSub: string
    navColor: string
    folowerColor: string
}

const BigCard = ({ id, username, folowers, today, icon, flOrSub, navColor, folowerColor }: Props) => {
    const {switchTheme,theme} = useTheme()
    return (
        <div className={`w-[281px] 
        h-[270px] m-4  ${!theme ? "bg-slate-200" : "bg-slate-900"} mt-20 
         flex items-center relative justify-center rounded-md overflow-hidden 
          ${!theme ? "hover:bg-slate-300 " : "hover:bg-slate-600"} hover:cursor-pointer  ease-in transition duration-50 ${theme ? "text-white" : "text-slate-700"}`}>
            <div className={navColor}></div>
            <div className='p-4 flex items-center justify-center flex-col'>
                <div className='flex space-x-4 items-center mb-5'>
                    <img className='w-8 h-8 ' src={icon} alt="" />
                    <p className='text-lg font-medium'>{username}</p>
                </div>
                <p className=' font-bold text-5xl '>{folowers} </p>
                <p className='text-sm text-gray-500 uppercase tracking-widest mb-7'>{flOrSub}</p>
                <p className={folowerColor}>{today} today</p>
            </div>
        </div>
    )
}

export default BigCard