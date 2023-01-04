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
      bg="primary.default"
      id="pricing"
    >
      <Heading color="white" textAlign="center" mb={8} zIndex="2">
        Virtuzone Customer’s Special Offer
      </Heading>
      <Text textAlign="center" color="white" maxW="700px" mb={16} zIndex="2">
        While some business owners want to undertake the rigorous work of doing
        their own SEO, most prefer to leave it to the pros. If your SEO report
        leaves you scratching your head, we are offering these special packages,
        only for Virtuzone customers!
      </Text>
      <Text color="white" maxW="700px" mb={16} zIndex="2" textAlign="center">
        All plans include a free SEO Audit, content map, page-speed assessment
        and technical SEO/site health assessment worth AED 15,000.
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
                <ListIcon as={MdCheckCircle} color="teal.400" />
                Keyword research and competitor analysis
              </ListItem>
              <ListItem>
                <ListIcon as={MdCheckCircle} color="teal.400" />
                Core Web Vitals management.
              </ListItem>
              <ListItem>
                <ListIcon as={MdCheckCircle} color="teal.400" />
                On-page optimisation of up to 4 articles a month provided by the
                client.
              </ListItem>
              <ListItem>
                <ListIcon as={MdCheckCircle} color="teal.400" />
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
                <ListIcon as={MdCheckCircle} color="teal.400" />
                Keyword research and competitor analysis
              </ListItem>
              <ListItem>
                <ListIcon as={MdCheckCircle} color="teal.400" />
                Core Web Vitals management.
              </ListItem>
              <ListItem>
                <ListIcon as={MdCheckCircle} color="teal.400" />4 expert
                articles created by our in-house content team. All articles are
                written for maximum SEO impact using our proprietary SEO content
                writing process.
              </ListItem>
              <ListItem>
                <ListIcon as={MdCheckCircle} color="teal.400" />
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
                <ListIcon as={MdCheckCircle} color="teal.400" />
                Keyword research and competitor analysis
              </ListItem>
              <ListItem>
                <ListIcon as={MdCheckCircle} color="teal.400" />
                Core Web Vitals management.
              </ListItem>
              <ListItem>
                <ListIcon as={MdCheckCircle} color="teal.400" />8 expert
                articles created by our in-house content team. All articles are
                written for maximum SEO impact using our proprietary SEO content
                writing process.
              </ListItem>
              <ListItem>
                <ListIcon as={MdCheckCircle} color="teal.400" />
                Internal linking and site structure optimisation
              </ListItem>
              <ListItem>
                <ListIcon as={MdCheckCircle} color="teal.400" />4 high-DR
                backlinks per month.
              </ListItem>
              <ListItem>
                <ListIcon as={MdCheckCircle} color="teal.400" />
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
