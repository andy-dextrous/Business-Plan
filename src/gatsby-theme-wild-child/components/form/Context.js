import React, { useCallback, useEffect, useState } from "react"
import { data } from "./data"
import Cookies from "js-cookie"

export const FormContext = React.createContext()

function Context({ children }) {
  // INITIAL FORM STATE
  const cookieData = Cookies.get("cost-calculator")
  let initialData
  // If prefilled data is available, merge it with the default data
  if (cookieData) {
    const preFilled = JSON.parse(cookieData)
    initialData = data.map(field => {
      const matchingProperty = Array.isArray(preFilled)
        ? preFilled.find(item => item.name === field.name)
        : false

      if (matchingProperty && matchingProperty.value !== "") {
        return { ...field, value: matchingProperty.value }
      } else {
        return field
      }
    })
    // If no prefilled data is available, use default data
  } else {
    initialData = data
  }

  // Using required property to determine current question because all required questions have their own page (except personal info)
  const upto = initialData
    .filter(field => {
      return field.required === true
    })
    .findIndex(field => {
      return field.value === "" && field.required === true
    })

  const [answers, setAnswers] = useState(initialData)
  const [currentQuestion, setCurrentQuestion] = useState(
    upto !== -1 ? (upto > 8 ? 8 : upto) : 0
  )
  const [direction, setDirection] = useState("up")
  const [submitted, setSubmitted] = useState(false)
  const [finalAmount, setFinalAmount] = useState("12,500")
  const [panels, setPanels] = useState([])

  // Callback to update global form state
  const handleChange = useCallback(
    (value, id) => {
      const updatedAnswers = [...answers]
      const filledData = updatedAnswers.map(answer => {
        return { name: answer.name, value: answer.value }
      })
      updatedAnswers[id].value = value
      setAnswers(updatedAnswers)
      Cookies.remove("cost-calculator")
      Cookies.set("cost-calculator", JSON.stringify(filledData), { expires: 7 })
    },
    [answers]
  )

  // Reset form after submit
  useEffect(() => {
    if (submitted) {
      Cookies.remove("cost-calculator")
      setCurrentQuestion(0)
      setDirection("up")
      setAnswers(data)
    }
  }, [submitted])

  useEffect(() => {
    setPanels(document.querySelectorAll("#cost-calculator [data-slide-index]"))
    console.log("success")
  }, [])

  return (
    <FormContext.Provider
      value={{
        answers,
        currentQuestion,
        setCurrentQuestion,
        direction,
        setDirection,
        handleChange,
        submitted,
        setSubmitted,
        finalAmount,
        setFinalAmount,
        panels,
      }}
    >
      {children}
    </FormContext.Provider>
  )
}

export default Context
