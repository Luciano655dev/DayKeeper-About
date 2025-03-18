import {
  Container,
  OtherContainer,
  SliderCard,
  UpperTitle,
  CardText,
} from "./SectionThreeCSS"

export default function SectionThree() {
  return (
    <Container id="sectionThree" data-aos="fade-in" data-aos-delay="200">
      <OtherContainer>
        <UpperTitle>Be a partner</UpperTitle>
        <SliderCard>
          <CardText>
            <h1>Partner your Company</h1>
            <p>
              If you own a business or lead a group, let's work together! A
              partnership with DayKeeper can help both of us grow by reaching
              new audiences and creating meaningful collaborations.
            </p>
          </CardText>
          <CardText>
            <h1>Be a creator</h1>
            <p>
              Love making content? You can contribute by creating videos and
              posts that advertise Daykeeper!
              <br />
              Every video and help will be greatly appreciated, you wll help the
              daykeeper project!
            </p>
          </CardText>
          <CardText>
            <h1>Moderate our Community</h1>
            <p>
              Help build a positive and welcoming space! As a community
              moderator, you can: Engage with members and answer questions Help
              enforce community guidelines Organize events and discussions Share
              new ideas to improve DayKeeper’s community
            </p>
          </CardText>
          <CardText>
            <h1>Other Ways to Partner</h1>
            <p>
              Have another way to collaborate? We’re open to new ideas! Reach
              out, and let’s discuss how we can work together.
            </p>
          </CardText>
        </SliderCard>
      </OtherContainer>
    </Container>
  )
}
