import { Box } from "@chakra-ui/react"
import React from "react"

function LogoSmall({ color, ...props }) {
  return (
    <Box
      as="svg"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 176.35 176.36"
      sx={{
        path: {
          fill: color,
        },
      }}
      {...props}
    >
      <path d="M88.17 0C39.47 0 0 39.48 0 88.18s39.47 88.18 88.17 88.18 88.18-39.48 88.18-88.18S136.87 0 88.17 0Zm36.46 125.9c-.17.46-.61.75-1.13.75H96.65c-.49 0-.93-.29-1.13-.75L84.41 97.79c-.39-.99-1.82-.99-2.22 0L71.01 125.9c-.2.46-.64.75-1.13.75H43.13c-.49 0-.94-.29-1.11-.75L21.87 75.45c-.26-.65.14-1.39.78-1.44 6.52-.47 12.88-1.02 19.06-1.68.39-.04.76.21.92.62l12.89 33.87c.39 1.02 1.85 1.02 2.26.02l15.13-37.51.23-.58c.13-.32.4-.54.71-.59 6.32-.98 12.34-2.04 18.02-3.1h.03c.07.09.12.19.17.31l1.23 3.03 15.57 38.54c.39 1.02 1.85 1 2.24-.02l19.09-50.46.02-.04c.1-.3.37-.54.67-.61l22.39-6.07h.02c.81-.19 1.48.58 1.18 1.34l-29.85 74.82Z" />
    </Box>
  )
}

export default LogoSmall