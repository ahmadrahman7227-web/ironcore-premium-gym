import { motion, AnimatePresence } from "framer-motion"

const LoaderScreen = ({ loading }) => {
  return (
    <AnimatePresence>

      {loading && (

        <motion.div
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: {
              duration: 1,
            },
          }}
          className="fixed inset-0 z-[99999] flex items-center justify-center overflow-hidden bg-[#0B0B0B]"
        >

          {/* Background Glow */}
          <div className="absolute h-[400px] w-[400px] rounded-full bg-[#C96B2C]/10 blur-3xl" />

          {/* Noise */}
          <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay">
            <div className="h-full w-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
          </div>

          {/* Content */}
          <div className="relative z-10 flex flex-col items-center">

            {/* Logo */}
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              className="font-['Bebas_Neue'] text-[90px] tracking-[0.2em] text-white sm:text-[140px]"
            >
              IRONCORE
            </motion.h1>

            {/* Loading Line */}
            <div className="mt-10 h-[2px] w-[220px] overflow-hidden rounded-full bg-[#1F1F1F]">

              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{
                  repeat: Infinity,
                  duration: 1.2,
                  ease: "linear",
                }}
                className="h-full w-[120px] bg-[#C96B2C]"
              />

            </div>

            {/* Text */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                delay: 0.4,
              }}
              className="mt-6 text-xs uppercase tracking-[0.4em] text-[#7A7A7A]"
            >
              Premium Fitness Experience
            </motion.p>

          </div>

        </motion.div>

      )}

    </AnimatePresence>
  )
}

export default LoaderScreen