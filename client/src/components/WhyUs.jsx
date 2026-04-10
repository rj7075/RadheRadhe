import { MdVerified } from "react-icons/md";
import { FaHome } from "react-icons/fa";
import { FiMapPin } from "react-icons/fi";

export default function WhyUs() {
  const features = [
    {
      title: "Direct Owner Listings",
      desc: "All PGs are owned or managed directly by us. No brokers, no hidden charges — 100% genuine stays.",
      icon: <FaHome className="text-blue-400 text-3xl" />,
    },
    {
      title: "Multiple Prime Locations",
      desc: "PGs available across Sohna Road, Sector 48, Badshahpur & nearby top areas in Gurgaon.",
      icon: <FiMapPin className="text-green-400 text-3xl" />,
    },
    {
      title: "Verified & Maintained",
      desc: "All rooms are regularly checked, clean, and maintained for a comfortable living experience.",
      icon: <MdVerified className="text-yellow-400 text-3xl" />,
    },
  ];

  return (
    <section className="relative py-16 text-white overflow-hidden">

      {/* 🔥 Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-950" />
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-cyan-500/10 to-indigo-500/20" />

      {/* Glow Effect */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[300px] h-[300px] bg-blue-500/20 blur-3xl rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">

        {/* 🔥 Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
          Stay Directly with{" "}
          <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
            Owner in Gurgaon
          </span>
        </h2>

        {/* 🔥 Subtext */}
        <p className="text-gray-300 max-w-2xl mx-auto mb-10 text-sm sm:text-base">
          We own and manage multiple PG accommodations across Gurgaon. 
          Enjoy clean, affordable, and well-maintained rooms without any middleman hassle.
        </p>

        {/* 🔥 Features */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {features.map((item, i) => (
            <div
              key={i}
              className="bg-white/5 border border-white/10 backdrop-blur-lg p-6 rounded-2xl shadow-lg hover:shadow-2xl transition hover:-translate-y-1"
            >
              <div className="mb-4 flex justify-center">
                {item.icon}
              </div>

              <h3 className="text-lg font-semibold mb-2 text-white">
                {item.title}
              </h3>

              <p className="text-gray-400 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* 🔥 Trust Line */}
        <p className="mt-10 text-sm text-gray-400">
          Managed by <span className="text-white font-medium">Rao Ranjeet Yadav</span> • Trusted PG Owner in Gurgaon
        </p>

      </div>
    </section>
  );
}