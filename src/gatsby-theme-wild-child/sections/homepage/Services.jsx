import React from "react"
import SectionWrapper from "wildComponents/SectionWrapper"
import { VStack, Heading, Stack, Text, Box } from "@chakra-ui/react"

function Services() {
  return (
    <SectionWrapper>
      <VStack align="flex-start" spacing={12}>
        <Heading>We can help you with</Heading>
        <Stack direction={["column", "column", "row"]} spacing={20}>
          <VStack spacing={4} align="flex-start">
            <Text fontSize="12px">01</Text>
            <Box w="full" h="1px" bg="dark.500" />
            <Heading as="h3" fontSize="2xl">
              SEO
            </Heading>
            <Text>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro
              accusantium iure ex incidunt consequatur consequuntur doloribus
              eum. Odit, ad ipsam.
            </Text>
          </VStack>
          <VStack spacing={4} align="flex-start">
            <Text fontSize="12px">01</Text>
            <Box w="full" h="1px" bg="dark.500" />
            <Heading as="h3" fontSize="2xl">
              Content
            </Heading>
            <Text>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro
              accusantium iure ex incidunt consequatur consequuntur doloribus
              eum. Odit, ad ipsam.
            </Text>
          </VStack>
          <VStack spacing={4} align="flex-start">
            <Text fontSize="12px">01</Text>
            <Box w="full" h="1px" bg="dark.500" />
            <Heading as="h3" fontSize="2xl">
              Websites
            </Heading>
            <Text>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro
              accusantium iure ex incidunt consequatur consequuntur doloribus
              eum. Odit, ad ipsam.
            </Text>
          </VStack>
        </Stack>
      </VStack>
    </SectionWrapper>
  )
}

export default Services
