import { useEffect } from "react"
import AOS from "aos"

import Navbar from "./components/navbar/navbar"

import Main from "./components/Main/Main"
import AboutDK from "./components/AboutDK/AboutDK"
import AboutMe from "./components/AboutMe/AboutMe"
import Contribute from "./components/Contribute/Contribute"

import Footer from "./components/Footer/Footer"

import "./App.css"
import "aos/dist/aos.css"

function App() {
  useEffect(() => {
    AOS.init({ duration: 500 })
  }, [])

  return (
    <body>
      <Navbar />

      <Main />
      <AboutDK />
      <AboutMe />
      <Contribute />

      <Footer />
    </body>
  )
}

export default App