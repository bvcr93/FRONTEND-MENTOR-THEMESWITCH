import React from 'react'

type Props = {
  title: string
}

const SmallCard = ({title}: Props) => {
  return (
    <div className='h-[200px] w-[300px] bg-slate-300 m-4'>{title}</div>
  )
}

export default SmallCard