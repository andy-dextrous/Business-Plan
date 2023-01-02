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
    variables: { rowSpacing, componentSpacing },
  } = useTheme()

  return (
    <Section containerStyles={{ py: 0 }} id="what_we_do">
      <Stack
        direction={["column", "column", "row"]}
        spacing={rowSpacing}
        align="center"
        h="full"
      >
        <VStack flex="1" align="flex-start" spacing={componentSpacing}>
          <Heading textAlign={["center", "center", "left"]}>
            SEO, Content, Link-building, Design & Development{" "}
          </Heading>
          <Text>
            We specialise in getting graphs like this one to happen the only way
            that actually works - by creating websites that both humans and
            search engines love. For this particular client, we helped:
          </Text>
          <List
            sx={{
              li: { listStyle: "none !important" },
            }}
          >
            <ListItem>
              <ListIcon as={MdCheckCircle} color="primary.default" />
              Grow their site traffic by 300%
            </ListItem>
            <ListItem>
              <ListIcon as={MdCheckCircle} color="primary.default" />
              Build over 10k backlinks
            </ListItem>
            <ListItem>
              <ListIcon as={MdCheckCircle} color="primary.default" />
              Grow from 2000 to 14,000 keywords, leading to:
            </ListItem>
            <ListItem>
              <ListIcon as={MdCheckCircle} color="primary.default" />A 500%
              growth in revenue and
            </ListItem>
            <ListItem>
              <ListIcon as={MdCheckCircle} color="primary.default" />
              An added 1 million dollars in revenue per year
            </ListItem>
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
            bgImage:
              "https://res.cloudinary.com/wild-creative/image/upload/v1672373552/Asset_10_j30eq9.svg",
            bgPosition: "center",
            bgRepeat: "no-repeat",
            bgSize: "contain",
            // borderRadius: "50%",
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
