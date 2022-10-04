import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const DivButton = styled.div`
  display: flex;
  width: 90%;
  height: 30px;
  justify-content: flex-end;
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
