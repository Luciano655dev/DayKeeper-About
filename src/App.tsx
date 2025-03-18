import { useEffect } from "react"
import { useLocation } from "react-router-dom"
import AOS from "aos"
import GlobalStyles from "./GlobalStyles"

import Navbar from "./components/navbar/navbar"
import { Outlet } from "react-router-dom"
import Footer from "./components/Footer/Footer"

import "aos/dist/aos.css"

function App() {
  useEffect(() => {
    AOS.init({ duration: 500, once: true })
  }, [])

  return (
    <body>
      <ScrollToTop />
      <GlobalStyles />
      <Navbar />

      <Outlet />

      <Footer />
    </body>
  )
}

export default App

const ScrollToTop = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}
