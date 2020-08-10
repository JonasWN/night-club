import React from "react"
import styled from "styled-components"

const Heading = ({ title, accent }) => {
  return (
    <h2>
      {title}
      <span>{accent}</span>
    </h2>
  )
}

const StyledH2 = styled.h2`
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
`
export default Heading
