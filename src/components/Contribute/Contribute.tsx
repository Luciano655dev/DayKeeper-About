import { useState } from "react"
import { Container, Header, Content } from "./ContributeCSS" // Certifique-se de importar seu CSS aqui
import "../AboutDK/transition.css" // Importe o arquivo CSS

function Contribute() {
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
        You can contribute to DayKeeper by making a donation, fell free to send
        any mount you feel like, we will always remember of your donation and
        use it to support the development of DayKeeper.
        <br /> <br />
        <button>Buy me a Coffee</button>
      </p>
    </div>
  )
}

function Developer() {
  return (
    <div>
      <h1>DEVELOP</h1>
      <p>
        Fell free to join our development team by creating a issue or making a
        pull request on one of our repoitories about DayKeeper! <br />
        <br />
        <button
          onClick={() =>
            window.open(
              "https://github.com/luciano655dev/DayKeeper-API",
              "_blank"
            )
          }
        >
          DayKeeper API
        </button>{" "}
        <br />
        <button
          onClick={() =>
            window.open(
              "https://github.com/luciano655dev/DayKeeper-Website",
              "_blank"
            )
          }
        >
          DayKeeper Website
        </button>{" "}
        <br />
        <button
          onClick={() =>
            window.open(
              "https://github.com/luciano655dev/DayKeeper-App",
              "_blank"
            )
          }
        >
          DayKeeper APP
        </button>{" "}
        <br />
      </p>
    </div>
  )
}

function Partner() {
  return (
    <div>
      <h1>PARTNER</h1>
      <p>
        If you are interested in becoming a DayKeeper partner,{" "}
        <button>contact us via email</button> and tell us more about yourself or
        your company. We will be happy to know.
      </p>
    </div>
  )
}

export default Contribute
