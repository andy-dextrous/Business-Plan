import React from "react"

import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons"
import { FormContext } from "./Context"
import { Button, ButtonGroup } from "@chakra-ui/react"

function ControlButtons({ id, finalId }) {
  const { currentQuestion, setCurrentQuestion, answers, setDirection, panels } =
    React.useContext(FormContext)
  const isLastPage = currentQuestion === panels.length - 1
  const isFirstPage = currentQuestion === 0
  const allQuestionsAnswered = Object.values(answers).every(answer => {
    return answer.value !== ""
  })

  function handleBackButton() {
    setCurrentQuestion(currentQuestion - 1)
    setDirection("down")
  }

  function handleNextButton() {
    setCurrentQuestion(currentQuestion + 1)
    setDirection("up")
  }

  return (
    <ButtonGroup
      className="control"
      w={["full", "full", "unset"]}
      justifyContent={["space-between", "space-between", "flex-start"]}
      pt={[12, 12, 40]}
    >
      <Button
        variant="light"
        leftIcon={<ArrowBackIcon />}
        onClick={handleBackButton}
        isDisabled={isFirstPage}
      >
        Back
      </Button>
      <Button
        rightIcon={<ArrowForwardIcon />}
        className="control"
        onClick={handleNextButton}
        isDisabled={answers[id]?.value === "" || isLastPage}
        display={isLastPage ? "none" : "flex"}
      >
        Next
      </Button>

      <Button
        type="submit"
        className="control"
        isDisabled={!isLastPage && !allQuestionsAnswered}
        display={!isLastPage ? "none" : "flex"}
      >
        Submit
      </Button>
    </ButtonGroup>
  )
}

export default ControlButtons
