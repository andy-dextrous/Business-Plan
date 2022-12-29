import React from "react"
import Content from "wildSections/Content"
import HeroLayout1 from "wildSections/hero/HeroLayout1"
import Layout from "wildComponents/Layout"

function DefaultPage(props) {
  return (
    <Layout>
      <HeroLayout1 size="md" />
      <Content width="lg" data={props.data.wpPage.content} />
    </Layout>
  )
}

export default DefaultPage
