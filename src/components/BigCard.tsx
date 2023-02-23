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
    return (
        <div className='w-[270px] h-[270px] m-4 border-2 bg-slate-200 mt-20  flex items-center relative justify-center rounded-md overflow-hidden  hover:bg-slate-300 hover:cursor-pointer  ease-in transition duration-150'>
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