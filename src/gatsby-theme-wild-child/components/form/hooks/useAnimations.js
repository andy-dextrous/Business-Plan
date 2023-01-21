import React, { useEffect, useLayoutEffect } from "react"
import { gsap } from "gatsby-theme-wild-child/src/gsap"
import { FormContext } from "../Context"

function useAnimations(ref) {
  const { currentPanel, previousPanel, direction } =
    React.useContext(FormContext)

  useLayoutEffect(() => {
    if (!ref.current) return
    console.log("change")
    const q = gsap.utils.selector(ref.current) // select elements within the form
    gsap.set(q(`[data-slide-index]`), { autoAlpha: 0 })
    gsap.set(q(`[data-slide-index="${currentPanel}"]`), { autoAlpha: 1 })
  }, [ref])

  useEffect(() => {
    if (!ref.current) return
    const q = gsap.utils.selector(ref.current) // target panels within the form
    const navigatingBack = direction === "up"

    gsap.set(
      q(`[data-slide-index="${previousPanel}"] .chakra-button__group.control`),
      {
        autoAlpha: 0,
      }
    )
    gsap.to(q(`[data-slide-index="${previousPanel}"]`), {
      yPercent: navigatingBack ? -150 : 150,
      autoAlpha: 0,
      ease: navigatingBack ? "sine.in" : "sine.out",
      duration: navigatingBack ? 0.3 : 0.5,
    })

    gsap.fromTo(
      q(`[data-slide-index="${currentPanel}"]`),
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
      q(`[data-slide-index="${currentPanel}"] .chakra-button__group.control`),
      {
        autoAlpha: 1,
        delay: 0.4,
        duration: 0.2,
        ease: "sine.in",
      }
    )
    gsap.set(q(`[data-slide-index="${currentPanel}"]`), { autoAlpha: 1 })
  }, [currentPanel, direction, ref])
}

export default useAnimations
