import { useEffect, useState } from "react"
import React from "react"
import Booking from "./shared/components/booking/booking.tsx" 
import Loading from "./shared/components/loading/loading.tsx"
import { Quadro, Text, BookingDados } from "./styles/app.tsx"

export default function App() {
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const getData = async () => {
    try {
      const response = await fetch('https://course-api.com/react-tours-project')
      const result = await response.json()
      setData(result)
    } catch (error) {
      console.error(error)
    } finally {
      setTimeout(() => {
        setIsLoading(false)
      }, 500);
    }
  }

  useEffect(() => {
      getData()
    }, [])


    return (
      <Quadro>
        <Text>Nossas acomodações</Text>
        {isLoading ? <Loading /> : <BookingDados><Booking data={data} /></BookingDados>}
      </Quadro>
    );
  }