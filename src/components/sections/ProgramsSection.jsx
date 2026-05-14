import { motion } from "framer-motion"
import FadeUp from "../animations/FadeUp"

const programs = [
  {
    title: "Strength Training",
    category: "Elite Performance",
    image:
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1400&auto=format&fit=crop",
  },

  {
    title: "Boxing",
    category: "Combat Conditioning",
    image:
      "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?q=80&w=1400&auto=format&fit=crop",
  },

  {
    title: "HIIT Workout",
    category: "Endurance Training",
    image:
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=1400&auto=format&fit=crop",
  },
]

const ProgramsSection = () => {
  return (
    <section className="relative overflow-hidden bg-[#0B0B0B] px-6 py-32 text-white lg:px-12">

      {/* Background Glow */}
      <div className="absolute right-0 top-0 h-[400px] w-[400px] rounded-full bg-[#C96B2C]/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* Header */}
        <FadeUp>
          <div className="mb-24 flex flex-col justify-between gap-10 lg:flex-row lg:items-end">

            <div>

              <p className="mb-5 text-sm uppercase tracking-[0.35em] text-[#C96B2C]">
                Elite Programs
              </p>

              <h2 className="font-['Bebas_Neue'] text-7xl leading-[0.9] sm:text-8xl lg:text-[140px]">
                TRAIN
                <br />
                WITHOUT
                <br />
                LIMITS
              </h2>

            </div>

            <p className="max-w-lg text-base leading-relaxed text-[#9A9A9A] sm:text-lg">
              Experience world-class fitness programs designed
              to build strength, endurance, discipline, and peak
              athletic performance.
            </p>

          </div>
        </FadeUp>

        {/* Grid */}
        <FadeUp delay={0.2}>
          <div className="grid gap-6 lg:grid-cols-3">

            {/* Large Card */}
            <motion.div
              whileHover={{ y: -6 }}
              className="group relative overflow-hidden rounded-[36px] lg:col-span-2 lg:h-[700px]"
            >

              {/* Image */}
              <img
                src={programs[0].image}
                alt={programs[0].title}
                className="h-full w-full object-cover transition duration-[1400ms] ease-out group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

              {/* Noise */}
              <div className="absolute inset-0 opacity-[0.05] mix-blend-overlay">
                <div className="h-full w-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 z-10 p-8 lg:p-12">

                <p className="mb-5 text-sm uppercase tracking-[0.35em] text-[#C96B2C]">
                  {programs[0].category}
                </p>

                <h3 className="font-['Bebas_Neue'] text-6xl leading-none lg:text-8xl">
                  {programs[0].title}
                </h3>

              </div>

            </motion.div>

            {/* Right Cards */}
            <div className="flex flex-col gap-6">

              {programs.slice(1).map((program, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -6 }}
                  className="group relative h-[337px] overflow-hidden rounded-[36px]"
                >

                  {/* Image */}
                  <img
                    src={program.image}
                    alt={program.title}
                    className="h-full w-full object-cover transition duration-[1400ms] ease-out group-hover:scale-110"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

                  {/* Noise */}
                  <div className="absolute inset-0 opacity-[0.05] mix-blend-overlay">
                    <div className="h-full w-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
                  </div>

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 z-10 p-8">

                    <p className="mb-4 text-xs uppercase tracking-[0.35em] text-[#C96B2C]">
                      {program.category}
                    </p>

                    <h3 className="font-['Bebas_Neue'] text-5xl leading-none">
                      {program.title}
                    </h3>

                  </div>

                </motion.div>
              ))}

            </div>

          </div>
        </FadeUp>

      </div>

    </section>
  )
}

export default ProgramsSection