import React from "react"
import { FormContext } from "../Context"
import { Text } from "@chakra-ui/react"

function Description({ panelId }) {
  const { formState } = React.useContext(FormContext)
  return <Text>{formState[panelId]?.description || ""}</Text>
}

export default Description
