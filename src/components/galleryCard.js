import React from "react"
import styled from "styled-components"
import useSWR from "swr"

const fetcher = (...args) => fetch(...args).then(res => res.json())

const GalleryCard = ({ asset }) => {
  const url = `http://localhost:4000/assets/${asset}`
  const { data: result, error } = useSWR(url, fetcher)

  return (
    <StyleGalleryCard>
      {result && <img src={result.url} alt="gallery-image" />}
    </StyleGalleryCard>
  )
}

const StyleGalleryCard = styled.li`
  img {
    filter: saturate(1.1) contrast(1.3);
  }
`

export default GalleryCard
