import { motion } from "framer-motion"
import FadeUp from "../animations/FadeUp"

const plans = [
  {
    name: "Essential",
    price: "$49",
    description: "Perfect for building consistency and discipline.",
    features: [
      "Unlimited Gym Access",
      "2 Classes Per Week",
      "Locker Access",
      "Basic Coaching",
    ],
  },

  {
    name: "Performance",
    price: "$89",
    featured: true,
    description: "Designed for serious performance and transformation.",
    features: [
      "Unlimited Classes",
      "Elite Programs",
      "Nutrition Guidance",
      "Priority Booking",
    ],
  },

  {
    name: "Elite",
    price: "$149",
    description: "Luxury-level coaching and premium recovery experience.",
    features: [
      "Personal Trainer",
      "VIP Lounge Access",
      "Recovery Sessions",
      "Private Coaching",
    ],
  },
]

const PricingSection = () => {
  return (
    <section className="relative overflow-hidden bg-[#0B0B0B] px-6 py-32 text-white lg:px-12">

      {/* Background Glow */}
      <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#C96B2C]/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* Header */}
        <FadeUp>
          <div className="mb-24 text-center">

            <p className="mb-5 text-sm uppercase tracking-[0.35em] text-[#C96B2C]">
              Membership Plans
            </p>

            <h2 className="font-['Bebas_Neue'] text-7xl leading-[0.9] sm:text-8xl lg:text-[140px]">
              CHOOSE YOUR
              <br />
              MEMBERSHIP
            </h2>

          </div>
        </FadeUp>

        {/* Grid */}
        <FadeUp delay={0.2}>
          <div className="grid gap-6 lg:grid-cols-3">

            {plans.map((plan, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -8 }}
                className={`group relative overflow-hidden rounded-[36px] border transition duration-500 ${
                  plan.featured
                    ? "border-[#C96B2C] bg-[#171717]"
                    : "border-[#232323] bg-[#121212]"
                }`}
              >

                {/* Noise */}
                <div className="absolute inset-0 opacity-[0.04] mix-blend-overlay">
                  <div className="h-full w-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
                </div>

                {/* Featured Glow */}
                {plan.featured && (
                  <div className="absolute left-1/2 top-0 h-[250px] w-[250px] -translate-x-1/2 rounded-full bg-[#C96B2C]/20 blur-3xl" />
                )}

                <div className="relative z-10 p-10 lg:p-12">

                  {/* Label */}
                  <p className="mb-6 text-sm uppercase tracking-[0.35em] text-[#C96B2C]">
                    {plan.name}
                  </p>

                  {/* Price */}
                  <div className="mb-8 flex items-end gap-3">

                    <h3 className="font-['Bebas_Neue'] text-8xl leading-none">
                      {plan.price}
                    </h3>

                    <span className="mb-3 text-xs uppercase tracking-[0.25em] text-[#8F8F8F]">
                      / Month
                    </span>

                  </div>

                  {/* Description */}
                  <p className="mb-10 max-w-sm leading-relaxed text-[#9A9A9A]">
                    {plan.description}
                  </p>

                  {/* Divider */}
                  <div className="mb-10 h-px bg-[#232323]" />

                  {/* Features */}
                  <div className="space-y-5">

                    {plan.features.map((feature, i) => (
                      <div
                        key={i}
                        className="flex items-center justify-between border-b border-[#1D1D1D] pb-4"
                      >

                        <span className="text-[#D0D0D0]">
                          {feature}
                        </span>

                        <span className="text-[#C96B2C]">
                          +
                        </span>

                      </div>
                    ))}

                  </div>

                  {/* Button */}
                  <button
                    className={`mt-12 w-full py-4 text-sm font-semibold uppercase tracking-[0.25em] transition duration-300 ${
                      plan.featured
                        ? "bg-[#C96B2C] text-white hover:bg-[#b85d22]"
                        : "border border-[#2F2F2F] text-white hover:border-[#C96B2C] hover:bg-[#181818]"
                    }`}
                  >
                    Join Membership
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

export default PricingSection