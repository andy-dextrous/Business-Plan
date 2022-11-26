import React from "react"
import PostGrid from "wildChildSections/Post_Grid"
import Main from "wildChildComponents/Main"

function BlogPage(props) {
  const { allWpPost } = props.data
  const categories = props.data.allWpCategory.edges

  return (
    <Main>
      <PostGrid
        posts={allWpPost.nodes}
        ctx={props.pageContext}
        categories={categories}
        config={config}
      />
    </Main>
  )
}

export default BlogPage

/**** Props for modules ****/

const config = {
  sectionStyles: {
    background: "#f5f5f5",
  },
}
