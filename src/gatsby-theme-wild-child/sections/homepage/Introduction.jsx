import React from "react"
import SectionWrapper from "wildChildComponents/SectionWrapper"
import { Stack, Text, Box, VStack, Heading, Divider } from "@chakra-ui/react"
import { gsap, ScrollTrigger, SplitText } from "wildChildGsap"

function Introduction() {
  const titleRef = React.useRef(null)
  const timelineRef = React.useRef(null)

  React.useLayoutEffect(() => {
    const split = new SplitText(titleRef.current, { type: "lines" })

    const tl = gsap.timeline({
      paused: true,
    })

    tl.fromTo(
      split.lines,
      {
        opacity: 0,
        y: 80,
      },
      {
        duration: 1,
        ease: "Power3.easeOut",
        transformOrigin: "bottom",
        stagger: 0.1,
        opacity: 1,
        y: 0,
      }
    )

    timelineRef.current = tl
  }, [])

  React.useEffect(() => {
    ScrollTrigger.create({
      trigger: titleRef.current,
      start: "top 60%",
      onEnter: () => {
        timelineRef.current.play()
      },
      onLeaveBack: () => {
        timelineRef.current.reverse()
      },
    })
  }, [])

  return (
    <SectionWrapper>
      <Stack
        direction={["column", "column", "row"]}
        spacing={[8, 8, 20]}
        pb={[12, 12, 20]}
      >
        <Box flex={[1, 1, 2]}>
          <Heading
            as="h4"
            fontWeight="400"
            fontSize={["3xl", "3xl", "5xl"]}
            ref={titleRef}
          >
            We build and grow websites using an advanced set of marketing
            strategies that keep both your visitors and the search engine gods
            happy.
          </Heading>
        </Box>
        <VStack
          flex="1"
          align="flex-start"
          spacing={20}
          maxW={["100%", "100%", "250px"]}
        >
          <Text>
            Our experience as SEO experts, designers and web developers puts us
            in a unique position to get organic results that last.
          </Text>
          {/* <CircleLink data-speed="1.1" zIndex="2" /> */}
        </VStack>
      </Stack>
      <Box
        width={["100%", "100%"]}
        height="1px"
        bg="rgba(28, 29, 32, 0.175)"
        margin="auto"
      ></Box>
    </SectionWrapper>
  )
}

export default Introduction
