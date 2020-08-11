import React from "react"
import styled from "styled-components"

const Heading = ({ title, accent }) => {
  return (
    <StyledH2>
      {title}
      <span>{accent}</span>
      <img src="./assets/bottom_line.png" alt="bottom-line-img" />
    </StyledH2>
  )
}

const StyledH2 = styled.h2`
  color: ${props => props.theme.colors.white};
  text-align: center;
  font-weight: 500;
  margin: 10vh 0;
  font-size: 2rem;
  text-transform: uppercase;

  span {
    color: ${props => props.theme.colors.accent};
  }
  img {
    height: 40px;
    margin: 0 auto;
  }
`
export default Heading
