import React from 'react'
import BigCards from '../components/BigCards'
import Nav from '../components/Nav'
import SmallCards from '../components/SmallCards'
import { useTheme } from '../context/ThemeContext'

type Props = {}

const Home = (props: Props) => {

  const { theme } = useTheme()
  return (
    <div className={`md:h-screen grid grid-cols-1  h-full ${!theme ?"bg-slate-50" : "bg-slate-800" } `}>
    <div className={`h-[300px] ${!theme ? "bg-slate-100 " : "bg-slate-700"} md:mt-0 mt-[200px]`}>

      <Nav />
  
      <BigCards />
    </div>
<div className='md:mt-[200px] mt-[1100px] ml-8 md:ml-0'>
 <nav className='w-[63.5%] mx-auto text-2xl text-slate-500  '>Overview-Today</nav>
  <SmallCards/>
</div>
  </div>
  )
}

export default Home
