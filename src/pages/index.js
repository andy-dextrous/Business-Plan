import React from "react"
import Layout from "gatsby-theme-wild-child/src/components/Layout"
import Form from "../gatsby-theme-wild-child/components/form/Form"
import Context from "../gatsby-theme-wild-child/components/form/Context"
import Sidebar from "../gatsby-theme-wild-child/components/form/Sidebar"
import Columns from "../gatsby-theme-wild-child/components/form/ui/Columns"
import Section from "../gatsby-theme-wild-child/components/form/ui/Section"
import Cost from "../gatsby-theme-wild-child/components/form/Cost"

function index() {
  return (
    <Layout
      mainProps={{
        maxHeight: "100vh",
        overflow: "hidden",
      }}
    >
      <Context>
        <Section>
          <Columns>
            <Form />
            <Sidebar />
            <Cost />
          </Columns>
        </Section>
      </Context>
    </Layout>
  )
}

export default index
