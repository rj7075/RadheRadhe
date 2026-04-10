import { MdVerified } from "react-icons/md";
import { FaHome } from "react-icons/fa";
import { FiMapPin } from "react-icons/fi";

export default function AboutContent() {
  const features = [
    {
      icon: <FaHome className="text-blue-400 text-3xl" />,
      title: "Direct Owner PG",
      desc: "All PGs are owned or managed directly by us. No brokers, no confusion.",
    },
    {
      icon: <FiMapPin className="text-green-400 text-3xl" />,
      title: "Prime Gurgaon Locations",
      desc: "PGs available near Sohna Road, Sector 48, Badshahpur & nearby areas.",
    },
    {
      icon: <MdVerified className="text-yellow-400 text-3xl" />,
      title: "Verified & Maintained",
      desc: "Clean, secure, and regularly maintained rooms with real photos.",
    },
  ];

  return (
    <section className="bg-gradient-to-br from-gray-900 via-black to-gray-950 text-white py-16">

      {/* 🔥 MISSION */}
      <div className="text-center max-w-3xl mx-auto px-4 mb-14">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">
          Our Mission
        </h2>

        <p className="text-gray-300 leading-relaxed text-sm md:text-base">
          Our mission is to provide comfortable, affordable, and reliable{" "}
          <strong>PG in Gurgaon</strong> without the hassle of middlemen. 
          We directly manage our properties to ensure better quality, 
          transparent pricing, and a smooth experience for tenants.
        </p>

        <p className="text-gray-300 mt-3 leading-relaxed text-sm md:text-base">
          Whether you are a student or a working professional, we aim to offer 
          a safe and convenient living space near your workplace or college.
        </p>
      </div>

      {/* 🔥 WHY US */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto px-4 mb-16">
        {features.map((item, i) => (
          <div
            key={i}
            className="bg-white/5 border border-white/10 backdrop-blur-lg p-6 rounded-2xl text-center shadow-lg hover:shadow-2xl transition hover:-translate-y-1"
          >
            <div className="mb-4 flex justify-center">{item.icon}</div>

            <h3 className="font-semibold text-lg mb-2 text-white">
              {item.title}
            </h3>

            <p className="text-gray-400 text-sm leading-relaxed">
              {item.desc}
            </p>
          </div>
        ))}
      </div>

      {/* 🔥 STATS */}
      <div className="grid grid-cols-2 md:grid-cols-4 text-center gap-6 max-w-5xl mx-auto mb-16 px-4">

        <div className="bg-white/5 border border-white/10 rounded-xl py-6">
          <p className="text-3xl font-bold text-blue-400">5+</p>
          <p className="text-gray-400 text-sm mt-1">PG Buildings</p>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-xl py-6">
          <p className="text-3xl font-bold text-green-400">100+</p>
          <p className="text-gray-400 text-sm mt-1">Rooms Available</p>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-xl py-6">
          <p className="text-3xl font-bold text-yellow-400">500+</p>
          <p className="text-gray-400 text-sm mt-1">Happy Tenants</p>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-xl py-6">
          <p className="text-3xl font-bold text-pink-400">0</p>
          <p className="text-gray-400 text-sm mt-1">Brokerage</p>
        </div>

      </div>

      {/* 🔥 SEO CONTENT */}
      <div className="max-w-5xl mx-auto px-4 text-center">
        
        <h3 className="text-xl md:text-2xl font-semibold mb-4">
          Best PG in Gurgaon Near{" "}
          <span className="text-yellow-400">Sohna Road</span> &{" "}
          <span className="text-green-400">Sector 48</span>
        </h3>

        <p className="text-gray-300 text-sm md:text-base leading-relaxed">
          We provide premium and budget-friendly{" "}
          <strong>PG accommodations in Gurgaon</strong> near{" "}
          Subhash Chowk, Badshahpur, Vatika Chowk, Sector 69, and Genpact. 
          Our PGs are ideal for professionals working in nearby IT parks and 
          business hubs like Spaze IT Park and Cyber City.
        </p>

        <p className="text-gray-300 mt-3 text-sm md:text-base leading-relaxed">
          Choose from <strong>boys PG, girls PG, and unisex PG</strong> with 
          modern amenities like WiFi, food, AC rooms, housekeeping, and security.  
          Enjoy a hassle-free stay with direct owner support and easy booking.
        </p>

        {/* 🔥 TAGS */}
        <div className="flex flex-wrap justify-center gap-2 mt-6 text-xs sm:text-sm">
          {[
            "PG near Sohna Road Gurgaon",
            "PG in Sector 48 Gurgaon",
            "PG near Genpact",
            "PG near Subhash Chowk",
            "PG near Vatika Chowk",
            "PG in Badshahpur Gurgaon",
          ].map((item, i) => (
            <span
              key={i}
              className="bg-white/10 border border-white/20 px-3 py-1.5 rounded-full backdrop-blur"
            >
              {item}
            </span>
          ))}
        </div>

        {/* Owner Line */}
        <p className="mt-8 text-sm text-gray-400">
          Managed by{" "}
          <span className="text-white font-medium">
            Rao Ranjeet Yadav
          </span>{" "}
          — Trusted PG Owner in Gurgaon
        </p>

      </div>

    </section>
  );
}