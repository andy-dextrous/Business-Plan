import { base } from "./foundations/typography"
import { styles as defaultsGlobalCSS } from "wildSrc/@chakra-ui/gatsby-plugin/globalStyle"

const globalCSS = {
  ...defaultsGlobalCSS.global,
  ...base,

  // Place all global CSS here //

  "::selection": {
    backgroundColor: "primary.default",
    color: "white",
  },

  main: {
    h: "100vh",
    w: "100vw",
    overflow: "hidden",
  },

  ".react-tel-input": {
    height: 12,
    gridColumnStart: ["1", "1", "2"],
    gridColumnEnd: "3",
  },

  ".bg-image.gatsby-image-wrapper": {
    w: "100%",
    h: "100%",
    position: "absolute",
    zIndex: "-2",
    left: "0",
    top: "0",
    objectFit: "cover",
  },

  ".react-tel-input": {
    height: 12,
    gridColumnStart: ["1", "1", "2"],
    gridColumnEnd: "3",
  },

  "#gatsby-focus-wrapper .react-tel-input .form-control": {
    width: "100%",
    height: "100%",
    background: "var(--duqe-colors-dark-50)",
    borderColor: "var(--duqe-colors-gray-200)",
    fontSize: "var(--duqe-fontSizes-md)",
    fontFamily: "HelveticaNowText-Regular",
  },

  "#gatsby-focus-wrapper .react-tel-input .search .search-box": {
    width: "100%",
    margin: "unset",
  },

  "#gatsby-focus-wrapper .react-tel-input .search": {
    padding: "10px",
    background: "var(--duqe-colors-dark-50)",
    fontSize: "var(--duqe-fontSizes-md)",
  },

  "#gatsby-focus-wrapper .react-tel-input .flag-dropdown": {
    borderColor: "var(--duqe-colors-gray-200)",
  },

  "#gatsby-focus-wrapper .react-tel-input .country-list": {
    maxHeight: "300px",
  },

  "#gatsby-focus-wrapper .phone-input": {
    gridColumnStart: [1, 1, 2],
    gridColumnEnd: "3",
  },

  "#gatsby-focus-wrapper .currentQuestion": {
    opacity: "0.05",
  },

  html: {
    scrollBehavior: "smooth",
  },
}

const globalStyle = {
  global: {
    ...globalCSS,
  },
}

export { globalStyle as styles }
