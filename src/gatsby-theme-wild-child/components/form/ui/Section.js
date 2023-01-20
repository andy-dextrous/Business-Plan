import React from "react"
import Section from "gatsby-theme-wild-child/src/components/Section"
import { FormContext } from "../Context"
import { useTheme } from "@chakra-ui/react"

function FormSection({ children }) {
  const variables = useTheme()
  const { sidebarMenuWidth } = variables
  const { submitted } = React.useContext(FormContext)
  return (
    <Section
      h={[
        submitted ? "100vh" : "150vh",
        submitted ? "100vh" : "150vh",
        "130vh",
        "100vh",
      ]}
      width={["100vw", "100vw", "100vw"]}
      className="light"
      withContainer={false}
      ml={[0, 0, 0, sidebarMenuWidth]}
      px="0"
    >
      {children}
    </Section>
  )
}

export default FormSection
