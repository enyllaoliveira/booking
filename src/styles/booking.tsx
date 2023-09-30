import styled from "styled-components";

const Wrapper = styled.div`
    color:black;
    display: flex;
    flex-direction: column;
    width: 80%;
    margin: auto;
    border: 1px solid rgb(175, 170, 170);
    border-radius: 15px;
    margin-bottom: 20px;
`

const Container = styled.div`
    display: flex;
    flex-direction: column;
    font-size: large;
`

const ContainerInf = styled.div`
    display: flex;
    align-items: center;
    padding: 20px
`

const Title = styled.p`
    color: black;
    font-weight: 700;
    margin-right: 80px
`
const ContainerInfPrice = styled.span`
    font: bolder;
    color: aquamarine;
`

const ContainerInfText = styled.p`
    color: rgb(88, 86, 86);
    padding: 20px
`
const Img = styled.img`
    width: 100%;
`

export {Wrapper, Container, ContainerInf, ContainerInfPrice, ContainerInfText, Img, Title}