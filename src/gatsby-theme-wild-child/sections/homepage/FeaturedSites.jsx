import React, { useEffect } from "react"
import SectionWrapper from "wildChildComponents/SectionWrapper"
import { Box, HStack, Center, Image } from "@chakra-ui/react"
import { gsap, ScrollTrigger } from "wildChildGsap"

const images1 = [
  "https://res.cloudinary.com/wild-creative/image/upload/c_scale,q_auto,w_800/v1669200240/WILD%20Creative/Screen_Shot_2022-11-23_at_8.43.32_pm_jigosq.png",
  "https://res.cloudinary.com/wild-creative/image/upload/c_scale,q_auto,w_700/v1669200235/WILD%20Creative/Screen_Shot_2022-11-23_at_8.43.19_pm_zbveqi.png",
  "https://res.cloudinary.com/wild-creative/image/upload/c_scale,q_auto,w_700/v1669200172/WILD%20Creative/Screen_Shot_2022-11-23_at_8.42.33_pm_kgyvp3.png",
  "https://res.cloudinary.com/wild-creative/image/upload/c_scale,q_auto,w_700/v1669200150/WILD%20Creative/Screen_Shot_2022-11-23_at_8.38.15_pm_wzlfdr.png",
  "https://res.cloudinary.com/wild-creative/image/upload/c_scale,q_auto,w_700/v1669200147/WILD%20Creative/Screen_Shot_2022-11-23_at_8.40.19_pm_wds9qu.png",
  "https://res.cloudinary.com/wild-creative/image/upload/c_scale,q_auto:best,w_800/v1669200147/WILD%20Creative/Screen_Shot_2022-11-23_at_8.37.07_pm_qpgfm3.png",
  "https://res.cloudinary.com/wild-creative/image/upload/c_scale,q_auto:best,w_800/v1669201181/WILD%20Creative/Screen_Shot_2022-11-23_at_8.59.25_pm_pp7zb1.png",
]

const images2 = [
  "https://res.cloudinary.com/wild-creative/image/upload/c_scale,q_auto:best,w_800/v1669200146/WILD%20Creative/Screen_Shot_2022-11-23_at_8.40.31_pm_kdoeth.png",
  "https://res.cloudinary.com/wild-creative/image/upload/c_scale,q_auto:best,w_800/v1669200143/WILD%20Creative/Screen_Shot_2022-11-23_at_8.38.46_pm_yfboc5.png",
  "https://res.cloudinary.com/wild-creative/image/upload/c_scale,q_auto:best,w_800/v1669200124/WILD%20Creative/Screen_Shot_2022-11-23_at_8.41.11_pm_bsrga0.png",
  "https://res.cloudinary.com/wild-creative/image/upload/c_scale,q_auto:best,w_800/v1669200127/WILD%20Creative/Screen_Shot_2022-11-23_at_8.40.03_pm_czvr6d.png",
  "https://res.cloudinary.com/wild-creative/image/upload/c_scale,q_auto:best,w_800/v1669200124/WILD%20Creative/Screen_Shot_2022-11-23_at_8.36.57_pm_dol4tb.png",
  "https://res.cloudinary.com/wild-creative/image/upload/c_scale,q_auto:best,w_800/v1669200124/WILD%20Creative/Screen_Shot_2022-11-23_at_8.39.42_pm_eeyzud.png",
  "https://res.cloudinary.com/wild-creative/image/upload/c_scale,q_auto:best,w_800/v1669200137/WILD%20Creative/Screen_Shot_2022-11-23_at_8.37.40_pm_bj81z4.png",
]

function FeaturedSites() {
  const row1 = React.useRef(null)
  const row2 = React.useRef(null)

  useEffect(() => {
    gsap.fromTo(
      row1.current,
      {
        xPercent: -100,
      },
      {
        xPercent: 40,
        ease: "none",
        scrollTrigger: {
          trigger: row1.current,
          start: "top bottom",
          end: "bottom top",
          scrub: "0.5",
        },
      }
    )
    gsap.fromTo(
      row2.current,
      {
        xPercent: 60,
      },
      {
        xPercent: -80,
        ease: "none",
        scrollTrigger: {
          trigger: row2.current,
          start: "top bottom",
          end: "bottom top",
          scrub: "0.5",
        },
      }
    )
  }, [])

  return (
    <SectionWrapper>
      <HStack minW="250vw" ref={row1} mb={12} spacing={12}>
        {images1.map((image, i) => {
          return (
            <Center w="600px" h="400px" key={`row1-${i}`} p={8}>
              <Image src={image} w="full" h="full" objectFit="cover" />
            </Center>
          )
        })}
      </HStack>
      <HStack width="240vw" ref={row2} mb={12} spacing={12}>
        {images2.map((image, i) => {
          return (
            <Center w="600px" h="400px" key={`row2-${i}`} p={8}>
              <Image src={image} w="full" h="full" objectFit="cover" />
            </Center>
          )
        })}
      </HStack>
    </SectionWrapper>
  )
}

export default FeaturedSites
