import React from "react"
import Section from "wildComponents/Section"
import {
  Heading,
  useTheme,
  Stack,
  VStack,
  Text,
  Image,
  Button,
} from "@chakra-ui/react"

function SeoContent() {
  const {
    variables: { rowSpacing, componentSpacing },
  } = useTheme()

  return (
    <Section id="services">
      <Heading mb={20} w="full" textAlign="center">
        Working with us means...
      </Heading>
      <Stack
        direction={["column", "column", "row"]}
        spacing={rowSpacing}
        align="flex-start"
        h="full"
      >
        <VStack flex="1" spacing={componentSpacing}>
          <Image
            src="https://www.semrush.com/static/images/heart.6e0968f39befa7d22627669dbe30ca2d.svg"
            width="80px"
            height="80px"
          />
          <Heading as="h3" fontSize={["xl", "xl", "xl"]} textAlign="center">
            Increased organic traffic and better search rankings
          </Heading>
          <Text textAlign="center">
            Increase your organic traffic and search positions with our proven
            strategies for content that the Google gods absolutely love…
          </Text>
        </VStack>
        <VStack flex="1" spacing={componentSpacing}>
          <Image
            src="https://www.semrush.com/static/images/star.a549a5922da2063e08b7cdb942349fd9.svg"
            width="80px"
            height="80px"
          />
          <Heading as="h3" fontSize={["xl", "xl", "xl"]} textAlign="center">
            Next-level brand awareness & visibility
          </Heading>
          <Text textAlign="center">
            Gain more authority for your brand and domain through our
            link-building process.
          </Text>
        </VStack>
        <VStack flex="1" spacing={componentSpacing}>
          <Image
            src="https://www.semrush.com/static/images/diamond.4699339fa7ac96d7fa266b427502e8e6.svg"
            width="80px"
            height="80px"
          />
          <Heading as="h3" fontSize={["xl", "xl", "xl"]} textAlign="center">
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
