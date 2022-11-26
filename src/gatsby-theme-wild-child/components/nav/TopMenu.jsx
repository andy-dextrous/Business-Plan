import React, { useEffect, useRef } from "react"
import { Link as GatsbyLink } from "gatsby"
import Logo from "../../assets/logos/Logo"
import { ScrollTrigger, gsap } from "wildChildGsap"
import {
  Box,
  Center,
  Flex,
  Grid,
  GridItem,
  HStack,
  Link,
  Text,
  useBreakpointValue,
  useTheme,
  VStack,
} from "@chakra-ui/react"
import TopBar from "./TopBar"
import Button from "wildChildComponents/Button"

function TopMenu({ menu }) {
  const navRef = useRef()
  const { variables } = useTheme()
  const buttonSize = useBreakpointValue(["sm", "sm", "xl"])

  // useEffect(() => {
  //   if (!!navRef.current) {
  //     ScrollTrigger.create({
  //       trigger: navRef.current,
  //       start: "bottom top",
  //       onEnter: () => {
  //         gsap.fromTo(
  //           navRef.current,
  //           { top: -80 },
  //           {
  //             position: "absolute",
  //             top: 0,
  //             duration: 0.3,
  //             ease: "power2.out",
  //           }
  //         )
  //       },
  //       onLeaveBack: () => {
  //         gsap.to(navRef.current, { position: "relative", top: 0 })
  //       },
  //     })
  //   }
  // }, [])

  return (
    <>
      {/* <TopBar /> */}
      <Flex
        as="header"
        alignItems="center"
        // borderBottom="1px solid"
        // borderColor="grayBackground.default"
        position="absolute"
        flexDirection="column"
        // boxShadow="sm"
        justifyContent="center"
        left="0"
        right="0"
        top="0px"
        w="100%"
        bg="transaprent"
        zIndex="sticky"
        h="90px"
        // px={variables.sectionPaddingX}
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
              <Logo height={variables.logoHeight} width="160px" />
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
                    return !item.childItems.nodes.length ? (
                      <Center
                        as={GatsbyLink}
                        key={`nav-link-${item.id}`}
                        to={item.path}
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
                        >
                          {item.label}
                        </Text>
                      </Center>
                    ) : (
                      <Center
                        key={`nav-link-${item.id}`}
                        position="relative"
                        h="full"
                        _hover={{
                          ".dropdown-menu": {
                            visibility: "visible",
                          },
                        }}
                      >
                        <Center
                          as={GatsbyLink}
                          to={item.path}
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
                              color: "dark.default",
                              "&.menu-item-text": { mb: "0 !important" },
                              _hover: {
                                color: "primary.default",
                              },
                            }}
                            className="menu-item-text"
                          >
                            {item.label}
                          </Text>
                        </Center>
                        <Box
                          sx={{
                            position: "absolute",
                            bgGradient:
                              "linear(67.1deg,dark.default 7.3%, #090909 89.3%)",
                            borderColor: "dark.700",
                            visibility: "hidden",
                            roundedBottom: "md",
                            borderTop: "1px solid",
                            top: "100%",
                            left: 0,
                            boxShadow: "sm",
                          }}
                          className="dropdown-menu"
                        >
                          <VStack
                            as="nav"
                            sx={{
                              minW: "300px",
                              alignItems: "flex-start",
                              py: 6,
                              px: 4,
                            }}
                          >
                            {item.childItems.nodes.map(child => {
                              return (
                                <Link
                                  as={GatsbyLink}
                                  key={`nav-link-${child.id}`}
                                  paddingX={4}
                                  to={child.path}
                                  position="relative"
                                  _hover={{
                                    ".dropdown-menu": {
                                      visibility: "visible",
                                    },
                                  }}
                                >
                                  <Text
                                    sx={{
                                      py: 2,
                                      fontSize: "15px",
                                      fontWeight: "semibold",
                                      color: "white",
                                      _hover: {
                                        bgGradient:
                                          "linear(to-r,secondary.default 0%,lightRed.600 50%, primary.600)",
                                        bgClip: "text",
                                      },
                                      "&.menu-item-text": {
                                        mb: "0 !important",
                                      },
                                    }}
                                  >
                                    {child.label}
                                  </Text>
                                </Link>
                              )
                            })}
                          </VStack>
                        </Box>
                      </Center>
                    )
                  })}
              </HStack>
            )}
          </GridItem>
          <GridItem
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
          </GridItem>
        </Grid>
      </Flex>
    </>
  )
}

export default TopMenu
