import React from 'react'
import LeftSide from './LeftSide'
import RightSide from './RightSide'

const PageOne = () => {
  return (
    <div className='flex items-center px-18 py-7 h-[84vh]'>
        <LeftSide/>
        <RightSide/>
    </div>
  )
}

export default PageOne