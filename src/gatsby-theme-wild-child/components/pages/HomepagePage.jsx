/*** Dependencies ***/
import React from "react"

/*** Components ***/
import Layout from "wildComponents/Layout"
import CTA from "../../sections/homepageNew/CTA"
import Hero from "../../sections/homepageNew/Hero"
import Introduction from "../../sections/homepageNew/Introduction"
import Quote from "../../sections/homepageNew/Quote"
import Testimonials from "../../sections/homepageNew/Testimonials"
import TrackRecord from "../../sections/homepageNew/TrackRecord"
import WhatWeDo from "../../sections/homepageNew/WhatWeDo"
import WorkingWithUs from "../../sections/homepageNew/WorkingWithUs"

function HomepagePage() {
  return (
    <Layout>
      <Hero />
      <Introduction />
      <Quote />
      <WhatWeDo />
      <WorkingWithUs />
      <Testimonials />
      <TrackRecord />
      <CTA />
    </Layout>
  )
}

export default HomepagePage
