import React from "react"
import SectionWrapper from "wildChildComponents/SectionWrapper"
import { Heading, useTheme, Stack, VStack } from "@chakra-ui/react"
import Counter from "../../components/Counter"

function Websites() {
  const {
    variables: { rowSpacing },
  } = useTheme()

  return (
    <SectionWrapper containerSize="lg">
      <Stack
        direction={["column", "column", "row"]}
        spacing={rowSpacing}
        align="center"
        h="full"
      >
        <VStack flex="1" align="flex-start" spacing={18}>
          <Heading w="full" textAlign="center">
            We Have a Track Record of Success
          </Heading>
          <Counter />
          <Counter />
          <Counter />
        </VStack>
      </Stack>
    </SectionWrapper>
  )
}

export default Websites
