import {
  Container,
  OtherContainer,
  SliderCard,
  UpperTitle,
  CardText,
} from "./SectionFiveCSS"

export default function SectionFive() {
  return (
    <Container id="#sectionFive" data-aos="fade-in" data-aos-delay="200">
      <OtherContainer>
        <UpperTitle>FAQ</UpperTitle>
        <SliderCard>
          <CardText>
            <h1>What if I miss a day?</h1>
            <p>
              That’s okay! Life gets busy. You can always come back and create a
              Day later to fill the gap.
            </p>
          </CardText>
          <CardText>
            <h1>Is DayKeeper free?</h1>
            <p>
              Yes! There are no paid features — everything is available to
              everyone.
            </p>
          </CardText>
          <CardText>
            <h1>Who can see my Days?</h1>
            <p>
              You control the privacy. Share your Days publicly, with friends
              only, or keep them private.
            </p>
          </CardText>
          <CardText>
            <h1>What makes DayKeeper different from other apps?</h1>
            <p>
              DayKeeper blends journaling, social media, and calendars into one
              unique experience, making it unlike anything else.
            </p>
          </CardText>
        </SliderCard>
      </OtherContainer>
    </Container>
  )
}
