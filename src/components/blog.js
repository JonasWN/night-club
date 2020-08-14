import React from "react"
import styled from "styled-components"
import Heading from "./heading"
import BlogPost from "./blogPost"
import { device } from "../styles/layout"

const Blog = ({ blog }) => {
  return (
    <StyledBlog>
      <Heading title="Recent Blog" />
      <div>
        {blog.map(blogPost => (
          <BlogPost key={blogPost.asset} data={{ ...blogPost }} />
        ))}
      </div>
    </StyledBlog>
  )
}

const StyledBlog = styled.section`
  div {
    display: flex;
    justify-content: space-between;
    max-width: 1080px;
    margin: 0 auto;

    @media ${device.mobile} {
      flex-direction: column;
      text-align: center;
      align-items: center;
    }
  }
`

export default Blog
