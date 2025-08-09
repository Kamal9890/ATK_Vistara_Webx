// src/components/SignatureCollection.jsx
import React from "react";

const SignatureCollection = () => {
  const items = [
    { img: "/images/sari8.png", name: "Khadi" },
    { img: "/images/sari9.png", name: "Shimmer" },
    { img: "/images/sari10.png", name: "Tissue Saree" }
  ];

  return (
    <section className="py-12">
      {/* Title */}
      <h2 className="text-3xl font-bold text-center text-rose-600 mb-10">
        Signature Collection
      </h2>

      {/* Grid of Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4 max-w-7xl mx-auto">
        {items.map((item, idx) => (
          <div
            key={idx}
            className="rounded-xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
          >
            {/* Image */}
            <img
              src={item.img}
              alt={item.name}
              className="w-full h-96 object-cover"
            />

            {/* Text Background */}
            <div className="bg-rose-600 text-center py-3">
              <span className="text-white text-lg font-semibold">
                {item.name}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Explore Button */}
      <div className="flex justify-center">
        <button className="mt-10 px-10 py-3 bg-red-600 text-white rounded-full font-semibold hover:bg-red-700 transition">
          Explore More
        </button>
      </div>
    </section>
  );
};

export default SignatureCollection;
