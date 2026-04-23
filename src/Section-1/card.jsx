import React from 'react'
import CardContext from './CardContext'

const Card = (props) => {
  return (
    <div className='bg-amber-900 rounded-2xl my-4 mx-4 relative w-75 shrink-0 overflow-hidden '>
        <img src={props.img} alt="img" />
        <CardContext id={props.id} color={props.color} tag={props.tag} />
    </div>
  )
}

export default Card