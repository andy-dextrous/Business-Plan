import { Avatar, Heading, Image, Text, VStack } from "@chakra-ui/react"
import Section from "gatsby-theme-wild-child/src/components/Section"
import React from "react"

function Quote() {
  return (
    <Section>
      <VStack spacing={12} pb={12}>
        <Heading maxW="700px" textAlign="center">
          “Any business owner who wants to grow their web presence would be
          lucky to work with these guys. Top shelf.”
        </Heading>
        <VStack spacing={2}>
          <Avatar
            src="https://damobrennan.com/wp-content/uploads/2022/10/damo.jpg"
            w="170px"
            h="170px"
          />
          <Text fontWeight="bold" mb={0} pb="0">
            Damian Brennan
          </Text>
          <Text color="gray.600">Director of Marketing | Virtuzone</Text>
        </VStack>
      </VStack>
      <Image
        src="https://www.semrush.com/static/images/bubble.1793638c40709caea7b32a8f93e4ca07.svg"
        position="absolute"
        right="10%"
        top="-650px"
        zIndex="-1"
        height="900px"
      />
    </Section>
  )
}

export default Quote
