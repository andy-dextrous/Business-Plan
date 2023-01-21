// Dependencies
import React, { useContext, useRef, useLayoutEffect } from "react"
import Cookies from "js-cookie"
import { FormContext } from "./Context"
import handleSubmit from "./handleSubmit"
import useAnimations from "./useAnimations.js"

// Components
import { Center, useTheme } from "@chakra-ui/react"
import BusinessName from "./panels/BusinessName"

function Form() {
  const formRef = useRef()
  const { variables } = useTheme()
  const { sectionPaddingX } = variables
  const { formState, setSubmitted } = useContext(FormContext)

  useAnimations(formRef) // Set up animations for all question changes

  function submitForm(e, formState) {
    handleSubmit(e, formState, setSubmitted)
    Cookies.remove("business-plan")
    Cookies.remove("current-question")
    Cookies.remove("previous-question")
  }

  useLayoutEffect(() => {
    const panels = formRef.current.querySelectorAll("[data-panel]")
    panels.forEach((panel, index) => {
      panel.setAttribute("data-slide-index", index)
    })
  }, [])

  return (
    <Center
      as="form"
      id="business-plan-builder"
      name="business-plan-builder"
      flex={[14, 14, 7]}
      position="relative"
      maxH={{ base: "unset", "2xl": "70vh", "3xl": "50vh" }}
      m={sectionPaddingX}
      ref={formRef}
      onSubmit={e => submitForm(e, formState)}
    >
      <BusinessName panelId={0} />
    </Center>
  )
}

export default Form
