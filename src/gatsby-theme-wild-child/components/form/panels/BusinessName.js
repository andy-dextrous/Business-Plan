import React from "react"

import ControlButtons from "../ui/ControlButtons"
import Title from "../ui/Title"
import Description from "../ui/Description"
import Panel from "../ui/Panel"
import { FormContext } from "../Context"
import { VStack } from "@chakra-ui/react"
import Input from "../ui/fields/Input"
import Select from "../ui/fields/Select"
import TextArea from "../ui/fields/TextArea"

function BusinessName({ panelId }) {
  const { formState } = React.useContext(FormContext)
  const panel = formState[panelId]

  return panel ? (
    <Panel>
      <VStack align="flex-start" justify="flex-start" spacing={6} w="full">
        <Title panelId={panelId} />
        <Description panelId={panelId} />
        <Input fieldName="business_name" panelId={panelId} />
        <Select fieldName="business_type" panelId={panelId} />
        <TextArea fieldName="business_summary" panelId={panelId} />
      </VStack>
      <ControlButtons />
    </Panel>
  ) : null
}

export default BusinessName
