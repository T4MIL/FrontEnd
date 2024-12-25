import React, { useState } from 'react'

export const Newcmp = () => {
    const [name, setName] = useState('')
    const[data,setData]=useState([])
    function fun1(){
       setData([...data,name])
       
    }
    console.log(data)
    
    return (
        <>
           <input type='text' value={name} onChange={(e)=>setName(e.target.value)}></input>
           <button onClick={fun1}> Add</button>
           {
            data.map((val,ind)=>(
                <p>{val}</p>
            ))
           } 
           <p>testing</p>
        </>
    )
}
