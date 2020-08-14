import React from "react"
import Heading from "./heading"
import styled from "styled-components"
import EventCard from "./eventCard"
import { device } from "../styles/layout"
import { isMobile } from "react-device-detect"
import { Carousel } from "react-responsive-carousel"

const Event = ({ events }) => {
  if (isMobile)
    return (
      <StyledEvent>
        <Heading title="Events of the month" />
        <section>
          <Carousel showArrows={false} showStatus={false} showThumbs={false}>
            {events.map(e => (
              <div
                style={{ display: "flex", maxWidth: "1080px" }}
                key={e.asset}
              >
                <EventCard
                  asset={e.asset}
                  description={e.eventDescription}
                  location={e.location}
                  title={e.eventName}
                />
              </div>
            ))}
          </Carousel>
        </section>
      </StyledEvent>
    )
  return (
    <StyledEvent>
      <Heading title="Events of the month" />
      <section>
        <Carousel showArrows={false} showStatus={false} showThumbs={false}>
          <div style={{ display: "flex", maxWidth: "1080px" }}>
            <EventCard
              asset={events[0].asset}
              description={events[0].eventDescription}
              location={events[0].location}
              title={events[0].eventName}
            />
            <EventCard
              asset={events[1].asset}
              description={events[1].eventDescription}
              location={events[1].location}
              title={events[1].eventName}
            />
          </div>
          <div style={{ display: "flex", maxWidth: "1080px" }}>
            <EventCard
              asset={events[2].asset}
              description={events[2].eventDescription}
              location={events[2].location}
              title={events[2].eventName}
            />
            <EventCard
              asset={events[3].asset}
              description={events[3].eventDescription}
              location={events[3].location}
              title={events[3].eventName}
            />
          </div>
          <div style={{ display: "flex", maxWidth: "1080px" }}>
            <EventCard
              asset={events[4].asset}
              description={events[4].eventDescription}
              location={events[4].location}
              title={events[4].eventName}
            />
            <EventCard
              asset={events[5].asset}
              description={events[5].eventDescription}
              location={events[5].location}
              title={events[5].eventName}
            />
          </div>
        </Carousel>
      </section>
    </StyledEvent>
  )
}

const StyledEvent = styled.main`
  @media ${device.mobile} {
    .carousel-root {
      width: 90%;
      margin: 0 auto;
    }
  }
  .carousel-root {
    max-width: 1080px;
    margin: 0 auto;
  }
  section {
    max-width: 1080px;
    margin: 0 auto;

    .carousel .control-dots {
      position: inherit;
      margin-top: 40px;
    }
  }

  .events-list {
    display: flex;
    max-width: 1080px;
    margin: 0 auto;

    @media ${device.mobile} {
      flex-direction: column;
    }
  }
`

export default Event
