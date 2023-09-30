import { useEffect } from "react"
// import styles from './booking.module.css'
import { Wrapper, Container, ContainerInf, ContainerInfPrice, ContainerInfText, Img, Title } from "../../../styles/booking";
import { BookingProps } from "../../types/booking";

interface Props {
  data: BookingProps[]
}

const Bookings = (props: Props) => {
  useEffect(() => {
}, [props.data]) 


return (
    <div>
      {props.data.map((item: BookingProps) => (
        <Wrapper> 
        <Container key={item.id}>
          <Img src={item.image} alt={item.name}/> 
          <ContainerInf >
            <Title>
            {item.name}
            </Title>
            <ContainerInfPrice>
            {item.price}
            </ContainerInfPrice>
          </ContainerInf> 
          <ContainerInfText>
            {item.info} 
          </ContainerInfText>
        </Container>
        </Wrapper>
      ))}
    </div>
  );
};

export default Bookings 
