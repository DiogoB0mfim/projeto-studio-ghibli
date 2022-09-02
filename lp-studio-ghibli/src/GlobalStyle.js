import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
*{
   @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;400;700;900&display=swap');
   font-size: 16px;
}

body {
   margin: 0;
   padding: 0;
   box-sizing: border-box;
   background: linear-gradient(to right, #628E75 , #1A4855);
}

a {
   text-decoration: none;
}
` 
export default GlobalStyle;