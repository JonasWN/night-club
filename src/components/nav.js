import React from "react"
import Polygon from "./polygon"
import styled from "styled-components"
import { useRouter } from "next/router"
import { isMobile } from "react-device-detect"
import { GoThreeBars } from "react-icons/go"

const Nav = () => {
  if (!isMobile)
    return (
      <StyledNav>
        <img src="./assets/Logo.png" alt="Logo-Small" />
        <ul>
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">About us</a>
          </li>
          <li>
            <a href="">Blog</a>
          </li>
          <li>
            <a href="">Events</a>
          </li>
          <li>
            <a href="">Gallery</a>
          </li>
          <li>
            <a href="">Book Table</a>
          </li>
          <li>
            <a href="">Contact Us</a>
          </li>
        </ul>
        <Polygon angle="left" />
        <Polygon angle="right" />
      </StyledNav>
    )
  return (
    <StyledNav>
      <img src="./assets/Logo.png" alt="Logo-Small" />
      <ul className="burger"></ul>
      <GoThreeBars />
      <Polygon angle="left" />
      <Polygon angle="right" />
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
  position: relative;
  position: sticky;
  top: 0;
  left: 0;
  background: ${props => props.theme.colors.dark};
  z-index: 20;

  img {
    width: 150px;
    height: 50px;
  }

  ul {
    display: flex;
    width: 50%;
    justify-content: space-around;
    align-items: center;
    font-weight: 300;

    li {
      color: ${props => props.theme.colors.white};
      text-transform: uppercase;
      font-size: 1.1rem;

      &:hover {
        color: ${props => props.theme.colors.accent};
      }
    }
  }
`

export default Nav
