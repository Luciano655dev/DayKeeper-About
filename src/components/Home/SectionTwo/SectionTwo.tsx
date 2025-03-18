import {
  Container,
  OtherContainer,
  SliderCard,
  UpperTitle,
  CardText,
} from "./SectionTwoCSS"

export default function SectionTwo() {
  return (
    <Container id="sectionTwo" data-aos="fade-in" data-aos-delay="200">
      <OtherContainer>
        <UpperTitle>Why Daykeeper?</UpperTitle>
        <SliderCard>
          <CardText>
            <h1>More than a Social Media</h1>
            <p>
              Unlike traditional social media apps, DayKeeper isn’t about
              endless scrolling or trying to get as many likes as possible. It’s
              about celebrating your life. Post meaningful updates with photos,
              videos, locations, and highlights of your day. Every interaction
              becomes part of your personal timeline.
            </p>
          </CardText>
          <CardText>
            <h1>A Diary with a Social touch</h1>
            <p>
              Capture your thoughts, track your emotions, and log the highlights
              of your day while staying connected with friends. Comment, like,
              and engage with their daily updates. Here, every moment is
              meaningful. DayKeeper is where journaling meets genuine
              connection.
            </p>
          </CardText>
          <CardText>
            <h1>A Calendar that Tells Your Story</h1>
            <p>
              Plan events, jot down tasks, and take notes — all while building a
              personal calendar filled with your memories. Each day becomes a
              treasure you can revisit, relive, and share.
            </p>
          </CardText>
        </SliderCard>
      </OtherContainer>
    </Container>
  )
}
