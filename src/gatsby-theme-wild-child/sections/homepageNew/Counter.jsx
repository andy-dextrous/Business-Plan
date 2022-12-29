import { Heading, Image, Stack, Text, VStack } from "@chakra-ui/react"
import React, { useEffect } from "react"
import { gsap, ScrollTrigger } from "wildGsap"

function Counter({
  logo = "https://res.cloudinary.com/wild-creative/image/upload/c_scale,w_400/v1669512804/Screen_Shot_2022-11-27_at_11.33.11_am_p6wo4v.png",
  end = 100000,
  duration = 5,
  details = "impressions",
  children,
  value = "",
  increment = 1,
}) {
  const counter = React.useRef(0)

  useEffect(() => {
    let tl = gsap.timeline({ paused: true })
    let num = counter.current.innerText.replace(/\,/g, "") // remove commas
    counter.current.innerText = num

    tl.to(
      counter.current,
      {
        duration: duration,
        innerText: end,
        modifiers: {
          innerText: function (innerText) {
            return gsap.utils
              .snap(increment, innerText)
              .toString()
              .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
          },
        },
        ease: "Power2.easeOut",
      },
      0
    )

    ScrollTrigger.create({
      trigger: counter.current,
      start: "top bottom",
      toggleActions: "play none none none",
      onEnter() {
        tl.play()
      },
      onLeaveBack() {
        tl.restart()
        tl.pause()
        counter.current.innerText = 0
      },
    })
  }, [])

  return (
    <Stack
      spacing={[4, 4, 40]}
      borderBottom="1px dotted"
      borderColor="gray.300"
      py={12}
      w="full"
      justify="space-between"
      align="center"
      direction={["column-reverse", "column-reverse", "row"]}
    >
      <Stack
        direction={["column", "column", "row"]}
        align={["center", "center"]}
        spacing={8}
      >
        <Image src={logo} alt="Google" width="200px" />
        {children}
      </Stack>

      <VStack
        align={["center", "center"]}
        bg={["teal.default", "teal.default", "#c9edff"]}
        width="200px"
        h="200px"
        justify="center"
        rounded="full"
      >
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
