'use client'
import { useState } from 'react'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import ProblemSection from '../components/ProblemSection'
import FeaturesSection from '../components/FeaturesSection'
import DashboardPreview from '../components/DashboardPreview'
import EverythingSection from '../components/EverythingSection'
import TestimonialsSection from '../components/TestimonialsSection'
import CtaSection from '../components/CtaSection'
import FaqSection from '../components/FaqSection'
import Footer from '../components/Footer'
import FloatingDownloadButton from '../components/FloatingDownloadButton'
import PurchaseModal from '../components/PurchaseModal'

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <main className="min-h-screen bg-white overflow-x-hidden">
      <PurchaseModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
      <FloatingDownloadButton onOpenModal={() => setModalOpen(true)} />
      <Navbar onOpenModal={() => setModalOpen(true)} />
      <HeroSection onOpenModal={() => setModalOpen(true)} />
      <ProblemSection />
      <FeaturesSection />
      <DashboardPreview />
      <EverythingSection />
      <TestimonialsSection />
      <CtaSection onOpenModal={() => setModalOpen(true)} />
      <FaqSection />
      <Footer />
    </main>
  )
}
