"use client";

import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa'; // Import React Icons for Email, Phone, and Location
import { FaTwitter, FaInstagram, FaFacebook, FaLinkedin } from 'react-icons/fa'; // Import Social Icons

export default function ContactInfo() {
  return (
    <div className="space-y-8">
      {/* Contact Details */}
      <div className="bg-white rounded-2xl shadow-xl p-8">
        <h2 className="text-3xl font-bold text-[#3d756c] mb-6">Get in Touch</h2>

        <div className="space-y-6">
          {/* Email */}
          <div className="flex items-center">
            <div className="w-12 h-12 bg-gradient-to-r from-[#1a4280] to-[#6989b0] rounded-full flex items-center justify-center mr-4">
              <FaEnvelope className="text-white text-xl" />
            </div>
            <div>
              <h3 className="font-semibold text-[#3d756c]">Email</h3>
              <a
                href="mailto:info@jacobkenrobinson.com"
                className="text-gray-600 hover:underline break-all"
              >
                info@jacobkenrobinson.com
              </a>
              <br />
              <span className="text-sm text-gray-500">or</span>
              <br />
              <a
                href="mailto:suitman49@gmail.com"
                className="text-gray-600 hover:underline break-all"
              >
                suitman49@gmail.com
              </a>
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-center">
            <div className="w-12 h-12 bg-gradient-to-r from-[#1a4280] to-[#6989b0] rounded-full flex items-center justify-center mr-4">
              <FaPhone className="text-white text-xl" />
            </div>
            <div>
              <h3 className="font-semibold text-[#3d756c]">Phone</h3>
              <a
                href="tel:2175209236"
                className="text-gray-600 hover:underline"
              >
                (217) 520‑9236
              </a>
            </div>
          </div>

          {/* Location */}
          <div className="flex items-center">
            <div className="w-12 h-12 bg-gradient-to-r from-[#1a4280] to-[#6989b0] rounded-full flex items-center justify-center mr-4">
              <FaMapMarkerAlt className="text-white text-xl" />
            </div>
            <div>
              <h3 className="font-semibold text-[#3d756c]">Location</h3>
              <a
                href="https://abc/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:underline"
              >
                ABC
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Social Media */}
      <div className="bg-white rounded-2xl shadow-xl p-8">
        <h3 className="text-2xl font-bold text-[#3d756c] mb-6">Follow Me</h3>

        <div className="grid grid-cols-2 gap-4">
          {/* Twitter */}
          <a
            href="https://www.twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center p-4 bg-gray-200 rounded-lg hover:bg-gray-300 transition-colors duration-300 cursor-pointer"
          >
            <FaTwitter className="text-blue-500 text-2xl mr-3" />
            <span className="font-medium">Twitter</span>
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center p-4 bg-gray-200 rounded-lg hover:bg-gray-300 transition-colors duration-300 cursor-pointer"
          >
            <FaInstagram className="text-pink-500 text-2xl mr-3" />
            <span className="font-medium">Instagram</span>
          </a>

          {/* Facebook */}
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center p-4 bg-gray-200 rounded-lg hover:bg-gray-300 transition-colors duration-300 cursor-pointer"
          >
            <FaFacebook className="text-blue-600 text-2xl mr-3" />
            <span className="font-medium">Facebook</span>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center p-4 bg-gray-200 rounded-lg hover:bg-gray-300 transition-colors duration-300 cursor-pointer"
          >
            <FaLinkedin className="text-blue-700 text-2xl mr-3" />
            <span className="font-medium">LinkedIn</span>
          </a>
        </div>
      </div>
    </div>
  );
}
