import axios from 'axios'
import React, { useEffect, useState } from 'react'
export const useFetch = (url) => {
    const [data, setData] = useState([])
    // console.log(url)
    useEffect(() => {
        fun1()
    }, [url])
    async function fun1() {
        let data = await axios.get(url)
          console.log(data)
        // let fdata = data.data.data
        //   console.log(fdata)
        // setData(fdata)
    }
    // console.log(data)
    return data
}
