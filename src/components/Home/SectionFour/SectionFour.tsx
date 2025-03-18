import {
  Container,
  OtherContainer,
  SliderCard,
  UpperTitle,
  CardText,
} from "./SectionFourCSS"

export default function SectionFour() {
  return (
    <Container id="sectionFour" data-aos="fade-in" data-aos-delay="200">
      <OtherContainer>
        <UpperTitle>Our Key Features</UpperTitle>
        <SliderCard>
          <CardText>
            <h1>1. The Daily Post</h1>
            <p>
              Every day, create a unique “Day” post, a snapshot of your life.
              <br />
              <ul>
                <li>
                  Write about your day, share photos, videos, everything you
                  want
                </li>
                <li>Add photos or videos to bring your story to life</li>
                <li>
                  Highlight what you’ve accomplished: tasks, activities, or even
                  a to-do list
                </li>
                <li>
                  Tag locations or people to remember the who and where of your
                  moments
                </li>
              </ul>
            </p>
          </CardText>
          <CardText>
            <h1>2. Your Personal Calendar</h1>
            <p>
              See your life at a glance with your personalized calendar.
              <ul>
                <li>
                  Browse a timeline of all your days, from everyday moments to
                  milestones
                </li>
                <li>
                  Add future events, notes, and tasks to keep life organized
                </li>
                <li>
                  See what you can improve, how your days have been, and live
                  the best life you can
                </li>
              </ul>
            </p>
          </CardText>
          <CardText>
            <h1>3. Interact and Engage</h1>
            <p>
              DayKeeper is a social experience at heart.
              <ul>
                <li>
                  Like and Comment others’ posts, building a sense of community
                </li>
                <li>Post stories that disappear, just like Instagram</li>
                <li>
                  Celebrate the memories of others while creating your own.
                </li>
              </ul>
            </p>
          </CardText>
          <CardText>
            <h1>4. Build your profile</h1>
            <p>
              Feel free to build your profile at the way you like It. Every day
              that you live, every memory, every comment and interaction will be
              kept there, creating a unique place for you.
            </p>
          </CardText>
        </SliderCard>
      </OtherContainer>
    </Container>
  )
}
