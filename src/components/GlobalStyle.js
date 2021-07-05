import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle `

  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@200;300;400;500;600;700&display=swap');
    font-family: 'Oswald', sans-serif;
  }

  body{
    background: #01051A;
    
  }
`

export default GlobalStyle;