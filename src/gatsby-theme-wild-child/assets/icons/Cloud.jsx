import { Box } from "@chakra-ui/react"
import React from "react"

function Cloud({ color = "primary.default", ...props }) {
  return (
    <Box
      as="svg"
      xmlns="http://www.w3.org/2000/svg"
      id="Layer_2"
      viewBox="0 0 68.35 66.71"
      sx={{
        path: {
          fill: color,
        },
      }}
      {...props}
    >
      <g id="Layer_1-2">
        <path
          d="M68.35 29.59c0-7.78-6.31-14.09-14.09-14.09-1.51 0-2.96.24-4.33.68C49.05 7.1 41.38 0 32.06 0c-9.92 0-17.97 8.04-17.97 17.97 0 1.21.12 2.38.35 3.52H11.1C4.97 21.49 0 26.46 0 32.59s4.97 11.1 11.1 11.1h44.4c3.26 0 6.19-1.42 8.22-3.67 2.84-2.58 4.64-6.29 4.64-10.43ZM34.18 66.71c-5.77 0-11.55-2.2-15.94-6.59l3.64-3.64c6.79 6.79 17.83 6.79 24.61 0l3.64 3.64c-4.39 4.39-10.17 6.59-15.94 6.59Z"
          className="cls-1"
        />
        <path
          d="M34.18 56.51c-3.16 0-6.33-1.2-8.73-3.61l3.64-3.63a7.212 7.212 0 0 0 10.19 0l3.64 3.63a12.302 12.302 0 0 1-8.73 3.61Z"
          className="cls-1"
        />
      </g>
    </Box>
  )
}

export default Cloud
