import React from "react"
import { data } from "../data.js"
import PhoneInput from "react-phone-input-2"
import { FormContext } from "../Context"
import "react-phone-input-2/lib/style.css"

function Phone({ id }) {
  const { handleChange } = React.useContext(FormContext)
  return (
    <PhoneInput
      enableAreaCodes={false}
      enableSearch
      disableSearchIcon
      country="ae"
      onMount={(_, countryCode) => {
        handleChange(`+${countryCode.dialCode}`, id[0])
      }}
      onChange={(phone, countryCode) => {
        handleChange(`+${countryCode.dialCode}`, id[0])
        handleChange(phone.replace(countryCode.dialCode, ""), id[1])
      }}
      inputProps={{
        name: data[id[1]].name,
        id: data[id[1]].name,
        required: true,
        autoFocus: false,
      }}
      containerClass="phone-input"
      isValid={value => {
        const pattern =
          /^\s*(?:\+?(\d{1,3}))?([-. (]*(\d{3})[-. )]*)?((\d{3})[-. ]*(\d{2,4})(?:[-.x ]*(\d+))?)\s*$/gm
        return pattern.test(value)
      }}
    />
  )
}

export default Phone
