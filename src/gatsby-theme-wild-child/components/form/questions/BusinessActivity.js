import React from "react"

import ControlButtons from "./../ControlButtons"
import Title from "../ui/Title"
import Description from "../ui/Description"
import Panel from "../ui/Panel"
import { FormContext } from "../Context"
import { Input, Select, VStack } from "@chakra-ui/react"

function BusinessActivity({ panelId, fieldId }) {
  const { handleChange, answers } = React.useContext(FormContext)

  return (
    <Panel id={panelId}>
      <VStack align="flex-start" spacing={8}>
        <Title id={panelId} />
        <Description id={fieldId[0]} />

        <Select
          variant="filled"
          bg="dark.50"
          size="lg"
          placeholder="Please Select"
          name={answers[fieldId[0]]?.name}
          value={answers[fieldId[0]]?.value}
          w={["full", "full", "50%"]}
          onChange={e => {
            handleChange(e.target.value, fieldId[0])

            if (e.target.value.includes("Other")) {
              handleChange("", fieldId[1])
            }
          }}
        >
          {answers[fieldId[0]]?.options?.map(option => {
            return (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            )
          })}
        </Select>

        <Input
          visibility={
            answers[fieldId[0]]?.value.includes("Other") ? "visible" : "hidden"
          }
          variant="filled"
          bg="dark.50"
          w={["full", "full", "50%"]}
          placeholder="Please specify"
          onChange={e => {
            handleChange(e.target.value, fieldId[1])
          }}
          value={answers[fieldId[1]]?.value}
        />
      </VStack>
      <ControlButtons id={fieldId[0]} />
    </Panel>
  )
}

export default BusinessActivity
