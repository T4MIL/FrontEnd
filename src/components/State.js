import React, { useState } from 'react'
export default function State() {
  const [error, setError] = useState({
    fname: {required:false},
    lname: {required:false},
    age: {required:false}
  })
  const [val, setVal] = useState({
    fname: '',
    lname: '',
    age: ''
  })
  // const[str,setStr]=useState([])
  function handlechange(e) {
    setVal({ ...val, [e.target.name]: e.target.value })
  }
  function handlesubmit(event) {
    event.preventDefault();
    let err={
      fname: {required:false},
      lname: {required:false},
      age: {required:false}
    }
    if(!val.fname){
      setError(error.fname.required=true)
    }
  }
  return (
    <>
      <form onSubmit={handlesubmit}>
        <div>
          <label>Firstname:</label>
          <input type='text' name='fname' onChange={handlechange}></input>
          {
            error.fname.required ? (<p>FName is required</p>) : null}
        </div>
        <div>
          <label>Last Name:</label>
          <input type='text' name='lname' onChange={handlechange}></input>
          {
            error.lname.required ? (<p>lname is required</p>) : null}
        </div>
        <div>
          <label>Age:</label>
          <input type='text' name='age' onChange={handlechange}></input>
          {
            error.age.required ? (<p>age is required</p>) : null}
        </div>
        <button type='submit'>submit</button>
      </form>
    </>
  )
}
