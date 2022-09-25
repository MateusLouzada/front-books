import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        font-family: Open-Sans, Helvetica, Sans-Serif;
        background-color: #9544FA;
        color: white;
    }
    *,
    *:before,
    *:after{
      box-sizing: inherit  
    }
`;

export default GlobalStyle;
