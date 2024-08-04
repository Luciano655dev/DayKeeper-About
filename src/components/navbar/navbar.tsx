import { useEffect, useState } from "react"
import {
  NavbarContainer,
  HamburguerMenu,
  HamburguerMenuIcon,
} from "./navbarCSS"
import goToElement from "../../utils/goToElement"
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
        <button onClick={() => goToElement("#aboutDk")}>About Daykeeper</button>
        <button onClick={() => goToElement("#ourHistory")}>Our History</button>
        <button onClick={() => goToElement("#aboutMe")}>About Me</button>
        <button onClick={() => goToElement("#contribute")}>Contribute</button>
      </div>

      <HamburguerMenuIcon
        type="checkbox"
        role="button"
        aria-label="Display the menu"
        checked={isMenuVisible}
        onClick={toggleMenu}
      />
      <HamburguerMenu className={isMenuVisible ? "menuVisible" : "menuHidden"}>
        <button onClick={() => goToElement("#aboutDk")}>About Daykeeper</button>
        <button onClick={() => goToElement("#ourHistory")}>Our History</button>
        <button onClick={() => goToElement("#aboutMe")}>About Me</button>
        <button onClick={() => goToElement("#contribute")}>Contribute</button>
      </HamburguerMenu>
    </NavbarContainer>
  )
}

export default Navbar
