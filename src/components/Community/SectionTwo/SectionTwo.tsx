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
        <UpperTitle>How It Work?</UpperTitle>
        <SliderCard>
          <CardText>
            <h1>1. Join the Community</h1>
            <p>
              Your first step is to <a href="">Join the Community!</a> Here you
              will start your journey with the Daykeeper Community, leading you
              to many different ways to help and engaje with many other people!
            </p>
          </CardText>
          <CardText>
            <h1>2. Fill your Profile</h1>
            <p>
              If It's your first time on Discord, fill out your Profile! Put a
              good username, a nice bio, and tell us who you are! You can also
              use the bots that we have to level up, get coins, pucharse new
              stuff and more!
            </p>
          </CardText>
          <CardText>
            <h1>3. Interact!</h1>
            <p>
              Go to the chat and send your first message to the Community!
              Engaje with the events, get levels from the bots and help the
              community grow!
            </p>
          </CardText>
        </SliderCard>
      </OtherContainer>
    </Container>
  )
}
