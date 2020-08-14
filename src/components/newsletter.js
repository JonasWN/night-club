import React, { useState } from "react"
import styled from "styled-components"
import { device } from "../styles/layout"
import { useForm } from "react-hook-form"

const NewsLetter = () => {
  const { handleSubmit, register, errors } = useForm()
  const [submitted, setSubmitted] = useState(false)

  const onSubmit = (data, e) => {
    fetch("http://localhost:4000/newsletters", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        email: `${data.email}`,
      }),
    })
      .then(function (response) {})
      .catch(function (error) {
        console.error(error)
      })

    setSubmitted(true)
    e.target.reset()
  }

  return (
    <StyledNewsLetter>
      <h2>Want the latest night club news</h2>
      <h3>
        subscribe to our newsletter and never miss a <span>Event</span>
      </h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          placeholder="Enter Your Email"
          name="email"
          maxLength={32}
          ref={register({
            required: " ",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "E-Mail doesn't seem valid",
            },
          })}
        />
        {errors.email && errors.email.message}
        {!submitted ? (
          <button type="submit">subscribe</button>
        ) : (
          <h3>Thank you for subscribing to our newsletter!</h3>
        )}
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
