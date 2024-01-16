import React from 'react'

export default function Icon({value,type}) {
  return (
    <>
        {type=='icon'? <img className='w-4 h-4' src={value} alt="" /> : <p>{value}</p> }
    </>
  )
}
