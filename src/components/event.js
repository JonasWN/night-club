import React from "react"
import Heading from "./heading"
import styled from "styled-components"
import EventCard from "./eventCard"
import { device } from "../styles/layout"

const Event = ({ events }) => {
  return (
    <StyledEvent>
      <Heading title="Events of the month" />
      <ul className="events-list">
        <EventCard />
        <EventCard />
      </ul>
    </StyledEvent>
  )
}

const StyledEvent = styled.section`
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
