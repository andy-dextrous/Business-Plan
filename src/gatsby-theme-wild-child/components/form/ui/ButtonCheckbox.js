import { Button, Checkbox } from "@chakra-ui/react"
import React from "react"

function ButtonCheckbox({
  value,
  label,
  selectedOptions,
  onClick,
  handle = "",
}) {
  return (
    <>
      <Button
        data-value={value}
        variant={
          selectedOptions.includes(value) ? "formActive" : "formInactive"
        }
        onClick={onClick}
      >
        {label}
      </Button>
      <Checkbox
        name={handle}
        value={value}
        visibility="hidden"
        position="absolute"
        isChecked={selectedOptions.includes(value)}
      />
    </>
  )
}

export default ButtonCheckbox
