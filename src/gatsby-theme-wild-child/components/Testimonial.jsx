import React from "react"
import { Box, Heading, Text, VStack, HStack, Avatar } from "@chakra-ui/react"

function Testimonial({ data }) {
  const { testimonial, author, company, position, avatar } = data

  return (
    <Box width="auto" position="relative" rounded="2xl" overflow="hidden">
      <VStack
        h="auto"
        w="100%"
        bg="dark.default"
        rounded="2xl"
        overflow="hidden"
        py={12}
        px={[8, 8, 20]}
      >
        <Text
          fontSize={["18px", "18px", "16px", "16px", "20px", "22px"]}
          lineHeight={["30px", "30px", "26px", "22px", "28px", "30px"]}
          fontStyle="italic"
          color="white"
        >
          {testimonial}
        </Text>
        <HStack pl={4} spacing={4} align="center" alignSelf="flex-end">
          <Avatar src={avatar} name={author} size="xl" bg="white" />
          <Box>
            <Heading as="h4" fontSize="22px" color="white">
              {author}
            </Heading>
            <Heading fontWeight="300" as="h5" fontSize="18px" color="white">
              {`${company}, ${position}`}
            </Heading>
          </Box>
        </HStack>
      </VStack>
    </Box>
  )
}

export default Testimonial
