import React, { useState } from "react"
import { Select } from "@chakra-ui/react"
import { data } from "../../data"
import { FormContext } from "../../Context"

function SelectField({ id }) {
  const { handleChange } = React.useContext(FormContext)
  const field = data[id]
  const [selection, setSelection] = useState("")

  return (
    <Select
      bg="gray.50"
      placeholder={field.placeholder || "Nationality"}
      fontSize={["xs", "sm", "md"]}
      color={selection === "" ? "gray.400" : "inherit"}
      gridColumnStart={[1]}
      gridColumnEnd={[3, 3, 2]}
      value={selection}
      size="lg"
      name={field.name}
      id={field.name}
      onChange={e => {
        setSelection(e.target.value)
        handleChange(e.target.value, id)
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
  )
}

export default SelectField
