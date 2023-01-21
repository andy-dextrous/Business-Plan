import { theme } from "@chakra-ui/react"

const rem = px => px / 16 + "rem"

export const fontSizes = {
  xs: rem(13),
  sm: rem(14),
  md: rem(16),
  lg: rem(18),
  xl: rem(22),
  "2xl": rem(26),
  "3xl": rem(30),
  "4xl": rem(40),
  "5xl": rem(45),
  "6xl": rem(54),
  "7xl": rem(78),
  "8xl": rem(96),
  "9xl": rem(110),
}

export const fonts = {
  heading: `Calibri, Helvetica-Neue, ${theme.fonts.heading}`,
  body: `Calibri, Helvetica-Neue, ${theme.fonts.body}`,
}

const heading = {
  fontFamily: fonts.heading,
  fontWeight: "700",
  fontStyle: "normal",
}

export const p = {
  fontFamily: fonts.body,
  fontSize: ["16px", "16px", "18px"],
  color: "dark.700",
  letterSpacing: "-0.003em",
  lineHeight: 1.6,
}

export const a = {
  color: "primary.default",
  fontWeight: 600,
  textDecoration: "none",
  _hover: {
    textDecoration: "none",
  },
}

export const h1 = {
  ...heading,
  fontSize: ["3xl", "4xl", "7xl", "7xl", "8xl", "9xl", "9xl"],
  lineHeight: ["1.2", "1.1", "1.1", "1", "1", "1", "1"],
  letterSpacing: "-0.01em",
  fontWeight: "bold",
  textTransform: "uppercase",
}
export const h2 = {
  ...heading,
  fontSize: ["3xl", "4xl", "5xl"],
  lineHeight: "1.1",
  fontWeight: "bold",
  letterSpacing: "-1px",
}

export const h3 = {
  ...heading,
  letterSpacing: "-1px",
  fontSize: ["2xl", "3xl", "3xl"],
}

export const h4 = {
  ...heading,
  fontSize: ["xl", "2xl", "2xl"],
  lineHeight: "133%",
}

export const h5 = {
  ...heading,
  fontSize: ["lg", "xl", "2xl"],
  mb: 4,
}
export const h6 = {
  ...heading,
  fontSize: ["md", "lg", "xl"],
  mb: 4,
}

export const blockquote = {
  fontStyle: "italic",
  mx: 4,
  my: 12,
  bg: "primary.100",
  p: 6,
  borderLeft: "10px solid",
  borderLeftColor: "primary.default",
}

export const li = {
  ...p,
  listStylePosition: "inside",
  listStyleType: "disc",
}

export const ul = {
  listStyleType: "disc",
  listStylePosition: "inside",
  pl: 6,
  my: 4,
}

export const ol = {
  listStyleType: "decimal",
  listStylePosition: "inside",
  pl: 6,
  my: 4,
}

export const br = {
  display: "block",
  content: '""',
  my: 4,
}

export const globalTextStyles = {
  "ol.chakra-breadcrumb__list": {
    paddingLeft: "0",
  },
}

export const base = {
  a,
  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  blockquote,
  "h1.chakra-heading": h1,
  "h2.chakra-heading": h2,
  "h3.chakra-heading": h3,
  "h4.chakra-heading": h4,
  "h5.chakra-heading": h5,
  "h6.chakra-heading": h6,
  "*.jumbo.chakra-heading": h1,
  "h1.chakra-heading.small-heading": h1,
  "*.upper-case.chakra-heading": { textTransform: "uppercase" },
  "a.chakra-link": a,
  "h1,h2,h3,h4,h5,h6,p": { color: "dark.default" },
  li: p,
  ...globalTextStyles,
}
