import React from 'react'

const fabrics = [
  { label: 'Silk', img: '/images/sari5.png' },
  { label: 'Cotton', img: '/images/sari6.png' },
  { label: 'Georgette', img: '/images/sari7.png' },
  { label: 'Organza', img: '/images/sari8.png' },
  { label: 'Blended', img: '/images/sari9.png' },
  { label: 'Chiffon', img: '/images/sari1.jpg' }
]

const ShopByFabric = () => {
  return (
    <section className="py-10">
      {/* Heading */}
      <h2 className="text-3xl font-semibold mb-6 text-center text-gray-800">
        Shop By Fabric
      </h2>

      {/* Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 px-4">
        {fabrics.map((fabric, index) => (
          <div
            key={index}
            className="relative rounded-lg overflow-hidden shadow-lg group"
          >
            <img
              src={fabric.img}
              alt={fabric.label}
              className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute bottom-0 left-0 w-full bg-rose-600/90 group-hover:bg-rose-800/90 transition-colors duration-300 text-center py-1">
              <span className="text-white text-sm font-medium">
                {fabric.label}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Button */}
      <div className="flex justify-center">
        <button className="mt-8 px-6 py-2 bg-rose-600 text-white rounded-full hover:bg-rose-700 transition">
          Explore
        </button>
      </div>
    </section>
  )
}

export default ShopByFabric
