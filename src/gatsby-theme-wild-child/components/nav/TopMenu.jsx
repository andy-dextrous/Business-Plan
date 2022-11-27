import React, { useRef } from "react"
import { Link as GatsbyLink } from "gatsby"
import Logo from "../../assets/logos/Logo"
import Button from "wildChildComponents/Button"
import { SmoothContext } from "wildChildComponents/SmoothWrapper"
import {
  Center,
  Flex,
  Grid,
  GridItem,
  HStack,
  Link,
  Text,
  useBreakpointValue,
  useTheme,
} from "@chakra-ui/react"

function TopMenu({ menu }) {
  const navRef = useRef()
  const { variables } = useTheme()
  const buttonSize = useBreakpointValue(["sm", "sm", "xl"])
  const smootherInstance = React.useContext(SmoothContext)

  function routeChange(path) {
    if (!document) return
    console.log(path)
    const target = document.querySelector(path)
    target && smootherInstance.scrollTo(path, true)
  }

  return (
    <>
      {/* <TopBar /> */}
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
        bg="transaprent"
        zIndex="sticky"
        h="90px"
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
            sx={{
              gridRow: ["1/2", "1/2", "1/2"],
              gridColumn: ["2/3", "2/3", "1/2"],
              py: 0,
              px: [2, 2, 0],
            }}
          >
            <GatsbyLink to="/">
              <Logo
                height={variables.logoHeight}
                width="160px"
                color="dark.default"
              />
            </GatsbyLink>
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
                        sx={{
                          h: "100%",
                          paddingX: 4,
                          display: "flex",
                          align: "center",
                          justify: "center",
                          transition: "all 0.2s ease-in-out",

                          "&[aria-current]": {
                            borderBottom: `3px solid`,
                          },
                        }}
                      >
                        <Text
                          sx={{
                            py: 2,
                            fontSize: "15px",
                            fontWeight: "semibold",
                            fontWeight: "600",
                            color: "dark.default",
                            _hover: {
                              color: "primary.default",
                            },
                            "&.menu-item-text": { mb: "0 !important" },
                          }}
                          className="menu-item-text"
                          onClick={() => routeChange(item.path)}
                        >
                          {item.label}
                        </Text>
                      </Center>
                    )
                  })}
              </HStack>
            )}
          </GridItem>
          {/* <GridItem
            gridRow={["1/2", "1/2", "1/2"]}
            gridColumn={["3/4", "3/4", "3/4"]}
            display="flex"
            justifyContent={["flex-end", "flex-end"]}
            alignItems={["center", "center"]}
            py={0}
            px={[2, 2, 0]}
            h="full"
            gap={6}
          >
            <Link
              as={GatsbyLink}
              to=""
              display={["none", "none", "block"]}
              _hover={{
                textDecoration: "none",
              }}
            >
              <Button to="/contact" size={buttonSize} variant="dark">
                Get Started
              </Button>
            </Link>
          </GridItem> */}
        </Grid>
      </Flex>
    </>
  )
}

export default TopMenu
