import React from 'react'
import Category from '../components/Category'

export default function Home() {
  let products = [
    {
      id:1,
      type:'wanted',
      title:'ՊԱՀԱՆՋՎԱԾ',
      products:[
        
          {
              id: 1,
              src: 'https://want.am/images/thumbnails/400/400/detailed/3/112.jpg.webp',
              title: 'Հարրի Փոթերի կախարդական փայտիկ',
              price: '7500֏'
          },
  
          {
              id: 2,
              src: 'https://want.am/images/thumbnails/400/400/detailed/3/HTB1Hv5KmFmWBuNjSspdq6zugXXan.jpg.webp',
              title: 'Նոթատետր՝ կոդային փականով',
              price: '9900֏'
          },
  
          {
              id: 3,
              src: 'https://want.am/images/thumbnails/400/400/detailed/3/HTB1b5xiRFXXXXXYapXXq6xXFXXXP_tzeg-z0.jpg.webp',
              title: 'Սենսորային լուսամփոփ «Նապաստակ»',
              price: '10710֏'
          },
  
          {
              id: 4,
              src: 'https://want.am/images/thumbnails/400/400/detailed/2/HTB15qwGHFXXXXXqXFXXq6xXFXXXU.jpg.webp',
              title: 'USB ֆլեշ կրիչ կիթառի տեսքով',
              price: '7900֏'
          },
      
      ]
    },
    {
      id:2,
      type:'allGift',
      title:'ԲՈԼՈՐ ՆՎԵՐՆԵՐԸ',
      products:[
        {
            id: 1,
            src: 'https://want.am/images/thumbnails/400/400/detailed/3/112.jpg.webp',
            title: 'Հարրի Փոթերի կախարդական փայտիկ',
            price: '7500֏'
        },

        {
            id: 2,
            src: 'https://want.am/images/thumbnails/400/400/detailed/3/HTB1Hv5KmFmWBuNjSspdq6zugXXan.jpg.webp',
            title: 'Նոթատետր՝ կոդային փականով',
            price: '9900֏'
        },

        {
            id: 3,
            src: 'https://want.am/images/thumbnails/400/400/detailed/3/HTB1b5xiRFXXXXXYapXXq6xXFXXXP_tzeg-z0.jpg.webp',
            title: 'Սենսորային լուսամփոփ «Նապաստակ»',
            price: '10710֏'
        },

        {
            id: 4,
            src: 'https://want.am/images/thumbnails/400/400/detailed/2/HTB15qwGHFXXXXXqXFXXq6xXFXXXU.jpg.webp',
            title: 'USB ֆլեշ կրիչ կիթառի տեսքով',
            price: '7900֏'
        },
      ]
    }
  ]

  return (
    <div className='px-[16%]  py-[6px] mt-14 flex flex-col items-center justify-evenly gap-40 '>
      {
        products.map((el)=>{
          return(
            <Category key={el.id} category={el}/>
          )
        })
      }
    </div>
  )
}
