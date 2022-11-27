/*** Dependencies ***/
import React from "react"

/*** Components ***/
import Hero3 from "../../sections/homepage/Hero3"
import WhatWeDo from "../../sections/homepage/WhatWeDo"
import WorkingWithUs from "../../sections/homepage/WorkingWithUs"
import TrackRecord from "../../sections/homepage/TrackRecord"
import Introduction from "../../sections/homepage/Introduction"
import Testimonials from "../../sections/homepage/Testimonials"
import Main from "wildChildComponents/Main"
import FeaturedSites from "../../sections/homepage/FeaturedSites"
import { Box } from "@chakra-ui/react"
import ContactModal from "../ContactModal"
import { useDisclosure } from "@chakra-ui/react"

function HomepagePage() {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Main>
      <ContactModal disclosure={{ isOpen, onOpen, onClose }} />
      <Hero3 disclosure={{ isOpen, onOpen, onClose }} />
      <Introduction />
      <WhatWeDo disclosure={{ isOpen, onOpen, onClose }} />
      <Box bgGradient="linear(to-b, white, #F4F4F4)">
        <Testimonials />
        <FeaturedSites />
        <TrackRecord />
        <WorkingWithUs disclosure={{ isOpen, onOpen, onClose }} />
      </Box>
    </Main>
  )
}

export default HomepagePage
