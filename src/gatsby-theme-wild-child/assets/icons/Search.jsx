import { Box } from "@chakra-ui/react"
import React from "react"

function Search({ color = "primary.default", ...props }) {
  return (
    <Box
      as="svg"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 164.1 164.1"
      {...props}
    >
      <path
        d="M155.31 164.1c-2.25 0-4.5-.86-6.22-2.58l-29.88-29.88c-3.43-3.43-3.43-9 0-12.43 3.43-3.43 9-3.43 12.43 0l29.88 29.88c3.43 3.43 3.43 9 0 12.43a8.769 8.769 0 0 1-6.22 2.58Z"
        style="fill:#cdd2fc"
      />
      <path
        d="M74.19 148.39C33.28 148.39 0 115.1 0 74.19S33.28 0 74.19 0s74.19 33.28 74.19 74.19-33.28 74.19-74.19 74.19Zm0-130.8c-31.22 0-56.61 25.39-56.61 56.61s25.39 56.61 56.61 56.61 56.61-25.39 56.61-56.61-25.39-56.61-56.61-56.61Z"
        style="fill:#5b66d1"
      />
    </Box>
  )
}

export default Search
