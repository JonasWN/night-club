import React, { useState, useEffect } from "react"
import styled from "styled-components"
import TestemonialCard from "./testemonialCard"
import { FaFacebookF, FaTwitter, FaGoogle } from "react-icons/fa"

const resetTimer = 0
let slideIndex = 0

const Testemonials = ({ testemonials }) => {
  const [urlList, setUrlList] = useState([])
  const [current, setCurrent] = useState()

  const updateList = list => {
    setUrlList(urlList, urlList.push(list))
    setCurrent(urlList[slideIndex])
  }

  const updateSlide = index => {
    current.name !== urlList[urlList.length - 1]
      ? slideIndex++
      : (slideIndex = resetTimer)
    setCurrent(urlList[slideIndex])

    if (index || index === resetTimer) {
      slideIndex = index
      setCurrent(urlList[slideIndex])
    }
  }

  return (
    <StyledTestemonials>
      <article>
        <img src={current} alt="portrait" />
        <h3>{testemonials[slideIndex].name}</h3>
        <p>{testemonials[slideIndex].content}</p>
        <ul className="testemonials-socials">
          <li>
            <a href="https://facebook.com">
              <FaFacebookF />
            </a>
          </li>
          <li>
            <a href="https://twitter.com">
              <FaTwitter />
            </a>
          </li>
          <li>
            <a href="https://google.com/">
              <FaGoogle />
            </a>
          </li>
        </ul>
        <ul className="testemonials-navigation">
          {testemonials.map((person, index) => (
            <StyledLi
              key={person.name}
              onClick={() => updateSlide(index)}
              primary={slideIndex === index ? true : false}
            ></StyledLi>
          ))}
        </ul>
      </article>
      {testemonials.map(person => {
        return (
          <TestemonialCard
            key={person.name}
            person={person}
            updateList={updateList}
          />
        )
      })}
    </StyledTestemonials>
  )
}

const StyledTestemonials = styled.section`
  max-width: 1080px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
  height: 100vh;
  font-weight: 300;

  article {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    height: 70%;
    width: 90%;

    img {
      width: 180px;
    }

    p,
    h3 {
      text-align: center;
    }
  }
  .testemonials-socials {
    display: flex;
    width: 200px;
    justify-content: space-between;

    li a {
      border: 3px solid #fff;
      font-size: 20px;
      padding: 10px;
      display: flex;
      align-items: center;

      &:hover {
        border: 3px solid ${props => props.theme.colors.accent};
      }
    }
  }

  .testemonials-navigation {
    display: flex;
    width: 100px;
    justify-content: space-between;
    margin-top: 30px;

    li {
    }
  }
`

const StyledLi = styled.li`
  width: 20px;
  height: 20px;
  background: ${props =>
    props.primary ? props => props.theme.colors.accent : "white"};

  &:hover {
    cursor: pointer;
  }
`

export default Testemonials
