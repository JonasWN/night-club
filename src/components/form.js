import React, { useState } from "react"
import styled from "styled-components"
import { useForm } from "react-hook-form"
import { device } from "../styles/layout"

const Form = () => {
  const { handleSubmit, register, errors } = useForm()
  const [submitted, setSubmitted] = useState(false)

  const onSubmit = (data, e) => {
    fetch("http://localhost:4000/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name: `${data.name}`,
        email: `${data.email}`,
        website: `${data.website}`,
        message: `${data.message}`,
      }),
    })
      .then(function (response) {})
      .catch(function (error) {
        console.error(error)
      })
    setSubmitted(true)
    e.target.reset()
    console.log(submitted)
  }

  return (
    <StyledForm>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          maxLength={32}
          name="name"
          placeholder="Your Name"
          ref={register({
            validate: value => value !== "admin" || "Nice try!",
            required: " ",
          })}
        />
        {errors.username && errors.username.message}
        <input
          name="email"
          maxLength={32}
          placeholder="Your Email"
          ref={register({
            required: " ",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "E-Mail doesn't seem valid",
            },
          })}
        />
        {errors.email && errors.email.message}
        <input
          maxLength={32}
          name="website"
          placeholder="your Website"
          ref={register({
            pattern: {
              value: /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/i,
              message: "Website doesn't seem valid - remember to use https:// ",
            },
            required: " ",
          })}
        />
        <textarea
          name="message"
          placeholder="Your Comment"
          ref={register({
            required: " ",
          })}
          maxLength={255}
        ></textarea>
        {!submitted ? (
          <button type="submit">Submit</button>
        ) : (
          <h3>We Will Get Back To You As Fast As Posible!</h3>
        )}
      </form>
      <article>
        <ul>
          {/* <li>
            <img src="./assets/icon/Map.svg" alt="contact-icons" />
          </li>
          <li>
            <img src="./assets/icon/Mail.svg" alt="contact-icons" />
          </li>
          <li>
            <img src="./assets/icon/Favicon.svg" alt="contact-icons" />
          </li>
          <li>
            <img src="./assets/icon/.com.svg" alt="contact-icons" />
          </li> */}
        </ul>
      </article>
    </StyledForm>
  )
}

const StyledForm = styled.main`
  max-width: 1080px;
  margin: 0 auto;
  margin-bottom: 10vh;
  color: ${props => props.theme.colors.white};
  display: flex;
  color: white;

  @media ${device.mobile} {
    flex-direction: column;
  }

  form {
    display: flex;
    flex-direction: column;
    height: 60vh;
    justify-content: space-between;
    width: 40vw;

    @media ${device.mobile} {
      width: 90vw;
    }

    & input {
      background: none;
      height: 50px;
      padding: 15px;
      border: none;
      font-weight: 300;
      color: #eee;
      border: 1px solid grey;

      &:focus {
        outline: none;
      }
      ::placeholder {
        color: lightgray;
      }
    }

    textArea {
      background: none;
      height: 150px;
      padding: 15px;
      border: none;
      font-weight: 300;
      color: #eee;
      border: 1px solid grey;

      &:focus {
        outline: none;
      }
      ::placeholder {
        color: lightgray;
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
      font-size: 1rem;
      text-transform: uppercase;
      margin-left: auto;

      &:hover {
        cursor: pointer;
      }
      &:focus {
        outline: none;
      }
    }
  }

  article {
    -webkit-clip-path: polygon(
      0% 0%,
      100% 0%,
      100% 75%,
      60% 75%,
      52% 83%,
      45% 75%,
      0% 75%
    );
    clip-path: polygon(
      0% 0%,
      100% 0%,
      100% 75%,
      60% 75%,
      52% 83%,
      45% 75%,
      0% 75%
    );

    background: ${props => props.theme.colors.accent};
    width: 40vw;
    margin-left: 50px;
    height: 250px;
    padding: 5%;

    @media ${device.mobile} {
      width: 90vw;
    }

    ul {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 80% 80%;
      place-content: stretch;
    }
  }
`
export default Form
