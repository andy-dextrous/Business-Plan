/*** Dependencies ***/
import React from "react"

/*** Components ***/
import Layout from "wildComponents/Layout"
import CTA from "../../sections/homepageNew/CTA"
import Hero from "../../sections/homepageNew/Hero"
import Packages from "../../sections/homepageNew/Packages"
import Quote from "../../sections/homepageNew/Quote"
import Testimonials from "../../sections/homepageNew/Testimonials"
import TrackRecord from "../../sections/homepageNew/TrackRecord"
import WhatWeDo from "../../sections/homepageNew/WhatWeDo"
import WorkingWithUs from "../../sections/homepageNew/WorkingWithUs"
import Included from "../../sections/homepageNew/Included"

function HomepagePage() {
  return (
    <Layout>
      <Hero />
      <Included />
      <Quote />
      <WhatWeDo />
      <WorkingWithUs />
      <Testimonials />
      <TrackRecord />
      <Packages />
      <CTA />
    </Layout>
  )
}

export default HomepagePage
