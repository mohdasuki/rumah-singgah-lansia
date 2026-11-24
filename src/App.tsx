
import Navbar from "./components/layout/Navbar"
import Footer from "./components/layout/Footer"

import HeroSection from "./components/sections/HeroSection"
import AboutSection from "./components/sections/AboutSection"
import ServicesSection from "./components/sections/ServicesSection"
import RegistrationSection from "./components/sections/RegistrationSection"
import TelenursingSection from "./components/sections/TelenursingSection"
import EducationSection from "./components/sections/EducationSection"
import GallerySection from "./components/sections/GallerySection"

function App() {
  return (
    <>
      <Navbar />

      <main>
        <HeroSection />

        <AboutSection />

        <ServicesSection />

        <RegistrationSection />

        <TelenursingSection />

        <EducationSection />

        <GallerySection />
      </main>

      <Footer />
    </>
  )
}

export default App
