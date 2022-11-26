import { graphql } from "gatsby"
import CustomPage from "../components/pages/CustomPage"

// Export a custom component for the template from components/pages
export default CustomPage

// For any custom page template, write a query that returns the data you need.
export const pageQuery = graphql`
  query ($id: String!) {
    wpPage(id: { eq: $id }) {
      title
      content
      featuredImage {
        node {
          altText
          localFile {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
    }
  }
`
