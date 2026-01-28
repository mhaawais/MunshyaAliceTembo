"use client";

import React from "react";
// import Header from "@/components/Header";  // Ensure the correct path
// import Footer from "@/components/Footer";  // Ensure the correct path
import Header from "@/components/header";
import Footer from "@/components/footer";

const ContactPage = () => {
  return (
    <div>
      {/* Render Header */}
      <Header />

      {/* Contact Banner Section */}
      <section className="relative bg-[#458076] text-white py-20">
        {/* Decorative softly blurred blobs */}
        <div aria-hidden className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
        <div aria-hidden className="pointer-events-none absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-black/10 blur-3xl" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-10 xl:px-16 py-16 sm:py-14 md:py-12 lg:py-10 xl:py-8 2xl:py-6">
          <div className="text-center">
            <h3 className="text-3xl sm:text-4xl font-bold leading-tight">Connect With Us</h3>
            <span className="text-xl sm:text-2xl block mt-2">Contact Us</span>
            <p className="mt-4 text-lg text-white/90 max-w-xl mx-auto">
              Discuss How Our Book Writing Services Can Help You Achieve Your Goals As An Author
            </p>
            <p className="mt-4 font-semibold text-white/90">
              Everything is in our Hands To Assist You In Achieving Your Goals
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 justify-center items-center">
            {/* Contact Info Section */}
            <div className="text-center md:text-left">
              <h1 className="text-3xl font-extrabold mb-4">Contact Details</h1>
              <div className="border-t-4 border-teal-600 w-16 mx-auto mb-4"></div>
              <div className="text-left space-y-4">
                <h4 className="text-xl font-semibold">Phone</h4>
                <p className="text-lg"><i className="fa-solid fa-phone mr-2"></i>+1 (213) 757-2002</p>
                <div className="border-l-4 border-teal-600 ml-4 mb-4"></div>
                <h4 className="text-xl font-semibold">Email</h4>
                <p className="text-lg"><i className="fa-solid fa-envelope mr-2"></i>info@elitebookwriters.com</p>
                <div className="border-l-4 border-teal-600 ml-4 mb-4"></div>
                <h4 className="text-xl font-semibold">Address</h4>
                <p className="text-lg">
                  <i className="fa-solid fa-map-location-dot mr-2"></i>2050 Cheshire Bridge Rd Ne Apt 1421, Atlanta, Georgia, United States 30324
                </p>
              </div>
            </div>

            {/* Contact Form Section */}
            <div className="bg-white p-8 shadow-lg rounded-lg">
              <form action="https://formspree.io/f/mleylgnb" method="POST">
                <div className="space-y-6">
                  {/* First Name */}
                  <div className="flex flex-col">
                    <label htmlFor="first_name" className="text-lg font-semibold">First Name</label>
                    <input
                      type="text"
                      name="first_name"
                      id="first_name"
                      className="border-2 border-gray-300 p-3 rounded-lg"
                      placeholder="First Name"
                      required
                    />
                  </div>

                  {/* Last Name */}
                  <div className="flex flex-col">
                    <label htmlFor="last_name" className="text-lg font-semibold">Last Name</label>
                    <input
                      type="text"
                      name="last_name"
                      id="last_name"
                      className="border-2 border-gray-300 p-3 rounded-lg"
                      placeholder="Last Name"
                      required
                    />
                  </div>

                  {/* Email */}
                  <div className="flex flex-col">
                    <label htmlFor="email" className="text-lg font-semibold">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="border-2 border-gray-300 p-3 rounded-lg"
                      placeholder="Email Address"
                      required
                    />
                  </div>

                  {/* Phone */}
                  <div className="flex flex-col">
                    <label htmlFor="phone" className="text-lg font-semibold">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      id="phone"
                      className="border-2 border-gray-300 p-3 rounded-lg"
                      placeholder="Phone Number"
                      required
                    />
                  </div>

                  {/* Message */}
                  <div className="flex flex-col">
                    <label htmlFor="message" className="text-lg font-semibold">Enter Message</label>
                    <textarea
                      name="message"
                      id="message"
                      className="border-2 border-gray-300 p-3 rounded-lg h-40"
                      placeholder="Enter Message"
                      required
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <div className="text-center">
                    <button
                      type="submit"
                      className="bg-teal-600 text-white py-3 px-6 rounded-lg hover:bg-teal-500 transition duration-300"
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Render Footer */}
      <Footer />
    </div>
  );
};

export default ContactPage;
