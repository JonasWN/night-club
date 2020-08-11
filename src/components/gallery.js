import React from "react"
import styled from "styled-components"
import Heading from "./heading"
import GalleryCard from "./GalleryCard"

const Gallery = ({ gallery }) => {
  return (
    <StyledGalery>
      <Heading title="Night Club Gallery" />
      <ul>
        {gallery.slice(0, 7).map(image => {
          return <GalleryCard key={image.id} asset={image.asset} />
        })}
      </ul>
    </StyledGalery>
  )
}

const StyledGalery = styled.section`
  ul {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-auto-flow: dense;
  }
`

export default Gallery
