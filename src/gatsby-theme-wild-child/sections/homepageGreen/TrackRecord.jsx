import {
  Heading,
  Image,
  List,
  ListItem,
  Stack,
  useTheme,
  VStack,
} from "@chakra-ui/react"
import React from "react"
import Section from "wildComponents/Section"
import Gear from "../../assets/icons/Gear"
import Pie from "../../assets/icons/Pie"
import Counter from "./Counter"

function Websites() {
  const {
    variables: { rowSpacing },
  } = useTheme()

  return (
    <Section
      containerSize="lg"
      id="case-studies"
      bg="primary.default"
      zIndex="1"
    >
      <Stack
        direction={["column", "column"]}
        spacing={rowSpacing}
        align="center"
        h="full"
        sx={{
          li: { color: "white" },
        }}
      >
        <VStack flex="1" align="flex-start" spacing={[4, 4, 18]}>
          <Heading w="full" textAlign="center" color="white">
            Our success is no fluke
          </Heading>
          <Counter
            end={500}
            details="growth in revenue"
            value="%"
            logo="https://res.cloudinary.com/wild-creative/image/upload/v1672282266/VZ_duwczd.svg"
          >
            <VStack align="flex-start">
              <List>
                <ListItem>Started: November 2021</ListItem>
                <ListItem>
                  Monthly impressions grown from 618K to 1.79M
                </ListItem>
                <ListItem>
                  Total Monthly clicks grown from 8.49K to 26.3K
                </ListItem>
                <ListItem>500% growth in revenue</ListItem>
                <ListItem>
                  Total ranking keywords grown from 2630 to 15k+
                </ListItem>
              </List>
            </VStack>
          </Counter>
          <Counter
            end={1170}
            details="growth in revenue"
            value="%"
            logo="https://res.cloudinary.com/wild-creative/image/upload/v1672282266/TNM_mhtbb0.svg"
          >
            <VStack align="flex-start">
              <List>
                <ListItem>Started: January 2020</ListItem>
                <ListItem>Monthly impressions grown from 121K to 341K</ListItem>
                <ListItem>
                  Total Monthly clicks grown from 216 to 11.3K
                </ListItem>
                <ListItem>1170% growth in online revenue</ListItem>
                <ListItem>
                  Total ranking keywords grown from 120 to 4.3k+
                </ListItem>
              </List>
            </VStack>
          </Counter>

          <Counter
            end={630}
            details="growth in revenue"
            value="%"
            logo="https://res.cloudinary.com/wild-creative/image/upload/v1672282534/Aromas_Logo_gjxtgf.svg"
          >
            <VStack align="flex-start">
              <List>
                <ListItem>Started: August 2019</ListItem>
                <ListItem>Monthly impressions grown from 20K to 341K</ListItem>
                <ListItem>
                  Total Monthly clicks grown from 1.2K to 11.2K
                </ListItem>
                <ListItem>630% growth in revenue</ListItem>
              </List>
            </VStack>
          </Counter>
        </VStack>
      </Stack>

      <Gear
        position="absolute"
        top="100px"
        width={["500px", "500px", "700px", "700px", "700px"]}
        right={["-400px", "-400px", "-500px", "-500px", "-500px"]}
        zIndex="-1"
        color="primary.200"
        // transform="rotate(100deg)"
      />
      <Pie
        position="absolute"
        bottom="-150px"
        width={["500px", "500px", "700px", "700px", "700px"]}
        left={["-400px", "-400px", "-500px", "-500px", "-500px"]}
        zIndex="-1"
        transform="rotate(30deg)"
        color="blue.default"
      />
    </Section>
  )
}

export default Websites
