import React from 'react'
import Card from './card'

const RightSide = () => {
  return (
    <div className='bg-amber-300 w-2/3 h-full shrink-0 overflow-hidden flex flex-nowrap'>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
    </div>
  )
}

export default RightSide