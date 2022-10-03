import styled from "styled-components";
import { transparentize } from "polished";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  height: 80vh;
`;

export const DivNotBook = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CardBook = styled.div`
  @keyframes fadeInFromNone {
    0% {
      display: none;
      opacity: 0;
    }

    1% {
      display: flex;
      opacity: 0;
    }

    100% {
      display: flex;
      opacity: 1;
    }
  }

  width: 30vw;
  max-width: 300px;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  margin: 1rem;
  border-radius: 5px;
  background-color: ${transparentize(0.8, "#fff")};
  border: 1px solid ${transparentize(0.6, "violet")};
  transition: 0.3s ease-in-out;
  animation: fadeInFromNone 0.5s ease-out;

  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
    cursor: pointer;
  }

  button {
    margin-bottom: 10px;
  }
`;

export const DivImage = styled.div`
  width: 100%;
  text-align: center;
`;

export const DivDetails = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  margin-bottom: 20px;
  justify-content: space-around;
  align-items: center;

  div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    width: 40%;
    height: 30%;
  }

  h3 {
    color: whitesmoke;
  }

  p {
    display: flex;
    height: 30%;
    align-items: center;
    justify-content: center;
  }
`;
