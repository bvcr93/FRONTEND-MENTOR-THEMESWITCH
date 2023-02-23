import React from 'react'
import { smallCards } from '../types/smallCardTypes'
import SmallCard from './smallCard'

type Props = {}

const SmallCards = (props: Props) => {
  return (
    <div className='flex p-20 items-center justify-center mx-auto border w-[70%]'>
      {smallCards.map((card) => (
        <SmallCard key={card.id} {...card}/>
      ))}
    </div>
  )
}

export default SmallCards