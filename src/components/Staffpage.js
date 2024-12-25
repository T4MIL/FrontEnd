import React from 'react'
import { Data } from './Data'
import { Link } from 'react-router-dom'
export const Staffpage = () => {
    return (
        <>
            <div className='container border mt-4 pb-4'>
                <h3 className='text-primary mt-2'>Student Details:</h3>
                <Data category={"Student"}></Data>
                <Link to={'/'}> <button className='btn btn-primary mt-4 ms-3' >Home</button></Link>
            </div>
        </>
    )
}
