import { motion } from "framer-motion"

const CinematicDivider = () => {
  return (
    <section className="relative h-[100vh] overflow-hidden bg-black">

      {/* Background Image */}
      <motion.img
        initial={{ scale: 1.1 }}
        whileInView={{ scale: 1 }}
        transition={{
          duration: 2,
          ease: [0.25, 0.1, 0.25, 1],
        }}
        viewport={{ once: true }}
        src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1800&auto=format&fit=crop"
        alt="Athlete"
        className="h-full w-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/65" />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/20 to-[#0B0B0B]" />

      {/* Grain */}
      <div className="absolute inset-0 opacity-[0.05] mix-blend-overlay">
        <div className="h-full w-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      </div>

      {/* Glow */}
      <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#C96B2C]/10 blur-3xl" />

      {/* Content */}
      <div className="absolute inset-0 z-10 flex items-center justify-center px-6 text-center">

        <div>

          {/* Label */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
            }}
            className="mb-8 text-sm uppercase tracking-[0.45em] text-[#C96B2C]"
          >
            IronCore Philosophy
          </motion.p>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 1,
              delay: 0.1,
              ease: [0.25, 0.1, 0.25, 1],
            }}
            className="font-['Bebas_Neue'] text-[90px] leading-[0.85] tracking-tight text-white sm:text-[140px] lg:text-[240px]"
          >
            STRENGTH
            <br />
            IS EARNED
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              delay: 0.3,
            }}
            className="mx-auto mt-10 max-w-2xl text-base leading-relaxed text-[#B0B0B0] sm:text-lg"
          >
            Discipline, consistency, and relentless effort define
            every transformation inside IronCore.
          </motion.p>

        </div>

      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 h-[250px] w-full bg-gradient-to-t from-[#0B0B0B] to-transparent" />

    </section>
  )
}

export default CinematicDivider