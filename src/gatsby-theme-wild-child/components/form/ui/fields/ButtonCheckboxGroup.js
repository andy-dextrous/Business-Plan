import React, { useState } from "react"
import { FormContext } from "../Context"
import ButtonCheckbox from "./ButtonCheckbox"
import { Wrap } from "@chakra-ui/react"

function ButtonCheckboxGroup({ id }) {
  const { handleChange, formState } = React.useContext(FormContext)
  const [selected, setSelected] = useState([formState[id].value])

  function handleClick(e, option) {
    setSelected(e.target.dataset.value)
    handleChange(option, id)
  }

  return (
    <Wrap>
      {formState[id]?.options?.map(option => {
        return (
          <ButtonCheckbox
            key={option.value}
            value={option.value}
            label={option.label}
            selectedOptions={selected}
            handle={formState[id].handle}
            onClick={e => handleClick(e, option.value)}
          />
        )
      })}
    </Wrap>
  )
}

export default ButtonCheckboxGroup
