/*** Dependencies ***/
import React from "react"
/*** Components ***/
import {
  Box,
  Heading,
  Text,
  Button,
  VStack,
  Flex,
  useTheme,
  ButtonGroup,
  useBreakpointValue,
} from "@chakra-ui/react"
import Logo from "../../assets/logos/Logo"
import { useEffect } from "react"

function Hero({ currentSection, fullPage }) {
  const theme = useTheme()
  const buttonSize = useBreakpointValue(["md", "md", "xl"])
  const { containerPaddingY, sectionPaddingX, contentMaxWidth } =
    theme.variables
  const videoRef = React.useRef()

  useEffect(() => {
    if (videoRef.current && currentSection === 0) {
      videoRef.current.play()
    }
  }, [currentSection])

  return (
    <Box className="section">
      <Flex
        as="section"
        width="100%"
        height="100vh"
        position="relative"
        pt={0}
        px={sectionPaddingX}
        justify="center"
        bg={["dark.default", "dark.default", "transparent"]}
      >
        <Box
          layerStyle="fillSpace"
          w={["100%", "100%", `container.xl`]}
          maxW={contentMaxWidth}
          py={containerPaddingY}
          ml="0"
        >
          <VStack
            height={["full", "full", "full"]}
            justifyContent="center"
            spacing={6}
            align={["center", "center", "flex-start"]}
            width={["100%", "100%", "50%"]}
          >
            <Heading
              as="h1"
              color="white"
              lineHeight="1"
              fontSize={["24px", "24px", "6xl"]}
              textAlign={["center", "center", "left"]}
            >
              We're too busy making our clients money to build a fancy
              website...
            </Heading>
            <Text
              color="white"
              fontSize={["18px", "18px", "22px"]}
              maxW="900px"
              lineHeight="1.2"
              textAlign={["center", "center", "left"]}
            >
              So we’ll keep it short. WILD Creative are experts in organic
              website growth, offering SEO that really works, content creation,
              link building and affiliate marketing. We work with clients
              worldwide to build, grow and scale their businesses online.
            </Text>
            <ButtonGroup
              spacing={4}
              justifyContent={["center", "center", "flex-start"]}
              width={["full", "full", "auto"]}
            >
              <Button
                variant="primary"
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
            <Box
              as="video"
              autoPlay
              muted
              loop
              position={["relative", "relative", "absolute"]}
              pt={8}
              height={["auto", "auto", "110%"]}
              width={["230px", "230px", "auto"]}
              objectFit="cover"
              ref={videoRef}
              display={["block", "block", "none"]}
            >
              <source
                src="https://res.cloudinary.com/wild-creative/video/upload/v1668733344/WILD1_1_alefay.mp4"
                type="video/mp4"
              />
            </Box>
          </VStack>
        </Box>

        <Box layerStyle="bgImage">
          <Box
            className="overlay"
            layerStyle="overlay"
            bg="linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 50%, rgba(0,0,0,0.1) 100%)"
            opacity="0.5"
            display={["none", "none", "block"]}
            padding={8}
          />
          <Box layerStyle="fillSpace" position="relative" overflow="hidden">
            <Box
              as="video"
              autoPlay
              muted
              loop
              position={["relative", "relative", "absolute"]}
              left={0}
              top="-22px"
              height={["auto", "auto", "110%"]}
              width={["200px", "200px", "auto"]}
              objectFit="cover"
              ref={videoRef}
            >
              <source
                src="https://res.cloudinary.com/wild-creative/video/upload/v1668733344/WILD1_1_alefay.mp4"
                type="video/mp4"
              />
            </Box>
          </Box>
        </Box>
      </Flex>
    </Box>
  )
}

export default Hero
