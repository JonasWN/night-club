import React, { useState, useEffect } from "react"
import styled from "styled-components"
import TestemonialCard from "./testemonialCard"

let slideIndex = 0

const Testemonials = ({ testemonials }) => {
  const [urlList, setUrlList] = useState([])
  const [current, setCurrent] = useState()

  const updateList = list => {
    setUrlList(urlList, urlList.push(list))
    setCurrent(urlList[slideIndex])
  }

  return (
    <StyledTestemonials>
      <article>
        <img src={current} alt="portrait" />
        {/* {testemonials.map(person => {
          return (
            <TestemonialCard
              key={person.name}
              person={person}
              updateList={updateList}
            />
          )
        })} */}
      </article>
      <ul>
        {testemonials.map(person => (
          <li key={person.name}></li>
        ))}
      </ul>
    </StyledTestemonials>
  )
}

const StyledTestemonials = styled.section``

export default Testemonials
