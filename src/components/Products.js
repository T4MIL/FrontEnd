import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
export default function Products() {
  const productid = useParams();
  console.log(productid)
  const [val, setVal] = useState([])
  useEffect(() => { fun1() }, [])
  function fun1() {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((alldata) => {
        setVal(alldata)
        console.log(alldata)
      }
      )
  }
  const data = val.filter((fval) => fval.id == productid.id)
  console.log(data)
  return (
    <>
      {/* <img src={data[0]?.image} alt="..." height={"500px"} width={"500px"} />
      <h3>Title:{data[0]?.title}</h3>
      <h3>Category:{data[0]?.category}</h3>
      <h3>Price:{data[0]?.price}</h3> */}
      <div className='container'>
       <div className='row'>
        <div className='col-lg-7'>

        </div>
        <div className='col-lg-5'>

        </div>
       </div>
      </div>
    </>
  )
}



