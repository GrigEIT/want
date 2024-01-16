import React from 'react'
import Product from '../Product/Product'

export default function Category({category}) {

  
    console.log(category.products);
  return (
    <div>
      <h1>{category.title}</h1>
        <div className='grid grid-cols-4 gap-7'>
            {
                category.products.map((el)=>{
                    return(
                        <Product key={el.id} item={el}/>
                    )
                })
            }
        </div>
    </div>
  )
}
