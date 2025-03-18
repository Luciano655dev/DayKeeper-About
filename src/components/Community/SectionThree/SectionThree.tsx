import {
  Container,
  OtherContainer,
  SliderCard,
  CardText,
  TextContent,
  CardImage,
} from "./SectionThreeCSS"

export default function SectionThree() {
  return (
    <Container id="sectionThree" data-aos="fade-in" data-aos-delay="200">
      <OtherContainer>
        <SliderCard>
          <CardText>
            <TextContent>
              <h1>Contribute with us</h1>
              <p>
                The DayKeeper Community thrives because of its members, and
                there are many ways you can contribute to making it even better!
                <br />
                <br />
                Engaging with the community by sharing your thoughts,
                participating in discussions, and supporting others helps create
                a welcoming space for everyone. Staying active, whether by
                joining events, providing feedback, or simply interacting with
                posts, keeps the community vibrant and growing.
                <br />
                <br />
                Those who show dedication and positive leadership may also have
                the opportunity to become moderators, helping to maintain a
                supportive and organized environment. No matter how you choose
                to contribute, your involvement makes a difference in shaping
                DayKeeper into something truly special.
              </p>
            </TextContent>
          </CardText>
          <CardImage>
            <img src="../../../public/DaykeeperDiscordPage.png"></img>
          </CardImage>
        </SliderCard>
      </OtherContainer>
    </Container>
  )
}
