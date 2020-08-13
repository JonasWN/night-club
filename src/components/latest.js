import React, { useState } from "react"
import Heading from "./heading"
import styled from "styled-components"
import Polygon from "./polygon"
import { IoMdArrowDropright, IoMdArrowDropleft } from "react-icons/io"

const Latest = () => {
  const [active, setActive] = useState(false)

  return (
    <StyledLatest>
      <Heading title="latest Video" />
      <figure
        onMouseEnter={() => setActive(true)}
        onMouseLeave={() => setActive(false)}
      >
        <img src="./assets/content-img/video_poster.jpg" alt="video-thumb" />
        {active && (
          <>
            <figcaption>
              <img src="./assets/icon/Play_btn.svg" alt="play-icon" />
              <Polygon angle="left" />
              <Polygon angle="right" />
            </figcaption>
            <div className="event-card-background" />
          </>
        )}
      </figure>
      <div className="slide-arrows">
        <IoMdArrowDropleft />
        <IoMdArrowDropright />
      </div>
    </StyledLatest>
  )
}

const StyledLatest = styled.section`
  max-width: 1080px;
  margin: 0 auto;

  figure {
    position: relative;
  }
  svg {
    border: 3px solid #fff;
    font-size: 50px;
    fill: white;

    &:hover {
      cursor: pointer;
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

  figcaption {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    z-index: 10;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    img {
      height: 80px;
      width: 180px;
      border: none;
      align-self: center;

      &:hover {
        cursor: pointer;
      }
    }

    h3 {
      position: relative;
      z-index: 10;
    }
  }
  .slide-arrows {
    display: flex;
    width: 20%;
    justify-content: space-around;
    margin: 0 auto;
    margin-top: 40px;
  }
`

export default Latest
