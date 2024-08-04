import { Container } from "./MainCSS"
import goToElement from "../../utils/goToElement"

function Main() {
  return (
    <Container>
      <h1 data-aos="fade-in">DAYKEEPER</h1>
      <div>
        <button
          data-aos="fade-in"
          data-aos-delay="400"
          onClick={() => goToElement("#aboutDk")}
        >
          About Daykeeper
        </button>
        <button
          data-aos="fade-in"
          data-aos-delay="800"
          onClick={() => goToElement("#ourHistory")}
        >
          Our History
        </button>
        <button
          data-aos="fade-in"
          data-aos-delay="1200"
          onClick={() => goToElement("#aboutMe")}
        >
          About Me
        </button>
        <button
          data-aos="fade-in"
          data-aos-delay="1600"
          onClick={() => goToElement("#contribute")}
        >
          Contribute
        </button>
      </div>
    </Container>
  )
}

export default Main
