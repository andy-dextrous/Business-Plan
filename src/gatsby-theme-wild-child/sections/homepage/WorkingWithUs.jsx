import React from "react"
import SectionWrapper from "wildChildComponents/SectionWrapper"
import {
  Heading,
  useTheme,
  Stack,
  Box,
  VStack,
  Text,
  Image,
  Button,
} from "@chakra-ui/react"
import CircleLink from "../../components/CircleLink"

function SeoContent() {
  const {
    variables: { rowSpacing, componentSpacing },
  } = useTheme()

  return (
    <SectionWrapper bg="dark.default">
      <Heading mb={20} w="full" textAlign="center" color="white">
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
            src="https://cdn.shopify.com/s/files/1/1024/1659/files/clear-information-icon.svg?v=1623885318"
            width="80px"
            height="80px"
          />
          <Heading
            as="h3"
            fontSize={["xl", "xl", "xl"]}
            textAlign="center"
            color="white"
          >
            INCREASED ORGANIC TRAFFIC & BETTER SEARCH RANKINGS
          </Heading>
          <Text textAlign="center" color="white">
            Increase your organic traffic and search positions with our proven
            strategies for content that the Google gods absolutely love…
          </Text>
        </VStack>
        <VStack flex="1" spacing={componentSpacing}>
          <Image
            src="https://cdn.shopify.com/s/files/1/1024/1659/files/clear-information-icon.svg?v=1623885318"
            width="80px"
            height="80px"
          />
          <Heading
            as="h3"
            fontSize={["xl", "xl", "xl"]}
            textAlign="center"
            color="white"
          >
            NEXT-LEVEL BRAND AWARENESS & VISIBILITY
          </Heading>
          <Text textAlign="center" color="white">
            Gain more authority for your brand and domain through our
            link-building process.
          </Text>
        </VStack>
        <VStack flex="1" spacing={componentSpacing}>
          <Image
            src="https://cdn.shopify.com/s/files/1/1024/1659/files/clear-information-icon.svg?v=1623885318"
            width="80px"
            height="80px"
          />
          <Heading
            as="h3"
            fontSize={["xl", "xl", "xl"]}
            textAlign="center"
            color="white"
          >
            DEDICATED PARTNER ON YOUR TEAM WHO ACTUALLY GETS IT
          </Heading>
          <Text textAlign="center" color="white">
            We can be your contracted “go-to” for all things SEO, content and
            websites. Plus, we commit to our clients for the long haul because,
            let’s face it, growing a business online takes time.
          </Text>
        </VStack>
      </Stack>
      <VStack mt={40}>
        <Heading color="white" textAlign={["center", "center", "left"]}>
          Are you ready to dominate the web?
        </Heading>
        <Button>Start here</Button>
      </VStack>
    </SectionWrapper>
  )
}

export default SeoContent
