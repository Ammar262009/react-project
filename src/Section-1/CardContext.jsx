import { ArrowRight } from 'lucide-react'
import React from 'react'

const CardContext = (props) => {
    console.log(props.tag)
  return (
    <div className='absolute top-0 h-full w-full p-4 flex justify-between flex-col'>
        <div className='bg-white text-black rounded-full h-10 w-10 flex justify-center items-center text-xl font-semibold'>{props.id+1}</div>
        <div>
            <p className='text-white font-medium mb-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, blanditiis veritatis labore fugiat provident atque nobis, tenetur</p>
            <div className='flex justify-between items-center'>
                <button style={{backgroundColor:props.color}} className='py-1.5 px-5.5 text-white rounded-3xl '>{props.tag}</button>
                <button className='py-2 px-2 text-white rounded-full '><ArrowRight/></button>
            </div>
        </div>
        
    </div>
  )
}

export default CardContext