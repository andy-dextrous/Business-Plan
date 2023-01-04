import {
  Box,
  Heading,
  Image,
  Stack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs as ChakraTabs,
  Text,
  useTheme,
  VStack,
} from "@chakra-ui/react"
import { StaticImage } from "gatsby-plugin-image"
import Button from "gatsby-theme-wild-child/src/components/Button"
import Section from "gatsby-theme-wild-child/src/components/Section"
import React from "react"
import CloudGraph from "../../assets/icons/CloudGraph"

function Introduction() {
  const {
    variables: { rowSpacing },
  } = useTheme()

  return (
    <Section
      minH="100vh"
      id="audit"
      containerStyles={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
      _after={{
        content: '""',
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        bg: "primary.default",
        zIndex: -1,
        w: "100%",
        h: "60%",
      }}
    >
      <Heading color="white" textAlign="center" mb={8} zIndex="2">
        What's included in your report?
      </Heading>
      <Text textAlign="center" color="white" maxW="700px" mb={16} zIndex="2">
        Did you know that Google looks at over 200 different ranking factors
        when assessing your website? In order to hit the front page for all of
        your top keywords, you need to make sure that you score well on all of
        them. This comprehensive audit will provide all of the information you
        need to dominate search results.
      </Text>
      <Box
        w="full"
        bg="white"
        boxShadow="lg"
        zIndex="2"
        rounded="3xl"
        px={[6, 6, 16]}
        py={[6, 6, 8]}
      >
        <Stack spacing={[6, 6, 4]} direction={"column"}>
          <ChakraTabs isFitted variant="enclosed">
            <TabList
              border="unset"
              gap={[0, 0, "20px"]}
              flexWrap="nowrap"
              w={["auto", "auto"]}
              overflowX="scroll"
              overflowY="hidden"
            >
              <Tab
                _selected={{
                  borderBottomColor: "primary.default",
                  img: {
                    filter: "grayscale(0%)",
                    opacity: 1,
                  },
                }}
                _hover={{
                  img: {
                    filter: "grayscale(0%)",
                    opacity: 1,
                  },
                }}
                transition="all 0.2s ease-out"
                borderBottom="3px solid"
                borderBottomColor="gray.100"
                flexDirection="column"
                sx={{
                  img: {
                    filter: "grayscale(100%)",
                    transition: "all 0.2s ease-out",
                    opacity: 0.6,
                  },
                }}
                _focus={{
                  outline: "none",
                  boxShadow: "none !important",
                }}
              >
                {/* <CloudGraph width="80px" height="80px" /> */}
                <Image
                  src="https://res.cloudinary.com/wild-creative/image/upload/v1672792403/On-page_ft5htr.svg"
                  w={["30px", "30px", "60px"]}
                  h={["30px", "30px", "60px"]}
                />
                <Heading as="h4" fontSize="14px !important" py={2}>
                  On-page optimization
                </Heading>
              </Tab>
              <Tab
                _selected={{
                  borderBottomColor: "primary.default",
                  img: {
                    filter: "grayscale(0%)",
                    opacity: 1,
                  },
                }}
                _hover={{
                  img: {
                    filter: "grayscale(0%)",
                    opacity: 1,
                  },
                }}
                transition="all 0.2s ease-out"
                borderBottom="3px solid"
                borderBottomColor="gray.100"
                flexDirection="column"
                sx={{
                  img: {
                    filter: "grayscale(100%)",
                    transition: "all 0.2s ease-out",
                    opacity: 0.6,
                  },
                }}
                _focus={{
                  outline: "none",
                  boxShadow: "none !important",
                }}
              >
                {/* <CloudGraph width="80px" height="80px" /> */}
                <Image
                  src="https://res.cloudinary.com/wild-creative/image/upload/v1672792403/Links_j9ek6y.svg"
                  w={["30px", "30px", "60px"]}
                  h={["30px", "30px", "60px"]}
                />
                <Heading as="h4" fontSize="14px !important" py={2}>
                  Backlinks
                </Heading>
              </Tab>
              <Tab
                _selected={{
                  borderBottomColor: "primary.default",
                  img: {
                    filter: "grayscale(0%)",
                    opacity: 1,
                  },
                }}
                _hover={{
                  img: {
                    filter: "grayscale(0%)",
                    opacity: 1,
                  },
                }}
                transition="all 0.2s ease-out"
                borderBottom="3px solid"
                borderBottomColor="gray.100"
                flexDirection="column"
                sx={{
                  img: {
                    filter: "grayscale(100%)",
                    transition: "all 0.2s ease-out",
                    opacity: 0.6,
                  },
                }}
                _focus={{
                  outline: "none",
                  boxShadow: "none !important",
                }}
              >
                {/* <CloudGraph width="80px" height="80px" /> */}
                <Image
                  src="https://res.cloudinary.com/wild-creative/image/upload/v1672792401/Social_twq1dr.svg"
                  w={["30px", "30px", "60px"]}
                  h={["30px", "30px", "60px"]}
                />
                <Heading as="h4" fontSize="14px !important" py={2}>
                  User Experience
                </Heading>
              </Tab>
              <Tab
                _selected={{
                  borderBottomColor: "primary.default",
                  img: {
                    filter: "grayscale(0%)",
                    opacity: 1,
                  },
                }}
                _hover={{
                  img: {
                    filter: "grayscale(0%)",
                    opacity: 1,
                  },
                }}
                transition="all 0.2s ease-out"
                borderBottom="3px solid"
                borderBottomColor="gray.100"
                flexDirection="column"
                sx={{
                  img: {
                    filter: "grayscale(100%)",
                    transition: "all 0.2s ease-out",
                    opacity: 0.6,
                  },
                }}
                _focus={{
                  outline: "none",
                  boxShadow: "none !important",
                }}
              >
                {/* <CloudGraph width="80px" height="80px" /> */}
                <Image
                  src="https://res.cloudinary.com/wild-creative/image/upload/v1672792401/Speed_rd8nfy.svg"
                  w={["30px", "30px", "60px"]}
                  h={["30px", "30px", "60px"]}
                />
                <Heading as="h4" fontSize="14px !important" py={2}>
                  Technical Performance
                </Heading>
              </Tab>
              <Tab
                _selected={{
                  borderBottomColor: "primary.default",
                  img: {
                    filter: "grayscale(0%)",
                    opacity: 1,
                  },
                }}
                _hover={{
                  img: {
                    filter: "grayscale(0%)",
                    opacity: 1,
                  },
                }}
                transition="all 0.2s ease-out"
                borderBottom="3px solid"
                borderBottomColor="gray.100"
                flexDirection="column"
                sx={{
                  img: {
                    filter: "grayscale(100%)",
                    transition: "all 0.2s ease-out",
                    opacity: 0.6,
                  },
                }}
                _focus={{
                  outline: "none",
                  boxShadow: "none !important",
                }}
              >
                {/* <CloudGraph width="80px" height="80px" /> */}
                <Image
                  src="https://res.cloudinary.com/wild-creative/image/upload/v1672792401/UX_wvd1fo.svg"
                  w={["30px", "30px", "60px"]}
                  h={["30px", "30px", "60px"]}
                />
                <Heading as="h4" fontSize="14px !important" py={2}>
                  Social
                </Heading>
              </Tab>
            </TabList>

            <TabPanels>
              <TabPanel py={[8, 8, 20]}>
                <Stack
                  direction={["column", "column", "row"]}
                  spacing={rowSpacing}
                  align="center"
                  h="full"
                >
                  <VStack flex="1" align="flex-start" spacing={[8]}>
                    <Heading as="h3" textAlign={["center", "center", "left"]}>
                      On-page optimization
                    </Heading>
                    <Text>
                      The way you place content on each page can have a huge
                      effect on your rankings. This includes images, text, links
                      and html. Getting this right assists Google in crawling
                      your site and properly understanding why{" "}
                      <em>you are the go-to authority in your niche.</em> This
                      section of the report will tell you specific things to
                      optimize within your content for maximum ranking
                      potential.
                    </Text>

                    <Button to="#hero" size="sm" variant="secondary">
                      Get your free SEO audit.
                    </Button>
                  </VStack>
                  <StaticImage
                    src="https://res.cloudinary.com/wild-creative/image/upload/v1672794467/On_Page_k3xu4f.png"
                    alt="on-page SEO"
                    style={{ flex: "1" }}
                  />
                </Stack>
              </TabPanel>
              <TabPanel py={[8, 8, 20]}>
                <Stack
                  direction={["column", "column", "row"]}
                  spacing={rowSpacing}
                  align="center"
                  h="full"
                >
                  <VStack flex="1" align="flex-start" spacing={[8]}>
                    <Heading as="h3" textAlign={["center", "center", "left"]}>
                      Backlink Profile
                    </Heading>
                    <Text>
                      In SEO, backlinks are very important for establishing
                      E.A.T. (Expertise, Authority and Trust). Every time
                      another site links to you on the web, it counts as a "vote
                      of confidence" in your brand and what you have to offer.
                      This section of the report provides insight into your
                      backlink strength relative to that of your competitors. If
                      you have found that you struggle to rank well, despite
                      having great content, a weak backlink profile could
                      certainly be the reason why.
                    </Text>

                    <Button to="#hero" size="sm" variant="secondary">
                      Get your free SEO audit.
                    </Button>
                  </VStack>
                  <StaticImage
                    src="https://res.cloudinary.com/wild-creative/image/upload/v1672806252/Links_xwacuq.png"
                    alt="Backlinks"
                    style={{ flex: "1" }}
                  />
                </Stack>
              </TabPanel>
              <TabPanel py={[8, 8, 20]}>
                <Stack
                  direction={["column", "column", "row"]}
                  spacing={rowSpacing}
                  align="center"
                  h="full"
                >
                  <VStack flex="1" align="flex-start" spacing={[8]}>
                    <Heading as="h3" textAlign={["center", "center", "left"]}>
                      User Experience
                    </Heading>
                    <Text>
                      Google doesn't just look at your website when it decides
                      rankings,{" "}
                      <em>
                        it also watches what people are doing on your site.
                      </em>
                      It is becoming increasingly important to make sure that
                      your website users are having a good experience because
                      search engines give ranking boosts to websites that users
                      love. This report covers several things including page
                      speed, core web vitals, accessibility scores and more.
                    </Text>

                    <Button to="#hero" size="sm" variant="secondary">
                      Get your free SEO audit.
                    </Button>
                  </VStack>
                  <StaticImage
                    src="https://res.cloudinary.com/wild-creative/image/upload/v1672806751/User_wysjcb.png"
                    alt="User Experience"
                    style={{ flex: "1" }}
                  />
                </Stack>
              </TabPanel>
              <TabPanel py={[8, 8, 20]}>
                <Stack
                  direction={["column", "column", "row"]}
                  spacing={rowSpacing}
                  align="center"
                  h="full"
                >
                  <VStack flex="1" align="flex-start" spacing={[8]}>
                    <Heading as="h3" textAlign={["center", "center", "left"]}>
                      Technical SEO
                    </Heading>
                    <Text>
                      Along with the quality of your content, it is important
                      that your website's code is properly optimised. Search
                      engines are less likely to favour a website that has a lot
                      of technical errors on it and, while these may not be as
                      consequential to your rankings as content and links, in
                      SEO every little bit of optimization counts.
                    </Text>

                    <Button to="#hero" size="sm" variant="secondary">
                      Get your free SEO audit.
                    </Button>
                  </VStack>
                  <StaticImage
                    src="https://res.cloudinary.com/wild-creative/image/upload/v1672807080/Perf_lwahuq.png"
                    alt="Performance"
                    style={{ flex: "1" }}
                  />
                </Stack>
              </TabPanel>
              <TabPanel py={[8, 8, 20]}>
                <Stack
                  direction={["column", "column", "row"]}
                  spacing={rowSpacing}
                  align="center"
                  h="full"
                >
                  <VStack flex="1" align="flex-start" spacing={[8]}>
                    <Heading as="h3" textAlign={["center", "center", "left"]}>
                      Social Integration
                    </Heading>
                    <Text>
                      Yes, your social profiles matter to your SEO! It is
                      important to let Google know where else to find you
                      online. They use these signals to verify that you are who
                      you say you are. As with the link building report, the
                      social report helps you to understand how authoritative
                      Google perceives you to be.
                    </Text>

                    <Button to="#hero" size="sm" variant="secondary">
                      Get your free SEO audit.
                    </Button>
                  </VStack>
                  <StaticImage
                    src="https://res.cloudinary.com/wild-creative/image/upload/v1672807314/Social_g222fz.png"
                    alt="Social"
                    style={{ flex: "1" }}
                  />
                </Stack>
              </TabPanel>
            </TabPanels>
          </ChakraTabs>
        </Stack>
      </Box>
    </Section>
  )
}

export default Introduction
