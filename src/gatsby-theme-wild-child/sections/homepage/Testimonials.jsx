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
} from "@chakra-ui/react"
import Testimonial from "../../components/Testimonial"
import { useEffect } from "react"

SwiperCore.use([Navigation])

const testimonials = [
  {
    testimonial: ` Before Wild Creative took over our SEO, we had been working
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
    color: "#CF3338",
    logo: "https://res.cloudinary.com/wild-creative/image/upload/v1669181982/virtuzone-logo-1_m3w0dj.svg",
  },
  {
    testimonial: ` Before Wild Creative took over our SEO, we had been working
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
    color: "#CF3338",
    logo: "https://res.cloudinary.com/wild-creative/image/upload/v1669181982/virtuzone-logo-1_m3w0dj.svg",
  },
  {
    testimonial: ` Before Wild Creative took over our SEO, we had been working
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
    color: "#CF3338",
    logo: "https://res.cloudinary.com/wild-creative/image/upload/v1669181982/virtuzone-logo-1_m3w0dj.svg",
  },
  {
    testimonial: ` Before Wild Creative took over our SEO, we had been working
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
    color: "#CF3338",
    logo: "https://res.cloudinary.com/wild-creative/image/upload/v1669181982/virtuzone-logo-1_m3w0dj.svg",
  },
  {
    testimonial: ` Before Wild Creative took over our SEO, we had been working
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
    color: "#CF3338",
    logo: "https://res.cloudinary.com/wild-creative/image/upload/v1669181982/virtuzone-logo-1_m3w0dj.svg",
  },
  {
    testimonial: ` Before Wild Creative took over our SEO, we had been working
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
    color: "#CF3338",
    logo: "https://res.cloudinary.com/wild-creative/image/upload/v1669181982/virtuzone-logo-1_m3w0dj.svg",
  },
]

// const breakpoints = {
//   320: { slidesPerView: 1 },
//   480: { slidesPerView: 2 },
//   1000: { slidesPerView: 3 },
// }

function Testimonials() {
  const showControls = useBreakpointValue([true, true, false])
  const [activeSlide, setActiveSlide] = React.useState(0)

  return (
    <SectionWrapper
      px="0"
      containerSize="xl"
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
          alignSelf="flex-end"
        >
          <IconButton
            icon={<FaChevronLeft />}
            className="swiper-button-prev"
            bg="dark.default"
            _hover={{ opacity: 0.8 }}
            opacity="0.9"
            color="white"
            size="md"
          />
          <IconButton
            icon={<FaChevronRight />}
            className="swiper-button-next"
            opacity="0.8"
            bg="dark.default"
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
    </SectionWrapper>
  )
}

export default Testimonials
