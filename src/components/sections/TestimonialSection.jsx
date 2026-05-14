import { motion } from "framer-motion"
import FadeUp from "../animations/FadeUp"

const testimonials = [
  {
    name: "James Carter",
    role: "Athlete",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1200&auto=format&fit=crop",
    review:
      "IronCore completely transformed my mindset and physical performance. The atmosphere, coaching, and energy feel world-class.",
  },

  {
    name: "Sophia Williams",
    role: "Fitness Enthusiast",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1200&auto=format&fit=crop",
    review:
      "This is not just a gym. IronCore feels like a premium performance club designed for serious transformation.",
  },

  {
    name: "Daniel Foster",
    role: "Boxing Member",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1200&auto=format&fit=crop",
    review:
      "From the facilities to the trainers, everything feels elite. The experience pushes you to become stronger every day.",
  },
]

const TestimonialSection = () => {
  return (
    <section className="relative overflow-hidden bg-[#0B0B0B] px-6 py-32 text-white lg:px-12">

      {/* Glow */}
      <div className="absolute right-0 top-1/2 h-[400px] w-[400px] -translate-y-1/2 rounded-full bg-[#C96B2C]/10 blur-3xl" />

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
                Member Experience
              </p>

              <h2 className="font-['Bebas_Neue'] text-7xl leading-[0.9] sm:text-8xl lg:text-[140px]">
                WHAT OUR
                <br />
                MEMBERS SAY
              </h2>

            </div>

            <p className="max-w-lg text-base leading-relaxed text-[#9A9A9A] sm:text-lg">
              Real stories from athletes and members who
              transformed their discipline, strength, and
              performance through IronCore.
            </p>

          </div>
        </FadeUp>

        {/* Cards */}
        <FadeUp delay={0.2}>
          <div className="grid gap-6 lg:grid-cols-3">

            {testimonials.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -8 }}
                className="group relative overflow-hidden rounded-[36px] border border-[#232323] bg-[#121212] p-8 transition duration-500"
              >

                {/* Card Glow */}
                <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
                  <div className="absolute left-1/2 top-0 h-[250px] w-[250px] -translate-x-1/2 rounded-full bg-[#C96B2C]/10 blur-3xl" />
                </div>

                {/* Top */}
                <div className="relative z-10 flex items-center gap-5">

                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-16 w-16 rounded-full object-cover"
                  />

                  <div>

                    <h3 className="font-['Bebas_Neue'] text-3xl leading-none">
                      {item.name}
                    </h3>

                    <p className="mt-2 text-xs uppercase tracking-[0.25em] text-[#C96B2C]">
                      {item.role}
                    </p>

                  </div>

                </div>

                {/* Review */}
                <p className="relative z-10 mt-10 text-base leading-relaxed text-[#B0B0B0]">
                  “{item.review}”
                </p>

                {/* Bottom Line */}
                <div className="relative z-10 mt-10 h-px bg-gradient-to-r from-[#C96B2C] to-transparent opacity-40" />

              </motion.div>
            ))}

          </div>
        </FadeUp>

      </div>

    </section>
  )
}

export default TestimonialSection