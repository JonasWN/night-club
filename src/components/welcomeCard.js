import React, { useState } from "react"
import styled from "styled-components"
import Polygon from "./polygon"

const WelcomeCard = ({ image, title }) => {
  const [active, setActive] = useState(false)

  return (
    <StyledWelcomeCard>
      <figure
        onMouseEnter={() => setActive(true)}
        onMouseLeave={() => setActive(false)}
      >
        <img src={image} alt="track-thumb" />
        {active && (
          <>
            <figcaption>
              <img src="./assets/icon/favicon.png" alt="center-icon" />

              <h3>{title}</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Tempora, numquam! Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Minima, fuga?
              </p>
              <div className="event-card-art-background"></div>

              <Polygon angle="left" />
              <Polygon angle="right" />
            </figcaption>
            <div className="event-card-background" />
          </>
        )}
      </figure>
    </StyledWelcomeCard>
  )
}

const StyledWelcomeCard = styled.li`
  &:hover {
    cursor: pointer;
  }
`

export default WelcomeCard
