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
        spacing={[20, 20, 12]}
        align="flex-start"
        h="full"
        px={[8, 8, 0]}
      >
        <VStack flex="1" spacing={componentSpacing}>
          <Image
            src="https://res.cloudinary.com/wild-creative/image/upload/v1672372616/Bar_nep6xm.svg"
            width="60px"
            height="60px"
          />
          <Heading as="h4" fontSize={["xl", "xl", "xl"]} textAlign="center">
            Increased organic traffic and better search rankings
          </Heading>
          <Text textAlign="center">
            Increase your organic traffic and search positions with our proven
            strategies for content that the Google gods absolutely love…
          </Text>
        </VStack>
        <VStack flex="1" spacing={componentSpacing}>
          <Image
            src="https://res.cloudinary.com/wild-creative/image/upload/v1672372615/Asset_9_rtaeun.svg"
            width="60px"
            height="60px"
          />
          <Heading as="h4" fontSize={["xl", "xl", "xl"]} textAlign="center">
            Next-level brand awareness & visibility
          </Heading>
          <Text textAlign="center">
            Gain more authority for your brand and domain through our
            link-building process.
          </Text>
        </VStack>
        <VStack flex="1" spacing={componentSpacing}>
          <Image
            src="https://res.cloudinary.com/wild-creative/image/upload/v1672372616/Cloud_jxxu7z.svg"
            width="60px"
            height="60px"
          />
          <Heading as="h4" fontSize={["xl", "xl", "xl"]} textAlign="center">
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
