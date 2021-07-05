import React from 'react';
import styled from 'styled-components';
import bg from '../img/earth.jpg'


const Container = styled.div `
    background-image: url(${bg});
    background-size: cover;
    background-repeat: no-repeat;
    width: 100vw;
    height: 25vw;
    display: flex;
    justify-content: center;
    align-items: center;

    @media(max-width:960px){
        height: 70vh;
    }
`
const H1 = styled.h1 `
    color: #eee;
    font-size: 3rem;

`
export default function Header (){
    return(
        <Container>
            <H1>Buscador de CEP</H1>
        </Container>
    )
}