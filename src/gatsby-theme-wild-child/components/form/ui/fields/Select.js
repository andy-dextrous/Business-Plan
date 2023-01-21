import React from "react"
import { Select } from "@chakra-ui/react"
import { FormContext } from "../../Context"

function SelectField({ panelId, fieldName }) {
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
    <Select
      placeholder={field.placeholder || "Nationality"}
      bg="gray.50"
      fontSize={["xs", "sm", "md"]}
      color={field.value === "" ? "gray.400" : "inherit"}
      gridColumnStart={[1]}
      gridColumnEnd={[3, 3, 2]}
      value={field.value}
      border="none"
      size="lg"
      name={field.name}
      id={field.name}
      onChange={e => {
        handleChange(e.target.value, fieldName, panelId)
      }}
    >
      {field.options.map(option => {
        return (
          <option key={option.value} value={option.value}>
            {option.value}
          </option>
        )
      })}
    </Select>
  ) : null
}

export default SelectField
