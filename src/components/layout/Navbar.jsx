import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, ArrowUpRight } from "lucide-react"

const navItems = [
  "Home",
  "Programs",
  "Trainers",
  "Pricing",
  "Contact",
]

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenu, setMobileMenu] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40)
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <>
      {/* HEADER */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{
          duration: 0.8,
          ease: [0.25, 0.1, 0.25, 1],
        }}
        className={`fixed left-0 top-0 z-50 w-full transition-all duration-500 ${
          scrolled
            ? "border-b border-white/5 bg-black/70 py-4 backdrop-blur-2xl"
            : "bg-transparent py-6"
        }`}
      >

        {/* Gradient Line */}
        <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-[#C96B2C]/20 to-transparent" />

        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-12">

          {/* LEFT */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="flex items-center gap-3"
          >

            {/* Logo Dot */}
            <div className="h-3 w-3 rounded-full bg-[#C96B2C]" />

            {/* Logo */}
            <h1 className="font-['Bebas_Neue'] text-3xl tracking-[0.15em] text-white">
              IronCore
            </h1>

          </motion.div>

          {/* DESKTOP NAV */}
          <nav className="hidden items-center gap-10 lg:flex">

            {navItems.map((item, index) => (
              <motion.a
                key={index}
                href="#"
                whileHover={{ y: -2 }}
                className="group relative text-sm uppercase tracking-[0.25em] text-[#A0A0A0] transition duration-300 hover:text-white"
              >

                {item}

                {/* Underline */}
                <span className="absolute -bottom-2 left-0 h-px w-0 bg-[#C96B2C] transition-all duration-300 group-hover:w-full" />

              </motion.a>
            ))}

          </nav>

          {/* DESKTOP CTA */}
          <div className="hidden lg:flex">

            <motion.button
              whileHover={{
                scale: 1.04,
              }}
              whileTap={{
                scale: 0.98,
              }}
              className="group flex items-center gap-3 overflow-hidden border border-[#2F2F2F] bg-[#141414]/80 px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-white backdrop-blur-xl transition duration-300 hover:border-[#C96B2C]"
            >

              <span>
                Join Now
              </span>

              <ArrowUpRight
                size={18}
                className="transition duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />

            </motion.button>

          </div>

          {/* MOBILE BUTTON */}
          <button
            onClick={() => setMobileMenu(!mobileMenu)}
            className="relative z-[60] flex items-center justify-center text-white lg:hidden"
          >

            {mobileMenu ? <X size={30} /> : <Menu size={30} />}

          </button>

        </div>

      </motion.header>

      {/* MOBILE MENU */}
      <AnimatePresence>

        {mobileMenu && (

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-black/95 backdrop-blur-2xl lg:hidden"
          >

            {/* Noise */}
            <div className="absolute inset-0 opacity-[0.04] mix-blend-overlay">
              <div className="h-full w-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
            </div>

            {/* Glow */}
            <div className="absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#C96B2C]/10 blur-3xl" />

            <div className="relative z-10 flex min-h-screen flex-col items-center justify-center gap-10 px-6">

              {navItems.map((item, index) => (
                <motion.a
                  key={index}
                  href="#"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: index * 0.1,
                  }}
                  onClick={() => setMobileMenu(false)}
                  className="font-['Bebas_Neue'] text-5xl tracking-[0.15em] text-white"
                >
                  {item}
                </motion.a>
              ))}

              {/* Mobile CTA */}
              <motion.button
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.5,
                }}
                className="mt-6 flex items-center gap-3 bg-[#C96B2C] px-8 py-4 text-sm font-semibold uppercase tracking-[0.25em] text-white"
              >

                <span>
                  Join Now
                </span>

                <ArrowUpRight size={18} />

              </motion.button>

            </div>

          </motion.div>

        )}

      </AnimatePresence>
    </>
  )
}

export default Navbar