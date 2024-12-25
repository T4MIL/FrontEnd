import React from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { addItem } from './cartSlice'
import { useFetch } from './useFetch'
export default function Singleinfo() {
    const productid = useParams()
    // console.log(productid)
    const dispatch = useDispatch()
    const handleItem = (val) => {
        dispatch(addItem(val))
    }
    const arr = useFetch("https://fakestoreapi.com/products")
    const filterData = arr.filter((fval) => fval.id == productid.id)
    console.log(filterData)
    return (
        <>
            <div className='container mt-3 border border-1 rounded mb-3'>
                <div className='row mt-3'>
                    {
                        filterData.map((val, ind) => (
                            <div className='col-lg-4 mb-3 ' >
                                <div className='card shadow-sm p-3 mb-3 bg-light rounded ' style={{ width: '18rem', height: '32rem' }} id='card'>
                                    <div className='card-body'>
                                        <img src={val?.image} className="img-fluid" alt="..." style={{ height: '18rem' }} />
                                        <h3 className='mt-2'>{val?.title.substring(0, 11)}</h3>
                                        <h4>Category:{val?.category}</h4>
                                        <h5>Price:{Math.floor(val?.price)}</h5>
                                        <button onClick={() => handleItem(val)}>Add to cart</button>
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
