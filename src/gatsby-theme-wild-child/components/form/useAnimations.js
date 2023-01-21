import React, { useEffect, useLayoutEffect } from "react"
import { gsap } from "gatsby-theme-wild-child/src/gsap"
import { FormContext } from "./Context"

function useAnimations(ref) {
  const { currentQuestion, previousQuestion, direction } =
    React.useContext(FormContext)

  useLayoutEffect(() => {
    if (!ref.current) return
    console.log("change")
    const q = gsap.utils.selector(ref.current) // select elements within the form
    gsap.set(q(`[data-slide-index]`), { autoAlpha: 0 })
    gsap.set(q(`[data-slide-index="${currentQuestion}"]`), { autoAlpha: 1 })
  }, [ref])

  useEffect(() => {
    if (!ref.current) return
    const q = gsap.utils.selector(ref.current) // target panels within the form
    const navigatingBack = direction === "up"

    gsap.set(
      q(
        `[data-slide-index="${previousQuestion}"] .chakra-button__group.control`
      ),
      {
        autoAlpha: 0,
      }
    )
    gsap.to(q(`[data-slide-index="${previousQuestion}"]`), {
      yPercent: navigatingBack ? -150 : 150,
      autoAlpha: 0,
      ease: navigatingBack ? "sine.in" : "sine.out",
      duration: navigatingBack ? 0.3 : 0.5,
    })

    gsap.fromTo(
      q(`[data-slide-index="${currentQuestion}"]`),
      {
        yPercent: navigatingBack ? 150 : -150,
        autoAlpha: 0,
      },
      {
        ease: navigatingBack ? "sine.in" : "sine.out",
        duration: navigatingBack ? 0.4 : 0.5,
        yPercent: 0,
        autoAlpha: 1,
        immediateRender: false,
      }
    )
    gsap.to(
      q(
        `[data-slide-index="${currentQuestion}"] .chakra-button__group.control`
      ),
      {
        autoAlpha: 1,
        delay: 0.4,
        duration: 0.2,
        ease: "sine.in",
      }
    )
    gsap.set(q(`[data-slide-index="${currentQuestion}"]`), { autoAlpha: 1 })
  }, [currentQuestion, direction, ref])
}

export default useAnimations
