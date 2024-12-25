import React, { useContext, useEffect, useState } from 'react'
import { customContext } from './Conapi'
function Home() {
  const [arr, setArr] = useState([])
  useEffect(() => {
    fun1()
  }, [])
  function fun1() {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((alldata) => setArr(alldata))
  }
  const {addItem} = useContext(customContext)
  function handleClick(val) {
    addItem({val})
  }
  // console.log(prd)
  return (
    <>
      <div className='container'>
        <div className='row'>
          {
            arr.map((val, ind) => (
              <div className='col-lg-4'>
                <div className='card'>
                  <div className='card-header'>
                    <h3>{val.title}</h3>
                  </div>
                  <div className='card-body'>
                    <img src={val.image} className="img-fluid" alt="..." height={"10px"} />
                    <h4>Category:{val.category}</h4>
                    <h5>Price:{val.price}</h5>
                    <div className='d-flex gap-4'>
                      <button>More</button>
                      <button onClick={()=>handleClick(val)}>Add to cart</button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </>
  )
}
export default Home