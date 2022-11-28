import React from "react"
import HeroLayout1 from "wildSections/hero/HeroLayout1"
import ContactForm from "wildSections/ContactForm"
import Main from "wildComponents/Main"

function ContactPage() {
  return (
    <Main>
      <HeroLayout1 size="sm" />
      <ContactForm />
    </Main>
  )
}

export default ContactPage
