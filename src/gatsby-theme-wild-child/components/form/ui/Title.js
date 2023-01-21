import { Heading } from "@chakra-ui/react"
import React from "react"
import { FormContext } from "../Context"

function Title({ panelId }) {
  const { formState } = React.useContext(FormContext)
  const panel = formState[panelId]

  return <Heading textTransform="uppercase">{panel?.title || ""}</Heading>
}

export default Title
