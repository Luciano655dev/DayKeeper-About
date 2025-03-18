import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`
    @font-face {
      font-family: "Rota_Medium";
      src: url("../assets/fonts/Rota-Medium.otf");
      font-weight: normal;
      font-style: normal;
    }
    @font-face {
      font-family: "Rota_ExtraBold";
      src: url("../assets/fonts/Rota-ExtraBold.otf");
      font-weight: normal;
      font-style: normal;
    }
    @font-face {
      font-family: "Rota_Bold";
      src: url("../assets/fonts/Rota-Bold.otf");
      font-weight: normal;
      font-style: normal;
    }
    @font-face {
      font-family: "Rota_SemiBold";
      src: url("../assets/fonts/Rota-SemiBold.otf");
      font-weight: normal;
      font-style: normal;
    }
    @font-face {
      font-family: "Rota_Italic";
      src: url("../assets/fonts/Rota-Italic.otf");
      font-weight: normal;
      font-style: normal;
    }

  body {
    margin: 0;
    padding: 0;
    background-color: #ffffff; /* white */
    user-select: none;
    font-family: "Rota_Medium";

    p, h1, h2, h3, span, label {
      color: #284b63;
    }
    h1 {
      font-family: "Rota_ExtraBold";
    }
    label {
      font-family: "Rota_Bold";
    }
    button {
      font-family: "Rota_Bold";
      color: #284b63;
    }
    button:hover{
    }
  }
`

export default GlobalStyles
