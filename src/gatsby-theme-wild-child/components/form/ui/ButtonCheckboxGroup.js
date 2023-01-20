import React, { useState } from "react"
import { FormContext } from "../Context"
import ButtonCheckbox from "./ButtonCheckbox"
import { Wrap } from "@chakra-ui/react"

function ButtonCheckboxGroup({ id }) {
  const { handleChange, answers } = React.useContext(FormContext)
  const [selected, setSelected] = useState([answers[id].value])

  function handleClick(e, option) {
    setSelected(e.target.dataset.value)
    handleChange(option, id)
  }

  return (
    <Wrap>
      {answers[id]?.options?.map(option => {
        return (
          <ButtonCheckbox
            key={option.value}
            value={option.value}
            label={option.label}
            selectedOptions={selected}
            handle={answers[id].handle}
            onClick={e => handleClick(e, option.value)}
          />
        )
      })}
    </Wrap>
  )
}

export default ButtonCheckboxGroup
