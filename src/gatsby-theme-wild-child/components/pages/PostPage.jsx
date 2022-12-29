import React from "react"
import PostContent2 from "wildSections/Post_Content2"
import Layout from "wildComponents/Layout"

function PostPage(props) {
  return (
    <Layout>
      <PostContent2 data={props.data.wpPost} ctx={props.pageContext} />
    </Layout>
  )
}

export default PostPage
