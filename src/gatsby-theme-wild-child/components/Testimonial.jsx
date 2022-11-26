import React, { useRef, useState } from "react"
import { gsap } from "wildChildGsap"
import {
  Box,
  Center,
  Heading,
  Text,
  VStack,
  HStack,
  Avatar,
} from "@chakra-ui/react"
import { useEffect } from "react"

function Testimonial({ data, show }) {
  const { testimonial, author, company, position, logo, color } = data
  const logoCover = useRef(null)

  const displayAnimation = useRef(null)

  // Load the reveal animation on the first render only. TODO - find a way to wait until DOM is ready before loading
  // useEffect(() => {
  //   if (displayAnimation.current) return

  //   const tl = gsap.timeline({ paused: true })
  //   tl.to(logoCover.current, {
  //     yPercent: -100,
  //     ease: "Power3.in",
  //     duration: 0.2,
  //   })
  //   displayAnimation.current = tl
  // }, [])

  // useEffect(() => {
  //   if (show) {
  //     displayAnimation.current.play()
  //   } else {
  //     displayAnimation.current.reverse()
  //   }
  // }, [show])

  return (
    <Box width="auto" position="relative" rounded="2xl" overflow="hidden">
      <VStack
        h="auto"
        w="100%"
        bg="dark.default"
        rounded="2xl"
        overflow="hidden"
        py={12}
        px={20}
      >
        <Text
          fontSize={["22px", "18px", "16px", "16px", "20px", "22px"]}
          lineHeight={["30px", "30px", "26px", "22px", "28px", "30px"]}
          fontStyle="italic"
          color="white"
        >
          {testimonial}
        </Text>
        <HStack pl={4} spacing={4} align="center" alignSelf="flex-end">
          <Avatar
            src="https://damobrennan.com/wp-content/uploads/2022/10/damo.jpg"
            name={author}
            size="xl"
          />
          <Box>
            <Heading as="h4" fontSize="22px" color="white">
              {author}
            </Heading>
            <Heading fontWeight="300" as="h5" fontSize="18px" color="white">
              {`${company}, ${position}`}
            </Heading>
          </Box>
        </HStack>
      </VStack>
      {/* <Center
        layerStyle="fillSpaceAbsolute"
        top="0"
        left="0"
        bg={color}
        mt="unset"
        ref={logoCover}
      >
        <Image src={logo} alt={company} width="300px" />
      </Center> */}
    </Box>
  )
}

export default Testimonial
