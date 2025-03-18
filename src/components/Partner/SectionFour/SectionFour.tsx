import {
  Container,
  OtherContainer,
  SliderCard,
  CardText,
  TextContent,
  CardImage,
} from "./SectionFourCSS"

export default function SectionFour() {
  return (
    <Container id="sectionFour" data-aos="fade-in" data-aos-delay="200">
      <OtherContainer>
        <SliderCard>
          <CardImage>
            <img src="../../../public/DaykeeperDiscordBoost.png"></img>
          </CardImage>
          <CardText>
            <TextContent>
              <h1>Be a Donor</h1>
              <p>
                DayKeeper is a passion-driven project, and every contribution
                goes directly into making it better. Whether it’s upgrading our
                servers, improving security, or expanding features, your support
                allows us to keep growing. <br />
                <div>
                  <label> How You Can Contribute</label>
                  <ul>
                    <li>
                      <strong>Discord Boost</strong> – Boos our discord server
                      tyo help the community!
                    </li>
                    <li>
                      <strong>One-Time Donations (coming soon)</strong> –
                      Support DayKeeper in any amount that fits your budget.
                      Every bit counts!
                    </li>
                  </ul>
                </div>
                We believe in honesty and accountability. Every donation will be
                publicly documented, so you’ll always know how your support is
                making an impact. By donating, you’re helping turn DayKeeper
                into something even greater. Thank you for being part of this
                journey!
              </p>
            </TextContent>
          </CardText>
        </SliderCard>
      </OtherContainer>
    </Container>
  )
}
