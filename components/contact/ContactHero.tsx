import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";  // Import React Icons

export default function ContactHero() {
  return (
    <section className="relative py-4 overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url("/assets/images/pic-6.jpg")`,
        }}
      >
        <div className="absolute inset-0 bg-[#3d756c]"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center text-white max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            Let&apos;s Connect
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-6 leading-relaxed">
            Have a question, want to discuss a collaboration, or simply share
            your thoughts? I&apos;d love to hear from you.
          </p>

          {/* Contact Methods */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            {/* Email Card */}
            <div className="bg-[#1e2a2d] hover:bg-[#2d3d41] backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaEnvelope className="text-green-400 text-2xl" /> {/* Using React Icon for Email */}
              </div>
              <h3 className="text-xl font-semibold mb-2">Email</h3>
              <a
                href="mailto:munshyaalicetembo@gmail.com"
                className="text-white/80 hover:underline break-all"
              >
                munshyaalicetembo@gmail.com
              </a>
            </div>

            {/* Phone Card */}
            <div className="bg-[#1e2a2d] hover:bg-[#2d3d41] backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaPhone className="text-green-400 text-2xl" /> {/* Changed the color of the phone icon */}
              </div>
              <h3 className="text-xl font-semibold mb-2">Phone</h3>
              <a
                href="tel:123-456-7890"
                className="text-white/80 hover:underline"
              >
                123-456-7890
              </a>
            </div>

            {/* Location Card */}
            <div className="bg-[#212121] hover:bg-[#383838] backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaMapMarkerAlt className="text-green-400 text-2xl" /> {/* Using React Icon for Location */}
              </div>
              <h3 className="text-xl font-semibold mb-2">Location</h3>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:underline"
              >
                ABC
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
