import React from "react"
import Content from "wildChildSections/Content"
import HeroLayout1 from "wildChildSections/hero/HeroLayout1"
import Main from "wildChildComponents/Main"

function DefaultPage(props) {
  return (
    <Main>
      <HeroLayout1 size="md" />
      <Content width="lg" data={props.data.wpPage.content} />
    </Main>
  )
}

export default DefaultPage
