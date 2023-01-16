import { Box } from "@chakra-ui/react"
import React from "react"

const Pie = React.forwardRef((props, ref) => {
  const { color = "currentColor", ...rest } = props

  return (
    <Box
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 95.01 95.01"
      as="svg"
      sx={{
        circle: {
          fill: color,
        },
      }}
      {...rest}
      ref={ref}
    >
      <circle cx="47.51" cy="47.51" r="47.51" />
    </Box>
  )
})

export default Pie
