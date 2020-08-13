import React, { useState } from "react"
import styled from "styled-components"
import Heading from "./heading"
import WelcomeCard from "./welcomeCard"

const images = [
  {
    image: "./assets/content-img/thumb1.jpg",
    title: "Night Club",
  },

  {
    image: "./assets/content-img/reastaurant_1.jpg",
    title: "Restaurant",
  },
  {
    image: "./assets/content-img/thumb2.jpg",
    title: "Bar",
  },
]

const Welcome = () => {
  return (
    <StyledWelcome>
      <Heading title="Welcome in night" accent="club" />
      <ul>
        {images.map(card => {
          return (
            <WelcomeCard
              image={card.image}
              key={card.image}
              title={card.title}
            />
          )
        })}
      </ul>
    </StyledWelcome>
  )
}

const StyledWelcome = styled.section`
  margin-bottom: 15vh;

  h2 {
    color: ${props => props.theme.colors.white};
    text-align: center;
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
    grid-template-columns: repeat(auto-fit, minmax(min(250px, 100%), 320px));

    li {
      position: relative;

      .event-card-background {
        filter: brightness(1);
        background: #1a1618;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
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
        padding: 20% 10%;
        text-align: center;
        justify-content: space-between;
        color: #fff;

        img {
          width: 40px;
          border: none;
          align-self: center;
          border: 3px solid ${props => props.theme.colors.accent};
          padding: 5px;
          width: 80px;
          object-fit: scale-down;
          border-radius: 10px;
        }

        h3 {
          position: relative;
          z-index: 10;
          font-size: 1.4rem;
          text-transform: uppercase;
          font-weight: 300;
        }
        p {
          font-weight: 300;
          font-size: 0.9rem;
        }
      }
    }
  }
`

export default Welcome
