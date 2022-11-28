import React from "react"
import PostContent2 from "wildSections/Post_Content2"
import Main from "wildComponents/Main"

function PostPage(props) {
  return (
    <Main>
      <PostContent2 data={props.data.wpPost} ctx={props.pageContext} />
    </Main>
  )
}

export default PostPage
