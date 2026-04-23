import React from 'react'
import Text from './Text'
import Arrow from './arrow'
const LeftSide = () => {
  return (
    <div className='flex flex-col justify-between w-1/3 h-full'>
      <Text />
      <Arrow/>
    </div>
  )
}

export default LeftSide