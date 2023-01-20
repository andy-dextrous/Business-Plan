import React from "react"

import ControlButtons from "../ControlButtons"
import Panel from "../ui/Panel"
import Title from "../ui/Title"
import Description from "../ui/Description"
import ButtonCheckboxGroup from "../ui/ButtonCheckboxGroup"
import { VStack } from "@chakra-ui/react"

function BusinessPlan({ panelId, fieldId }) {
  return (
    <Panel id={panelId}>
      <VStack align="flex-start" spacing={8}>
        <Title id={fieldId} />
        <Description id={fieldId} />
        <ButtonCheckboxGroup id={fieldId} />
      </VStack>
      <ControlButtons id={fieldId} />
    </Panel>
  )
}

export default BusinessPlan
