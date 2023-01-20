import axios from "axios"
import Cookies from "js-cookie"
import { getParams } from "gatsby-theme-wild-child/src/utils/getParams"

export default function handleSubmit(e, answers, setSubmitted, cost) {
  e.preventDefault()
  // Collect form context data
  const isBrowser = typeof window != "undefined"
  const hutk = isBrowser ? Cookies.get("hubspotutk") : null
  const pageUri = isBrowser ? window.location.href : null

  const allFields = answers.map(answer => {
    return {
      name: answer.name,
      value:
        typeof answer.value === "string"
          ? answer.value
          : answer.value.join(", "),
    }
  })

  // All acceptable campaign params and their HubSpot field mapping
  const campaignParams = [
    { param: "utm_source", field: "utm_source__c" },
    { param: "utm_medium", field: "utm_medium__c" },
    { param: "utm_campaign", field: "utm_campaign__c" },
    { param: "utm_term", field: "utm_term__c" },
    { param: "fbclid", field: "facebook_click_id__c" },
    { param: "gclid", field: "gclid__c" },
  ]

  const paramNames = campaignParams.map(item => {
    return item.param
  })

  // Any acceptable campaign params that were found in the URL
  const validParams = getParams("campaignUrl").filter(param => {
    return paramNames.includes(param.name)
  })

  validParams.forEach(param => {
    const index = paramNames.indexOf(param.name)
    const fieldName = campaignParams[index].field
    const fieldIndex = allFields.findIndex(f => f.name === fieldName)
    if (fieldIndex > -1) {
      allFields[fieldIndex].value = param.value
    }
  })

  const webToLeadField = allFields.findIndex(field => {
    return field.name === "web_to_lead_url__c"
  })

  if (webToLeadField > -1) {
    allFields[webToLeadField].value = window.location.href.split("?")[0]
  } else {
    allFields.push({
      name: "web_to_lead_url__c",
      value: window.location.href.split("?")[0],
    })
  }

  const duqeCostField = allFields.findIndex(field => {
    return field.name === "duqe_cost_cc"
  })
  if (duqeCostField > -1) {
    allFields[duqeCostField].value = cost
  } else {
    allFields.push({ name: "duqe_cost_cc", value: cost })
  }

  const body = {
    submittedAt: Date.now(),
    fields: allFields,
    context: {
      hutk,
      pageUri,
    },
  }

  const data = JSON.stringify(body)

  const config = {
    method: "post",
    url: process.env.GATSBY_COST_CALCULATOR_ENDPOINT,
    headers: {
      "Content-Type": "application/json",
    },
    data: data,
  }

  // Post to HubSpot
  axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data))
      setSubmitted(true)
    })
    .catch(function (error) {
      alert(error)
      console.log(error)
    })

  //Backup to GetForm
  axios
    .post("https://getform.io/f/36dc7399-3568-4994-94a2-9e8138f5ea7d", {
      data: data,
    })
    .then(response => console.log(response))
    .catch(error => console.log(error))
}
