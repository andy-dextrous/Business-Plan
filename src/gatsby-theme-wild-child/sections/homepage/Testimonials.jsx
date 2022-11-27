import React from "react"
import SectionWrapper from "wildChildComponents/SectionWrapper"
import { Swiper, SwiperSlide } from "swiper/react"
import SwiperCore, { Navigation } from "swiper"
import "swiper/css"

import { FaChevronRight, FaChevronLeft } from "react-icons/fa"
import {
  HStack,
  IconButton,
  useBreakpointValue,
  Center,
  Box,
} from "@chakra-ui/react"
import Testimonial from "../../components/Testimonial"

SwiperCore.use([Navigation])

const testimonials = [
  {
    testimonial: `Before Wild Creative took over our SEO, we had been working
    with an agency that managed to generate over 900 pages of
    content. The result was massive keyword cannibalisation and a
    50% YoY drop in organic traffic. Since Andrew's team took
    over, we have witnessed a 300% YoY growth in organic traffic
    and over 500% growth in sales over $10,000 each from organic
    leads. We are now scaling our SEO and have increased our
    number of ranked keywords from 2,000 to 14,000 in just under a
    year. Our ROAS is over 10x and SEO has now added over a
    million dollars of revenue to our business each year. Any
    client who wants to grow their web presence would be lucky to
    work with these guys. Top shelf.`,
    author: "Damian Brennan",
    company: "Virtuzone",
    position: "Director of Marketing",
    avatar:
      "https://res.cloudinary.com/wild-creative/image/upload/c_scale,w_400/v1669512804/Screen_Shot_2022-11-27_at_11.33.11_am_p6wo4v.png",
  },

  {
    testimonial: `“Creating an incredible website from scratch is no easy task, but Andrew made it seem easy. From day one, he got the vision of the team and executed it effortlessly. As a result, we developed an innovative website, which is also an effective lead-generation machine. Our website is not only highly functional, but also extremely visually appealing, and we receive dozens of compliments on it regularly.

    A huge thanks to Andrew and the team for developing a website that is a perfect blend of contemporary design and performance. If  you want an experience like mine, I highly recommend WILD Creative!”
    `,
    author: "Ambia Hoque",
    company: "DUQE Free Zone",
    position: "Marketing Executive",
    avatar:
      "https://res.cloudinary.com/wild-creative/image/upload/c_scale,w_200/v1669511646/DUQE/Screen_Shot_2022-11-27_at_11.13.37_am_cm8fzt.png",
  },
  {
    testimonial: `“After 3 years of trying different web partners, we hired Andrew in 2020 to help us grow our eCommerce store and he has been an absolute game-changer. In short, he built us an incredible new website and got our products and categories ranking really high in Google. He also added a blog and has been growing our website’s traffic constantly. Even though we started small, revenue-wise, we are up by over 1170% since he started!”
    `,
    author: "Clinton Osbourne",
    company: "The Nut Market",
    position: "Owner",
    avatar:
      "https://res.cloudinary.com/wild-creative/image/upload/c_scale,w_200/v1669512493/Screen_Shot_2022-11-27_at_11.27.56_am_ak6bl2.png",
  },
  {
    testimonial: `“We were looking to build out our office leasing website and WILD Creative delivered our vision and exceeded all our expectations! 
    We had an idea of how we wanted the website to look and the basic functions but Andrew took the time to understand our company and challenged us to expand the vision with no limitations. The process was seamless and the best experience we have had developing a website. The framework Andrew uses really has no limitations giving us the flexibility to grow the website as our business grows which was a breath of fresh air. 100% recommend WILD Creative to anyone looking for web development work.”
    
    `,
    author: "David Nickson",
    company: "TACTIC",
    position: "Marketing Director",
    avatar:
      "https://res.cloudinary.com/wild-creative/image/upload/c_scale,w_400/v1669512679/Screen_Shot_2022-11-27_at_11.31.00_am_wmooeq.png",
  },
]

function Testimonials() {
  const showControls = useBreakpointValue([true, true, false])
  const [activeSlide, setActiveSlide] = React.useState(0)

  return (
    <SectionWrapper
      px={[5, 5, 0]}
      containerSize="xl"
      id="testimonials"
      _after={{
        content: '""',
        position: "absolute",
        bottom: "0",
        left: "0",
        right: "0",
        width: "100%",
        height: "50%",
        zIndex: "-1",
      }}
    >
      <Center
        width="full"
        height="100%"
        sx={{
          ".mySwiper": {
            width: "100%",
          },
        }}
        flexDir="column"
      >
        <HStack
          py={4}
          className={showControls ? "" : "hidden"}
          alignSelf={["center", "center", "flex-end"]}
        >
          <IconButton
            icon={<FaChevronLeft />}
            className="swiper-button-prev"
            bg="primary.default"
            _hover={{ opacity: 0.8 }}
            opacity="0.9"
            color="white"
            size="md"
          />
          <IconButton
            icon={<FaChevronRight />}
            className="swiper-button-next"
            opacity="0.8"
            bg="primary.default"
            _hover={{ opacity: "0.9" }}
            color="white"
            size="md"
          />
        </HStack>
        <Swiper
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          slidesPerView={1}
          spaceBetween={100}
          // breakpoints={breakpoints}
          grabCursor={true}
          className="mySwiper"
          loop={true}
          onSlideChange={({ activeIndex }) => setActiveSlide(activeIndex)}
        >
          {testimonials.map((t, i) => {
            return (
              <SwiperSlide key={i}>
                <Testimonial data={t} show={activeSlide + 1 === i} />
              </SwiperSlide>
            )
          })}
        </Swiper>
      </Center>
      <Box
        width={["100%", "100%"]}
        height="1px"
        bg="rgba(28, 29, 32, 0.175)"
        margin="auto"
      ></Box>
    </SectionWrapper>
  )
}

export default Testimonials
