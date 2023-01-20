import React, { useState } from "react"
import { Input } from "@chakra-ui/react"
import { data } from "../data.js"
import { FormContext } from "../Context"

function FirstName({ id }) {
  const { handleChange } = React.useContext(FormContext)
  const field = data[id]
  const [firstName, setFirstName] = useState("")

  return (
    <Input
      placeholder={field.placeholder || "Enter your first name"}
      gridColumnStart={1}
      gridColumnEnd={[3, 3, 2]}
      size="lg"
      fontSize={["xs", "sm", "md"]}
      bg="dark.50"
      value={firstName}
      id={field.name}
      name={field.name}
      onChange={e => {
        setFirstName(e.target.value)
        handleChange(e.target.value, id)
      }}
      isRequired={field.required}
      _placeholder={{ color: "gray.400" }}
    />
  )
}

export default FirstName
