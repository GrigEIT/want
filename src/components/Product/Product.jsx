import React from 'react'
import Icon from '../Header/Icon'

export default function Product({item}) {
    
  return (
    <div >
      <img src={item.src} alt="" />
      <h4 className='text-[12px]'>{item.title}</h4>
      <Icon value={item.price} type={'xxx'} />
    </div>
  )
}
