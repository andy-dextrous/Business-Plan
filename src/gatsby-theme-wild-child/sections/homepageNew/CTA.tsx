import { Button, Heading, VStack } from "@chakra-ui/react"
import Section from "gatsby-theme-wild-child/src/components/Section"
import React from "react"

function CTA() {
  return (
    <Section bg="primary.default">
      <VStack>
        <Heading color="white" textAlign="center">
          Are you ready to dominate the web?
        </Heading>
        <Heading
          as="h4"
          color="white"
          textAlign="center"
          fontWeight="500 !important"
        >
          Claim your free SEO audit today and see how we can help you grow your
          business online.
        </Heading>
        <Button variant="secondary">Start here</Button>
      </VStack>
    </Section>
  )
}

export default CTA
