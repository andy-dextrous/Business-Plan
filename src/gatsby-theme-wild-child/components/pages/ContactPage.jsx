import React from "react"
import HeroLayout1 from "wildSections/hero/HeroLayout1"
import ContactForm from "wildSections/ContactForm"
import Layout from "wildComponents/Layout"

function ContactPage() {
  return (
    <Layout>
      <HeroLayout1 size="sm" />
      <ContactForm />
    </Layout>
  )
}

export default ContactPage
