import React from "react"
import { gsap } from "wildChildGsap"
import { useEffect } from "react"
import { VStack, Heading, Text, Image, Stack } from "@chakra-ui/react"

function Counter({
  brand = "Google",
  description = "We specialise in getting graphs like the one on the right to happen. For this particular client, we helped:",
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
    <Stack
      spacing={8}
      borderBottom="1px dotted"
      borderColor="dark.default"
      py={12}
      w="full"
      justify="space-between"
      direction={["column", "column", "row"]}
    >
      <Stack direction={["column", "column", "row"]} spacing={8}>
        <Image src={logo} alt="Google" width="auto" height="50px" />
        <VStack align={["center", "center", "flex-start"]}>
          {/* <Heading color="dark.default" as="h4" fontSize={["lg"]}>
            {brand}
          </Heading> */}
          <Text color="dark.default">{description}</Text>
        </VStack>
      </Stack>
      <VStack align={["center", "center", "flex-start"]}>
        <Heading color="dark.default" fontSize="6xl">
          <span ref={counter}>0</span>+
        </Heading>
        <Text color="dark.default">{details}</Text>
      </VStack>
    </Stack>
  )
}

export default Counter
