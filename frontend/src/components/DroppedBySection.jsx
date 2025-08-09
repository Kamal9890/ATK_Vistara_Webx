import React from 'react';
import { FaInstagram } from 'react-icons/fa';

const DroppedBySection = () => {
  const bigImage = '/images/sari5.png';
  const smallImages = [
    '/images/sari8.png',
    '/images/sari9.png',
    '/images/sari10.png',
    '/images/sari11.jpg',
  ];

  return (
    <section className="bg-white py-10 px-4 md:px-16">
      {/* Centered Heading */}
      <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6 text-center">
        Dropped by <span className="text-rose-600">Atulya Karigiri</span>
      </h2>

      {/* Main layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Left big image with always visible icon */}
        <div className="relative">
          <img
            src={bigImage}
            alt="Main"
            className="w-full h-[350px] object-cover rounded-md transition-transform duration-300 hover:scale-105"
          />
          {/* Instagram Icon always visible */}
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute bottom-3 left-3 bg-white p-2 rounded-full shadow-lg"
          >
            <FaInstagram size={24} className="text-pink-600" />
          </a>
        </div>

        {/* Right 2×2 grid */}
        <div className="grid grid-cols-2 gap-4">
          {smallImages.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Small ${index + 1}`}
              className="w-full h-[170px] object-cover rounded-md hover:scale-105 transition-transform duration-300"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default DroppedBySection;
