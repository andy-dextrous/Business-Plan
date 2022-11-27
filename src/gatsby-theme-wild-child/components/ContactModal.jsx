import React from "react"
import GetForm from "wildChildComponents/forms/getForm/GetForm"
import ContactPageElements from "wildChildComponents/forms/getForm/ContactPageElements"
import {
  Heading,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  Stack,
  useBreakpointValue,
  VStack,
} from "@chakra-ui/react"
import Logo from "../assets/logos/Logo"
// import Agent from "./Agent"

function ContactModal({ data, disclosure }) {
  const { isOpen, onClose } = disclosure
  // const oneAgent = data?.propertyListing?.agents?.length === 1 || false
  const formSize = useBreakpointValue({ base: "lg", md: "full" })
  const buttonSize = useBreakpointValue({ base: "lg", md: "md" })

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      isCentered
      allowPinchZoom
      trapFocus={false}
      motionPreset="slideInBottom"
      size={formSize}
      scrollBehavior="inside"
    >
      <ModalOverlay bg={["rgba(0,0,0,0.6)"]} />
      <ModalContent
        maxW={["96vw", "96vw", "96vw", "1020px"]}
        maxH={["100vh", "100vh", "100vh", "unset"]}
        rounded={["xl", "xl", "2xl"]}
        overflow="hidden"
        boxShadow="none"
        sx={{
          minH: ["auto"],
          height: ["auto "],
        }}
      >
        <ModalCloseButton
          bg="secondary.default"
          color="white"
          _hover={{ bg: "secondary.800" }}
          rounded="50%"
          size={buttonSize}
        />
        <ModalBody p={0} display={["block", "block", "block", "flex"]}>
          <Stack
            direction={[
              "column-reverse",
              "column-reverse",
              "column-reverse",
              "row",
            ]}
            w="full"
          >
            <Stack
              direction={["column", "column", "row", "column", "column"]}
              flex={[0, 0, "1"]}
              justify="center"
              align="center"
              spacing={[2, 2, 8]}
              py={[4, 4, 8, 10, 16]}
              px={[4, 4, 6, 6, 8, 20]}
              bg={["unset", "unset", "secondary.default"]}
              display={["none", "none", "flex"]}
            >
              <Logo width="200px" height="auto" colorMode="white" />
            </Stack>
            <VStack
              align={["flex-start"]}
              flexGrow={5}
              justify="center"
              flex={[1, 1, 1, 1.7, 1.7, 2]}
              py={[10, 10, 8, 10, 16]}
              px={[4, 4, 6, 8, 10, 12]}
              h={["full", "full", "unset"]}
              maxW={["900px"]}
              alignSelf="center"
            >
              <Heading>Enquire now</Heading>
              <GetForm
                onSubmitCallback={onClose}
                formElements={<ContactPageElements data={data} />}
              />
            </VStack>
          </Stack>
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}

export default ContactModal
