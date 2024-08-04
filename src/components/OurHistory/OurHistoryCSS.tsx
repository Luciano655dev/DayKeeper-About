import styled from "styled-components"
import colors from "../../constants/colors"

export const Container = styled.div`
  max-width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;

  padding: 0 15vw;
`

export const Header = styled.div`
  width: 100%;
  border-top-right-radius: 2em;
  border-top-left-radius: 2em;

  padding: 0.5em;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  button {
    margin-left: 0.5em;
    margin-right: 0.5em;
    background: none;
    color: ${colors.DK_BLACK};
    border: none;
    border-bottom: 1px solid ${colors.DK_BLACK};
    font-size: 1em;
    transition: 0.3s;

    &:hover {
      transform: translateY(2px);
      cursor: pointer;
    }
  }

  @media (max-width: 700px) {
    padding: 0;
    width: 100vw;

    button {
      margin: 0.5em;
    }
  }
`

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  max-height: 80%;
  margin-top: 3em;

  div {
    width: 70%;

    h1 {
      margin: 0 0 0.5em 0;
      color: ${colors.DK_BLACK};
      font-size: 4em;
      font-weight: 300;
    }

    strong {
      font-weight: 400;
    }

    p {
      margin: 0;
      font-size: 2em;
      font-weight: 100;
    }
  }

  @media (max-width: 700px) {
    margin: 0;
    div {
      h1 {
        font-size: 2em;
      }
      p {
        font-size: 1.5em;
      }
    }
  }

  @media (max-width: 500px) {
    margin: 0;
    div {
      width: 90vw;
      margin-top: 2em;
      h1 {
        font-size: 1.5em;
      }
      p {
        font-size: 1.3em;
      }
    }
  }
`
