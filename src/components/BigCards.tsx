import React from 'react'
import { bigCards } from '../types/bigCardTypes'
import BigCard from './BigCard'

type Props = {}

const BigCards = (props: Props) => {
  return (
    <div className='md:flex p-20 
    items-center
     justify-center 
    mx-auto grid grid-cols-1  '>

      {bigCards.map((card, index) =>
      <BigCard key={index} {...card}/>
      )}</div>
  )
}

export default BigCards