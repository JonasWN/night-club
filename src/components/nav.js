import React from "react"
import styled from "styled-components"
import { isMobile } from "react-device-detect"

const Nav = () => {
  if (!isMobile)
    return (
      <StyledNav>
        <img src="./assets/Logo.png" alt="Logo-Small" />
        <ul>
          <li>
            <a href="">link</a>
          </li>
          <li>
            <a href="">link</a>
          </li>
          <li>
            <a href="">link</a>
          </li>
          <li>
            <a href="">link</a>
          </li>
          <li>
            <a href="">link</a>
          </li>
          <li>
            <a href="">link</a>
          </li>
          <li>
            <a href="">link</a>
          </li>
        </ul>
      </StyledNav>
    )
  return (
    <StyledNav>
      <img src="./assets/Logo.png" alt="Logo-Small" />
      <ul className="burger"></ul>
    </StyledNav>
  )
}

const StyledNav = styled.nav`
  height: 100px;
  border-top: 1px solid ${props => props.theme.colors.accent};
  border-bottom: 1px solid ${props => props.theme.colors.accent};
  width: 100%;
  padding: 25px 5%;
  display: flex;
  justify-content: space-around;

  ul {
    display: flex;
    width: 50%;
    justify-content: space-around;
    align-items: center;

    li {
      color: ${props => props.theme.colors.white};
      text-transform: uppercase;
      font-size: 1.1rem;
    }
  }
`

export default Nav
