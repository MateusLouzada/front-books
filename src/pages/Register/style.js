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
  }

  div {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
  }

  input {
    width: 200px;
    border-radius: 5px;
    padding: 5px;
    border: none;
    height: 15px;
  }

  span {
    width: 200px;
    text-align: center;
    display: inline-block;
  }
`;
