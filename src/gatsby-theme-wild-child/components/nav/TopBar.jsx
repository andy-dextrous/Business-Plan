import { Flex, Text, Button } from "@chakra-ui/react"
import React from "react"
import { SocialFollows } from "wildComponents/social/SocialFollows"

function TopBar() {
  return (
    <Flex
      height="30px"
      width="100vw"
      bg="primary.default"
      display={["none", "none", "flex"]}
      px={20}
    >
      <SocialFollows flexDirection="row" />
    </Flex>
  )
}

export default TopBar
