import React from "react"
import Content from "wildSections/Content"
import HeroLayout1 from "wildSections/hero/HeroLayout1"
import Main from "wildComponents/Main"

function DefaultPage(props) {
  return (
    <Main>
      <HeroLayout1 size="md" />
      <Content width="lg" data={props.data.wpPage.content} />
    </Main>
  )
}

export default DefaultPage
