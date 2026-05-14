import { useEffect, useState } from "react"

import Navbar from "./components/layout/Navbar"
import Footer from "./components/layout/Footer"

import HeroSection from "./components/sections/HeroSection"
import ProgramsSection from "./components/sections/ProgramsSection"
import CinematicDivider from "./components/sections/CinematicDivider"
import TrainersSection from "./components/sections/TrainersSection"
import PricingSection from "./components/sections/PricingSection"
import TestimonialSection from "./components/sections/TestimonialSection"
import BookingSection from "./components/sections/BookingSection"

import CustomCursor from "./components/ui/CustomCursor"
import ScrollProgress from "./components/ui/ScrollProgress"
import LoaderScreen from "./components/ui/LoaderScreen"

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2500)

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <LoaderScreen loading={loading} />

      <main className="bg-[#0B0B0B]">

        <CustomCursor />

        <ScrollProgress />

        <Navbar />

        <HeroSection />

        <ProgramsSection />

        <CinematicDivider />

        <TrainersSection />

        <PricingSection />

        <TestimonialSection />

        <BookingSection />

        <Footer />

      </main>
    </>
  )
}

export default App