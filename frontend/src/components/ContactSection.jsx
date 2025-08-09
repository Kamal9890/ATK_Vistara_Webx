import React from 'react';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';
import { FaFacebookF, FaInstagram, FaYoutube, FaPinterestP } from 'react-icons/fa';

const ContactSection = () => {
  return (
    <footer className="bg-white border-t border-gray-200 px-4 md:px-16 py-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* Brand + Links */}
        <div>
          <h3 className="text-xl font-bold text-rose-700 mb-4">Atulya Karigiri</h3>
          <ul className="space-y-2 text-gray-700 text-sm">
            <li>Shop by Occasion</li>
            <li>Shop by Fabric</li>
            <li>Shop by Trend</li>
            <li>Ready to Wear</li>
          </ul>
        </div>

        {/* Spacer / Center Column if needed */}
        <div className="hidden md:block"></div>

        {/* Contact Us Section */}
        <div>
          <h3 className="text-xl font-bold text-rose-700 mb-4">CONTACT US</h3>
          <ul className="text-gray-700 text-sm space-y-3">
            <li className="flex items-start gap-2">
              <FaMapMarkerAlt className="mt-1 text-rose-600" />
              <span>
                F-102, Pinnacle Business Park, Prahladnagar Road, Ahmedabad, Gujarat – 380015
              </span>
            </li>
            <li className="flex items-center gap-2">
              <FaEnvelope className="text-rose-600" />
              support@atulyakarigiri.com
            </li>
            <li className="flex items-center gap-2">
              <FaPhoneAlt className="text-rose-600" />
              +91 99999 88888
            </li>
          </ul>

          {/* Social Icons */}
          <div className="flex gap-4 mt-4">
            <a href="#" className="text-rose-600 hover:text-rose-800"><FaFacebookF /></a>
            <a href="#" className="text-rose-600 hover:text-rose-800"><FaInstagram /></a>
            <a href="#" className="text-rose-600 hover:text-rose-800"><FaYoutube /></a>
            <a href="#" className="text-rose-600 hover:text-rose-800"><FaPinterestP /></a>
          </div>
        </div>
      </div>

      {/* Bottom Illustration Placeholder */}
      
    </footer>
  );
};

export default ContactSection;
