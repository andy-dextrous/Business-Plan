import { variables as defaults } from "wildSrc/@chakra-ui/gatsby-plugin/foundations/variables.js"

export const variables = {
  ...defaults,

  // NAV
  navHeight: ["70px", "70px", "85px"],
  siteMarginTop: 0,
  sideMenuWidth: "80px",
  logoHeight: "100%",
  logoWidth: "170px",

  /*** SECTIONS ***/
  contentMaxWidth: "1260px",
  sectionPaddingY: [0],
  sectionPaddingX: [5, 5, 12, 20, 24, 40],
  containerPaddingY: [20, 20, 20],
  containerPaddingX: [0],
  componentSpacing: [4, 4, 4, 4, 4],
  rowSpacing: [8, 8, 12, 12, 16, 20, 20],
}
