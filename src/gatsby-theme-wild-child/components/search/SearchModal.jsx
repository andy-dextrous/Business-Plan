import React, { useRef } from "react"
import { SearchForm } from "wildChildComponents/search/SearchForm"

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Center,
  Box,
  Heading,
} from "@chakra-ui/react"

function SearchModal({ isOpen, onClose }) {
  const initialRef = useRef(null)

  return (
    <>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        size="full"
        zIndex={"modal"}
        initialFocusRef={initialRef}
      >
        <ModalOverlay />
        <ModalContent h="full" bg="dark.default" overflow="hidden">
          <Center h="full" position="relative" m={[0, 0, 40]}>
            <Box w={["100%", "100%", "60vw"]}>
              <ModalHeader>
                <Heading color="white"> Search site</Heading>
              </ModalHeader>
              <ModalCloseButton
                bg="primary.default"
                color="white"
                size="lg"
                _hover={{ bg: "primary.200", color: "white" }}
              />
              <ModalBody>
                <SearchForm ref={initialRef} />
              </ModalBody>
            </Box>
          </Center>
        </ModalContent>
      </Modal>
    </>
  )
}

export default SearchModal
