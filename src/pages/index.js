import React from "react"
import Layout from "gatsby-theme-wild-child/src/components/Layout"
import Section from "gatsby-theme-wild-child/src/components/Section"
import Form from "../gatsby-theme-wild-child/components/form/Form"

function index() {
  return (
    <Layout
      mainStyles={{
        maxHeight: "100vh",
        overflow: "hidden",
      }}
    >
      <Section h="100vh" w="100vw" bg="red" overflow="hidden">
        <Form />
      </Section>
    </Layout>
  )
}

export default index
