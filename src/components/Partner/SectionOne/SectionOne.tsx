import {
  Container,
  OtherContainer,
  SliderCard,
  UpperTitle,
  CardText,
} from "./SectionOneCSS"

export default function SectionOne() {
  return (
    <Container id="sectionTwo" data-aos="fade-in" data-aos-delay="200">
      <OtherContainer>
        <UpperTitle>How can I Help?</UpperTitle>
        <SliderCard>
          <CardText>
            <h1>Become a Developer</h1>
            <p>
              DayKeeper is fully open-source, meaning anyone can access and
              improve the code. If you're a developer, you can help by fixing
              bugs, adding new features, or optimizing the platform. Every
              contribution makes a difference!
            </p>
          </CardText>
          <CardText>
            <h1>Become a Partner</h1>
            <p>
              If you're a small business, organization, or content creator,
              let's collaborate! A partnership with DayKeeper can help both of
              us grow. Reach out, and let’s explore how we can support each
              other.
            </p>
          </CardText>
          <CardText>
            <h1>Support as a Donor</h1>
            <p>
              Want to help in a different way? You can donate any amount to
              support DayKeeper’s development. All expenses will be transparent,
              and every contribution will go toward improving the platform’s
              quality and sustainability.
            </p>
          </CardText>
        </SliderCard>
      </OtherContainer>
    </Container>
  )
}
