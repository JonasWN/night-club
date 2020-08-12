import React, { useState } from "react"
import styled from "styled-components"
import Polygon from "./polygon"

const Caption = ({ image, icon, updateSlide, title, index }) => {
  const [active, setActive] = useState(false)

  return (
    <StyledCaption>
      <figure
        onMouseEnter={() => setActive(true)}
        onMouseLeave={() => setActive(false)}
      >
        <img src={image} alt="track-thumb" />
        {active && (
          <>
            <figcaption>
              <img
                src={icon}
                alt="center-icon"
                onClick={() => updateSlide(index)}
              />
              <article>
                <h3>{title}</h3>
                <div className="event-card-art-background"></div>
              </article>
              <Polygon angle="left" />
              <Polygon angle="right" />
            </figcaption>
            <div className="event-card-background" />
          </>
        )}
      </figure>
    </StyledCaption>
  )
}

const StyledCaption = styled.li`
  figure {
    position: relative;

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

    figcaption {
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      z-index: 10;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      padding-top: 90px;

      img {
        height: 50px;
        width: 120px;
        border: none;
        align-self: center;
      }

      h3 {
        position: relative;
        z-index: 10;
      }

      article {
        position: relative;
        padding: 15px;
        color: ${props => props.theme.colors.white};
        height: 60%;

        .event-card-art-background {
          height: 100%;
          width: 100%;
          background: ${props => props.theme.colors.dark};
          opacity: 0.7;
          position: absolute;
          top: 0;
          left: 0;
        }
      }
    }
  }
`

export default Caption
