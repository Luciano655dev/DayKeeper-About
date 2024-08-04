import { useState } from "react"
import { Container, Header, Content } from "./OurHistoryCSS"
import "../AboutDK/transition.css"

function OurHistory() {
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
        id="ourHistory"
      ></div>
      <Header>
        <button onClick={() => changeTab(0)}>The Idea</button>
        <button onClick={() => changeTab(1)}>Our Values</button>
      </Header>

      <Content className={fade}>
        {currentTab === 0 ? <TheIdea /> : <OurValues />}
      </Content>
    </Container>
  )
}

function TheIdea() {
  return (
    <div>
      <h1>
        THE <strong>IDEA</strong>
      </h1>
      <p>
        DayKeeper was born out of the need to keep histories preserved.{" "}
        <br></br> What was originally intended to be a website for storing
        general biographies, called "keepyourhistory.org" will now become a
        social network open to everyone, able to help anyone who is interested.
      </p>
    </div>
  )
}

function OurValues() {
  return (
    <div>
      <h1>
        OUR <strong>VALUES</strong>
      </h1>
      <p>
        DayKeeper will be a social network that is completely transparent to
        you. All code will be made publicly available, no data will be used
        without your consent and knowledge, and everything that is being done
        will be completely open.
      </p>
    </div>
  )
}

export default OurHistory
