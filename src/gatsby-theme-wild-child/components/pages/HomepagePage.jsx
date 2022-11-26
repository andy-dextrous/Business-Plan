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

function HomepagePage() {
  return (
    <Main>
      <Hero3 />
      <Introduction />
      <WhatWeDo />
      <Box bgGradient="linear(to-b, white, #F4F4F4)">
        <Testimonials />
        <FeaturedSites />
        <TrackRecord />
        <WorkingWithUs />
      </Box>
    </Main>
  )
}

export default HomepagePage
