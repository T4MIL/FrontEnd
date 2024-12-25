import React, { createContext, useState } from 'react'
export const customContext = createContext()
export const Conapi = ({ children }) => {
  const[prd,setPrd]=useState([])
  function addItem({ val }) {
    // console.log(prd)
    const exist = prd.findIndex(x => x.id === val.id)
    // console.log(exist)
    if (exist >= 0) {
      console.log(prd[exist])
      prd[exist].qty+=1
      // console.log(prd)
    }
    else {
      setPrd([...prd,{...val,qty:1}])
      // console.log(prd)
    }
  }
  function clearItem() {
    setPrd([])
  }
  return (
    <>
      <customContext.Provider value={{ prd, addItem, clearItem }}>
        {children}
      </customContext.Provider>
    </>
  )
}
