import React from "react"

import ControlButtons from "../ControlButtons"
import Panel from "../ui/Panel"
import Phone from "../ui/Phone"
import Email from "../ui/Email"
import FirstName from "../ui/FirstName"
import LastName from "../ui/LastName"
import Nationality from "../ui/Nationality"
import HowDidYouHearAboutUs from "../ui/HowDidYouHearAboutUs"
import {
  FormControl,
  Heading,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react"

function PersonalDetails({ panelId, fieldId }) {
  const {
    firstName,
    lastName,
    email,
    countryCode,
    phone,
    nationality,
    howDidYouHearAboutUs,
  } = fieldId

  return (
    <Panel id={panelId}>
      <VStack align="flex-start" spacing={8} w="full">
        <Heading textTransform="uppercase">Contact Details</Heading>
        <Text>
          Please enter your details to get your business setup cost estimate on
          the next screen. We will also send the quote via email.
        </Text>
        <FormControl>
          <SimpleGrid
            spacing={4}
            columns={[1, 1, 2]}
            w={["100%", "100%", "80%"]}
          >
            <FirstName id={firstName} />
            <LastName id={lastName} />
            <Email id={email} />
            <Phone id={[countryCode, phone]} />
            <Nationality id={nationality} />
            <HowDidYouHearAboutUs id={howDidYouHearAboutUs} />
          </SimpleGrid>
        </FormControl>
      </VStack>
      <ControlButtons />
    </Panel>
  )
}

export default PersonalDetails
