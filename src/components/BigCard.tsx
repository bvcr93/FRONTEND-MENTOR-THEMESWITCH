import { useTheme } from '../context/ThemeContext'

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

const BigCard = ({ id, 
    username, 
    folowers, 
    today, 
    icon, 
    flOrSub, 
    navColor, 
    folowerColor }: Props) => {
    
        const {theme} = useTheme()
    return (
        <div className={`w-full md:w-[281px] mx-0 md:mx-4
        h-[270px] m-4 ${!theme ? "bg-slate-200" : "bg-slate-900"}
         ${theme ? "text-white" : "text-slate-800"} mt-10 md:mt-20 
         flex items-center relative justify-center rounded-md overflow-hidden 
         ${!theme ? "hover:bg-slate-300 " : "hover:bg-slate-600"}
         hover:cursor-pointer ease-in transition duration-50
         ${theme ? "text-white" : "text-slate-700"}`}>
            <div className={navColor}></div>
            <div className='p-4 flex items-center justify-center flex-col'>
                <div className='flex space-x-4 items-center mb-2 md:mb-5'>
                    <img className='w-6 md:w-8 h-6 md:h-8' src={icon} alt="" />
                    <p className='text-base md:text-lg font-medium'>{username}</p>
                </div>
                <p className='font-bold text-3xl md:text-5xl'>{folowers} </p>
                <p className='text-sm md:text-base text-gray-500 uppercase 
                tracking-widest mt-1 md:mt-3 mb-2 md:mb-7'>{flOrSub}</p>
                <p className={folowerColor}>{today} today</p>
            </div>
        </div>
    )
}

export default BigCard