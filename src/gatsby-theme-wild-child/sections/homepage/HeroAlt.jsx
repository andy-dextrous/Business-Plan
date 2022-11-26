import React from "react"
import SectionWrapper from "wildChildComponents/SectionWrapper"
import {
  Stack,
  Text,
  Button,
  Box,
  VStack,
  Heading,
  useTheme,
  useBreakpointValue,
} from "@chakra-ui/react"

function HeroAlt() {
  const { variables } = useTheme()
  const videoRef = React.useRef()
  const buttonSize = useBreakpointValue(["md", "md", "xl"])

  React.useEffect(() => {
    videoRef.current.play()
  }, [])

  return (
    <SectionWrapper
      height="100vh"
      px="0"
      withContainer={false}
      _after={{
        content: '""',
        position: "absolute",
        top: "-50vw",
        left: "-30vw",
        backgroundColor: "#1b1b1b",
        backgroundImage:
          "linear-gradient(170deg,rgba(14,14,14,0) 85%,rgba(14,14,14,.98)),radial-gradient(circle farthest-corner at 10% 0,rgba(34,34,34,.98),rgba(14,14,14,.2) 14%,rgba(14,14,14,0) 48%);",
        zIndex: "-1",
        width: "100vw",
        height: "100vw",
        borderRadius: "50%",
        minHeight: "170vh",
      }}
    >
      <Stack
        height="full"
        w="full"
        justify="flex-end"
        align="center"
        direction={["row"]}
        spacing={40}
      >
        <VStack
          width="50%"
          height="500px"
          align="flex-start"
          maxW={`calc(${variables.contentMaxWidth} / 2)`}
          spacing={6}
        >
          <Heading
            as="h4"
            color="primary.default"
            fontSize="lg"
            textTransform="uppercase"
          >
            - Organic growth experts
          </Heading>
          <Heading as="h1" color="white" fontSize="6xl">
            We're too busy making our clients money to build a fancy website...
          </Heading>
          <Text
            color="white"
            fontSize={["18px", "18px", "20px"]}
            maxW="900px"
            lineHeight="1.2"
            textAlign={["center", "center", "left"]}
          >
            So we’ll keep it short. WILD Creative are experts in organic website
            growth, offering SEO that really works, content creation, link
            building and affiliate marketing. We work with clients worldwide to
            build, grow and scale their businesses online.
          </Text>
          <Button size={buttonSize}>See our work</Button>
        </VStack>
        <Box
          height="70vh"
          width="50vw"
          roundedLeft="50px"
          overflow="hidden"
          bg="blue"
          position="relative"
        >
          <Box
            as="video"
            autoPlay
            muted
            loop
            position={["absolute"]}
            top="-10%"
            height={["auto", "auto", "120%"]}
            width={["100%"]}
            objectFit="cover"
            ref={videoRef}
          >
            <source
              src="https://res.cloudinary.com/wild-creative/video/upload/v1668733344/WILD1_1_alefay.mp4"
              type="video/mp4"
            />
          </Box>
        </Box>
      </Stack>
    </SectionWrapper>
  )
}

export default HeroAlt
