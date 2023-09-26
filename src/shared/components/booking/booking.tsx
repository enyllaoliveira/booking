import { useEffect } from "react"
// import styles from './booking.module.css'
import { Wrapper } from "../../../styles/booking";

const Bookings = (props: any) => {

useEffect(() => {
}, [props.data]) 


return (
    <div>
      {props.data.map((item: any) => (
        <Wrapper> 
          test
        {/* <div  className={styles.container}  key={item.id}>
          <img src={item.image} alt={item.name} /> <br></br>
        <div className={styles.containerInf}>         
          {item.name}<br></br>
          <div className={styles.containerInfPrice}>
          {item.price}<br></br>
          </div>
        </div> 
        <div className={styles.containerInfText}>
          {item.info} <br></br>
        </div>
        </div> */}
        </Wrapper>
      ))}
    </div>
  );
};

export default Bookings 
