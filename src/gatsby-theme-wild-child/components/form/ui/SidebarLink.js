import React from "react"
import { HStack, Tag, Text } from "@chakra-ui/react"

function SidebarLink({ answer }) {
  return (
    <HStack key={answer.handle} spacing={4}>
      <Text color="dark.default" fontSize="sm">
        {answer.handle}
      </Text>
      <Tag bg="primary.default" color="white">
        {answer.value}
      </Tag>
    </HStack>
  )
}

export default SidebarLink
