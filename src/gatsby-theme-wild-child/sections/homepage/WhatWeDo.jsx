import {
  Heading,
  List,
  ListIcon,
  ListItem,
  Stack,
  Text,
  useTheme,
  VStack,
} from "@chakra-ui/react"
import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import { MdCheckCircle } from "react-icons/md"
import Section from "wildComponents/Section"
import Button from "gatsby-theme-wild-child/src/components/Button"

function WhatWeDo() {
  const {
    variables: { rowSpacing, componentSpacing, containerPaddingY },
  } = useTheme()

  return (
    <Section
      id="what_we_do"
      containerStyles={{ py: "unset", pt: containerPaddingY }}
    >
      <Stack
        direction={["column", "column", "row"]}
        spacing={rowSpacing}
        align="center"
        h="full"
      >
        <VStack flex="1" align="flex-start" spacing={componentSpacing}>
          <Heading textAlign={["center", "center", "left"]}>
            How Wild Creative Used This Audit To
            <Text as="span" color="teal.400">
              {" "}
              4x Virtuzone's Organic Traffic{" "}
            </Text>
          </Heading>
          <Text>
            Starting in November 2021, Wild Creative took over our SEO and used
            a comprehensive audit (just like yours) to diagnose crucial areas of
            improvement. This has since led to:
          </Text>
          <List
            sx={{
              li: { listStyle: "none !important" },
            }}
          >
            <ListItem>
              <ListIcon as={MdCheckCircle} color="teal.400" />A growth in
              organic website traffic by almost 400%
            </ListItem>
            <ListItem>
              <ListIcon as={MdCheckCircle} color="teal.400" />
              Monthly organic visits rising from ~6k to ~28k
            </ListItem>
            <ListItem>
              <ListIcon as={MdCheckCircle} color="teal.400" />
              An increase in domain authority due to aggressive link building
            </ListItem>
            <ListItem>
              <ListIcon as={MdCheckCircle} color="teal.400" />
              An increase in actively-ranking keywords from 2000 to 16,000+,
              leading to:
            </ListItem>
            <ListItem>
              <ListIcon as={MdCheckCircle} color="teal.400" />A 500% growth in
              organic revenue and
            </ListItem>
            <ListItem>
              <ListIcon as={MdCheckCircle} color="teal.400" />
              An added 1 million dollars in revenue per year
            </ListItem>
          </List>
          <Text>…And that's just in the first 12 months.</Text>
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
            // bgImage:
            //   "https://res.cloudinary.com/wild-creative/image/upload/v1672373552/Asset_10_j30eq9.svg",
            // bgPosition: "center",
            // bgRepeat: "no-repeat",
            bgSize: "contain",
            // borderRadius: "50%",
            position: "absolute",
            top: 0,
            left: "calc(50% - 225px)",
            zIndex: -1,
          }}
        >
          <StaticImage
            src="https://res.cloudinary.com/wild-creative/image/upload/v1672736317/VZ_Graph_bugx2u.png"
            alt="placeholder"
          />
        </VStack>
      </Stack>
      <VStack py={[20, 20, 20]} w={["full", "full", "auto"]} align="center">
        <Text as="em">Want results like these?</Text>
        <Button to="#hero" variant="secondary">
          Get your free SEO audit.
        </Button>
      </VStack>
    </Section>
  )
}

export default WhatWeDo
