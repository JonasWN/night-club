import React from "react"
import Heading from "./heading"
import styled from "styled-components"

const Track = () => {
  return (
    <StyledTrack>
      <Heading title="Night Club Track" />
      <div className="track-header">
        <img
          src="./assets/content-img/track_thumb.jpg"
          alt="current-track-img"
        />
        <div className="player">
          <h3>title</h3>
          <input type="range" min="0" max="100" className="duration-input" />
          <div className="player-settings">
            <p>time</p>
            <ul>
              <li>
                <img src="" alt="player-icons" />
              </li>
              <li>
                <img src="" alt="player-icons" />
              </li>
              <li>
                <img src="" alt="player-icons" />
              </li>
              <li>
                <img src="" alt="player-icons" />
              </li>
            </ul>
            <div>
              <img src="" alt="" />
              <input type="range" min="0" max="100" />
            </div>
          </div>
        </div>
      </div>
      <ul>
        <li>
          <figure>
            <img src="./assets/content-img/track1.jpg" alt="track-thumb" />
          </figure>
        </li>
        <li>
          <figure>
            <img src="./assets/content-img/track2.jpg" alt="track-thumb" />
          </figure>
        </li>
        <li>
          <figure>
            <img src="./assets/content-img/track_thumb.jpg" alt="track-thumb" />
          </figure>
        </li>
        <li>
          <figure>
            <img src="./assets/content-img/track4.jpg" alt="track-thumb" />
          </figure>
        </li>
        <li>
          <figure>
            <img src="./assets/content-img/track5.jpg" alt="track-thumb" />
          </figure>
        </li>
      </ul>
    </StyledTrack>
  )
}

const StyledTrack = styled.section`
  max-width: 900px;
  margin: 0 auto;
  color: ${props => props.theme.colors.white};

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
      padding: 20px;
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
    }
  }

  ul {
    display: flex;
  }
`
export default Track
