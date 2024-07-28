import { Container } from "./MainCSS"

function Main() {
  return (
    <Container>
      <h1 data-aos="fade-in">DAYKEEPER</h1>
      <div>
        <button
          data-aos="fade-in"
          data-aos-delay="400"
          onClick={() => {
            const element = document.querySelector("#aboutDk")
            element?.scrollIntoView({ behavior: "smooth" })
          }}
        >
          About Daykeeper
        </button>
        <button
          data-aos="fade-in"
          data-aos-delay="800"
          onClick={() => {
            const element = document.querySelector("#aboutMe")
            element?.scrollIntoView({ behavior: "smooth" })
          }}
        >
          About Me
        </button>
        <button
          data-aos="fade-in"
          data-aos-delay="1200"
          onClick={() => {
            const element = document.querySelector("#contribute")
            element?.scrollIntoView({ behavior: "smooth" })
          }}
        >
          Contribute
        </button>
      </div>
    </Container>
  )
}

export default Main
