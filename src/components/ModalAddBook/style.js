import styled from "styled-components";

export const modalStyle = {
  content: {
    width: "80%",
    heigth: "50%",
    margin: "auto",
    backgroundColor: "red",
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
  place-self: center start;

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
  height: 90%;
  width: 100%;
  flex-direction: column;
`;

export const DetailsBook = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  .div-inside-details {
    margin: 0 3rem;
    width: 60%;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: flex-start;
    height: 100%;
  }
`;

export const DivButton = styled.div``;

export const DivInteractions = styled.div``;
