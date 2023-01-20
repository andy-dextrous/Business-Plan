import React from "react"

import ControlButtons from "../ControlButtons"
import Title from "../ui/Title"
import Panel from "../ui/Panel"
import { VStack } from "@chakra-ui/react"
import DropDown from "../ui/DropDown"
import Description from "../ui/Description"

function Shareholders({ panelId, fieldId }) {
  return (
    <Panel id={panelId}>
      <VStack align="flex-start" spacing={8}>
        <Title id={fieldId} />
        <Description id={fieldId} />
        <DropDown id={fieldId} />
      </VStack>
      <ControlButtons id={fieldId} />
    </Panel>
  )
}

export default Shareholders
