import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Open+Sans+Condensed:wght@300&display=swap');
*{
    box-sizing: border-box;
}
body{
    font-family: 'Open Sans Condensed', sans-serif;
    margin-left: 25px;
    margin-right: 25px;
    padding:20px 80px;

    @media screen and (max-width: 800px){
         padding: 10px;
            }

   
}
a{
    text-decoration: none;
    color: black;
}


`