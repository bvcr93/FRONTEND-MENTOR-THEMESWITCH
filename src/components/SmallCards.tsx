import React from 'react'
import { smallCards } from '../types/smallCardTypes'
import SmallCard from './SmallCard'

type Props = {}

const SmallCards = (props: Props) => {
  return (
    <div className='grid grid-cols-4 p-20  mx-auto  w-[72%] place-items-center gap-4 '>
  
      {smallCards.map((card) => (
        <SmallCard key={card.id} {...card}/>
      ))}
    </div>
  )
}

export default SmallCards