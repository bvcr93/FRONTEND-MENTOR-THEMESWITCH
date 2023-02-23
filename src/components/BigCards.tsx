import React from 'react'
import { bigCards } from '../types/bigCardTypes'
import BigCard from './BigCard'

type Props = {}

const BigCards = (props: Props) => {
  return (
    <div className='flex p-20 items-center justify-center  mx-auto  '>

      {bigCards.map((card, index) =>
      <BigCard key={index} {...card}/>
      )}</div>
  )
}

export default BigCards