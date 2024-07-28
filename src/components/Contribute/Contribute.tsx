import { useState } from "react"
import { Container, Header, Content } from "./ContributeCSS" // Certifique-se de importar seu CSS aqui
import "../AboutDK/transition.css" // Importe o arquivo CSS

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
        id="contribute"
      ></div>
      <Header>
        <p>Contribute as a</p>
        <button onClick={() => changeTab(0)}>Donor</button>
        <button onClick={() => changeTab(1)}>Developer</button>
        <button onClick={() => changeTab(2)}>Partner</button>
      </Header>

      <Content className={fade}>
        {currentTab === 0 ? (
          <Donate />
        ) : currentTab === 1 ? (
          <Developer />
        ) : (
          <Partner />
        )}
      </Content>
    </Container>
  )
}

function Donate() {
  return (
    <div>
      <h1>DONATE</h1>
      <p>
        DayKeeper é uma rede social no formato de um diário, onde você pode
        compartilhar, guardar e manter seus dias com você. <br /> <br />
        Nosso objetivo é ajudar pessoas a organizarem suas vidas, com uma
        plataforma limpa e fácil de ser utilizada.
      </p>
    </div>
  )
}

function Developer() {
  return (
    <div>
      <h1>DEVELOP</h1>
      <p>
        DayKeeper é uma rede social no formato de um diário, onde você pode
        compartilhar, guardar e manter seus dias com você. <br /> <br />
        Nosso objetivo é ajudar pessoas a organizarem suas vidas, com uma
        plataforma limpa e fácil de ser utilizada.
      </p>
    </div>
  )
}

function Partner() {
  return (
    <div>
      <h1>PARTNER</h1>
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
