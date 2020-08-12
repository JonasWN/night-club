import React from "react"
import styled from "styled-components"

const Polygon = ({ angle }) => {
  if (angle === "left") return <StyledPolygonLeft />

  return <StyledPolygonRight />
}

const StyledPolygonLeft = styled.div`
  clip-path: polygon(25% 0, 0 0, 0 25%);
  background: ${props => props.theme.colors.accent};
  height: 15em;
  width: 15em;
  position: absolute;
  top: 0;
  left: 0;
`

const StyledPolygonRight = styled.div`
  clip-path: polygon(100% 75%, 75% 100%, 100% 100%);
  background: ${props => props.theme.colors.accent};
  height: 15em;
  width: 15em;
  position: absolute;
  bottom: 0;
  right: 0;
`

export default Polygon
