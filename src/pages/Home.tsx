import React from 'react'
import BigCards from '../components/BigCards'
import Nav from '../components/Nav'
import SmallCards from '../components/SmallCards'
import { useTheme } from '../context/ThemeContext'

type Props = {}

const Home = (props: Props) => {

  const { theme } = useTheme()
  return (
    <div className={`h-full ${!theme ?"bg-slate-50" : "bg-slate-800" } `}>
    <div className={`h-[300px] ${!theme ? "bg-slate-100 " : "bg-slate-700"}`}>
      <Nav />
      <BigCards />
    </div>
<div className='mt-[200px]'>
 <nav className='w-[60%] mx-auto text-2xl text-slate-500 '>Overview-Today</nav>
  <SmallCards/>
</div>
  </div>
  )
}

export default Home
