import { VStack } from "@chakra-ui/react"
import React from "react"

function Panel({ children }) {
  return (
    <VStack
      data-panel
      align="flex-start"
      pt={[8, 8, 0]}
      justify={["flex-start", "flex-start", "center"]}
      h="full"
      spacing={8}
      layerStyle="fillSpaceAbsolute"
      visibility="hidden"
    >
      {children}
    </VStack>
  )
}

export default Panel
