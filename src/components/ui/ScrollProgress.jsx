import { motion, useScroll } from "framer-motion"

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll()

  return (
    <motion.div
      style={{
        scaleX: scrollYProgress,
      }}
      className="fixed left-0 top-0 z-[9999] h-[3px] w-full origin-left bg-[#C96B2C]"
    />
  )
}

export default ScrollProgress