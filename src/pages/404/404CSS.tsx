import styled from "styled-components"
import { Link } from "react-router-dom"

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const HomeButton = styled(Link)`
  border: 0;
  border-radius: 10px;
  padding: 1em;
  padding-left: 2em;
  padding-right: 2em;
  font-size: 1em;

  font-family: "Rota_Bold";
  background-color: #6db5ff;
  color: #284b63;
  text-decoration: none;
  transition: 0.3s;

  &:hover {
    cursor: pointer;
    color: black;
    background-color: #284b63;
  }
`
