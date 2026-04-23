import React from 'react'
import LeftSide from './LeftSide'
import RightSide from './RightSide'

const PageOne = (props) => {
  return (
    <div className='flex items-center px-18 py-7 h-[84vh]'>
        <LeftSide/>
        <RightSide users={props.users} />
    </div>
  )
}

export default PageOne