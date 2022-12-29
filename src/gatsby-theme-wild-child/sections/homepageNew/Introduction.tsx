import React from "react"
import Section from "gatsby-theme-wild-child/src/components/Section"
import {
  Box,
  Button,
  Heading,
  HStack,
  Image,
  List,
  ListIcon,
  ListItem,
  Text,
  VStack,
} from "@chakra-ui/react"
import { MdCheckCircle } from "react-icons/md"

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
      <Box w="full" bg="white" boxShadow="lg" zIndex="2" rounded="3xl" p={12}>
        <HStack spacing={4}>
          <VStack flex="1" minH="600px" bg="red.50" p={4} rounded="xl">
            <Heading as="h4" mb={20}>
              Bronze
            </Heading>
            <Heading pb={6} color="red.500">
              AED 1,500
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
                <ListIcon as={MdCheckCircle} color="green.500" />
                On-page SEO.
              </ListItem>
              <ListItem>
                <ListIcon as={MdCheckCircle} color="green.500" />
                Placement of articles on the site, link building etc.
              </ListItem>
              <ListItem>
                <ListIcon as={MdCheckCircle} color="green.500" />
                Editing up to 4 articles provided by the client per month.
              </ListItem>
            </List>
            <Button>Buy Now</Button>
          </VStack>
          <VStack flex="1" minH="600px" bg="red.50" p={4} rounded="xl">
            <Heading as="h4" mb={20}>
              Bronze
            </Heading>
            <Heading pb={6} color="red.500">
              AED 2,500
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
                <ListIcon as={MdCheckCircle} color="green.500" />
                On-page SEO.
              </ListItem>
              <ListItem>
                <ListIcon as={MdCheckCircle} color="green.500" />
                Placement of articles on the site, link building etc.
              </ListItem>
              <ListItem>
                <ListIcon as={MdCheckCircle} color="green.500" />
                Editing up to 4 articles provided by the client per month.
              </ListItem>
            </List>
            <Button>Buy Now</Button>
          </VStack>
          <VStack flex="1" minH="600px" bg="red.50" p={4} rounded="xl">
            <Heading as="h4" mb={20}>
              Bronze
            </Heading>
            <Heading pb={6} color="red.500">
              AED 4,500
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
                <ListIcon as={MdCheckCircle} color="green.500" />
                On-page SEO.
              </ListItem>
              <ListItem>
                <ListIcon as={MdCheckCircle} color="green.500" />
                Placement of articles on the site, link building etc.
              </ListItem>
              <ListItem>
                <ListIcon as={MdCheckCircle} color="green.500" />
                Editing up to 4 articles provided by the client per month.
              </ListItem>
            </List>
            <Button>Buy Now</Button>
          </VStack>
        </HStack>
      </Box>
    </Section>
  )
}

export default Introduction
