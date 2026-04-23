import React from 'react'
import Card from './card'

const RightSide = (props) => {
  return (
    <div className=' w-2/3 h-full overflow-x-scroll flex flex-nowrap'>
      {props.users.map(function (elem, idx) {
        return <Card key={idx} id={idx} img={elem.img} color={elem.color} tag={elem.tag} />
      })}
    </div>
  )
}

export default RightSide