import { Box } from "@chakra-ui/react"
import React from "react"

function Gear({ color = "white", ...props }) {
  return (
    <Box
      as="svg"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 80.02 76"
      sx={{ path: { fill: color } }}
      {...props}
    >
      <path d="M80.02 38.15c0 2.31-.2 4.57-.58 6.77-.21 1.19-1.27 1.98-2.48 1.94a11.47 11.47 0 0 0-10.28 5.72c-2.28 3.95-1.93 8.68.49 12.21.67.98.47 2.32-.42 3.12a40.009 40.009 0 0 1-13.37 7.95c-1.16.41-2.47-.1-2.98-1.22-1.82-3.93-5.78-6.66-10.39-6.66s-8.58 2.73-10.39 6.66c-.52 1.12-1.83 1.63-2.99 1.22a40.207 40.207 0 0 1-13.37-7.95c-.88-.8-1.09-2.14-.41-3.12 2.42-3.53 2.76-8.26.48-12.21-2.18-3.78-6.2-5.84-10.28-5.72-1.2.04-2.27-.75-2.47-1.94C.2 42.72 0 40.46 0 38.15c0-3 .33-5.93.96-8.74.26-1.15 1.29-1.91 2.47-1.92 3.95 0 7.79-2.05 9.9-5.71 2.04-3.54 1.98-7.71.21-11.07-.54-1.02-.35-2.26.52-3 3.92-3.35 8.49-5.95 13.5-7.59 1.09-.35 2.24.1 2.86 1.06 2.04 3.13 5.57 5.2 9.59 5.2s7.54-2.07 9.59-5.2c.62-.96 1.77-1.41 2.85-1.06 5.01 1.64 9.58 4.24 13.5 7.59.88.74 1.06 1.98.52 3-1.77 3.36-1.83 7.53.21 11.07 2.12 3.66 5.96 5.71 9.9 5.71 1.18.01 2.21.77 2.47 1.92.63 2.81.97 5.74.97 8.74Z" />
    </Box>
  )
}

export default Gear
