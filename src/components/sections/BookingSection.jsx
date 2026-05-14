import { motion } from "framer-motion"
import {
  CalendarDays,
  Clock3,
  Dumbbell,
  ArrowUpRight,
} from "lucide-react"

import FadeUp from "../animations/FadeUp"

const classes = [
  {
    title: "Strength Training",
    trainer: "Michael Stone",
    time: "07:00 AM",
    category: "Elite Performance",
  },

  {
    title: "Boxing Class",
    trainer: "Daniel Cross",
    time: "09:30 AM",
    category: "Combat Conditioning",
  },

  {
    title: "HIIT Workout",
    trainer: "Sophia Reed",
    time: "06:00 PM",
    category: "Endurance Training",
  },
]

const BookingSection = () => {
  return (
    <section className="relative overflow-hidden bg-[#0B0B0B] px-6 py-32 text-white lg:px-12">

      {/* Glow */}
      <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#C96B2C]/10 blur-3xl" />

      {/* Noise */}
      <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay">
        <div className="h-full w-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* Header */}
        <FadeUp>
          <div className="mb-24 flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">

            <div>

              <p className="mb-5 text-sm uppercase tracking-[0.35em] text-[#C96B2C]">
                Book Your Session
              </p>

              <h2 className="font-['Bebas_Neue'] text-7xl leading-[0.9] sm:text-8xl lg:text-[140px]">
                TRAINING
                <br />
                SCHEDULE
              </h2>

            </div>

            <p className="max-w-lg text-base leading-relaxed text-[#9A9A9A] sm:text-lg">
              Book premium training classes designed to push
              your performance, endurance, and strength to
              the next level.
            </p>

          </div>
        </FadeUp>

        {/* Schedule Cards */}
        <FadeUp delay={0.2}>
          <div className="space-y-6">

            {classes.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -6 }}
                className="group relative overflow-hidden rounded-[36px] border border-[#232323] bg-[#121212] p-8 transition duration-500 lg:p-10"
              >

                {/* Glow */}
                <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
                  <div className="absolute right-0 top-0 h-[250px] w-[250px] rounded-full bg-[#C96B2C]/10 blur-3xl" />
                </div>

                <div className="relative z-10 flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">

                  {/* Left */}
                  <div>

                    <p className="mb-4 text-xs uppercase tracking-[0.35em] text-[#C96B2C]">
                      {item.category}
                    </p>

                    <h3 className="font-['Bebas_Neue'] text-5xl leading-none sm:text-6xl">
                      {item.title}
                    </h3>

                    <p className="mt-4 text-sm uppercase tracking-[0.25em] text-[#8A8A8A]">
                      Coach • {item.trainer}
                    </p>

                  </div>

                  {/* Center */}
                  <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:gap-10">

                    <div className="flex items-center gap-4">

                      <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#2A2A2A] bg-[#161616]">

                        <CalendarDays
                          size={20}
                          className="text-[#C96B2C]"
                        />

                      </div>

                      <div>

                        <p className="text-xs uppercase tracking-[0.25em] text-[#6A6A6A]">
                          Available
                        </p>

                        <h4 className="mt-2 text-sm uppercase tracking-[0.25em] text-white">
                          Monday - Friday
                        </h4>

                      </div>

                    </div>

                    <div className="flex items-center gap-4">

                      <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#2A2A2A] bg-[#161616]">

                        <Clock3
                          size={20}
                          className="text-[#C96B2C]"
                        />

                      </div>

                      <div>

                        <p className="text-xs uppercase tracking-[0.25em] text-[#6A6A6A]">
                          Session Time
                        </p>

                        <h4 className="mt-2 text-sm uppercase tracking-[0.25em] text-white">
                          {item.time}
                        </h4>

                      </div>

                    </div>

                  </div>

                  {/* Right */}
                  <button className="group/button flex items-center justify-center gap-3 border border-[#2F2F2F] bg-[#151515]/80 px-8 py-4 text-sm font-semibold uppercase tracking-[0.25em] text-white backdrop-blur-xl transition duration-300 hover:border-[#C96B2C] hover:bg-[#1A1A1A]">

                    <Dumbbell
                      size={18}
                      className="text-[#C96B2C]"
                    />

                    <span>
                      Book Class
                    </span>

                    <ArrowUpRight
                      size={18}
                      className="transition duration-300 group-hover/button:translate-x-1 group-hover/button:-translate-y-1"
                    />

                  </button>

                </div>

              </motion.div>
            ))}

          </div>
        </FadeUp>

      </div>

    </section>
  )
}

export default BookingSection