import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;

  form {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    width: 60%;
    color: black;
  }

  div {
    width: 50%;
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
    align-items: center;
  }

  input {
    width: 200px;
    border-radius: 5px;
    padding: 5px;
    border: none;
    background-color: #3f51b5;
    color: white;
    height: 15px;
  }

  span {
    width: 200px;
    text-align: center;
    display: inline-block;
  }
`;

export const DivButton = styled.div`
  width: 20% !important;

  .divButtonInside{
    margin: 0 20px
  }
`;
