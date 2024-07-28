import styled from "styled-components"

export const Container = styled.footer`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 15vh;

  p,
  a {
    margin-right: 0.3em;
    margin-left: 0.3em;
    color: #080808;
    transition: 0.3s;
  }

  a:hover {
    transform: translateY(2px);
  }

  @media (max-width: 600px) {
    height: 20vh;
    flex-direction: column;

    a,
    p {
      margin: 0;
      margin-top: 0.5em;
      margin-bottom: 0.5em;
    }
  }
`
