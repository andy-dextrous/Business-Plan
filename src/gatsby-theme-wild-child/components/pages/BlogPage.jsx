import React from "react"
import PostGrid from "wildSections/Post_Grid"
import Layout from "wildComponents/Layout"

function BlogPage(props) {
  const { allWpPost } = props.data
  const categories = props.data.allWpCategory.edges

  return (
    <Layout>
      <PostGrid
        posts={allWpPost.nodes}
        ctx={props.pageContext}
        categories={categories}
        config={config}
      />
    </Layout>
  )
}

export default BlogPage

/**** Props for modules ****/

const config = {
  sectionStyles: {
    background: "#f5f5f5",
  },
}
