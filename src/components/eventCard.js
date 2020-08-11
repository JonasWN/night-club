import React, { useState } from "react"
import styled from "styled-components"
import Polygon from "./polygon"

const EventCard = () => {
  const [active, setActive] = useState(false)

  return (
    <StyledEventCard>
      <figure
        onMouseEnter={() => setActive(true)}
        onMouseLeave={() => setActive(false)}
      >
        <img src="./assets/content-img/event-thumb1.jpg" alt="event-thumb" />
        {active && (
          <>
            <figcaption>
              <button>Book Now</button>
              <article>
                <h3>title</h3>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem,
                  praesentium. Lorem ipsum dolor sit, amet consectetur
                  adipisicing elit. Sapiente, voluptatem.
                </p>
                <div className="event-card-art-background"></div>
              </article>
              <Polygon angle="left" />
              <Polygon angle="right" />
            </figcaption>
            <div className="event-card-background"></div>
          </>
        )}
      </figure>
      <footer>
        <ul>
          <li>hey</li>
          <li>hey</li>
          <li>hey</li>
        </ul>
      </footer>
    </StyledEventCard>
  )
}

const StyledEventCard = styled.li`
  figure {
    position: relative;

    figcaption {
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      z-index: 10;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding-top: 90px;

      button {
        background: ${props => props.theme.colors.accent};
        color: ${props => props.theme.colors.white};
        height: 50px;
        width: 120px;
        border: none;
        align-self: center;
      }

      article {
        position: relative;
        padding: 15px;
        color: ${props => props.theme.colors.white};
        height: 60%;

        h3 {
          font-size: 1.6rem;
          position: relative;
          z-index: 10;
        }

        p {
          position: relative;
          z-index: 10;
        }

        .event-card-art-background {
          height: 100%;
          width: 100%;
          background: ${props => props.theme.colors.dark};
          opacity: 0.5;
          position: absolute;
          top: 0;
          left: 0;
        }
      }
    }

    .event-card-background {
      filter: brightness(0.5);
      background: ${props => props.theme.colors.dark};
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      opacity: 0.4;
    }
  }
  footer {
    background: ${props => props.theme.colors.accent};
    height: 40px;
    padding: 5px 20px;
  }
  ul {
    display: flex;
    width: 50%;
    justify-content: flex-start;

    li {
      color: ${props => props.theme.colors.white};
      font-size: 1.2rem;
      margin-right: 1.2rem;
    }
  }
`

export default EventCard
