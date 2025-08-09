import React from 'react'
import Navbar from '../components/Navbar'
import ShopByFabric from '../components/ShopByFebric'
import Testimonials from '../components/Testimonials'
import ShopByTrend from '../components/ShopByTrend'
import DroppedBySection from '../components/DroppedBySection'
import ContactSection from '../components/ContactSection'
import SignatureCollection from '../components/SignatureCollection'

const LuxuryHome = () => {
  return (
    <div>
      <Navbar />

      {/* Top Banner Images */}
      <section className="grid grid-cols-1 md:grid-cols-3">
        <img src="/images/sari12.jpg" alt="Saree 1" className="w-full h-[500px] object-cover" />
        <img src="/images/sari11.jpg" alt="Saree 2" className="w-full h-[500px] object-cover" />
        <img src="/images/sari13.jpg" alt="Saree 3" className="w-full h-[500px] object-cover" />
      </section>

      {/* Signature Collection */}
     <SignatureCollection/>

      {/* Other Sections */}
      <ShopByFabric />
      <ShopByTrend/>
      <Testimonials />
      <DroppedBySection/>
      <ContactSection/>
    </div>
  )
}

export default LuxuryHome
