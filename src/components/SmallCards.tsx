import React from 'react'
import { smallCards } from '../types/smallCardTypes'
import SmallCard from './SmallCard'

type Props = {}

const SmallCards = (props: Props) => {
  return (
    <div className='grid md:grid-cols-4 grid-cols-1 p-4 md:p-20 mx-auto w-full md:w-[73%] place-items-center gap-4'>
  
      {smallCards.map((card) => (
        <SmallCard key={card.id} {...card}/>
      ))}
    </div>
  )
}

export default SmallCards