import { darken } from "polished";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        font-family: Open-Sans, Helvetica, Sans-Serif;
        background-color: whitesmoke;
        color: white;
    }
    *,
    *:before,
    *:after{
      box-sizing: inherit  
    }
    /* button {
    background-color: #B232E3;
    color: white;
    border-radius: 5px;
    border: none;
    margin: 0 10px;
    height: 30px;
    width: 80px;
    cursor: pointer;
    transition: 0.3s ease-in-out;
  }
  button:hover{
    background-color: ${darken(0.2, "#B232E3")};
  } */
  .Dropdown-option:hover, .placeClass:hover{
    background-color: ${darken(0.2, "#B232E3")};
}
`;

export default GlobalStyle;
