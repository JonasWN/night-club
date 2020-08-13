import React from "react"
import styled from "styled-components"
import { device } from "../styles/layout"

const NewsLetter = () => {
  return (
    <StyledNewsLetter>
      <h2>Want the latest night club news</h2>
      <h3>
        subscribe to our newsletter and never miss a <span>Event</span>
      </h3>
      <form>
        <input type="text" placeholder="Enter Your Email" />
        <button type="submit" onClick={e => e.target.preventDefault()}>
          subscribe
        </button>
      </form>
    </StyledNewsLetter>
  )
}

const StyledNewsLetter = styled.section`
  max-width: 600px;
  margin: 20vh auto;
  color: ${props => props.theme.colors.white};
  text-align: center;

  h2 {
    text-transform: uppercase;
    font-weight: 400;
    font-size: 1.6rem;
  }

  h3 {
    font-weight: 400;
  }

  span {
    color: ${props => props.theme.colors.accent};
  }

  form {
    margin-top: 50px;
    width: 600px;
    display: flex;
    justify-content: space-between;

    @media ${device.mobile} {
      flex-direction: column;
      width: initial;
    }

    input {
      background: none;
      border: none;
      border-bottom: 2px solid #fff;
      color: ${props => props.theme.colors.white};
      padding: 15px;
      width: 70%;

      ::placeholder {
        color: #fff;
      }

      :focus {
        outline: none;
      }
    }
    button {
      color: ${props => props.theme.colors.white};
      width: 25%;
      padding: 15px;
      background: none;
      border: none;
      border-top: 2px solid #fff;
      border-bottom: 2px solid #fff;
      font-size: 1.2rem;
      text-transform: uppercase;

      &:hover {
        cursor: pointer;
      }
      &:focus {
        outline: none;
      }
    }
  }
`

export default NewsLetter
