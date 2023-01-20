import { Heading } from "@chakra-ui/react"
import React from "react"
import { FormContext } from "../Context"

function Title({ id }) {
  const { answers } = React.useContext(FormContext)
  return <Heading textTransform="uppercase">{answers[id]?.label}</Heading>
}

export default Title
