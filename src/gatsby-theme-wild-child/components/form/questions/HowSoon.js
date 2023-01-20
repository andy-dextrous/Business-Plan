import React from "react"

import ControlButtons from "../ControlButtons"
import Title from "../ui/Title"
import Panel from "../ui/Panel"
import DropDown from "../ui/DropDown"
import Description from "../ui/Description"
import { VStack } from "@chakra-ui/react"

function HowSoon({ fieldId, panelId }) {
  return (
    <Panel id={panelId}>
      <VStack align="flex-start" spacing={8} w="full">
        <Title id={fieldId} />
        <Description id={fieldId} />
        <DropDown id={fieldId} />
      </VStack>
      <ControlButtons id={fieldId} />
    </Panel>
  )
}

export default HowSoon
