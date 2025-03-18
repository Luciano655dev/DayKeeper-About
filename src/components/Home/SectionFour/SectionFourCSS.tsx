import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  overflow: hidden;
  margin-bottom: 5em;

  @media (max-width: 1024px) {
    min-height: 20vh;
    justify-content: start;
    align-items: start;
  }
`

export const OtherContainer = styled.div`
  width: 80vw;
  min-height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media (max-width: 1024px) {
    align-items: center;
    width: 100vw;
  }
`

export const SliderCard = styled.div`
  position: relative;
  width: 100%;
  min-height: 80vh;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  overflow: hidden;

  @media (max-width: 1024px) {
    flex-direction: column;
    justify-content: start;
    align-items: center;
    height: auto;
  }
`

export const UpperTitle = styled.h1`
  font-family: "Rota_Bold";
  font-size: 3em;
  margin: 0;
  margin-bottom: 0.5em;
`

export const CardText = styled.div`
  width: 45%;
  min-height: 45%;
  display: flex;
  flex-direction: column;

  h1 {
    font-family: "Rota_Bold";
    font-size: 2.5em;
    margin: 0;
  }
  p {
    font-size: 1.5em;
    margin: 0;
    overflow: hidden;
  }
  ul {
    margin: 0;
  }
  li {
    margin: 0;
  }

  @media (max-width: 1024px) {
    width: 90%;
    height: auto;
    margin-left: 0;
    margin-right: 0;
    margin-top: 1em;

    p {
      font-size: 1.2em;
    }
    h1 {
      font-size: 2em;
    }
  }
`
