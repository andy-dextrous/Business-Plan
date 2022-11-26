import React from "react"
import HeroLayout1 from "wildChildSections/hero/HeroLayout1"
import ContactForm from "wildChildSections/ContactForm"
import Main from "wildChildComponents/Main"

function ContactPage() {
  return (
    <Main>
      <HeroLayout1 size="sm" />
      <ContactForm />
    </Main>
  )
}

export default ContactPage
