/*** Dependencies ***/
import React from "react"

/*** Components ***/
import Layout from "wildComponents/Layout"
import CTA from "../../sections/homepageGreen/CTA"
import Hero from "../../sections/homepageGreen/Hero"
import Packages from "../../sections/homepageGreen/Packages"
import Quote from "../../sections/homepageGreen/Quote"
import Testimonials from "../../sections/homepageGreen/Testimonials"
import TrackRecord from "../../sections/homepageGreen/TrackRecord"
import WhatWeDo from "../../sections/homepageGreen/WhatWeDo"
import WorkingWithUs from "../../sections/homepageGreen/WorkingWithUs"

function HomepagePage() {
  return (
    <Layout>
      <Hero />
      <Packages />
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
