import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
*{
   @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;400;700;900&display=swap');
   font-family: 'Poppins', sans-serif;
   margin: 0;
   padding: 0;
   box-sizing: border-box;
   color: #F9F9F9;
   font-size: 16px;
}

body {
   background: linear-gradient(to right, #628E75 , #1A4855);
}

a {
   text-decoration: none;
}
`




 
export default GlobalStyle;