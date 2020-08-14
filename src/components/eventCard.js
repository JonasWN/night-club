import React, { useState } from "react"
import styled from "styled-components"
import Polygon from "./polygon"
import useSWR from "swr"

const fetcher = (...args) => fetch(...args).then(res => res.json())

const EventCard = ({ asset, description, location, title }) => {
  const [active, setActive] = useState(false)
  const url = `http://localhost:4000/assets/${asset}`
  const { data: result, error } = useSWR(url, fetcher)

  return (
    <StyledEventCard>
      <figure
        onMouseEnter={() => setActive(true)}
        onMouseLeave={() => setActive(false)}
      >
        {result && <img src={result.url} alt="event-thumb" />}
        {active && (
          <>
            <figcaption>
              <button>Book Now</button>
              <article>
                <h3>{title}</h3>
                <p>{description}</p>
                <div className="event-card-art-background"></div>
              </article>
              <Polygon angle="left" />
              <Polygon angle="right" />
            </figcaption>
            <div className="event-card-background" />
          </>
        )}
      </figure>
      <footer>
        <ul>
          <li>08</li>
          <li>10:30 PM</li>
          <li>{location}</li>
        </ul>
      </footer>
    </StyledEventCard>
  )
}

const StyledEventCard = styled.div`
  :nth-child(1) {
    margin-right: 30px;
  }
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
      text-align: initial;

      button {
        background: ${props => props.theme.colors.accent};
        color: ${props => props.theme.colors.white};
        height: 50px;
        width: 120px;
        border: none;
        align-self: center;
        margin-top: 30%;
        font-weight: 300;

        &:hover {
          cursor: pointer;
        }
      }

      article {
        position: relative;
        padding: 15px 3rem;
        color: ${props => props.theme.colors.white};
        font-weight: 300;

        h3 {
          font-size: 1.6rem;
          position: relative;
          z-index: 10;
          font-weight: 300;
          margin-bottom: 10px;
        }

        p {
          position: relative;
          z-index: 10;
          -webkit-line-clamp: 2;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          overflow: hidden;
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
    padding: 0 2rem;

    li {
      color: ${props => props.theme.colors.white};
      font-size: 1.2rem;
      font-weight: 300;
      margin-right: 1.2rem;
    }
  }
`

export default EventCard
