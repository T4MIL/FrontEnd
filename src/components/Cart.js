import React, { useContext } from 'react'
import { customContext } from './Conapi'
export const Cart = () => {
    const { prd, clearItem } = useContext(customContext)
    console.log(prd)
    function handleClear() {
        clearItem()
        // console.log(prd)
    }
    console.log(prd)
    return (
        <>
            <div className='container'>
                <div className='row'>
                    <button onClick={handleClear}>Clear</button>
                    {
                        prd.map((val, ind) => (
                            <div className='col-lg-4'>
                                <div className='card'>
                                    <div className='card-header'>
                                        <h3>{val.title}</h3>
                                    </div>
                                    <div className='card-body'>
                                        <img src={val.image} className="img-fluid" alt="..." height={"10px"} />
                                        <h4>Category:{val.category}</h4>
                                        <h5>Price:{val.price}</h5>
                                        <h5>Qty:{val.qty}</h5>
                                        <div className='d-flex gap-4'>
                                            <button>More</button>
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
