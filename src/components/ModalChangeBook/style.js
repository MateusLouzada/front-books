import styled from "styled-components";
import { transparentize } from "polished";

export const modalStyle = {
  content: {
    width: "80%",
    inset: "20px",
    height: "80%",
    backgroundColor: transparentize(0.2, "#3f51b5"),
    display: "flex",
    margin: "auto",
    justifyContent: "space-around",
    flexDirection: "column",
    overflow: "hidden",
  },
};

export const ButtonClose = styled.div`
  width: 40px;
  height: 20px;
  align-self: flex-start;

  button {
    border: none;
    cursor: pointer;
    height: 100%;
    width: 100%;
  }
`;

export const DivName = styled.div`
  width: 100%;
  text-align: center;
`;

export const DivInteractions = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  div {
    margin-bottom: 15px;
  }

  @media (max-width: 490px) {
    text-align: center;
  }
`;

export const DivButton = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  align-items: center;
  height: 60%;
  width: 100%;
  flex-direction: column;
  margin-bottom: 1rem;

  .buttonDelete {
    @media (min-width: 1072px) {
      & {
        display: none;
      }
    }
  }
`;
