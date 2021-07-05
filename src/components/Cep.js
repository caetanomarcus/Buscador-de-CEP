import React from "react";
import styled from 'styled-components';
import axios from 'axios';
import InputMask from 'react-input-mask';



const Input = styled(InputMask) `
    border-radius: 15px;
    background: #fff;
    border: solid 1px gold;
    outline: none;
    font-size: 1.3rem;
    height: 4.6vh;
    color: #000;

    @media(max-width: 769px){
       
        font-size: 4.2vw;
    }
    
   
`
const Label = styled.label `
    color: #eee;
    font-size: 2rem;
    font-weight: 700;
    margin-right: 5px;


    @media(max-width: 769px){
        font-size: 4.2vw;
    }
`

const Div = styled.div `
    width: 100vw;
    height: 51vh;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    
    border: white solid 1px;
    border-radius: 7px;
    flex-wrap: wrap;
    
    @media(max-width: 769px){
        
        justify-content: center;
        border: none;
        
    }
    

    
`
const Container = styled.div `
    width: 32vw;
    height: 5vw;
    display: flex;
    align-items: center;
    margin: 0 5px;
  
    @media(max-width: 1024px){
        width: 80%;
        border-radius: 10px;
        
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
            if(res.data.hasOwnProperty('erro')){
                this.setState({
                    cpf: 'CEP inexistente'
                }) 
            } else {
                this.setState({
                    logradouro: endereco.logradouro,
                    bairro: endereco.bairro,
                    cidade: endereco.localidade,
                    estado: endereco.uf,
            })
               console.log(res)
            }
        })
        /*.then(() => {
            if(this.state.logradouro !== undefined) {
                this.setState({
                    completo: `CEP ${this.state.cep}, ${this.state.logradouro}, bairro ${this.state.bairro}, ${this.state.cidade}, ${this.state.estado}`,
                    
                })
            } else {
                this.setState({
                    cpf: 'CEP inexistente'
                }) 
            }
        }) */
        .catch(err => console.error('ops! ocorreu um erro' + err));

    };

    handleChange = (e) => {

        //const input = e.target.value
        this.setState({
            cep: e.target.value
        })
    };
   
    handleClick = () => {
        this.getUrl();
    };


    render(){
        return(
            <Div>
               <Container>
                <Label htmlFor='cep'>Cep</Label>
                <Input mask='99999-999' type='text' value={this.state.cep} onChange={this.handleChange} placeholder="Digite seu cep" id="cep" onBlur={this.handleClick}></Input>
                </Container>
                <Container>
                    <Label htmlFor='rua'>Lograd.</Label>
                    <Input id='rua' disabled value={this.state.logradouro} ></Input>
                </Container>
                <Container>
                    <Label htmlFor='bairo' >Bairro</Label>
                    <Input id='bairro' disabled value={this.state.bairro} ></Input>
                </Container>
                <Container>
                    <Label htmlFor='cidade' >Cidade</Label>
                    <Input id='cidade' disabled value={this.state.cidade}></Input>
                </Container>
                <Container>
                    <Label htmlFor='uf' >Estado</Label>
                    <Input id='uf' disabled value={this.state.estado}></Input>
                </Container>
               
            </Div>
        )
    }
}