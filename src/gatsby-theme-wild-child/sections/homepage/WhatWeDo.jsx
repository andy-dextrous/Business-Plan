import React from "react"
import SectionWrapper from "wildChildComponents/SectionWrapper"
import {
  Heading,
  useTheme,
  Stack,
  Box,
  VStack,
  Text,
  Button,
  List,
  ListItem,
  useBreakpointValue,
} from "@chakra-ui/react"
import { StaticImage } from "gatsby-plugin-image"

function WhatWeDo() {
  const {
    variables: { rowSpacing, componentSpacing },
  } = useTheme()
  const buttonSize = useBreakpointValue(["sm", "sm", "xl"])

  return (
    <SectionWrapper containerStyles={{ py: 0 }} id="what_we_do">
      <Stack
        direction={["column", "column", "row"]}
        spacing={rowSpacing}
        align="center"
        h="full"
      >
        <VStack flex="1" align="flex-start" spacing={componentSpacing}>
          <Heading>SEO, Content, Link-building, Design & Development </Heading>
          <Text>
            We specialise in getting graphs like the one on the right to happen.
            For this particular client, we helped:
          </Text>
          <List>
            <ListItem>Grow their site traffic by 300% and</ListItem>
            <ListItem>Build over 10k backlinks</ListItem>
            <ListItem>Grow from 2000 to 14,000 keywords, leading to:</ListItem>
            <ListItem>A 500% growth in sales and</ListItem>
            <ListItem>An added 1 million dollars in revenue per year</ListItem>
          </List>
          <Text>…And just in 12 months.</Text>
          <Text>
            A lot of people have been burned by SEO that doesn’t work. Rest
            assured, when you work with us, you’ll get the results you deserve.
          </Text>
        </VStack>
        <VStack
          flex="1"
          align="flex-start"
          position="relative"
          data-speed="1.1"
          _after={{
            content: '""',
            display: ["none", "none", "block"],
            width: ["90vw", "90vw", "450px"],
            height: ["90vw", "90vw", "450px"],
            bg: "dark.default",
            borderRadius: "50%",
            position: "absolute",
            top: 0,
            left: "calc(50% - 225px)",
            zIndex: -1,
          }}
        >
          <StaticImage
            src="https://res.cloudinary.com/wild-creative/image/upload/v1669012731/VZ_Results_qcstbj.png"
            alt="placeholder"
          />
        </VStack>
      </Stack>
      <VStack pt={[20, 20, 8]} w={["full", "full", "auto"]} align="center">
        <Text as="em">Want results like these? </Text>
        <Button variant="dark" size={buttonSize}>
          Get in touch.
        </Button>
      </VStack>
    </SectionWrapper>
  )
}

export default WhatWeDo
