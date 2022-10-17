import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const DivButton = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: flex-end;
  margin: 1rem 0;

  .child {
    margin: 0 1rem;
  }

  .selectMenu {
    min-width: 150px;
    vertical-align: super;
  }

  @media (max-width: 529px) {
    .child:nth-child(2) {
      order: 1;
    }
    .child:nth-child(2){
      margin-top: 1rem;
    }
  }
`;
