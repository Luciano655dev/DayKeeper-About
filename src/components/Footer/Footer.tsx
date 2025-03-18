import { Container, OtherContainer, Copyright } from "./FooterCSS"

function Footer() {
  return (
    <Container>
      <Copyright>&copy; {new Date().getFullYear()} Daykeeper</Copyright>
      <OtherContainer>
        <div>
          <label>Contact</label>
          <ul>
            <li>
              <a href="https://discord.gg/hu67Sq4A">Daykeeper Community</a>
            </li>
            <li>
              <a href="https://www.instagram.com/daykeeper.app">Instagram</a>
            </li>
            <li>
              <a href="">contact@daykeeper.app</a>
            </li>
          </ul>
        </div>
        <div>
          <label>Our Content</label>
          <ul>
            <li>
              <a href="https://github.com/luciano655dev/daykeeper-api">
                Daykeeper API
              </a>
            </li>
            <li>
              <a href="https://github.com/luciano655dev/daykeeper-docs">
                Daykeeper Docs
              </a>
            </li>
            <li>
              <a href="https://github.com/luciano655dev/daykeeper-app">
                Daykeeper APP
              </a>
            </li>
            <li>
              <a href="https://github.com/luciano655dev/daykeeper-about">
                Daykeeper About Website
              </a>
            </li>
          </ul>
        </div>
      </OtherContainer>
    </Container>
  )
}

export default Footer
