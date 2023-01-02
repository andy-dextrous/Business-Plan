import {
  Box,
  Heading,
  List,
  ListIcon,
  ListItem,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react"
import Section from "gatsby-theme-wild-child/src/components/Section"
import React from "react"
import { MdCheckCircle } from "react-icons/md"
import Button from "gatsby-theme-wild-child/src/components/Button"

function Introduction() {
  return (
    <Section
      minH="100vh"
      containerStyles={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
      _after={{
        content: '""',
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        bg: "primary.default",
        zIndex: -1,
        w: "100%",
        h: "60%",
      }}
    >
      <Heading color="white" textAlign="center" mb={8} zIndex="2">
        Virtuzone Customer’s Special Offer
      </Heading>
      <Text textAlign="center" color="white" maxW="700px" mb={16} zIndex="2">
        All plans include First month includes a free SEO Audit, content map,
        page-speed assessment and technical SEO/site health assessment worth AED
        15,000.
      </Text>
      <Box
        w="full"
        bg="white"
        boxShadow="lg"
        zIndex="2"
        rounded="3xl"
        p={[6, 6, 12]}
      >
        <Stack
          spacing={[6, 6, 4]}
          direction={["column", "column", "column", "row"]}
          align="stretch"
        >
          <VStack flex="1" bg="red.50" p={6} rounded="xl">
            <Heading as="h4" mb={12}>
              Bronze
            </Heading>
            <Heading pb={6} color="red.500">
              $1,500
            </Heading>
            <Text pb={2} w="full" fontWeight="700">
              Monthly basis:
            </Text>
            <List
              w="full"
              pb={16}
              sx={{
                li: { listStyle: "none !important" },
              }}
            >
              <ListItem>
                <ListIcon as={MdCheckCircle} color="primary.default" />
                Keyword research and competitor analysis
              </ListItem>
              <ListItem>
                <ListIcon as={MdCheckCircle} color="primary.default" />
                Core Web Vitals management.
              </ListItem>
              <ListItem>
                <ListIcon as={MdCheckCircle} color="primary.default" />
                On-page optimisation of up to 4 articles a month provided by the
                client.
              </ListItem>
              <ListItem>
                <ListIcon as={MdCheckCircle} color="primary.default" />
                Internal linking and site structure optimisation
              </ListItem>
            </List>
            <Button justifySelf="flex-end" to="#hero">
              Start Now
            </Button>
          </VStack>
          <VStack flex="1.1" bg="red.50" p={6} rounded="xl">
            <Heading as="h4" mb={12}>
              Silver
            </Heading>
            <Heading pb={6} color="red.500">
              $2,500
            </Heading>
            <Text pb={2} w="full" fontWeight="700">
              Monthly basis:
            </Text>
            <List
              w="full"
              pb={16}
              sx={{
                li: { listStyle: "none !important" },
              }}
            >
              <ListItem>
                <ListIcon as={MdCheckCircle} color="primary.default" />
                Keyword research and competitor analysis
              </ListItem>
              <ListItem>
                <ListIcon as={MdCheckCircle} color="primary.default" />
                Core Web Vitals management.
              </ListItem>
              <ListItem>
                <ListIcon as={MdCheckCircle} color="primary.default" />4 expert
                articles created by our in-house content team. All articles are
                written for maximum SEO impact using our proprietary SEO content
                writing process.
              </ListItem>
              <ListItem>
                <ListIcon as={MdCheckCircle} color="primary.default" />
                Internal linking and site structure optimisation
              </ListItem>
            </List>
            <Button justifySelf="flex-end" to="#hero">
              Start Now
            </Button>
          </VStack>
          <VStack flex="1" bg="red.50" p={6} rounded="xl">
            <Heading as="h4" mb={12}>
              Gold
            </Heading>
            <Heading pb={6} color="red.500">
              $4,500
            </Heading>
            <Text pb={2} w="full" fontWeight="700">
              Monthly basis:
            </Text>
            <List
              w="full"
              pb={16}
              sx={{
                li: { listStyle: "none !important" },
              }}
            >
              <ListItem>
                <ListIcon as={MdCheckCircle} color="primary.default" />
                Keyword research and competitor analysis
              </ListItem>
              <ListItem>
                <ListIcon as={MdCheckCircle} color="primary.default" />
                Core Web Vitals management.
              </ListItem>
              <ListItem>
                <ListIcon as={MdCheckCircle} color="primary.default" />8 expert
                articles created by our in-house content team. All articles are
                written for maximum SEO impact using our proprietary SEO content
                writing process.
              </ListItem>
              <ListItem>
                <ListIcon as={MdCheckCircle} color="primary.default" />
                Internal linking and site structure optimisation
              </ListItem>
              <ListItem>
                <ListIcon as={MdCheckCircle} color="primary.default" />4 high-DR
                backlinks per month.
              </ListItem>
              <ListItem>
                <ListIcon as={MdCheckCircle} color="primary.default" />
                Monthly Reporting
              </ListItem>
            </List>
            <Button justifySelf="flex-end" to="#hero">
              Start Now
            </Button>
          </VStack>
        </Stack>
      </Box>
    </Section>
  )
}

export default Introduction
