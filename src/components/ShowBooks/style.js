import styled, { keyframes } from "styled-components";
import { darken } from "polished";
import { fadeIn } from "react-animations";

const fadeInAnimation = keyframes`${fadeIn}`;

export const DivNotBook = styled.div`
  height: 80vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;

  ul {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    width: 100%;
    list-style-type: none;
    margin-block-start: 0;
    margin-block-end: 0;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 0;
    margin: 2rem;
  }

  li {
    width: 60%;
    margin: 1rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    animation-name: ${fadeInAnimation};
    animation-duration: 1s;
  }

  .divBook {
    cursor: pointer;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    text-align: center;
    border-radius: 5px;
    height: 24.5px;
    width: 60%;
    background-color: #3f51b5;
    padding: 6px 16px;
  }

  .divBook:hover {
    background-color: ${darken(0.2, "#3f51b5")};
  }

  .divButtons {
    display: flex;
    justify-content: space-around;
  }

  @media (max-width: 1072px) {
    .divBook {
      justify-content: center;
    }

    .divButtons {
      display:none
    }

    &{
      align-items: center;
      height: 80vh;
    }
  }

  @media (max-width: 602px) {
    li {
      font-size: 0.8rem;
    }

    button {
      font-size: 0.8rem;
      height: 25px
    }
  }
`;

// export const CardBook = styled.div`
//   /* @keyframes fadeInFromNone {
//     0% {
//       display: none;
//       opacity: 0;
//     }

//     1% {
//       display: flex;
//       opacity: 0;
//     }

//     100% {
//       display: flex;
//       opacity: 1;
//     }
//   } */

//   width: 30vw;
//   max-width: 300px;
//   padding: 2rem;
//   display: flex;
//   flex-direction: column;
//   flex-wrap: wrap;
//   justify-content: space-around;
//   align-items: center;
//   margin: 1rem;
//   border-radius: 5px;
//   background-color: ${transparentize(0.8, "#fff")};
//   border: 1px solid ${transparentize(0.6, "violet")};
//   transition: 0.3s ease-in-out;
//   animation: fadeInFromNone 0.5s ease-out;

//   &:hover {
//     box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
//     cursor: pointer;
//   }

//   button {
//     margin-bottom: 10px;
//   }
// `;

// export const DivImage = styled.div`
//   width: 100%;
//   text-align: center;
// `;

// export const DivDetails = styled.div`
//   display: flex;
//   flex-wrap: wrap;
//   width: 100%;
//   margin-bottom: 20px;
//   justify-content: space-around;
//   align-items: center;

//   div {
//     display: flex;
//     flex-direction: column;
//     justify-content: space-between;
//     align-items: center;
//     text-align: center;
//     width: 40%;
//     height: 30%;
//   }

//   h3 {
//     color: whitesmoke;
//   }

//   p {
//     display: flex;
//     height: 30%;
//     align-items: center;
//     justify-content: center;
//   }
// `;
