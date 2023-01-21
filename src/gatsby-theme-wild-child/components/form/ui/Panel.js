import { VStack, Box } from "@chakra-ui/react"
import React from "react"

function Panel({ children }) {
  return (
    <Box
      data-panel
      align="flex-start"
      justify={["flex-start", "flex-start"]}
      spacing={8}
      layerStyle="fillSpaceAbsolute"
      visibility="hidden"
      h="100%"
    >
      <Box
        maxW="100%"
        maxH="100%"
        h="100vh"
        w="full"
        overflowY="scroll"
        px={[40]}
        py={[32]}
      >
        {children}
      </Box>
    </Box>
  )
}

export default Panel
