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
          <CardText>
            <TextContent>
              <h1>Daykeeper, turn your days into memories</h1>
              <p>
                <strong>
                  What if your days weren’t just numbers on a calendar?
                </strong>
                <br /> Life isn’t just a series of dates - It’s made up of
                moments, emotions, and achievements.
                <br />
                <br />
                DayKeeper is here to help you capture everything, turning every
                day into a memory worth keeping. DayKeeper transforms the way
                you document and organize your life. Whether you’re sharing a
                meaningful moment or keeping track of important milestones,
                DayKeeper lets you preserve the essence of your day in a way
                that’s personal, meaningful, and easy to revisit.
                <br />
                <br />
                More than just a calendar, DayKeeper is your digital diary, your
                personal planner, and your memory keeper – all in one place.
              </p>
            </TextContent>
          </CardText>

          <CardImage>
            <img src="../../../public/DaykeeperLoginPage.png"></img>
          </CardImage>
        </SliderCard>
      </OtherContainer>
    </Container>
  )
}
