import styled from "styled-components"

export const Container = styled.footer`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: start;
  width: 100vw;
  min-height: 20vh;
  margin-bottom: 2em;
`

export const OtherContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;

  div {
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    align-items: center;

    min-width: 20%;
    label {
      font-family: "Rota_Bold";
    }
    ul {
      margin: 0;
      padding: 0;
      list-style: none;
    }
    p,
    a {
      margin-right: 0.3em;
      margin-left: 0.3em;
      color: #284b63;
      transition: 0.3s;
    }

    @media (max-width: 768px) {
      min-width: 100%;
      margin-bottom: 2em;
    }
  }
  @media (max-width: 768px) {
    flex-direction: column;
  }
`

export const Copyright = styled.p`
  position: absolute;
  bottom: -2em;
`
