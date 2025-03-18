import {
  Container,
  OtherContainer,
  SliderCard,
  CardText,
  TextContent,
  CardImage,
} from "./SectionOneCSS"

export default function SectionOne() {
  return (
    <Container id="sectionOne" data-aos="fade-in" data-aos-delay="200">
      <OtherContainer>
        <SliderCard>
          <CardImage>
            <img src="../../../public/DaykeeperDiscordWelcome.png"></img>
          </CardImage>
          <CardText>
            <TextContent>
              <h1>The Daykeeper Community</h1>
              <p>
                Welcome to the DayKeeper Community, a place where you can
                connect, share, and grow with others! Whether you’re here to
                socialize, seek help, or simply be part of something meaningful,
                this community is for you.
                <br />
                <br />
                If you’re a developer, a student, an artist, an athlete, or
                anything else, this is a place perfect for you! Here, you can
                join conversations, meet new people, and exchange ideas. If you
                ever need support, the community is always ready to help.
                <br /> <br />
                We host events, discussions, and activities that bring people
                together, along with useful tools like bots and dedicated spaces
                for studying, collaborating, and staying productive. More than
                just a community, this is a space where each day becomes a
                meaningful experience. So come in, say hello, and be part of
                something special!
              </p>
            </TextContent>
          </CardText>
        </SliderCard>
      </OtherContainer>
    </Container>
  )
}
