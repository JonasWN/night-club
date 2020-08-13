import React from "react"
import styled from "styled-components"
import useSWR from "swr"
import { device } from "../styles/layout"

const fetcher = (...args) => fetch(...args).then(res => res.json())

const BlogPost = ({ data }) => {
  const url = `http://localhost:4000/assets/${data.asset}`
  const { data: result, error } = useSWR(url, fetcher)

  return (
    <StyledBlogPost>
      {result && (
        <>
          <img src={result.url} alt="blog-post-cover" />
          <h3>{data.title}</h3>
          <h4>
            BY: {data.author} / 3 Comments / {data.createdAt}
          </h4>
          <p>{data.content}</p>
        </>
      )}

      {error && <h2>There was an error with the data</h2>}
    </StyledBlogPost>
  )
}

const StyledBlogPost = styled.article`
  max-width: 300px;
  height: 310px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: ${props => props.theme.colors.white};
  font-weight: 300;

  @media ${device.mobile} {
    margin-bottom: 10vh;
  }

  img {
    filter: saturate(0.6);
  }

  &:hover {
    cursor: pointer;
    img {
      filter: saturate(1.3);
    }
  }

  h3 {
    text-transform: uppercase;
    font-weight: 400;
    margin-top: 10px;
  }

  h4 {
    color: ${props => props.theme.colors.accent};
    -webkit-line-clamp: 1;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
    font-size: 0.9rem;
  }

  p {
    -webkit-line-clamp: 3;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
`
export default BlogPost
