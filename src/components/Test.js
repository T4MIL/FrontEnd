import React, { useEffect } from 'react'
import { useApi } from './useApi'
export const Test = () => {
    const val=useApi("https://fakestoreapi.in/api/products")
    
    console.log(val)
    
    const Key='0ef5722858798b093a82e8c4ce34312f'
  return (
    <>

     {
        val.map((val,ind) => (
          <>
            {/* <p>{val.images[0]}</p> */}
            <p>{val.category}</p>
            {/* <p><img src={val.image} style={{width:"100px", height:'100px'} }></img></p> */}
            </>
        ))
     }
      
    </>
  )
}
