import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../fonts.css' // we'll import Google Fonts here

const LandingPopup = () => {
  const navigate = useNavigate()
  const redColor = "#6e0e13" // deep maroon-red

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
      <div className="w-[90%] max-w-5xl rounded-3xl overflow-hidden shadow-2xl flex relative flex-col md:flex-row h-[80vh] md:h-[500px]">

        {/* Left Side */}
        <div
          className="flex-1 bg-white flex flex-col justify-center items-center text-center p-6 md:p-10"
          style={{ color: redColor }}
        >
          <h3 className="uppercase text-sm font-medium mb-2 tracking-wider font-sans">
            Affordable Elegance
          </h3>
          <h1 className="text-6xl sm:text-5xl font-playfair font-bold mb-2">
            Atulya
          </h1>
          <p className="text-xl font-semibold font-sans mb-2">Starts from</p>
          <p className="text-2xl font-bold font-sans mb-4">₹1000</p>
          <p className="text-sm max-w-sm mb-6 font-medium font-sans">
            Beautifully handcrafted pieces designed for everyday charm, thoughtful gifts,
            and accessible artistry.
          </p>
          <button
            onClick={() => navigate('/affordable')}
            className="bg-[#6e0e13] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#4a0b0e] transition font-sans"
          >
            Shop Affordability
          </button>
        </div>

        {/* Center Logo or Initials */}
        <div className="absolute inset-y-0 left-1/2 transform -translate-x-1/2 flex items-center justify-center z-10">
          <div
            className="w-16 h-16 rounded-full border-2 bg-white flex items-center justify-center font-bold text-xl font-playfair tracking-wide"
            style={{ borderColor: redColor, color: redColor }}
          >
            AK
          </div>
        </div>

        {/* Right Side */}
        <div
          className="flex-1 bg-yellow-400 flex flex-col justify-center items-center text-center p-6 md:p-10"
          style={{ color: redColor }}
        >
          <h3 className="uppercase text-sm font-medium mb-2 tracking-wider font-sans">
            Luxe Heritage
          </h3>
          <h1 className="text-6xl sm:text-5xl font-playfair font-bold mb-2">
            Atulya Karigari
          </h1>
          <p className="text-xl font-semibold font-sans mb-2">Starts from</p>
          <p className="text-2xl font-bold font-sans mb-4">₹7000</p>
          <p className="text-sm max-w-sm mb-6 font-medium font-sans">
            Elevated designs and heirloom-worthy pieces – crafted for those who appreciate timeless luxury.
          </p>
          <button
            onClick={() => navigate('/luxury')}
            className="bg-[#6e0e13] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#4a0b0e] transition font-sans"
          >
            Shop Luxury
          </button>
        </div>
      </div>
    </div>
  )
}

export default LandingPopup
