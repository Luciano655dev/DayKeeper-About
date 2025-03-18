import styled from "styled-components"

export const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  overflow: hidden;
  margin-bottom: 5em;

  @media (max-width: 1024px) {
    min-height: 150vh;
    justify-content: start;
    align-items: start;
  }
  @media (max-width: 768px) {
    min-height: 170vh;
  }
`

export const OtherContainer = styled.div`
  width: 80vw;
  min-height: 80vh;
  display: flex;
  justify-content: center;

  @media (max-width: 1024px) {
    align-items: start;
    width: 100vw;
    height: 150vh;
  }
`

export const SliderCard = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  overflow: hidden;

  @media (max-width: 1024px) {
    flex-direction: column;
    height: auto;
  }
`

export const CardText = styled.div`
  width: 60%;
  height: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;

  @media (max-width: 1024px) {
    width: 90%;
    height: auto;
  }
`

export const TextContent = styled.div`
  h1 {
    margin-top: 0;
    margin-bottom: 0.5em;
    font-family: "Rota_Bold";
    font-size: 3em;
  }
  h3 {
    font-family: "Rota_Bold";
    margin-bottom: 0.3em;
  }
  label {
    font-family: "Rota_Bold";
  }
  p {
    font-size: 1.5em;
    margin: 0;
    overflow: hidden;

    @media (max-width: 768px) {
      font-size: 1.2em;
    }
  }
  a {
    color: #6db5ff;
  }
  ul {
    margin: 0.3em;
  }
`
