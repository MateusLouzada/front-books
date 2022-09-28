import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
`;
export const ContainerLogin = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  width: 90%;
  max-width: 350px;
  height: 40%;
  max-height: 600px;
  
  div {
    width: 350px;
    display: flex;
    margin: 20px;
    justify-content: center;
    align-items: center;
  }

  span {
    display: flex;
    width: 50px; 
  }

  input {
    border-radius:5px;
    padding: 5px;
    border: none;
    height: 15px
  }
`;
