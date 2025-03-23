import './App.css'
import FeaturesSection from './components/FeaturesSection'
import Hero from './components/Hero'
import MonitorSection from './components/MonitorSection'
import Navbar from './components/Navbar'
import PricingSection from './components/PricingSection'
import PurposeSection from './components/PurposeSection'
import ScheduleSection from './components/ScheduleSection'
import CompanyLogo from './components/CompanyLogo'
import ServicesSection from './components/ServicesSection'
import TestimonialSection from './components/TestimonialSection'

function App() {
  return (
    <main className='relative min-h-screen overflow-x-hidden'>
      <div className='absolute -top-28 -left-28 w-[500px] h-[500px] bg-gradient-to-tr from-indigo-500/20 to-pink-500/20 rounded-full blur-[80px] -z-10'></div>

      <div>
        <Navbar />
        <Hero />
        <CompanyLogo />
        <PurposeSection />
        <FeaturesSection />
        <ScheduleSection />
        <MonitorSection />
        <PricingSection />
        <ServicesSection />
        <TestimonialSection />
      </div>
    </main>
  )
}

export default App
