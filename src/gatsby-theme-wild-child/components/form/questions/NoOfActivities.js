import React from "react"
import ControlButtons from "../ControlButtons"
import Panel from "../ui/Panel"
import Title from "../ui/Title"
import DropDown from "../ui/DropDown"
import { VStack } from "@chakra-ui/react"
import Description from "../ui/Description"

function NoOfActivities({ panelId, fieldId }) {
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

export default NoOfActivities
