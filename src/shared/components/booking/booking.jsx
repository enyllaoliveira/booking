import { useEffect } from "react"
import React from "react"
import styles from './booking.module.css'

const Bookings = (props) => {

useEffect(() => {
    console.log(props.data)
}, [props.data]) 


return(
    <div className={styles.wrapper}> 
    {props.data.map((item) => (
    <div key={item.id}>

    {item.image}
    {item.info}
    {item.name}
    {item.price}
    </div>
    )
   )}
    </div>
)

}

export default Bookings 
