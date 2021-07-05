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
    
    
    
    @media(max-width: 968px){
        width: 40vw;
        font-size: 1.2rem;
    }
   
`
const Label = styled.label `
    color: #eee;
    font-size: 2rem;
    font-weight: 700;
    margin-right: 5px;
`

const Div = styled.div `
    width: 100vw;
    height: 51vh;
    display: flex;
    border: white solid 1px;
    border-radius: 7px;
    flex-wrap: wrap;
    
   
    

    @media(max-width:968px) {
        width: 78vw;
        height: 30vh;
    }

`
const Container = styled.div `
    width: 33vw;
    height: 5vw;
    display: flex;
    align-items: center;
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
                    <Label htmlFor='rua'>Logradouro</Label>
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