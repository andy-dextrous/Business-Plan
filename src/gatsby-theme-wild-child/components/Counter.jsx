import React from "react"
import { gsap } from "wildChildGsap"
import { useEffect } from "react"
import { HStack, VStack, Heading, Text, Image, Stack } from "@chakra-ui/react"

function Counter({
  brand = "Google",
  description = "100% Organic Bone Broth",
  logo = "https://res.cloudinary.com/wild-creative/image/upload/v1669181982/virtuzone-logo-1_m3w0dj.svg",
  end = 100000,
  details = "impressions",
  ...props
}) {
  const counter = React.useRef(0)

  useEffect(() => {
    gsap.effects.counter(counter.current, { end: 1000000, duration: 10 })
  }, [])

  return (
    <HStack
      spacing={8}
      borderBottom="1px dotted"
      borderColor="dark.default"
      py={12}
      w="full"
      justify="space-between"
    >
      <Stack direction="row" spacing={8}>
        <Image src={logo} alt="Google" width="auto" height="50px" />
        <VStack align="flex-start">
          <Heading color="dark.default" as="h4" fontSize={["lg"]}>
            {brand}
          </Heading>
          <Text color="dark.default">{description}</Text>
        </VStack>
      </Stack>
      <VStack align="flex-start">
        <Heading color="dark.default" fontSize="6xl">
          <span ref={counter}>0</span>+
        </Heading>
        <Text color="dark.default">{details}</Text>
      </VStack>
    </HStack>
  )
}

export default Counter
