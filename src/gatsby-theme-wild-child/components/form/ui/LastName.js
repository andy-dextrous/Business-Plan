import React, { useState } from "react"
import { Input } from "@chakra-ui/react"
import { data } from "../data.js"
import { FormContext } from "../Context"

function LastName({ id }) {
  const { handleChange } = React.useContext(FormContext)
  const field = data[id]
  const [lastName, setLastName] = useState("")

  return (
    <Input
      placeholder={field.placeholder || "Enter your last name"}
      gridColumnStart={[1, 1, 2]}
      gridColumnEnd={[3, 3, 3]}
      size="lg"
      bg="dark.50"
      fontSize={["xs", "sm", "md"]}
      value={lastName}
      id={field.name}
      name={field.name}
      isRequired={field.required}
      onChange={e => {
        setLastName(e.target.value)
        handleChange(e.target.value, id)
      }}
    />
  )
}

export default LastName
