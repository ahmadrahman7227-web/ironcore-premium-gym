import { motion } from "framer-motion"
import FadeUp from "../animations/FadeUp"

const trainers = [
  {
    name: "Michael Stone",
    role: "Strength Coach",
    image:
      "https://images.unsplash.com/photo-1567013127542-490d757e51fc?q=80&w=1400&auto=format&fit=crop",
  },

  {
    name: "Daniel Cross",
    role: "Boxing Specialist",
    image:
      "https://images.unsplash.com/photo-1549476464-37392f717541?q=80&w=1400&auto=format&fit=crop",
  },
]

const TrainersSection = () => {
  return (
    <section className="relative overflow-hidden bg-[#0B0B0B] px-6 py-32 text-white lg:px-12">

      {/* Background Glow */}
      <div className="absolute left-0 top-1/2 h-[400px] w-[400px] -translate-y-1/2 rounded-full bg-[#C96B2C]/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* Header */}
        <FadeUp>
          <div className="mb-24 flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">

            <div>

              <p className="mb-5 text-sm uppercase tracking-[0.35em] text-[#C96B2C]">
                Elite Trainers
              </p>

              <h2 className="font-['Bebas_Neue'] text-7xl leading-[0.9] sm:text-8xl lg:text-[140px]">
                TRAIN WITH
                <br />
                THE BEST
              </h2>

            </div>

            <p className="max-w-lg text-base leading-relaxed text-[#9A9A9A] sm:text-lg">
              Our elite trainers combine discipline, experience,
              and performance-driven coaching to help you unlock
              your strongest version.
            </p>

          </div>
        </FadeUp>

        {/* Grid */}
        <FadeUp delay={0.2}>
          <div className="grid gap-6 lg:grid-cols-3">

            {/* Large Trainer */}
            <motion.div
              whileHover={{ y: -6 }}
              className="group relative overflow-hidden rounded-[36px] lg:col-span-2 lg:h-[780px]"
            >

              {/* Image */}
              <img
                src={trainers[0].image}
                alt={trainers[0].name}
                className="h-full w-full object-cover grayscale transition duration-[1400ms] ease-out group-hover:scale-110 group-hover:grayscale-0"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

              {/* Grain */}
              <div className="absolute inset-0 opacity-[0.05] mix-blend-overlay">
                <div className="h-full w-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 z-10 p-10 lg:p-14">

                <p className="mb-5 text-sm uppercase tracking-[0.35em] text-[#C96B2C]">
                  Elite Coach
                </p>

                <h3 className="font-['Bebas_Neue'] text-7xl leading-none lg:text-[110px]">
                  {trainers[0].name}
                </h3>

                <p className="mt-5 text-sm uppercase tracking-[0.3em] text-[#B0B0B0]">
                  {trainers[0].role}
                </p>

              </div>

            </motion.div>

            {/* Small Trainer */}
            <motion.div
              whileHover={{ y: -6 }}
              className="group relative overflow-hidden rounded-[36px] lg:h-[780px]"
            >

              {/* Image */}
              <img
                src={trainers[1].image}
                alt={trainers[1].name}
                className="h-full w-full object-cover grayscale transition duration-[1400ms] ease-out group-hover:scale-110 group-hover:grayscale-0"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

              {/* Grain */}
              <div className="absolute inset-0 opacity-[0.05] mix-blend-overlay">
                <div className="h-full w-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 z-10 p-8">

                <p className="mb-4 text-xs uppercase tracking-[0.35em] text-[#C96B2C]">
                  IronCore
                </p>

                <h3 className="font-['Bebas_Neue'] text-6xl leading-none">
                  {trainers[1].name}
                </h3>

                <p className="mt-5 text-sm uppercase tracking-[0.3em] text-[#B0B0B0]">
                  {trainers[1].role}
                </p>

              </div>

            </motion.div>

          </div>
        </FadeUp>

      </div>

    </section>
  )
}

export default TrainersSection