import React from "react"
import Layout from "gatsby-theme-wild-child/src/components/Layout"
import Form from "../gatsby-theme-wild-child/components/form/Form"
import Context from "../gatsby-theme-wild-child/components/form/Context"
import Sidebar from "../gatsby-theme-wild-child/components/form/Sidebar"
import Columns from "../gatsby-theme-wild-child/components/form/ui/Columns"
import Section from "../gatsby-theme-wild-child/components/form/ui/Section"
import Result from "../gatsby-theme-wild-child/components/form/Result"

function index() {
  return (
    <Layout>
      <Context>
        <Section>
          <Columns>
            <Form />
            <Sidebar />
            <Result />
          </Columns>
        </Section>
      </Context>
    </Layout>
  )
}

export default index

export const Head = () => <title>AI Business Plan Builder | Virtuzone</title>
