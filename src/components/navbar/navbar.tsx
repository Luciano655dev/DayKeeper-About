import { useEffect, useState } from "react"
import {
  NavbarContainer,
  HamburguerMenu,
  HamburguerMenuIcon,
} from "./navbarCSS"
import "./transitions.css"

function Navbar() {
  const [isVisible, setIsVisible] = useState(false)
  const [isMenuVisible, setIsMenuVisible] = useState(false)

  const toggleMenu = () => {
    setIsMenuVisible(!isMenuVisible)
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= window.innerHeight - window.innerHeight * 0.5) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }

      if (window.innerWidth >= 600) {
        setIsMenuVisible(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <NavbarContainer className={isVisible ? "visible" : "hidden"}>
      <h1>DAYKEEPER</h1>

      <div className={`normal-items`}>
        <button
          onClick={() => {
            const element = document.querySelector("#aboutDk")
            element?.scrollIntoView({ behavior: "smooth" })
          }}
        >
          About Daykeeper
        </button>
        <button
          onClick={() => {
            const element = document.querySelector("#aboutMe")
            element?.scrollIntoView({ behavior: "smooth" })
          }}
        >
          About Me
        </button>
        <button
          onClick={() => {
            const element = document.querySelector("#contribute")
            element?.scrollIntoView({ behavior: "smooth" })
          }}
        >
          Contribute
        </button>
      </div>

      <HamburguerMenuIcon
        type="checkbox"
        role="button"
        aria-label="Display the menu"
        checked={isMenuVisible}
        onClick={toggleMenu}
      />
      <HamburguerMenu className={isMenuVisible ? "menuVisible" : "menuHidden"}>
        <button
          onClick={() => {
            const element = document.querySelector("#aboutDk")
            element?.scrollIntoView({ behavior: "smooth" })
            setIsMenuVisible(false)
          }}
        >
          About Daykeeper
        </button>
        <button
          onClick={() => {
            const element = document.querySelector("#aboutMe")
            element?.scrollIntoView({ behavior: "smooth" })
            setIsMenuVisible(false)
          }}
        >
          About Me
        </button>
        <button
          onClick={() => {
            const element = document.querySelector("#contribute")
            element?.scrollIntoView({ behavior: "smooth" })
            setIsMenuVisible(false)
          }}
        >
          Contribute
        </button>
      </HamburguerMenu>
    </NavbarContainer>
  )
}

export default Navbar
