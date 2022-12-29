import {
  Button,
  Heading,
  HStack,
  Image,
  Input,
  Stack,
  VStack,
} from "@chakra-ui/react"
import Section from "gatsby-theme-wild-child/src/components/Section"
import React from "react"

function Hero() {
  return (
    <Section
      bg="primary.default"
      h="auto"
      containerStyles={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
      zIndex="2"
      id="hero"
    >
      <VStack maxW="700px" pt={24} spacing={8} zIndex="1">
        <Heading as="h1" color="white" textAlign="center">
          SEO and Content That Generates Real ROI
        </Heading>
        <Heading
          as="h4"
          color="white"
          textAlign="center"
          fontWeight="500 !important"
        >
          We are experts in website growth, offering SEO that really works,
          content creation, link building and affiliate marketing. We work with
          clients worldwide to build, grow and scale their businesses online.
        </Heading>
        <Stack
          direction={["column", "column", "row"]}
          align="stretch"
          w="full"
          spacing={3}
          pt={4}
        >
          <Input
            flex="3"
            placeholder="Enter your domain"
            h="60px"
            minH="60px"
            rounded="md"
          />
          <Button flex="1" variant="secondary" h="60px">
            Get a Free SEO Audit
          </Button>
        </Stack>
      </VStack>
      <VStack w="full" spacing={6} zIndex="1" mt={24}>
        <Heading
          as="h6"
          color="gray.500"
          textAlign="center"
          fontSize="18px"
          textTransform="uppercase"
        >
          Trusted by
        </Heading>
        <HStack
          w="full"
          flexWrap="wrap"
          spacing={[0, 0, 10]}
          justifyContent="center"
          align="center"
        >
          <Image
            src="https://res.cloudinary.com/wild-creative/image/upload/v1672282266/VZ_duwczd.svg"
            width="140px"
            opacity="0.9"
            p={[4, 4, 0]}
          />
          <Image
            src="https://res.cloudinary.com/wild-creative/image/upload/v1672282266/DUQE_ozrd85.svg"
            width="100px"
            opacity="0.9"
            p={[4, 4, 0]}
          />
          <Image
            src="https://res.cloudinary.com/wild-creative/image/upload/v1672282266/Tactic_lefnet.svg"
            width="100px"
            opacity="0.9"
            p={[4, 4, 0]}
          />
          <Image
            src="https://res.cloudinary.com/wild-creative/image/upload/v1672282534/Aromas_Logo_gjxtgf.svg"
            width="100px"
            opacity="0.9"
            p={[4, 4, 0]}
          />
          <Image
            src="https://res.cloudinary.com/wild-creative/image/upload/v1672282266/Logo_frr3oz.png"
            width="100px"
            opacity="0.9"
            p={[4, 4, 0]}
          />
          <Image
            src="https://res.cloudinary.com/wild-creative/image/upload/v1672282266/TNM_mhtbb0.svg"
            width="100px"
            opacity="0.9"
            p={[4, 4, 0]}
          />
        </HStack>
      </VStack>
      <Image
        position="absolute"
        top="-200px"
        right={["-260px", "-260px", "-460px", "-450px", "-360px", "-220px"]}
        width="800px"
        zIndex="0"
        src="https://www.semrush.com/static/images/shape_top.d442ba0d2be9d61ed937084319a21b3a.svg"
      />
      <Image
        position="absolute"
        bottom={["-250px", "-250px", "-250px", "-250px", "-400px", "-400px"]}
        left={["-400px", "-390px", "-400px", "-350px", "-270px", "-280px"]}
        zIndex="0"
        w="750px"
        src="https://www.semrush.com/static/images/shape_left.76ab6e7ff801732bf052030f19491afb.svg"
      />
    </Section>
  )
}

export default Hero
