import React from 'react'
import BigCards from '../components/BigCards'
import Nav from '../components/Nav'
import SmallCards from '../components/SmallCards'

type Props = {}

const Home = (props: Props) => {
  return (
    <div className="bg-slate-50 h-screen ">
    <div className="bg-slate-100 h-[300px]">
      <Nav />
      <BigCards />
    </div>
<div className='mt-[300px]'>
  <SmallCards/>
</div>
  </div>
  )
}

export default Home
