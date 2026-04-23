import React from 'react'
import Navbar from './navbar'
import PageOne from './PageOne'

const Section1 = (props) => {
  console.log(props.users)
  return (
    <div className='h-full w-full'>
        <Navbar />
        <PageOne users={props.users} />
    </div>
  )
}

export default Section1