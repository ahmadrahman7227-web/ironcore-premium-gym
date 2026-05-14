import { ArrowUpRight } from "lucide-react"
import { motion } from "framer-motion"

const Footer = () => {
  return (
    <footer className="relative overflow-hidden border-t border-[#1A1A1A] bg-[#0B0B0B] px-6 pb-12 pt-36 text-white lg:px-12">

      {/* Giant Background Text */}
      <h1 className="pointer-events-none absolute left-1/2 top-10 z-0 -translate-x-1/2 whitespace-nowrap font-['Bebas_Neue'] text-[180px] leading-none text-white/[0.03] lg:text-[340px]">
        IRONCORE
      </h1>

      {/* Background Glow */}
      <div className="absolute left-1/2 top-0 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-[#C96B2C]/20 blur-3xl" />

      {/* Noise Texture */}
      <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay">
        <div className="h-full w-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* TOP SECTION */}
        <div className="mb-28 flex flex-col gap-14 lg:flex-row lg:items-end lg:justify-between">

          {/* Left */}
          <div>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mb-6 text-sm uppercase tracking-[0.35em] text-[#C96B2C]"
            >
              IronCore Fitness Club
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 1,
                delay: 0.1,
              }}
              className="font-['Bebas_Neue'] text-7xl leading-[0.9] sm:text-8xl lg:text-[170px]"
            >
              TRAIN
              <br />
              BEYOND
              <br />
              LIMITS
            </motion.h2>

          </div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              delay: 0.3,
            }}
            className="max-w-md"
          >

            <p className="mb-8 text-base leading-relaxed text-[#9A9A9A] sm:text-lg">
              Experience elite fitness, premium facilities,
              and performance-driven coaching designed to push
              your body and mindset beyond limits.
            </p>

            <button className="group flex items-center gap-3 overflow-hidden bg-[#C96B2C] px-8 py-4 text-sm font-semibold uppercase tracking-[0.25em] text-white transition duration-300 hover:scale-[1.03] hover:bg-[#b85d22]">

              <span>
                Start Membership
              </span>

              <ArrowUpRight
                size={18}
                className="transition duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />

            </button>

          </motion.div>

        </div>

        {/* Divider */}
        <div className="mb-12 h-px bg-gradient-to-r from-transparent via-[#2A2A2A] to-transparent" />

        {/* Bottom */}
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">

          {/* Logo */}
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="font-['Bebas_Neue'] text-5xl tracking-[0.15em] text-white"
          >
            IronCore
          </motion.h3>

          {/* Navigation */}
          <div className="flex flex-wrap gap-8 text-sm uppercase tracking-[0.25em] text-[#7A7A7A]">

            {["Home", "Programs", "Trainers", "Pricing", "Contact"].map(
              (item, index) => (
                <a
                  key={index}
                  href="#"
                  className="transition duration-300 hover:text-white"
                >
                  {item}
                </a>
              )
            )}

          </div>

          {/* Copyright */}
          <p className="text-sm text-[#5A5A5A]">
            © 2026 IronCore. All rights reserved.
          </p>

        </div>

      </div>

    </footer>
  )
}

export default Footer