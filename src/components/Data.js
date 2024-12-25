import React from 'react'
import { useFetch } from './useFetch'
import axios from 'axios'
import { Link } from 'react-router-dom'
export const Data = ({ category, exval }) => {
    const data = useFetch("http://localhost:8020/alldata")
    let rdata = data.filter((fdata) => fdata.category === category)
    // console.log(rdata)
    // let exval1 = exval
    async function handleClick(id) {
        // console.log(id)
        let deldata = await axios.delete("http://localhost:8020/del/" + id)
        // console.log(deldata.data.message)
        if (deldata.data.success === true) {
            alert(deldata.data.message)
            window.location.reload()
        }
    }
    return (
        <>
            <div className='container'>
                <div className='row mt-4'>
                    {
                        rdata.map((data, ind) => (
                            <div className='col-lg-6 mt-3'>
                                <div className='card'>
                                    <div className='card-body'>
                                        <h5>First Name:{data.fname}</h5>
                                        <h5>Last Name:{data.lname}</h5>
                                        <h5>Email:{data.email}</h5>
                                        {exval &&
                                            (<div className='d-flex justify-content-center gap-3 mt-3'>
                                                <Link to={`/updatepage/${data._id}`}><button className='btn btn-success'>Update</button></Link>
                                                <button className='btn btn-danger' onClick={() => handleClick(data._id)}>Delete</button>
                                            </div>)
                                        }
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
