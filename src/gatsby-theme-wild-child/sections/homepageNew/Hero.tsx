import {
  Button,
  FormControl,
  Heading,
  HStack,
  Image,
  Input,
  Stack,
  VStack,
} from "@chakra-ui/react"
import Section from "gatsby-theme-wild-child/src/components/Section"
import React from "react"
import Gear from "../../assets/icons/Gear"
import Pie from "../../assets/icons/Pie"

function Hero() {
  const pie = React.useRef(null)
  const formRef = React.useRef(null) as any
  const referrer = typeof window !== "undefined" ? window.location.href : ""
  const referrerRef = React.useRef() as any
  const [submitting, setSubmitting] = React.useState(false)
  const [submitted, setSubmitted] = React.useState(false)
  const [formHeight, setFormHeight] = React.useState(0)

  const isValidEmail = (email: string) => {
    const validEmailTest =
      /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g.test(
        email
      )
    return validEmailTest
  }

  function submitForm(e: any) {
    setSubmitting(true)
    setTimeout(() => {
      setSubmitting(false)
      setSubmitted(true)
      e.target.submit()
    }, 1000)
  }

  React.useEffect(() => {
    if (formRef.current) {
      setFormHeight(formRef.current.offsetHeight)
    }
  }, [])

  return (
    <Section
      bg="primary.default"
      h="auto"
      containerStyles={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
      zIndex="2"
      id="hero"
    >
      <iframe
        id="so-iframe"
        name="so-iframe"
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "1px",
          height: "1px",
          border: "none",
        }}
      />
      <VStack maxW="870px" pt={24} spacing={8} zIndex="1">
        <Heading as="h1" color="white" textAlign="center" maxW="650px">
          How much better could your SEO be?
        </Heading>
        <Heading
          as="h4"
          color="white"
          textAlign="center"
          fontWeight="500 !important"
          maxW="700px"
        >
          Virtuzone has partnered with one of the world’s best SEO & Content
          experts, Wild Creative, to offer an exclusive deal for all Virtuzone
          customers. If you want an action plan to take your website to the
          front page of Google, take advantage of our free Website SEO report.
        </Heading>
        {!submitted ? (
          <Stack
            as="form"
            direction={["column", "column", "row"]}
            align="stretch"
            w="full"
            spacing={3}
            pt={4}
            maxW="870px"
            className="so-widget-form"
            id="so1672873732"
            action="https://www.websiteauditserver.com/process-embedded.inc"
            // target="so-iframe"
            target="_blank"
            data-behaviour="be_in_touch"
            data-title="Website Report for "
            data-touch="Thank you for requesting a report. We'll be in touch shortly!"
            onSubmit={submitForm}
            ref={formRef}
          >
            <input
              id="so-typeso1672873732"
              type="hidden"
              name="type"
              value="pdf"
            />
            <input type="hidden" name="uid" value="47471" />
            <input type="hidden" name="behaviour" value="be_in_touch" />
            <input type="hidden" name="template" value="0" />
            <input
              type="hidden"
              name="referrer"
              value={referrer}
              ref={referrerRef}
            />
            <FormControl flex="4">
              <Input
                isRequired
                h="60px"
                minH="60px"
                rounded="md"
                type="text"
                name="domain"
                id="so-domainso1672873732"
                className="so-fieldso1672873732"
                placeholder="Website URL"
                data-validation="Please enter a correct Website URL. Only homepages are accepted."
              />
            </FormControl>
            <FormControl isInvalid={!isValidEmail} flex="4">
              <Input
                isRequired
                h="60px"
                minH="60px"
                rounded="md"
                type="text"
                name="email"
                id="so-emailso1672873732"
                className="so-fieldso1672873732"
                placeholder="Email"
                data-validation="Please enter a valid email address."
              />
            </FormControl>
            <Button
              flex="1.6"
              variant="secondary"
              h="60px"
              type="submit"
              id="so-submitso1672873732"
              value="Get your free report"
              isLoading={submitting}
            >
              Get Your Free Report
            </Button>
          </Stack>
        ) : (
          <VStack
            h={formHeight + "px"}
            bg="secondary.default"
            p={4}
            justify="center"
            rounded="lg"
          >
            <Heading color="white" as="h4">
              Please check your inbox for your free report.
            </Heading>
          </VStack>
        )}
      </VStack>
      <VStack w="full" spacing={6} zIndex="1" mt={24}>
        <Heading
          as="h6"
          color="gray.500"
          textAlign="center"
          fontSize="18px"
          textTransform="uppercase"
        >
          Trusted by
        </Heading>
        <HStack
          w="full"
          flexWrap="wrap"
          spacing={[0, 0, 10]}
          justifyContent="center"
          align="center"
        >
          <Image
            src="https://res.cloudinary.com/wild-creative/image/upload/v1672282266/VZ_duwczd.svg"
            width="140px"
            opacity="0.9"
            p={[4, 4, 0]}
          />
          <Image
            src="https://res.cloudinary.com/wild-creative/image/upload/v1672282266/DUQE_ozrd85.svg"
            width="100px"
            opacity="0.9"
            p={[4, 4, 0]}
          />
          <Image
            src="https://res.cloudinary.com/wild-creative/image/upload/v1672282266/Tactic_lefnet.svg"
            width="100px"
            opacity="0.9"
            p={[4, 4, 0]}
          />
          <Image
            src="https://res.cloudinary.com/wild-creative/image/upload/v1672282534/Aromas_Logo_gjxtgf.svg"
            width="100px"
            opacity="0.9"
            p={[4, 4, 0]}
          />
          <Image
            src="https://res.cloudinary.com/wild-creative/image/upload/v1672282266/Logo_frr3oz.png"
            width="100px"
            opacity="0.9"
            p={[4, 4, 0]}
          />
          <Image
            src="https://res.cloudinary.com/wild-creative/image/upload/v1672282266/TNM_mhtbb0.svg"
            width="100px"
            opacity="0.9"
            p={[4, 4, 0]}
          />
        </HStack>
      </VStack>

      <Gear
        position="absolute"
        top={["-270px", "-270px", "-200px", "-200px", "-200px", "-200px"]}
        right={["-550px", "-550px", "-460px", "-450px", "-360px", "-280px"]}
        width="700px"
        zIndex="0"
        color="primary.200"
      />
      <Pie
        position="absolute"
        bottom={["-100px", "-100px", "-250px", "-250px", "-400px", "-400px"]}
        left={["-400px", "-390px", "-400px", "-350px", "-390px", "-300px"]}
        zIndex="0"
        w={["500px", "500px", "500px", "700px", "700px", "700px"]}
        color="teal.400"
        id="pie"
        transform="rotate(120deg)"
        ref={pie}
      />
    </Section>
  )
}

export default Hero
