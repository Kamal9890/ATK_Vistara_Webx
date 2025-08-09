import React from 'react';
import testimonialImg from '/images/sari4.jpg'; // replace with your image path

const testimonials = [
  {
    name: "Priya Sharma",
    message: "The sarees are beautiful and so comfortable. Loved the shopping experience!",
    rating: 5
  },
  {
    name: "Anjali Mehta",
    message: "Excellent quality fabrics and elegant designs. Highly recommended!",
    rating: 5
  },
  {
    name: "Sneha Roy",
    message: "Affordable yet classy. The Khadi collection was my favorite!",
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <section className="px-6 py-12 bg-white">
      {/* Section Heading */}
      <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">
        Testimonials
      </h2>

      <div className="flex flex-col md:flex-row items-start gap-8">
        
        {/* Left side: image with overlay text */}
        <div className="w-full md:w-1/2 relative h-[500px]">
          <img
            src={testimonialImg}
            alt="Testimonials"
            className="w-full h-full object-cover rounded-xl"
          />
          <div className="absolute top-6 left-6 bg-white/70 px-4 py-2 rounded-lg shadow-md">
            <p className="text-lg font-semibold text-gray-900">
              Hear from our satisfied clients 💙
            </p>
          </div>
        </div>

        {/* Right side: reviews same height as image */}
        <div className="w-full md:w-1/2 flex flex-col justify-between h-[500px]">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="bg-[#6b0014] text-white p-5 rounded-xl shadow-md flex flex-col justify-between"
            >
              <div className="flex items-center mb-2">
                <span className="text-yellow-400">
                  {"★".repeat(t.rating)}
                </span>
              </div>
              <p className="text-sm italic">"{t.message}"</p>
              <div className="mt-2 text-xs font-semibold">- {t.name}</div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
