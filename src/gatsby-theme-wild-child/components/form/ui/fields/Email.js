import { FormControl, FormErrorMessage, Input } from "@chakra-ui/react"
import React, { useState } from "react"
import { data } from "../../data.js"
import { FormContext } from "../../Context"
import { useRef } from "react"

function Email({ id }) {
  const { handleChange } = React.useContext(FormContext)
  const field = data[id]
  const inputRef = useRef()
  const [email, setEmail] = useState("")
  const [editing, setEditing] = useState(false)

  const validEmailTest =
    /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g.test(
      email
    )

  const invalid = !validEmailTest && email !== "" && !editing

  return (
    <FormControl
      isInvalid={invalid}
      gridColumnStart={1}
      gridColumnEnd={[3, 3, 2]}
    >
      <Input
        placeholder={field.placeholder || "Email Address"}
        ref={inputRef}
        size="lg"
        bg="gray.50"
        fontSize={["xs", "sm", "md"]}
        id={field.name}
        name={field.name}
        value={email}
        border={invalid ? "1px solid red" : "none"}
        onFocus={() => {
          setEditing(true)
        }}
        onBlur={() => {
          setEditing(false)
        }}
        onChange={e => {
          setEmail(e.target.value)
          handleChange(e.target.value, id)
        }}
        isRequired={field.required}
      />

      <FormErrorMessage>Please include a valid email.</FormErrorMessage>
    </FormControl>
  )
}

export default Email
