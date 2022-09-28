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
    button {
    background-color: #B232E3;
    color: white;
    border-radius: 5px;
    border: none;
    margin: 0 10px;
    height: 30px;
    width: 80px;
    cursor: pointer;
  }
`;

export default GlobalStyle;
