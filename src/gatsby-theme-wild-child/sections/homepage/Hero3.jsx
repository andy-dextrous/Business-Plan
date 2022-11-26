/* eslint-disable */

import React from "react"

import SectionWrapper from "wildChildComponents/SectionWrapper"
import * as THREE from "three"
import FOG from "vanta/dist/vanta.fog.min"
import { gsap, SplitText } from "wildChildGsap"
import {
  Box,
  VStack,
  Heading,
  Text,
  ButtonGroup,
  Button,
  useBreakpointValue,
} from "@chakra-ui/react"

function Hero3() {
  const vantaRef = React.useRef(null)
  const titleRef = React.useRef(null)
  const subtitleRef = React.useRef(null)
  const buttonRef = React.useRef(null)
  const heroTimeline = React.useRef(null)
  const buttonSize = useBreakpointValue(["sm", "sm", "xl"])

  React.useLayoutEffect(() => {
    const q = gsap.utils.selector(titleRef.current)
    const split = new SplitText(q("span"), { type: "lines" })

    const tl = gsap.timeline({
      paused: true,
      delay: 0.5,
    })

    tl.from(split.lines, {
      duration: 1.5,
      opacity: 0,
      y: 80,
      ease: "back",
      transformOrigin: "bottom",
      stagger: 0.1,
    })
      .from(
        subtitleRef.current,
        {
          duration: 0.6,
          opacity: 0,
          ease: "Power3.easeOut",
        },
        0.7
      )
      .from(
        buttonRef.current,
        {
          duration: 0.8,
          opacity: 0,
          ease: "Power3.easeOut",
        },
        1
      )

    heroTimeline.current = tl
  }, [])

  React.useEffect(() => {
    heroTimeline.current.play()
  }, [])

  React.useEffect(() => {
    FOG({
      el: vantaRef.current,
      THREE: THREE,
      mouseControls: !0,
      touchControls: !0,
      gyroControls: !1,
      minHeight: 200.0,
      minWidth: 200.0,
      highlightColor: 0xffeedd,
      midtoneColor: 0x0a9396,
      lowlightColor: 0x4a5be1,
      baseColor: 0xffffff,
      blurFactor: 0.83,
      speed: 2.0,
      zoom: 0.3,
    })
  }, [])

  return (
    <SectionWrapper w="100vw" h={["80vh", "80vh", "100vh"]} position="relative">
      <Box
        ref={vantaRef}
        width="100%"
        height="100%"
        left="0"
        top="0"
        position="absolute"
        zIndex="-1"
      ></Box>
      <VStack
        height={["full", "full", "full"]}
        justifyContent="center"
        zIndex="10"
        spacing={6}
        align={["center", "center", "flex-start"]}
        width={["100%", "100%"]}
      >
        <Heading
          as="h1"
          lineHeight="1"
          fontSize={["4xl", "4xl", "130px"]}
          fontWeight="700"
          textAlign={["center", "center", "left"]}
          ref={titleRef}
          overflow="hidden"
        >
          <Text as="span" overflow="hidden">
            We Are Organic
          </Text>
          <Text as="span" overflow="hidden">
            Growth Experts
          </Text>
        </Heading>
        <Text
          fontSize={["18px", "18px", "24px"]}
          maxW="900px"
          lineHeight="1.5"
          textAlign={["center", "center", "left"]}
          ref={subtitleRef}
        >
          WILD Creative are experts in organic website growth, offering SEO that
          really works, content creation, link building and affiliate marketing.
          We work with clients worldwide to build, grow and scale their
          businesses online.
        </Text>
        <ButtonGroup
          spacing={4}
          justifyContent={["center", "center", "flex-start"]}
          width={["full", "full", "auto"]}
          ref={buttonRef}
        >
          <Button
            variant="dark"
            onClick={() => fullPage.fullpageApi.moveTo(5)}
            size={buttonSize}
          >
            Say hi
          </Button>
          <Button
            variant="white"
            onClick={() => fullPage.fullpageApi.moveTo(2)}
            size={buttonSize}
          >
            See our work
          </Button>
        </ButtonGroup>
      </VStack>
    </SectionWrapper>
  )
}

export default Hero3
