import React, { useEffect, useState } from 'react'
import Props from './Props'

export default function Task1() {
    const[str,setStr]=useState(false)
    const [val, setVal] = useState({
        fname: '',
        lname: '',
        age: ''
    })
    const submitForm = () => {
        // setFormvalue((formvalue) => [...formvalue, val])
        setStr(true)
    }
    // const [formvalue, setFormvalue] = useState([])
    function changeval(e) {
        setVal({ ...val, [e.target.name]: e.target.value })
    }
    // useEffect(() => {
    //     localStorage.setItem("formvalue", JSON.stringify(formvalue))
    // }, [formvalue])
    function handleSubmit(e) {
        e.preventDefault()
    }
    return (
        <>
            <div>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Firstname:</label>
                        <input type='text' name='fname' onChange={changeval}></input>
                    </div>
                    <div>
                        <label>Lastname:</label>
                        <input type='text' name='lname' onChange={changeval}></input>
                    </div>
                    <div>
                        <label>age:</label>
                        <input type='text' name='age' onChange={changeval}></input>
                    </div>
                    <button onClick={submitForm}>submit</button>
                </form>
                {str?<Props data={val}/>:null}
            </div>
        </>
    )
}
