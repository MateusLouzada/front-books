import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const DivButton = styled.div`
  display: flex;
  width: 100%;
  height: 150px;
  justify-content: space-between;
  margin: 1rem 0;
`;

export const DivAddBook = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;

  button {
    padding: 10px;
  }

  @media (max-width: 702px){
    &{
      flex-wrap: wrap;
      justify-content: space-around;

      button {
        margin-top: 0.5rem;
      }
    }

  }
`;

export const Test = styled.div`
  background-color: red;
`
