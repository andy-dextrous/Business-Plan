import React from "react"
import { Box } from "@chakra-ui/react"

function GrainEffect() {
  return (
    <Box
      sx={{
        "@keyframes grain": {
          "0%, to": { transform: "translate(0, 0)" },
          "10%": { transform: "translate(-5%, -10%)" },
          "20%": { transform: "translate(-15%, 5%)" },
          "30%": { transform: "translate(7%, -25%)" },
          "40%": { transform: "translate(-5%, 25%)" },
          "50%": { transform: "translate(-15%, 10%)" },
          "60%": { transform: "translate(15%, 0)" },
          "70%": { transform: "translate(0, 15%)" },
          "80%": { transform: "translate(3%, 35%)" },
          "90%": { transform: "translate(-10%, 10%)" },
        },
        bg: "url(https://hellohudson.com.au/wp-content/uploads/2022/05/background-noise.png)",
        position: "fixed",
        left: "-50%",
        top: "-100%",
        zIndex: 99999,
        width: "300%",
        height: "300%",
        opacity: 0.5,
        pointerEvents: "none",
        willChange: "auto",
        animation: "grain 8s steps(10) infinite",
      }}
    />
  )
}

export default GrainEffect
