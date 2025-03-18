import styled from "styled-components"

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 100;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 5;

    img {
      width: 6em;
      margin-bottom: 1em;
    }

    h1 {
      font-size: 5em;
      font-family: "Rota_Bold";
      margin: 0;
    }
  }

  @media screen and (max-width: 768px) {
    div h1 {
      text-align: center;
      line-height: 1em;
      padding-bottom: 0.3em;
      font-size: 4em;
    }
  }
`
