import { useState } from "react"
import { Container, Header, Content } from "./AboutMeCSS"
import "../AboutDK/transition.css"

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
        id="aboutMe"
      ></div>

      <Header>
        <button onClick={() => changeTab(0)}>Who Am I</button>
        <button onClick={() => changeTab(1)}>
          Why I am creating Daykeeper
        </button>
      </Header>

      <Content className={fade}>
        {currentTab === 0 ? <WhoAmI /> : <WhyImCreatingDaykeeper />}
      </Content>
    </Container>
  )
}

function WhoAmI() {
  return (
    <div>
      <h1>WHO AM I?</h1>
      <p>
        DayKeeper é uma rede social no formato de um diário, onde você pode
        compartilhar, guardar e manter seus dias com você. <br /> <br />
        Nosso objetivo é ajudar pessoas a organizarem suas vidas, com uma
        plataforma limpa e fácil de ser utilizada.
      </p>

      <img></img>
    </div>
  )
}

function WhyImCreatingDaykeeper() {
  return (
    <div>
      <h1>WHY IM CREATING DAYKEEPER?</h1>
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
