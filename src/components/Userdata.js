import React from 'react'
import { useFetch } from './useFetch'

export const Userdata = () => {
   const data=useFetch("http://localhost:8020/alldata")
//    console.log(data)
  return (
    <>
    <p>fun</p>
    </>
  )
}
