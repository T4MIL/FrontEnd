import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
export const Userfom = ({ val }) => {
    // console.log(val)
    const [str, setStr] = useState({
        fname: "",
        lname: "",
        email: "",
        category: ""
    })
    const data = {
        fname: { required: false },
        lname: { required: false },
        email: { required: false }
    }
    const nav = useNavigate()
    useEffect(
        () => {
            if (!str.category && val === true) {
                setStr({ ...str, category: 'Student' })
            } else if (!str.category && val === false) {
                setStr({ ...str, category: 'Staff' })
            }
        }, [val])
    const [error, setError] = useState(data)
    async function handleSubmit(e) {
        e.preventDefault()
        const err = {
            fname: { required: false },
            lname: { required: false },
            email: { required: false }
        }
        if (!str.fname) {
            err.fname.required = true
        }
        else if (!str.lname) {
            err.lname.required = true
        } else if (!str.email) {
            err.email.required = true
        }
        else {
            let fval = await axios.post('http://localhost:8020/newuser', str)
            if (fval.data.success === true) {
                alert(fval.data.message)
            }
            setStr({
                ...str, ...{
                    fname: "",
                    lname: "",
                    email: "",
                }
            })
            if (val === false) {
                nav('/staffpage')
            } else if (val === true) {
                nav('/')
            }
        }
        setError(err)
    }
    return (
        <>
            <form onSubmit={(e) => handleSubmit(e)}>
                <div>
                    <label>Enter your name:</label>
                    <input type='text' name='fname' value={str.fname} onChange={(e) => {
                        setStr({ ...str, [e.target.name]: e.target.value })
                    }}></input>
                    {error.fname.required ?
                        (<p style={{ color: 'red' }}>Enter your name</p>) : null}
                </div>
                <div>
                    <label>Enter your Lname:</label>
                    <input type='text' name='lname' value={str.lname} onChange={(e) => {
                        setStr({ ...str, [e.target.name]: e.target.value })
                    }}></input>
                    {error.lname.required ?
                        (<p style={{ color: 'red' }}>Enter your lname</p>) : null}
                </div>
                <div>
                    <label>Enter your Email:</label>
                    <input type='text' name='email' value={str.email} onChange={(e) => {
                        setStr({ ...str, [e.target.name]: e.target.value })
                    }}></input>
                    {error.email.required ?
                        (<p style={{ color: 'red' }}>Enter your email</p>) : null}
                </div>
                <button>Submit</button>
            </form>
        </>
    )
}
