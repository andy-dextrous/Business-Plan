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
        align="center"
        h="full"
      >
        <VStack flex="1" spacing={componentSpacing}>
          <Image
            src="https://cdn.shopify.com/s/files/1/1024/1659/files/clear-information-icon.svg?v=1623885318"
            width="80px"
            height="80px"
          />
          <Heading as="h3" fontSize="2xl" textAlign="center" color="white">
            Websites
          </Heading>
          <Text textAlign="center" color="white">
            The good news is that, for anyone willing to aspire to a bit more
            than average, there has never been a better time to embrace the
            online dimension of your business. Honestly, abundance and
            opportunity is absolutely everywhere.
          </Text>
        </VStack>
        <VStack flex="1" spacing={componentSpacing}>
          <Image
            src="https://cdn.shopify.com/s/files/1/1024/1659/files/clear-information-icon.svg?v=1623885318"
            width="80px"
            height="80px"
          />
          <Heading as="h3" fontSize="2xl" textAlign="center" color="white">
            Websites
          </Heading>
          <Text textAlign="center" color="white">
            The good news is that, for anyone willing to aspire to a bit more
            than average, there has never been a better time to embrace the
            online dimension of your business. Honestly, abundance and
            opportunity is absolutely everywhere.
          </Text>
        </VStack>
        <VStack flex="1" spacing={componentSpacing}>
          <Image
            src="https://cdn.shopify.com/s/files/1/1024/1659/files/clear-information-icon.svg?v=1623885318"
            width="80px"
            height="80px"
          />
          <Heading as="h3" fontSize="2xl" textAlign="center" color="white">
            Websites
          </Heading>
          <Text textAlign="center" color="white">
            The good news is that, for anyone willing to aspire to a bit more
            than average, there has never been a better time to embrace the
            online dimension of your business. Honestly, abundance and
            opportunity is absolutely everywhere.
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
