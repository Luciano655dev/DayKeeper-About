import {
  Container,
  OtherContainer,
  SliderCard,
  CardText,
  TextContent,
  CardImage,
} from "./SectionTwoCSS"

export default function SectionTwo() {
  return (
    <Container id="sectionTwo" data-aos="fade-in" data-aos-delay="200">
      <OtherContainer>
        <SliderCard>
          <CardText>
            <TextContent>
              <h1>Become a Developer</h1>
              <p>
                If you're a programmer, you can contribute to DayKeeper’s
                development! Our platform is fully open-source! <br />
                <label>How to help us:</label>
                <ul>
                  <li>
                    <strong>Explore the DayKeeper API</strong> which includes
                    complete documentation.
                  </li>
                  <li>
                    <strong>
                      Contribute to the DayKeeper website and mobile app
                    </strong>{" "}
                    by improving features or fixing bugs.
                  </li>
                  <li>
                    <strong>
                      Report issues, suggest new features, and help shape the
                      future of DayKeeper
                    </strong>
                    , every help is greatly apprediated!
                  </li>
                </ul>{" "}
                You cal also use <a href="/community">our Community</a> to get
                help and talk with others about the Daykeeper development!{" "}
                <br />
                Every contribution, big or small, brings us closer to making
                DayKeeper the best it can be. Join us and be part of something
                meaningful!
              </p>
            </TextContent>
          </CardText>

          <CardImage>
            <img src="../../../public/DaykeeperAPIGithubPage.png"></img>
          </CardImage>
        </SliderCard>
      </OtherContainer>
    </Container>
  )
}
