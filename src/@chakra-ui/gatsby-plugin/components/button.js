/*** Remove imports if you want to override all defaults ***/

import { Button as defaultButton } from "wildSrc/@chakra-ui/gatsby-plugin/components/button.js"

export const Button = {
  ...defaultButton,

  baseStyle: {
    ...defaultButton.baseStyle,
    textTransform: "none",
    letterSpacing: 0,
    rounded: "md",
  },

  variants: {
    ...defaultButton.variants,
    primary: {
      ...defaultButton.variants.primary,
      color: "white",
    },
    secondary: {
      ...defaultButton.variants.secondary,
      color: "white",
    },
    teal: {
      ...defaultButton.variants.primary,
      color: "primary.default",
      bg: "teal.400",
    },
    dark: {
      bg: "dark.default",
      color: "white",
    },
  },

  defaultProps: {
    ...defaultButton.defaultProps,
    size: "xl",
    variant: "primary",
  },
}
