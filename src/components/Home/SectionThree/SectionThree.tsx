import { useState, useEffect } from "react"
import { Navigation, Pagination, A11y } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "./SwiperStyle.css"

import axios from "axios"

import {
  Container,
  OtherContainer,
  SliderCard,
  CardText,
  TextContent,
} from "./SectionThreeCSS"

export default function SectionThree() {
  const [data, setData]: any = useState({})

  useEffect(() => {
    async function getData() {
      try {
        const githubResponse = await axios.get(
          "https://api.github.com/repos/Luciano655dev/DayKeeper-API"
        )
        const githubModificationsResponse = await axios.get(
          "https://api.github.com/repos/Luciano655dev/DayKeeper-API/commits/main"
        )
        const discordResponse = await axios.get(
          "https://discord.com/api/guilds/1327813092150874144/widget.json"
        )

        setData({
          ...data,
          discord: {
            name: discordResponse.data.name,
            membersCount: discordResponse.data.presence_count,
          },
          github: {
            name: githubResponse.data.name,
            description: githubResponse.data.description,
            starsCount: githubResponse.data.stargazers_count,
            linesAdded: githubModificationsResponse.data.stats.additions,
            linesRemoved: githubModificationsResponse.data.stats.deletions,
          },
        })
      } catch {
        console.log("erro :(")
      }
    }

    getData()
  }, [])
  return (
    <Container id="sectionThree" data-aos="fade-in" data-aos-delay="200">
      <OtherContainer>
        <SliderCard>
          <CardText>
            <TextContent>
              <h1>Built for You, By One of You</h1>
              <p>
                DayKeeper is still a work in progress, crafted with care and
                dedication by a single developer who believes in creating a
                meaningful way to document life. It’s more than just an app—it’s
                an open-source project, and you’re invited to be a part of its
                journey.
                <br />
                <h3>How to contribute:</h3>
                <ul>
                  <li>
                    <label>Join the Community: </label> If you're a student,
                    developer, or just looking for someone to play or talk,{" "}
                    <a href="https://discord.gg/G7HRsKw5s9">
                      our community will be the best for you!
                    </a>
                  </li>
                  <li>
                    <label>Be a Developer: </label> You can{" "}
                    <a href="https://github.com/luciano655dev/DayKeeper-API">
                      check out the project on GitHub
                    </a>{" "}
                    and see how DayKeeper is being built from the ground up.
                  </li>
                  <li>
                    <label>Be a partner: </label> Contact us{" "}
                    <a href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCKHQdLbQTbBBZPXzdKxNdtqnKSXPMGvNLtgzrkBptzDtrFjcbwlGWzlqdpfQkCpKSbJpbCg">
                      through e-mail
                    </a>{" "}
                    to talk about partnerships, we can help each other!
                  </li>
                </ul>
              </p>
            </TextContent>
          </CardText>

          <Swiper
            modules={[Navigation, Pagination, A11y]}
            slidesPerView={1}
            navigation={true}
            pagination={{ clickable: true }}
          >
            <SwiperSlide className="community-slide">
              <div style={{ marginBottom: "1em" }}>
                <img src="/Logo/JPG/Daykeeper-Icon-Blue@2x-100.jpg" />
                <h1>{data?.discord?.name || "Daykeeper"}</h1>
                <p>
                  The best community for developers, students and Daykeeper
                  users
                </p>
                <button
                  onClick={() => window.open("https://discord.gg/G7HRsKw5s9")}
                >
                  Join the Community
                </button>
              </div>
            </SwiperSlide>
            <SwiperSlide className="developer-slide">
              <img src="/Logo/JPG/Daykeeper-Icon-Blue@2x-100.jpg" />
              <h1>Daykeeper</h1>
              <h3>
                <strong>+{data?.github?.linesAdded || 1}</strong> -
                {data?.github?.linesRemoved || 1}
              </h3>
              <p>{data?.github?.description}</p>
              <button
                onClick={() =>
                  window.open("https://github.com/luciano655dev/DayKeeper-API")
                }
              >
                See the Code
              </button>
            </SwiperSlide>
          </Swiper>
        </SliderCard>
      </OtherContainer>
    </Container>
  )
}
