/*** Remove imports if you want to override all defaults ***/

import { Button as defaultButton } from "wildSrc/@chakra-ui/gatsby-plugin/components/button.js"

export const Button = {
  ...defaultButton,

  baseStyle: {
    ...defaultButton.baseStyle,
    rounded: "full",
    textTransform: "none",
    letterSpacing: 0,
  },

  variants: {
    ...defaultButton.variants,
    primary: {
      ...defaultButton.variants.primary,
      color: "white",
      border: "2px solid",
      borderColor: "primary.600",
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
