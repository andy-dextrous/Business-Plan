import React from "react"

import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons"
import { FormContext } from "../Context"
import { Button, ButtonGroup } from "@chakra-ui/react"

function ControlButtons() {
  const {
    currentPanel,
    setCurrentPanel,
    setPreviousPanel,
    formState,
    setDirection,
    panels,
  } = React.useContext(FormContext)

  const isLastPanel = currentPanel === panels.length - 1
  const isFirstPanel = currentPanel === 0
  const formComplete = Object.values(formState).every(field => {
    return field.value !== ""
  })

  function handleBackButton() {
    setPreviousPanel(currentPanel)
    setCurrentPanel(q => q - 1)
    setDirection("down")
  }

  function handleNextButton() {
    setPreviousPanel(currentPanel)
    setCurrentPanel(q => q + 1)
    setDirection("up")
  }

  return (
    <ButtonGroup
      className="control"
      w={["full", "full", "unset"]}
      justifyContent={["space-between", "space-between", "flex-start"]}
      pt={[12, 12, 20]}
    >
      <Button
        leftIcon={<ArrowBackIcon />}
        onClick={handleBackButton}
        className="control"
        isDisabled={isFirstPanel}
      >
        Back
      </Button>
      <Button
        rightIcon={<ArrowForwardIcon />}
        className="control"
        onClick={handleNextButton}
        isDisabled={formState[currentPanel]?.value === "" || isLastPanel}
        display={isLastPanel ? "none" : "flex"}
      >
        Next
      </Button>
      <Button
        type="submit"
        className="control"
        isDisabled={!isLastPanel && !formComplete}
        display={!isLastPanel ? "none" : "flex"}
      >
        Submit
      </Button>
    </ButtonGroup>
  )
}

export default ControlButtons
