import React, { useState } from "react"
import { Select } from "@chakra-ui/react"
import { data } from "../data.js"
import { FormContext } from "../Context.js"

function Language({ id }) {
  const { handleChange } = React.useContext(FormContext)
  const field = data[id]
  const [selection, setSelection] = useState("")

  return (
    <Select
      bg="dark.50"
      placeholder={field.placeholder || "Preferred language"}
      fontSize={["xs", "sm", "md"]}
      color={selection === "" ? "gray.400" : "inherit"}
      value={selection}
      size="lg"
      name={field.name}
      id={field.name}
      gridColumnStart={1}
      gridColumnEnd={2}
      isRequired={field.required}
      onChange={e => {
        setSelection(e.target.value)
        handleChange(e.target.value, id)
      }}
      rootProps={{ gridColumnStart: 1, gridColumnEnd: [3, 3, 2] }}
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

export default Language
