import React from "react"
import styled from "styled-components"
import Heading from "./heading"

const images = [
  "./assets/content-img/thumb1.jpg",
  "./assets/content-img/reastaurant_1.jpg",
  "./assets/content-img/thumb2.jpg",
]

const Welcome = () => {
  return (
    <StyledWelcome>
      <Heading title="Welcome in night" accent="club" />
      <ul>
        {images.map(image => {
          return (
            <li key={image}>
              <img src={image} alt="main-events-images" />
            </li>
          )
        })}
      </ul>
    </StyledWelcome>
  )
}

const StyledWelcome = styled.section`
  h2 {
    color: ${props => props.theme.colors.white};
    text-align: center;
    margin: 50px 0;
    font-size: 2rem;
    text-transform: uppercase;

    span {
      color: ${props => props.theme.colors.accent};
    }
  }

  ul {
    display: grid;
    grid-gap: 20px 30px;
    place-content: center;
    grid-template-columns: repeat(auto-fit, minmax(min(250px, 100%), 280px));
  }
`

export default Welcome
