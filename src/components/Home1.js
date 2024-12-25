import React, { useState } from 'react'
import { Userfom } from "./Userfom";
import { Link, useNavigate } from 'react-router-dom';
export const Home1 = ({ val }) => {
    const [str, setStr] = useState(false)
    function fun1() {
        val(true)
    }
    function fun2() {
        val(false)
    }
    return (
        <>
            <div className='container mt-5 w-50 border' >
                <h4>Select Role:</h4>
                <div className='p-4'>
                    <Link to={'/form'} style={{textDecoration:"none"}}> <p onClick={fun1} >Student</p></Link>
                    <Link to={'/form'} style={{textDecoration:"none"}}><p onClick={fun2}>Staff</p></Link>
                   <Link to={'/admin'} style={{textDecoration:"none"}}> <p>Admin</p></Link>
                </div>
            </div >
        </>
    )
}
