import React from "react"

import ControlButtons from "../ui/ControlButtons"
import Title from "../ui/Title"
import Description from "../ui/Description"
import Panel from "../ui/Panel"
import { FormContext } from "../Context"
import { VStack } from "@chakra-ui/react"
import InputField from "../ui/fields/Input"

function BusinessName({ panelId }) {
  const { formState } = React.useContext(FormContext)
  const panel = formState[panelId]

  return panel ? (
    <Panel>
      <VStack align="flex-start" spacing={8}>
        <Title panelId={panelId} />
        <Description panelId={panelId} />
        <InputField fieldName="business_name" panelId={panelId} />
      </VStack>
      <ControlButtons />
    </Panel>
  ) : null
}

export default BusinessName
