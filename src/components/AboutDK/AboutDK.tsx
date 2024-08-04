import { useState } from "react"
import { Container, Header, Content } from "./AboutDKCSS"
import goToElement from "../../utils/goToElement"
import "./transition.css"

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
      <h1>
        WHAT IS <strong>DAYKEEPER?</strong>
      </h1>
      <p>
        DayKeeper is a diary-style social network designed to help you save and
        share your days. <br /> <br />
        Our goal is to help you have memories of your life in a way that you are
        already used to, on a social network.
      </p>
    </div>
  )
}

function WhatToExpect() {
  return (
    <div>
      <h1>
        WHAT TO <strong>EXPECT?</strong>
      </h1>
      <p>
        Expect a "merger" of Instagram, Twitter, BeReal and a paper diary.
        <br /> <br />
        With DayKeeper, you can make a post a day telling about your day, answer
        daily questions, post stories, interact with friends, etc.
      </p>
    </div>
  )
}

function WhenItWillBeReleased() {
  return (
    <div>
      <h1>
        WHEN IT WILL BE <strong>RELEASED?</strong>
      </h1>
      <p>
        DayKeeper is still in early development, with a release date set for
        late 2025. <br /> <br />
        This project is being developed in an Open Source manner, for now, by
        just one person. Feel free to{" "}
        <button onClick={() => goToElement("#contribute")}>
          contribute to the development.
        </button>
      </p>
    </div>
  )
}

export default AboutDK
