import styled from "styled-components"

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: 5em;
    margin: 0;
    color: #080808;
  }

  div {
    display: flex;
    flex-direction: row;

    width: 30vw;
    justify-content: space-around;

    button {
      border: 0;
      color: #080808;
      background: none;
      border-bottom: 1px solid #080808;
      transition: 0.3s;

      &:hover {
        cursor: pointer;
      }
    }
  }

  @media screen and (max-width: 1000px) {
    div {
      width: 45vw;
    }
  }

  @media screen and (max-width: 600px) {
    h1 {
      font-size: 15vw;
    }
    div {
      width: 80vw;
    }
  }

  @media screen and (max-width: 330px) {
    div {
      width: 95vw;

      button {
        padding: 0;
        font-size: 5vw;

        &:hover {
          background: none;
        }
      }
    }
  }
`
