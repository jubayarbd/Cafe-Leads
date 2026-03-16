import Navbar from "@/components/layout/Navbar"
import Hero from "@/components/sections/Hero"
import Welcome from "@/components/sections/Welcome"
import BestSelling from "@/components/sections/BestSelling"
import Discount from "@/components/sections/Discount"
import OurMenu from "@/components/sections/OurMenu"
import Testimonials from "@/components/sections/Testimonials"
import Subscribe from "@/components/sections/Subscribe"
import Contact from "@/components/sections/Contact"
import Footer from "@/components/layout/Footer"

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Welcome />
      <BestSelling />
      <Discount />
      <OurMenu />
      <Testimonials />
      <Subscribe />
      <Contact />
      <Footer />
    </>
  )
}