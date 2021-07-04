import React from "react";
import styled from 'styled-components';
import axios from 'axios';
import InputMask from 'react-input-mask';

const Title = styled.h1 `
    color: #ed9624;
    text-shadow: 2px 2px 1px #000;
    text-align: center;


`

const Input = styled(InputMask) `
    border-radius: 5px;
    background: #eee;
    border: solid 1px gold;
    outline: none;
    height: 15px;
    font-size: 1.5rem;
    height: 6vh;
    width: 15vw;
    
    
    @media(max-width: 968px){
        width: 40vw;
        font-size: 1.2rem;
    }
   
`

const Btn = styled.button `
    border-radius: 4px;
    border: solid black 1px;
    cursor: pointer;
    background: #ed9624;
    height: 6vh;
    font-size: 1.4rem;
    &:active {
        transform: scale(0.9);
    }

    @media(max-width: 968px){
        width: 20vw;
        margin: 0 10px;
        font-size: 1.1rem;
    }
    
`

const P = styled.p `
    font-fontSize: 18px;
    color: #960505;
    align-self: center;
    width: 590px;
    text-align: center;
    
   

`

const Div = styled.div `
    width: 40vw;
    height: 25vw;
    background: #f3f768;
    display: flex;
   
    flex-direction: column;
    border-radius: 5px;
    

    @media(max-width:968px) {
        width: 78vw;
        height: 70vh;

        
       
    }

`
const Container = styled.div `
    height: 10vw;
    display: flex;
    align-items: flex-end;
    justify-content: center; 

    @media(max-width:414px) {
        font-size: 30px;
        height: 30vh;
    }
    
`

export default class CEP extends React.Component {


    state ={
        cep: '',
        logradouro: '',
        bairro: '',
        cidade: '',
        estado: '',
        completo: '',

    }

    componentDidMount(){
        
    }

    getUrl =  () => {


       

        const url =`https://viacep.com.br/ws/${this.state.cep}/json/`;

        axios.get(url)
        .then(res => {
            const endereco = res.data;
            this.setState({
                logradouro: endereco.logradouro,
                bairro: endereco.bairro,
                cidade: endereco.localidade,
                estado: endereco.uf,
            })
               console.log(res)
        })
        .then(() => {
            if(this.state.logradouro !== undefined) {
                this.setState({
                    completo: `CEP ${this.state.cep}, ${this.state.logradouro}, bairro ${this.state.bairro}, ${this.state.cidade}, ${this.state.estado}`,
                    cep: ''
                })
                
               
            } else {
                this.setState({
                    completo: 'Você digitou um cep inválido ou inexistente.'
                })
                
            }
        })
        .catch(err => console.error('ops! ocorreu um erro' + err));

    };

    handleChange = (e) => {

        //const input = e.target.value
        this.setState({
            cep: e.target.value
        })
    };
   
    handleClick = (e) => {
        e.preventDefault();
        this.getUrl();
        
        
    };


    render(){
        return(
            <Div>
                <Title>Buscador de CEP</Title>
               <form>
               <Container>
                <Input mask='99999-999' type='text' value={this.state.cep} onChange={this.handleChange} placeholder="Digite seu cep" ></Input>
                <Btn onClick={this.handleClick} >Buscar</Btn>
                </Container>
               <Container>
               <P >{this.state.completo}</P>
               </Container>
               </form>
                
            </Div>
        )
    }
}