import { Heading, Stack, Text, useTheme, VStack } from "@chakra-ui/react"
import React from "react"
import Section from "wildComponents/Section"
import CloudGraph from "../../assets/icons/CloudGraph"
import ScreenHeart from "../../assets/icons/ScreenHeart"
import SimpleGraph from "../../assets/icons/SimpleGraph"

function SeoContent() {
  const {
    variables: { componentSpacing },
  } = useTheme()

  return (
    <Section id="services">
      <Heading mb={20} w="full" textAlign="center">
        Working with us means...
      </Heading>
      <Stack
        direction={["column", "column", "row"]}
        spacing={[20, 20, 12]}
        align="flex-start"
        h="full"
        px={[8, 8, 0]}
      >
        <VStack flex="1" spacing={componentSpacing}>
          <CloudGraph width="60px" height="60px" />
          <Heading
            as="h4"
            px={[2, 2, 8]}
            fontSize={["xl", "xl", "xl"]}
            textAlign="center"
          >
            Increased organic traffic and better search rankings
          </Heading>
          <Text textAlign="center">
            Increase your organic traffic and search positions with our proven
            strategies for content that the Google gods absolutely love…
          </Text>
        </VStack>
        <VStack flex="1" spacing={componentSpacing}>
          <SimpleGraph width="60px" height="60px" />
          <Heading
            as="h4"
            px={[2, 2, 8]}
            fontSize={["xl", "xl", "xl"]}
            textAlign="center"
          >
            Next-level brand awareness and authority
          </Heading>
          <Text textAlign="center">
            Gain more authority for your brand and domain through our
            link-building process.
          </Text>
        </VStack>
        <VStack flex="1" spacing={componentSpacing}>
          <ScreenHeart width="60px" height="60px" />
          <Heading
            as="h4"
            px={[2, 2, 8]}
            fontSize={["xl", "xl", "xl"]}
            textAlign="center"
          >
            Dedicated partner on your team who actually gets it
          </Heading>
          <Text textAlign="center">
            We can be your contracted “go-to” for all things SEO, content and
            websites. Plus, we commit to our clients for the long haul because,
            let’s face it, growing a business online takes time.
          </Text>
        </VStack>
      </Stack>
    </Section>
  )
}

export default SeoContent
