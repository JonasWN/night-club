import React, { useState } from "react"
import Caption from "./caption"
import Heading from "./heading"
import styled from "styled-components"
import { TiArrowShuffle } from "react-icons/ti"
import { MdVolumeUp, MdPlayCircleOutline } from "react-icons/md"
import { IoMdArrowDropright, IoMdArrowDropleft } from "react-icons/io"
import { BsSkipForwardFill, BsSkipBackwardFill } from "react-icons/bs"

const tracks = [
  {
    url: "./assets/content-img/track1.jpg",
    name: "track #1",
  },
  {
    url: "./assets/content-img/track2.jpg",
    name: "track #2",
  },
  {
    url: "./assets/content-img/track_thumb.jpg",
    name: "track #3",
  },
  {
    url: "./assets/content-img/track4.jpg",
    name: "track #4",
  },
  {
    url: "./assets/content-img/track5.jpg",
    name: "track #5",
  },
]

let slideIndex = 0

const Track = () => {
  const [current, setCurrent] = useState(tracks[slideIndex])

  const updateSlide = index => {
    if (index < 0) {
      slideIndex = tracks.length - 1
      setCurrent(tracks[slideIndex])
      console.log(slideIndex)
    } else if (index > tracks.length - 1) {
      slideIndex = 0
      setCurrent(tracks[slideIndex])
    } else {
      slideIndex = index
      setCurrent(tracks[slideIndex])
    }
  }

  return (
    <StyledTrack>
      <Heading title="Night Club Track" />
      <div className="track-header">
        <img src={current.url} alt="current-track-img" />
        <div className="player">
          <h3>{current.name}</h3>
          <input type="range" min="0" max="100" className="duration-input" />
          <div className="player-settings">
            <p>00:00 / 03:38</p>
            <ul className="player-icons">
              <li>
                <BsSkipBackwardFill />
              </li>
              <li>
                <MdPlayCircleOutline className="play-icon" />
              </li>
              <li>
                <BsSkipForwardFill />
              </li>
              <li>
                <TiArrowShuffle />
              </li>
            </ul>
            <div className="volume">
              <MdVolumeUp />
              <input type="range" min="0" max="100" />
            </div>
          </div>
        </div>
      </div>
      <ul className="track-list">
        <IoMdArrowDropleft onClick={() => updateSlide(slideIndex - 1)} />
        {tracks.map((track, index) => {
          return (
            <Caption
              image={track.url}
              icon="./assets/icon/Play_btn.svg"
              key={track.url}
              updateSlide={updateSlide}
              title={`track ${index + 1}`}
              index={index}
            />
          )
        })}
        <IoMdArrowDropright onClick={() => updateSlide(slideIndex + 1)} />
      </ul>
    </StyledTrack>
  )
}

const StyledTrack = styled.section`
  max-width: 900px;
  margin: 0 auto;
  color: ${props => props.theme.colors.white};

  h3 {
    text-transform: uppercase;
  }

  svg {
    font-size: 30px;
    color: ${props => props.theme.colors.white};
    fill: white;

    :hover {
      cursor: pointer;
    }
  }

  .volume {
    display: flex;
    align-items: center;

    svg {
      margin-right: 10px;
    }
  }

  .player-icons {
    display: flex;
    justify-content: space-between;
    width: 30%;
    align-items: center;

    li:nth-child(1) svg,
    li:nth-child(3) svg {
      fill: grey;

      &:hover {
        fill: white;
      }
    }

    .play-icon {
      font-size: 50px;
    }
  }

  input {
    background: ${props => props.theme.colors.accent};
    width: 100%;
    height: 4px;
    margin: 20px 0;
    position: relative;
    -webkit-appearance: none;
    border: 1px solid #000;

    &::-webkit-slider-thumb {
      -webkit-appearance: none;
      appearance: none;
      width: 23px;
      height: 24px;
      border: 0;
      background: url("./assets/icon/slider_icon.svg");
      cursor: pointer;
    }
    &::-moz-range-thumb {
      width: 23px;
      height: 25px;
      border: 0;
      background: url("/assets/images/slider_icon.svg");
      cursor: pointer;
    }

    &:focus {
      outline: none;
    }
  }

  .track-header {
    display: flex;
    margin: 0 auto;

    .player {
      width: 70%;
      padding: 25px;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;

      .duration-input {
        width: 100%;
      }
    }

    .player-settings {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }

  .track-list {
    display: flex;
    position: relative;

    svg {
      border: 3px solid #fff;
    }

    svg:nth-child(1) {
      position: absolute;
      left: -80px;
      top: 50%;
      transform: translate(-0%, -50%);
      font-size: 50px;
    }
    svg:last-child {
      position: absolute;
      right: -80px;
      top: 50%;
      transform: translate(-0%, -50%);
      font-size: 50px;
    }
  }
`
export default Track
