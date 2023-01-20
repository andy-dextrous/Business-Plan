import { Select } from "@chakra-ui/react"
import React from "react"
import { FormContext } from "../Context"

function DropDown({ id }) {
  const { handleChange, answers } = React.useContext(FormContext)
  return (
    <Select
      variant="filled"
      size="lg"
      bg="dark.50"
      placeholder="Please Select"
      name={answers[id].name}
      value={answers[id].value}
      w={["full"]}
      rootProps={{ w: ["full", "full", "50%"] }}
      onChange={e => {
        handleChange(e.target.value, id)
      }}
    >
      {answers[id]?.options?.map(option => {
        return (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        )
      })}
    </Select>
  )
}

export default DropDown
