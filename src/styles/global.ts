import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin:0;
    padding:0;
    box-sizing: border-box;
    outline:0;
   }

   body {
     /* background: #93ffe7; */
     background: linear-gradient(329.54deg, #f0f4f3 0%, #93ffe7 100%);
     color: #153e35;
     -webkit-font-smoothing: antialiased;
   }

   body, input, button{
     font-family: 'Poppins', sans-serif;
     font-size: 16px;
   }

   h1, h2, h3, h4, h5, h6, strong{
     font-weight: 500;
   }

   button{
     cursor: pointer;
   }
`;
