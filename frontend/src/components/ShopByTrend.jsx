import React from 'react';
import { BsArrowUpRight } from 'react-icons/bs';

const trendData = [
  {
    title: 'Minimal Must Haves',
    image: '/images/sari7.png',
  },
  {
    title: 'Print Parade',
    image: '/images/sari8.png',
  },
  {
    title: 'Pastel Perfection',
    image: '/images/sari9.png',
  },
];

const ShopByTrend = () => {
  return (
    <div className="py-10 px-4 bg-white ">
      <h2 className="text-center text-2xl font-semibold text-gray-800 mb-8">
        Shop By Trend
      </h2>

      <div className="flex overflow-x-auto gap-6 scrollbar-hide  justify-center ">
        {trendData.map((item, index) => (
          <div
            key={index}
            className="min-w-[350px] max-w-[350px] relative rounded-xl overflow-hidden shadow-lg group"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-[450px] object-cover transition-transform duration-300 group-hover:scale-105"
            />

            {/* Top-right arrow */}
            <div className="absolute top-3 right-3 bg-[#6d1d35] text-white p-3 rounded-full shadow-md">
              <BsArrowUpRight size={20} />
            </div>

            {/* Bottom text */}
            <div className="absolute bottom-0 w-full text-center bg-black/50 text-white text-lg py-3 font-medium">
              {item.title}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShopByTrend;
