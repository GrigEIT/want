import React from 'react'
import FirstPartHeader from './FirstHeaderPart'
import SecondHeaderPart from './SecondHeaderPart'


export default function Header() {
  return (
    <div className='px-[16%]  py-[6px]'>
      <FirstPartHeader />
      <SecondHeaderPart/>
    </div>
  )
}
