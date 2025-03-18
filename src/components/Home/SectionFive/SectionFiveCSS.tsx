import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  overflow: hidden;

  @media (max-width: 1024px) {
    min-height: 130vh;
    justify-content: start;
    align-items: start;
  }
  @media (max-width: 768px) {
    min-height: 150vh;
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
    height: 135vh;
  }
`

export const SliderCard = styled.div`
  position: relative;
  width: 100%;
  height: 80vh;
  display: flex;
  flex-direction: column;
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
  width: 100%;
  margin-bottom: 2em;
  display: flex;
  flex-direction: column;
  justify-content: start;

  margin-left: 2em;
  margin-right: 2em;

  h1 {
    font-family: "Rota_Bold";
    font-size: 2.5em;
    margin: 0;
  }
  p {
    margin: 0;
    font-size: 1.5em;
    overflow: hidden;

    @media (max-width: 768px) {
      font-size: 1.2em;
    }
  }

  @media (max-width: 1024px) {
    width: 90%;
    height: auto;
    margin-left: 0;
    margin-right: 0;

    h1 {
      font-size: 2em;
    }
  }
`
