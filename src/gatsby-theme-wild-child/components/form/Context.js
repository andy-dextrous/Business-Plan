import React, { useEffect, useState } from "react"
import { data } from "./data"
import Cookies from "js-cookie"

export const FormContext = React.createContext()

function Context({ children }) {
  const mergedData = getMergedData()
  const upto = getCurrentPanel()
  const prev = getPreviousPanel()
  const [formState, setFormState] = useState(mergedData) // Build global formState from default data merged with any pre-filled data
  const [currentPanel, setCurrentPanel] = useState(upto)
  const [previousPanel, setPreviousPanel] = useState(prev)
  const [direction, setDirection] = useState("up")
  const [submitted, setSubmitted] = useState(false)
  const [panels, setPanels] = useState([])

  // Callback to update global form state
  function handleChange(newValue, fieldName, panelId) {
    const updatedFormState = [...formState]
    const panel = updatedFormState[panelId]
    const field = panel.fields.find(field => field.name === fieldName)
    field.value = newValue
    setFormState(updatedFormState)
    Cookies.set("business-plan", JSON.stringify(updatedFormState), {
      expires: 7,
    })
  }

  // Reset form after submit
  useEffect(() => {
    if (submitted) {
      Cookies.remove("business-plan")
      setCurrentPanel(0)
      setDirection("up")
      setFormState(data)
    }
  }, [submitted])

  useEffect(() => {
    setPanels(
      document.querySelectorAll("#business-plan-builder [data-slide-index]")
    )
  }, [])

  useEffect(() => {
    Cookies.set("currentPanel", currentPanel, { expires: 7 })
    Cookies.set("previousPanel", previousPanel, { expires: 7 })
  }, [currentPanel])

  function getMergedData() {
    const cookieData = Cookies.get("business-plan")
    if (cookieData) {
      const preFilledQuestions = JSON.parse(cookieData)
      const updatedData = [...data]
      return updatedData.map(defaultField => {
        const matchingProperty = Array.isArray(preFilledQuestions)
          ? preFilledQuestions.find(field => field.name === defaultField.name)
          : false

        if (matchingProperty?.value !== "") {
          return { ...defaultField, value: matchingProperty?.value }
        } else {
          return defaultField
        }
      })
    } else {
      return data // Otherwise, use default data
    }
  }

  function getCurrentPanel() {
    const cookieData = Cookies.get("currentPanel")
    if (cookieData) {
      return parseInt(cookieData)
    } else {
      return 0
    }
  }

  function getPreviousPanel() {
    const cookieData = Cookies.get("previousPanel")
    if (cookieData) {
      return parseInt(cookieData)
    } else {
      return 0
    }
  }

  return (
    <FormContext.Provider
      value={{
        formState,
        currentPanel,
        setCurrentPanel,
        previousPanel,
        setPreviousPanel,
        direction,
        setDirection,
        handleChange,
        submitted,
        setSubmitted,
        panels,
      }}
    >
      {children}
    </FormContext.Provider>
  )
}

export default Context
