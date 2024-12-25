import React from 'react'
import { Data } from './Data'
import { Link } from 'react-router-dom'
export const Admin = () => {
    return (
        <>
            <div className='container border mt-4 pb-4'>
                <h3 className='text-primary mt-2'>Student Details:</h3>
                <Data category={"Student"} exval={"y"}></Data>
            </div>
            <div className='container border mt-4 pb-4'>
                <h3 className='text-primary mt-2'>Staff Details:</h3>
                <Data category={"Staff"} exval={"y"}></Data>
                <Link to={'/'}><button className='btn btn-primary mt-4 ms-3' >Home</button></Link>
            </div>
        </>
    )
}
