import React from "react"
import { FormContext } from "../Context"
import { Text } from "@chakra-ui/react"

function Description({ id }) {
  const { answers } = React.useContext(FormContext)
  return <Text dangerouslySetInnerHTML={{ __html: answers[id]?.description }} />
}

export default Description
