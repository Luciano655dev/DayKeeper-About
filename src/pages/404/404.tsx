import { Container, HomeButton } from "./404CSS"

export default function Page404() {
  return (
    <Container>
      <h1>Page not found</h1>
      <HomeButton to="/">Home</HomeButton>
    </Container>
  )
}
