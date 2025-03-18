import BackgroundGrid from "../../BackgroundGrid/BackgroundGrid"
import { Container } from "./MainCSS"

function Main() {
  return (
    <div>
      <BackgroundGrid />
      <Container data-aos="fade-in" data-aos-delay="200">
        <div>
          <img src="/Logo/JPG/Daykeeper-Mark-Blue@2x-100.jpg"></img>
          <h1>Daykeeper Community</h1>
        </div>
      </Container>
    </div>
  )
}

export default Main
