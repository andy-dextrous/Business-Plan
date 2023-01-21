import React, { useEffect, useRef, useState } from "react"
import { gsap } from "gatsby-theme-wild-child/src/gsap"
import { FormContext } from "./Context"
import SidebarLink from "./ui/SidebarLink"
import {
  Box,
  Heading,
  Progress,
  Text,
  useTheme,
  VStack,
} from "@chakra-ui/react"

function Sidebar() {
  const { currentQuestion, formState } = React.useContext(FormContext)
  const [progress, setProgress] = useState(0)
  const { variables } = useTheme()
  const { sectionPaddingX } = variables
  const questionRef = useRef()

  useEffect(() => {
    gsap.fromTo(
      questionRef.current,
      {
        x: -30,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 0.05,
        ease: "Power2.in",
      }
    )
  }, [currentQuestion])

  useEffect(() => {
    const prevProgress = { x: progress } // So that we can use gsap to animate a variable
    const newProgress = Math.round(((currentQuestion + 1) / 9) * 100)
    gsap.to(prevProgress, {
      x: newProgress,
      ease: "Power2.in",
      onUpdate: () => {
        setProgress(prevProgress.x)
      },
    })
  }, [formState, currentQuestion])

  return (
    <Box
      flex={[1, 1, 3]}
      bg="gray.50"
      py={sectionPaddingX}
      px={[4, 4, "100px"]}
      position="relative"
    >
      <VStack w="full" align="flex-start" spacing={[4, 4, 4, 8]}>
        <Heading
          className="jumbo"
          opacity="1 !important"
          w="full"
          ref={questionRef}
          color="gray.100"
        >
          {`Q${currentQuestion + 1}`}
        </Heading>
        <Progress
          w="full"
          h="5px"
          value={progress}
          sx={{
            "div[role=progressbar]": {
              bg: "primary.default",
            },
          }}
        />
        <Heading
          as="h3"
          textTransform="uppercase"
          display={["none", "none", "block"]}
          color="dark.default"
        >
          Business Plan
        </Heading>
        <Text display={["none", "none", "block"]} color="dark.default">
          Virtuzone's Business Plan Builder powered by ChatGPT.
        </Text>
        <VStack
          align="flex-start"
          spacing={2}
          display={["none", "none", "block"]}
        >
          {formState
            .filter(answer => {
              return answer.value !== "" && answer.hideInSideBar !== true
            })
            .map(answer => {
              return answer.value ? <SidebarLink answer={answer} /> : <></>
            })}
        </VStack>
      </VStack>
    </Box>
  )
}

export default Sidebar
