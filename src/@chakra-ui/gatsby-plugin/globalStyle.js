import { base } from "./foundations/typography"
import { styles as defaultsGlobalCSS } from "wildSrc/@chakra-ui/gatsby-plugin/globalStyle"

const globalCSS = {
  ...defaultsGlobalCSS.global,
  ...base,

  // Place all global CSS here //

  "#fp-nav": {
    display: ["none", "none", "flex"],
  },

  "::selection": {
    backgroundColor: "primary.default",
    color: "white",
  },
}

const globalStyle = {
  global: {
    ...globalCSS,
  },
}

export { globalStyle as styles }
