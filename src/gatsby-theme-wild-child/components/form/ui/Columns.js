import React from "react"
import { Stack, useTheme } from "@chakra-ui/react"

function Columns({ children }) {
  const { variables } = useTheme()
  const { mobileNavHeight } = variables
  return (
    <Stack
      direction={["column-reverse", "column-reverse", "column-reverse", "row"]}
      mt={mobileNavHeight}
      w="full"
      h="full"
      spacing="0"
    >
      {children}
    </Stack>
  )
}

export default Columns
