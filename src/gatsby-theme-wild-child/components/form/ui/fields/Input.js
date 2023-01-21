import React from "react"
import { Input } from "@chakra-ui/react"
import { FormContext } from "../../Context"

function InputField({ panelId, fieldName, ...styles }) {
  const { handleChange, formState } = React.useContext(FormContext)
  const panel = formState[panelId]
  const field = panel?.fields?.find(field => field.name === fieldName)

  if (!panel)
    throw new Error(`InputField: panel ${panelId} not found in formState`)

  if (!field)
    throw new Error(
      `InputField: field ${fieldName} not found in panel ${panelId}`
    )

  return field ? (
    <Input
      placeholder={field.placeholder || ""}
      gridColumnStart={1}
      gridColumnEnd={[3, 3, 2]}
      size="lg"
      fontSize={["xs", "sm", "md"]}
      bg="gray.50"
      border="none"
      value={field.value}
      id={field.name}
      name={field.name}
      onChange={e => {
        handleChange(e.target.value, fieldName, panelId)
      }}
      isRequired={field.required}
      _placeholder={{ color: "gray.400" }}
      {...styles}
    />
  ) : null
}

export default InputField
