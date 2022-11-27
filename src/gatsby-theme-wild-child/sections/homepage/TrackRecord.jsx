import React from "react"
import SectionWrapper from "wildChildComponents/SectionWrapper"
import {
  Heading,
  useTheme,
  Stack,
  VStack,
  List,
  ListItem,
  Text,
} from "@chakra-ui/react"
import Counter from "../../components/Counter"

function Websites() {
  const {
    variables: { rowSpacing },
  } = useTheme()

  return (
    <SectionWrapper containerSize="lg" id="case-studies">
      <Stack
        direction={["column", "column", "row"]}
        spacing={rowSpacing}
        align="center"
        h="full"
      >
        <VStack flex="1" align="flex-start" spacing={18}>
          <Heading w="full" textAlign="center">
            Our success is no fluke
          </Heading>
          <Counter end={500} details="growth in sales" value="%">
            <VStack align="flex-start">
              <Heading color="gray.500" fontSize="xl">
                Client: Virtuzone
              </Heading>
              <List>
                <ListItem>Started: November 2021</ListItem>
                <ListItem>
                  Monthly impressions grown from 618K to 1.79M
                </ListItem>
                <ListItem>
                  Total Monthly clicks grown from 8.49K to 26.3K
                </ListItem>
                <ListItem>500% growth in sales</ListItem>
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
            logo="https://res.cloudinary.com/wild-creative/image/upload/c_scale,w_200/v1669512493/Screen_Shot_2022-11-27_at_11.27.56_am_ak6bl2.png"
          >
            <VStack align="flex-start">
              <Heading color="gray.500" fontSize="xl">
                Client: The Nut Market
              </Heading>
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
            details="growth in sales"
            value="%"
            logo="https://res.cloudinary.com/wild-creative/image/upload/c_scale,q_auto,w_400/v1669515885/Screen_Shot_2022-11-27_at_12.24.38_pm_xc6kzz.png"
          >
            <VStack align="flex-start">
              <Heading color="gray.500" fontSize="xl">
                Client: Aromas Tea & Coffee
              </Heading>
              <List>
                <ListItem>Started: August 2019</ListItem>
                <ListItem>Monthly impressions grown from 20K to 341K</ListItem>
                <ListItem>
                  Total Monthly clicks grown from 1.2K to 11.2K
                </ListItem>
                <ListItem>630% growth in sales</ListItem>
              </List>
            </VStack>
          </Counter>
        </VStack>
      </Stack>
    </SectionWrapper>
  )
}

export default Websites
