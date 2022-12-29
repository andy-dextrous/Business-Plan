import {
  Center,
  Flex,
  Grid,
  GridItem,
  HStack,
  Text,
  useTheme,
} from "@chakra-ui/react"
import { Link } from "gatsby-theme-wild-child/src/components/Link"
import React, { useRef } from "react"
import Button from "wildComponents/Button"
import Logo from "../../assets/logos/Logo"

function TopMenu({ menu }) {
  const navRef = useRef()
  const { variables } = useTheme()

  return (
    <>
      <Flex
        as="header"
        alignItems="center"
        position="absolute"
        flexDirection="column"
        justifyContent="center"
        left="0"
        right="0"
        top="0px"
        w="100%"
        bg="dark.default"
        zIndex="sticky"
        h="70px"
        ref={navRef}
      >
        <Grid
          sx={{ flexDirection: "column", layerStyle: "fillSpace", gap: 12 }}
          templateColumns={[
            "repeat(3, 1fr)",
            "repeat(3, 1fr)",
            `${variables.logoWidth} 1fr auto`,
          ]}
          maxW={variables.contentMaxWidth}
          maxH={variables.navHeight}
        >
          <GridItem
            gridRow={["1/2", "1/2", "1/2"]}
            gridColumn={["2/3", "2/3", "1/2"]}
            py={0}
            px={[2, 2, 0]}
          >
            <Link to="/">
              <Logo height={variables.logoHeight} width="160px" color="white" />
            </Link>
          </GridItem>

          <GridItem sx={{ display: ["none", "none", "flex"] }}>
            {menu && (
              <HStack
                sx={{
                  justify: "flex-start",
                  align: "center",
                  h: "full",
                  spacing: 0,
                }}
              >
                {menu?.menuItems?.nodes
                  .filter(item => {
                    return !item.parentId
                  })
                  .map(item => {
                    return (
                      <Center
                        key={`nav-link-${item.id}`}
                        to={item.path}
                        cursor="pointer"
                        as={Link}
                        h="100%"
                        display="flex"
                        align="center"
                        justify="center"
                        transition="all 0.2s ease-in-out"
                      >
                        <Text
                          py={2}
                          paddingX={4}
                          fontSize="15px"
                          fontWeight="600"
                          color="white"
                          _hover={{ color: "primary.default" }}
                          className="menu-item-text"
                          mb={"0 !important"}
                        >
                          {item.label}
                        </Text>
                      </Center>
                    )
                  })}
              </HStack>
            )}
          </GridItem>
          <GridItem display={["none", "none", "flex"]} alignItems="center">
            <Button variant="teal" size="md">
              Get in touch
            </Button>
          </GridItem>
        </Grid>
      </Flex>
    </>
  )
}

export default TopMenu
