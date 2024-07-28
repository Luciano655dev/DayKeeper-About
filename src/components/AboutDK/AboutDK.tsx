import { useState } from "react"
import { Container, Header, Content } from "./AboutDKCSS" // Certifique-se de importar seu CSS aqui
import "./transition.css" // Importe o arquivo CSS

function AboutDK() {
  const [currentTab, setCurrentTab] = useState(0)
  const [fade, setFade] = useState("fade-in")

  function changeTab(tabNumber: any) {
    if (tabNumber !== currentTab) {
      setFade("fade-out")
      setTimeout(() => {
        setCurrentTab(tabNumber)
        setFade("fade-in")
      }, 600)
    }
  }

  return (
    <Container>
      <div
        style={{
          position: "absolute",
          transform: `translateY(-13vh)`,
        }}
        id="aboutDk"
      ></div>
      <Header>
        <button onClick={() => changeTab(0)}>What is DayKeeper</button>
        <button onClick={() => changeTab(1)}>What to Expect</button>
        <button onClick={() => changeTab(2)}>When it will be launched</button>
      </Header>

      <Content className={fade}>
        {currentTab === 0 ? (
          <WhatIsDayKeeper />
        ) : currentTab === 1 ? (
          <WhatToExpect />
        ) : (
          <WhenItWillBeReleased />
        )}
      </Content>
    </Container>
  )
}

function WhatIsDayKeeper() {
  return (
    <div>
      <h1>WHAT IS DAYKEEPER?</h1>
      <p>
        DayKeeper é uma rede social no formato de um diário, onde você pode
        compartilhar, guardar e manter seus dias com você. <br /> <br />
        Nosso objetivo é ajudar pessoas a organizarem suas vidas, com uma
        plataforma limpa e fácil de ser utilizada.
      </p>
    </div>
  )
}

function WhatToExpect() {
  return (
    <div>
      <h1>WHAT TO EXPECT?</h1>
      <p>
        DayKeeper é uma rede social no formato de um diário, onde você pode
        compartilhar, guardar e manter seus dias com você. <br /> <br />
        Nosso objetivo é ajudar pessoas a organizarem suas vidas, com uma
        plataforma limpa e fácil de ser utilizada.
      </p>
    </div>
  )
}

function WhenItWillBeReleased() {
  return (
    <div>
      <h1>WHEN IT WILL BE RELEASED?</h1>
      <p>
        DayKeeper é uma rede social no formato de um diário, onde você pode
        compartilhar, guardar e manter seus dias com você. <br /> <br />
        Nosso objetivo é ajudar pessoas a organizarem suas vidas, com uma
        plataforma limpa e fácil de ser utilizada.
      </p>
    </div>
  )
}

export default AboutDK
