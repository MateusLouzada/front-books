import { Autocomplete } from "@material-ui/lab";
import styled from "styled-components";

export const modalStyle = {
  content: {
    width: "80%",
    height: "80%",
    backgroundColor: "red",
    display: "flex",
    margin: "auto",
    justifyContent: "space-around",
    flexDirection: "column",
    overflow: "hidden",
  },
};

export const DivSearchBox = styled.div`
  width: 40%;
  max-width: 300px;
  align-self: center;
`;

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

export const DivContent = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  align-items: center;
  height: 60%;
  width: 100%;
  flex-direction: column;
`;

export const DetailsBook = styled.div`
  height: 40%;
  width: 90%;

  .container-details {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    height: 100%;
  }

  .div-inside-details {
    margin: 0 3rem;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: flex-start;
    width: 30%;
  }
`;

export const DivButton = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 15px;
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
`;
