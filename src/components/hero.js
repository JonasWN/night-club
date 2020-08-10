import React, { useState, useEffect } from "react"
import styled from "styled-components"

const Hero = () => {
  const [hero, setHero] = useState("")
  const heroes = ["./assets/bg/header_bg_1.jpg", "./assets/bg/header_bg_2.jpg"]
  const random = Math.floor(Math.random() * Math.floor(heroes.length))

  useEffect(() => {
    setHero(heroes[random])
  }, [])

  return (
    <StyledHero hero={hero}>
      <div className="background"></div>
      <div className="foreground">
        <img src="./assets/icon/Logo.svg" alt="logo" />
        <h1>Have a Good Time</h1>
        <img src="./assets/bottom_line.png" alt="bottom-line" />
      </div>
    </StyledHero>
  )
}

const StyledHero = styled.header`
  position: relative;

  .background {
    height: 100vh;
    width: 100vw;
    max-width: 100%;
    background: url("${props => props.hero}");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    filter: brightness(0.7) saturate(1.2);
  }

  .foreground {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 60vw;
    min-width: 160px;
  }

  h1 {
    color: ${props => props.theme.heading.color.white};
    font-size: 1.2rem;
    text-align: center;
    margin: 15px 0;
    letter-spacing: 1rem;
  }
`

export default Hero
