import { useEffect, useState } from "react"
import React from "react"
import Booking from "./shared/components/booking/booking.jsx"
import './App.module.css'

export default function App() {
  const [data, setData] = useState([])

  const getData = async () => {
    try {
      const response = await fetch('https://course-api.com/react-tours-project')
      const result = await response.json()
      setData(result)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
      getData()
    }, [])


  return (
    <div className="container">
      <h1> Nossas acomodações </h1>
      <div className="booking-dados"> 
      <Booking data={data}/>
      </div>
    </div>
    
  )
}
