import React, { useEffect, useState } from 'react'
export default function Props(props) {
    
    const{fname,lname,age}=props.data
    // const [items, setItems] = useState([])
    // useEffect(() => {
    //     const abc = JSON.parse(localStorage.getItem('formvalue'))
    //     setItems(abc)
    // },[])
    return (
        <>
            {/* {
                items.map((val, ind) => (
                    <>
                        <h1> <span>Firstname:{val.fname}</span> </h1>
                        <h1> <span>Lastname:{val.lname}</span> </h1>
                        <h1> <span>Age:{val.age}</span>  </h1>
                    </>
                ))
            } */}
            <p><span>Firstname:{fname}</span></p>
            <p><span>Lastname:{lname}</span></p>
            <p><span>Age:{age}</span></p>
        </>
    )
}
