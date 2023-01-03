import React from "react"
import { Box } from "@chakra-ui/react"

function Pointer({ color = "primary.default", ...props }) {
  return (
    <Box
      as="svg"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 146.52 146.52"
      {...props}
    >
      <path d="M138.56.34 4.04 46.65c-4.94 1.7-5.49 8.46-.89 10.94l39.77 21.42L9.5 112.43a6 6 0 0 0 0 8.48l16.11 16.11a6 6 0 0 0 8.48 0l33.43-33.43 21.42 39.77c2.48 4.6 9.24 4.05 10.94-.89l46.3-134.52c1.62-4.72-2.9-9.24-7.62-7.62Z" />
    </Box>
  )
}

export default Pointer
