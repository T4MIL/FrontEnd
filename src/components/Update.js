import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useFetch } from './useFetch'
import axios from 'axios'
export const Update = () => {
    const id = useParams()
    const data = useFetch("http://localhost:8020/alldata")
    const rdata = data.filter((ndata) => ndata._id === id.id)
    const [str, Setstr] = useState({
        fname: "",
        lname: "",
        email: ""
    })
    const nav = useNavigate()
    useEffect(() => {
        Setstr({ ...str, ...rdata })
    }, [data])
    function handleSubmit(e) {
        e.preventDefault()
    }
    async function submitFun() {
        const abc = Object.assign({}, str[0])
        // console.log(abc._id)
        const newdata = await axios.put("http://localhost:8020/update/" + abc._id, abc)
        console.log(newdata.data)
        if (newdata.data.success === true) {
            alert(newdata.data.message)
        }
        nav('/admin')
    }

    return (
        <>
            <form onSubmit={(e) => handleSubmit(e)}>
                <div>
                    <label>First Name:</label>
                    <input type='text' value={str[0]?.fname} name='fname' onChange={(e) => Setstr([{ ...str[0], [e.target.name]: e.target.value }])}></input>
                </div>
                <div>
                    <label>Last Name:</label>
                    <input type='text' value={str[0]?.lname} name='lname' onChange={(e) => Setstr([{ ...str[0], [e.target.name]: e.target.value }])}></input>
                </div>
                <div>
                    <label>Email:</label>
                    <input type='text' value={str[0]?.email} name='email' onChange={(e) => Setstr([{ ...str[0], [e.target.name]: e.target.value }])}></input>
                </div>
                <button onClick={submitFun} >Submit</button>
            </form>
        </>
    )

}
