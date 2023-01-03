import {
  Avatar,
  Heading,
  Image,
  Text,
  useTheme,
  VStack,
} from "@chakra-ui/react"
import Section from "gatsby-theme-wild-child/src/components/Section"
import React from "react"

function Quote() {
  const { variables } = useTheme()

  return (
    <Section containerStyles={{ py: "0", pt: variables.containerPaddingY }}>
      <VStack spacing={12} pb={12}>
        <Heading maxW="700px" textAlign="center">
          “Since Wild Creative took over, we have witnessed a 300% YoY growth in
          organic traffic and over
          <Text as="span" color="secondary.default">
            {" "}
            500% growth in revenue
          </Text>{" "}
          over $10,000 each from organic leads.”
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
      {/* <Image
        src="https://res.cloudinary.com/wild-creative/image/upload/v1672372364/Speech_buble_d6uluk.svg"
        position="absolute"
        left="47vw"
        top={["-2 50px", "-250px", "-520px"]}
        zIndex="-1"
        width="700px"
        height="1000px"
        opacity="0.7"
        display={["none", "none", "block"]}
      /> */}
    </Section>
  )
}

export default Quote
