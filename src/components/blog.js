import React from "react"
import styled from "styled-components"
import Heading from "./heading"
import BlogPost from "./blogPost"

const Blog = ({ blog }) => {
  console.log(blog)
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
  }
`

export default Blog
