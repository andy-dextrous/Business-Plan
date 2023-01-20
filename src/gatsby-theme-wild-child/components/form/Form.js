// Dependencies
import React, { useRef, useContext } from "react"
import handleSubmit from "./handleSubmit"
import useAnimations from "./useAnimations.js"
import { FormContext } from "./Context"
import Cookies from "js-cookie"

// Components
import BusinessActivity from "./questions/BusinessActivity"
import NoOfActivities from "./questions/NoOfActivities"
import Shareholders from "./questions/Shareholders"
import VisaQuota from "./questions/VisaQuota"
import BusinessPlan from "./questions/BusinessPlan"
import LivesUAE from "./questions/LivesUAE"
import Turnover from "./questions/Turnover"
import HowSoon from "./questions/HowSoon"
import PersonalDetails from "./questions/PersonalDetails"
import { Center, useTheme } from "@chakra-ui/react"

function Form() {
  const formRef = useRef()
  const { variables } = useTheme()
  const { sectionPaddingX } = variables
  const { answers, setFinalAmount, setSubmitted } = useContext(FormContext)

  // ANIMATION HOOK
  useAnimations(formRef)

  function submitForm(e, answers) {
    const finalAmount =
      getAmountFromVisas(answers) + getAmountFromActivities(answers)
    setFinalAmount(finalAmount)
    handleSubmit(e, answers, setSubmitted, finalAmount)
    Cookies.remove("cost-calculator")
  }

  function getAmountFromVisas(answers) {
    switch (answers[4].value) {
      case "0":
        return 12500
      case "1":
        return 14250
      case "2":
        return 16000
      case "3":
        return 17750
      case "4":
        return 19500
      case "5":
        return 21250
      case "6":
        return 23000
      default:
        return 12500
    }
  }

  function getAmountFromActivities(answers) {
    switch (answers[2].value) {
      case "1":
        return 0
      case "2":
        return 0
      case "3":
        return 0
      case "4":
        return 1000
      case "5 or More":
        return 2000
      default:
        return 0
    }
  }

  return (
    <Center
      as="form"
      name="cost-calculator"
      id="cost-calculator"
      data-form-id="7f720725-6634-462d-a0f3-e52ab901b124"
      data-portal-id="21692856"
      flex={[14, 14, 7]}
      position="relative"
      maxH={{ base: "unset", "2xl": "70vh", "3xl": "50vh" }}
      m={sectionPaddingX}
      onSubmit={e => submitForm(e, answers)}
      ref={formRef}
    >
      <BusinessActivity panelId={0} fieldId={[0, 1]} />
      <NoOfActivities panelId={1} fieldId={2} />
      <Shareholders panelId={2} fieldId={3} />
      <VisaQuota panelId={3} fieldId={4} />
      <BusinessPlan panelId={4} fieldId={5} />
      <LivesUAE panelId={5} fieldId={6} />
      <Turnover panelId={6} fieldId={7} />
      <HowSoon panelId={7} fieldId={8} />
      <PersonalDetails
        panelId={8}
        fieldId={{
          firstName: 9,
          lastName: 10,
          email: 11,
          countryCode: 12,
          phone: 13,
          nationality: 14,
          howDidYouHearAboutUs: 15,
        }}
      />
    </Center>
  )
}

export default Form
