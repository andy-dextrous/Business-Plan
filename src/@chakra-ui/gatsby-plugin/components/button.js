/*** Remove imports if you want to override all defaults ***/

import { Button as defaultButton } from "wildSrc/@chakra-ui/gatsby-plugin/components/button.js"

export const Button = {
  ...defaultButton,

  baseStyle: {
    fontWeight: "bold",
    textTransform: "uppercase",
    transformOrigin: "center",
    letterSpacing: "0.5px",
    borderRadius: "5px",
    zIndex: 1,
    position: "relative",
    overflow: "hidden",
    _active: { transform: "scale(0.92)" },
    _after: {
      content: "''",
      width: "100%",
      height: "100%",
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      transition: "transform .15s cubic-bezier(.785,.135,.15,.86)",
      transformOrigin: "left center",
      position: "absolute",
      transform: "scale(1)",
      zIndex: "-1",
      borderRadius: "5px",
    },
    _before: {
      content: "''",
      width: "100%",
      height: "100%",
      position: "absolute",
      zIndex: "-2",
    },
    _hover: {
      transform: "scale(0.98)",
      _after: {
        transform: "scaleX(0)",
        transformOrigin: "right center",
      },
    },
    "&:disabled": {
      transform: "scaleX(1)",
    },
    "&:disabled:after": {
      transform: "scaleX(1)",
    },
  },

  variants: {
    primary: {
      bg: "primary.default",
      color: "white",
      _before: { bg: "primary.700" },
      _after: { bg: "primary.default" },
    },
    secondary: {
      bg: "primary.400",
      color: "white",
      _before: { bg: "primary.default" },
      _after: { bg: "primary.700" },
    },
    light: {
      bg: "brandConcrete.default",
      color: "dark.default",
      _before: { bg: "brandConcrete.300" },
      _after: { bg: "brandConcrete.default" },
    },
    dark: {
      bg: "dark.default",
      color: "white",
      _before: { bg: "dark.700" },
      _after: { bg: "dark.default" },
    },
    formInactive: {
      bg: "gray.50",
      color: "dark.default",
      _before: { bg: "gray.50" },
      _after: { bg: "gray.50" },
    },
    formActive: {
      bg: "dark.default",
      color: "white",
      _before: { bg: "dark.700" },
      _after: { bg: "dark.default" },
    },
  },

  defaultProps: {
    ...defaultButton.defaultProps,
    size: "lg",
    variant: "primary",
  },
}
