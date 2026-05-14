import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"

import heroImage from "../../assets/images/dark-gym.jpg"

const HeroSection = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#0B0B0B] text-white">

      {/* Background Image */}
      <motion.img
        initial={{ scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{
          duration: 2,
          ease: [0.25, 0.1, 0.25, 1],
        }}
        src={heroImage}
        alt="Gym"
        style={{
          filter: "contrast(1.05) brightness(0.55) saturate(0.85)",
        }}
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Noise Texture */}
      <div className="absolute inset-0 opacity-[0.08] mix-blend-overlay">
        <div className="h-full w-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      </div>

      {/* Cinematic Glow */}
      <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#C96B2C]/10 blur-3xl lg:h-[700px] lg:w-[700px]" />

      {/* Dark Overlay */}
      <div className="absolute inset-0 z-10 bg-black/55" />

      {/* Vignette */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/20 to-black/90" />

      {/* Side Gradient */}
      <div className="absolute inset-y-0 left-0 w-[40%] bg-gradient-to-r from-black/80 to-transparent" />

      {/* Content */}
      <div className="relative z-20 mx-auto flex min-h-screen max-w-7xl items-center px-5 pt-32 sm:px-6 lg:px-12">

        <div className="relative flex w-full items-center">

          {/* LEFT CONTENT */}
          <div className="max-w-3xl">

            {/* Label */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-5 text-xs uppercase tracking-[0.4em] text-[#C96B2C] sm:text-sm"
            >
              Premium Fitness Club
            </motion.p>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1,
                delay: 0.2,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              className="font-['Bebas_Neue'] text-[72px] leading-[0.82] tracking-tight text-white sm:text-[110px] md:text-[150px] lg:text-[220px]"
            >
              BUILT
              <br />
              THROUGH
              <br />
              <span className="text-[#C96B2C]">
                DISCIPLINE
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.5,
              }}
              className="mt-6 max-w-xl text-sm leading-relaxed text-[#B0B0B0] sm:text-base lg:text-lg"
            >
              Transform your body through elite coaching,
              world-class facilities, and a premium fitness
              experience built for strength, endurance,
              discipline, and peak performance.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.7,
              }}
              className="mt-10 flex flex-col gap-4 sm:flex-row"
            >

              {/* Primary */}
              <button className="group flex items-center justify-center gap-3 overflow-hidden bg-[#C96B2C] px-7 py-4 text-center text-sm font-semibold uppercase tracking-[0.25em] text-white transition duration-300 hover:scale-[1.03] hover:bg-[#b85d22]">

                <span>
                  Join Now
                </span>

                <ArrowUpRight
                  size={18}
                  className="transition duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />

              </button>

              {/* Secondary */}
              <button className="border border-[#2F2F2F] bg-[#151515]/80 px-7 py-4 text-center text-sm font-semibold uppercase tracking-[0.25em] text-white backdrop-blur-xl transition duration-300 hover:border-[#C96B2C] hover:bg-[#181818]">
                Explore Classes
              </button>

            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.9,
              }}
              className="mt-16 grid grid-cols-3 gap-6 sm:flex sm:flex-wrap sm:gap-12"
            >

              <div>

                <h3 className="font-['Bebas_Neue'] text-4xl leading-none text-white sm:text-5xl lg:text-6xl">
                  10K+
                </h3>

                <p className="mt-3 text-[10px] uppercase tracking-[0.25em] text-[#7A7A7A] sm:text-xs">
                  Active Members
                </p>

              </div>

              <div>

                <h3 className="font-['Bebas_Neue'] text-4xl leading-none text-white sm:text-5xl lg:text-6xl">
                  50+
                </h3>

                <p className="mt-3 text-[10px] uppercase tracking-[0.25em] text-[#7A7A7A] sm:text-xs">
                  Elite Trainers
                </p>

              </div>

              <div>

                <h3 className="font-['Bebas_Neue'] text-4xl leading-none text-white sm:text-5xl lg:text-6xl">
                  24/7
                </h3>

                <p className="mt-3 text-[10px] uppercase tracking-[0.25em] text-[#7A7A7A] sm:text-xs">
                  Gym Access
                </p>

              </div>

            </motion.div>

          </div>

        </div>

      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 h-[250px] w-full bg-gradient-to-t from-[#0B0B0B] to-transparent" />

    </section>
  )
}

export default HeroSection