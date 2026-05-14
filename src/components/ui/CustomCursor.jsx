import { useEffect, useState } from "react"
import { motion } from "framer-motion"

const CustomCursor = () => {
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  })

  const [hovering, setHovering] = useState(false)

  useEffect(() => {
    const mouseMove = (e) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      })
    }

    const handleMouseEnter = () => {
      setHovering(true)
    }

    const handleMouseLeave = () => {
      setHovering(false)
    }

    window.addEventListener("mousemove", mouseMove)

    const hoverElements = document.querySelectorAll(
      "button, a"
    )

    hoverElements.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter)
      el.addEventListener("mouseleave", handleMouseLeave)
    })

    return () => {
      window.removeEventListener("mousemove", mouseMove)

      hoverElements.forEach((el) => {
        el.removeEventListener(
          "mouseenter",
          handleMouseEnter
        )

        el.removeEventListener(
          "mouseleave",
          handleMouseLeave
        )
      })
    }
  }, [])

  return (
    <>
      {/* Outer Cursor */}
      <motion.div
        animate={{
          x: position.x - 20,
          y: position.y - 20,
          scale: hovering ? 1.8 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 250,
          damping: 20,
        }}
        className="pointer-events-none fixed left-0 top-0 z-[9999] hidden h-10 w-10 rounded-full border border-[#C96B2C] lg:block"
      />

      {/* Inner Cursor */}
      <motion.div
        animate={{
          x: position.x - 4,
          y: position.y - 4,
          scale: hovering ? 0.5 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28,
        }}
        className="pointer-events-none fixed left-0 top-0 z-[9999] hidden h-2 w-2 rounded-full bg-[#C96B2C] lg:block"
      />
    </>
  )
}

export default CustomCursor