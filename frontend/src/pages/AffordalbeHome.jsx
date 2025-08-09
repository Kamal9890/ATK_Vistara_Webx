import React from 'react'
import Navbar from '../components/Navbar'
import ShopByFabric from '../components/ShopByFebric'
import Testimonials from '../components/Testimonials'
import ShopByTrend from '../components/ShopByTrend'
import DroppedBySection from '../components/DroppedBySection'
import ContactSection from '../components/ContactSection'
import SignatureCollection from '../components/SignatureCollection'

const AffordableHome = () => {
  return (
    <div>
      <Navbar />

      {/* Top Banner Images */}
      <section className="grid grid-cols-1 md:grid-cols-3">
        <img src="/images/sari1.jpg" alt="Saree 1" className="w-full h-[500px] object-cover" />
        <img src="/images/sari2.jpg" alt="Saree 2" className="w-full h-[500px] object-cover" />
        <img src="/images/sari3.jpg" alt="Saree 3" className="w-full h-[500px] object-cover" />
      </section>



      {/* Other Sections */}
      <SignatureCollection/>
      <ShopByFabric />
      <ShopByTrend/>
      <Testimonials />
      <DroppedBySection/>
      <ContactSection/>
    </div>
  )
}

export default AffordableHome
