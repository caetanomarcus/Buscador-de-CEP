import Cep from './components/Cep'
import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle `

  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body{
    background: #ed9624;
    
  }
`

const Div = styled.div `
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;

`

function App() {
  return (
    <Div>
      <GlobalStyle/>
      <Cep />
    </Div>
  );
}

export default App;
