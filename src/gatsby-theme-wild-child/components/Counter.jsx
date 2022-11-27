import React from "react"
import { gsap, ScrollTrigger } from "wildChildGsap"
import { useEffect } from "react"
import { VStack, Heading, Text, Image, Stack } from "@chakra-ui/react"

function Counter({
  logo = "https://res.cloudinary.com/wild-creative/image/upload/c_scale,w_400/v1669512804/Screen_Shot_2022-11-27_at_11.33.11_am_p6wo4v.png",
  end = 100000,
  details = "impressions",
  children,
  value = "",
}) {
  const counter = React.useRef(0)

  useEffect(() => {
    gsap.effects.counter(counter.current, {
      end: end,
      duration: 10,
      scrollTrigger: { trigger: counter.current, start: "top 80%" },
    })
  }, [])

  return (
    <Stack
      spacing={40}
      borderBottom="1px dotted"
      borderColor="gray.300"
      py={12}
      w="full"
      justify="space-between"
      align="center"
      direction={["column", "column", "row"]}
    >
      <Stack
        direction={["column", "column", "row"]}
        align={["center", "center"]}
        spacing={8}
      >
        <Image
          src={logo}
          alt="Google"
          width="150px"
          height="150px"
          rounded="full"
        />
        {children}
      </Stack>

      <VStack align={["center", "center"]}>
        <Heading color="dark.default" fontSize="6xl">
          + <span ref={counter}>0</span>
          {value}
        </Heading>
        <Text color="dark.default">{details}</Text>
      </VStack>
    </Stack>
  )
}

export default Counter
