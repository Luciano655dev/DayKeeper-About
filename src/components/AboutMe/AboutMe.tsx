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
      <h1>
        WHO <strong>AM I?</strong>
      </h1>
      <p>
        My name is Luciano Menezes. I was born in Brazil and now I'm living in
        Florida, United States. I've been programming since I was 8 years old.{" "}
        <br />
        <br /> I started with game development and then got into fullstack
        development, which led me to start building DayKeeper.{" "}
        <button
          onClick={() =>
            window.open("https://luciano655.netlify.app", "_blank")
          }
        >
          See my portfolio website
        </button>
      </p>

      <img></img>
    </div>
  )
}

function WhyImCreatingDaykeeper() {
  return (
    <div>
      <h1>
        WHY IM <strong>CREATING DAYKEEPER?</strong>
      </h1>
      <p>
        The idea for DayKeeper came when I realized I had lost control of my
        life. <br /> <br />I wasn't able to remember recent events, I was
        forgetting my own days, something I won't let happen to you.
      </p>
    </div>
  )
}

export default AboutDK
