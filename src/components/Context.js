import React, { createContext } from 'react'

export const Context = ({children}) => {
    const con=createContext()
    
  return (
   <>
   <con.Provider>
    {children}
   </con.Provider>
   </>
  )
}
