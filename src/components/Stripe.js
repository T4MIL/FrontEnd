import React, { useEffect, useRef, useState } from 'react'
import snow from '../Assets/clear.png'
import humidity from '../Assets/humidity.png'
import wind from '../Assets/wind.png'
export const Stripe = () => {
  const inp = useRef()
  const [data, setData] = useState(false)
  const key='0ef5722858798b093a82e8c4ce34312f'
  useEffect((city)=>{
  handleClick(city)
  },[inp])

  function handleClick(city){
   fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=Metric`)
   .then((res)=>res.json())
   .then((rdata)=>
    setData({name:rdata.name,ws:rdata?.wind?.speed,humidity:rdata?.main?.humidity,temp:Math.floor(rdata?.main?.temp),icon:rdata?.weather}))
  }
  
  console.log(data)
  return (
    <>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-4 col-md-3'></div>
          <div className='col-lg-4 col-md-6 shadow-sm p-3 mb-3 mt-5 bg-info rounded text-center'>
            <div >
              <div className='d-flex justify-content-around  align-items-center mt-5 '>
                <div>
                <input type='text' className='rounded-pill' ref={inp}></input>
                </div>
                <div>
                <button className='btn btn-light' onClick={()=>{handleClick(inp.current.value)}}>Search</button>
                </div>
              </div>
              <img src={snow} ></img>
              <h5> {data.temp} °C.</h5>
              <h6>{data.name}</h6>
              <div className='d-flex justify-content-around mt-4 mb-3'>
                  <div>
                    <div className='d-flex gap-1'>
                      <img src={humidity} style={{ background: 'black' }}></img>
                      <div>
                        <p>{data.humidity} %</p>
                        <span >Humidity</span>
                      </div>
                    </div>
                </div>
                <div>
                
                    <div className='d-flex gap-1'>
                      <img src={wind} style={{ background: 'black' }}></img>
                      <div>
                        <p>{data.ws} km/hr</p>
                        <span>Wind Speed</span>
                      </div>
                    </div>
                  
                </div>
              </div>
            </div>
          </div>
          <div className='col-lg-4'></div>

        </div>

      </div>
    </>
  )
}
