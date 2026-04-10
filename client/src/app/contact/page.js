import Map from "@/components/Map";
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export const metadata = {
  title: "Contact PG Finder | PG in Gurgaon Near Sohna Road & Sector 48",
  description:
    "Contact PG Finder to find verified PG in Gurgaon near Sohna Road, Sector 48, Badshahpur & Genpact with zero brokerage.",
};

export default function Contact() {
  return (
    <main className="bg-gray-50 min-h-screen">

      {/* 🔥 HERO */}
      <section className="text-center py-14 bg-gradient-to-b from-white to-gray-50">
        <h1 className="text-3xl md:text-5xl font-bold">
          Contact PG Finder
        </h1>

        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          Looking for the best <strong>PG in Gurgaon</strong> near Sohna Road,
          Sector 48, or Badshahpur? Our team will help you find the perfect PG instantly.
        </p>
      </section>

      {/* 🔥 CONTACT OPTIONS */}
      <section className="px-4 md:px-10 grid md:grid-cols-3 gap-6 text-center mb-10">
        
        <a
          href="https://wa.me/919000000000"
          className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition hover:-translate-y-1"
        >
          <FaWhatsapp className="text-green-500 text-3xl mx-auto mb-3" />
          <h3 className="font-semibold text-lg">WhatsApp</h3>
          <p className="text-gray-500 text-sm mt-1">
            Get instant PG recommendations
          </p>
        </a>

        <a
          href="tel:+919000000000"
          className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition hover:-translate-y-1"
        >
          <FaPhoneAlt className="text-blue-500 text-3xl mx-auto mb-3" />
          <h3 className="font-semibold text-lg">Call Us</h3>
          <p className="text-gray-500 text-sm mt-1">
            Speak directly with our expert
          </p>
        </a>

        <a
          href="mailto:support@pgfinder.com"
          className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition hover:-translate-y-1"
        >
          <MdEmail className="text-red-500 text-3xl mx-auto mb-3" />
          <h3 className="font-semibold text-lg">Email</h3>
          <p className="text-gray-500 text-sm mt-1">
            Send your query anytime
          </p>
        </a>
      </section>

      {/* 🔥 FORM + MAP */}
      <section className="px-4 md:px-10 grid md:grid-cols-2 gap-6 mb-10">
        
        {/* FORM */}
        <div className="bg-white p-6 rounded-2xl shadow-md">
          <h2 className="text-xl font-semibold mb-4">
            Get Personalized PG Suggestions
          </h2>

          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            />

            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            />

            <input
              type="text"
              placeholder="Preferred Location (e.g. Sector 48 Gurgaon)"
              className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            />

            <textarea
              placeholder="Your Requirement (Budget, Food, AC, etc.)"
              className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              rows="4"
            />

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-500 to-cyan-400 text-white py-3 rounded-lg font-semibold hover:scale-[1.02] transition"
            >
              Get PG Suggestions
            </button>
          </form>
        </div>

        {/* MAP */}
        <div className="bg-white p-6 rounded-2xl shadow-md">
          <h2 className="text-xl font-semibold mb-4">
            PG Locations in Gurgaon
          </h2>

          <Map lat={28.4595} lng={77.0266} />

          <p className="text-gray-500 text-sm mt-3">
            Popular areas: Sohna Road, Sector 48, Badshahpur, Subhash Chowk, Genpact
          </p>
        </div>
      </section>

      {/* 🔥 FAQ (SEO BOOST) */}
      <section className="px-4 md:px-10 py-10 bg-white">
        <h2 className="text-xl md:text-2xl font-semibold mb-6">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4 max-w-3xl">
          <div>
            <p className="font-medium">Do you charge brokerage?</p>
            <p className="text-gray-500 text-sm">
              No, we provide 100% zero brokerage PG listings in Gurgaon.
            </p>
          </div>

          <div>
            <p className="font-medium">How can I book a PG in Gurgaon?</p>
            <p className="text-gray-500 text-sm">
              You can contact us via WhatsApp or call to get instant PG options.
            </p>
          </div>

          <div>
            <p className="font-medium">Are PG listings verified?</p>
            <p className="text-gray-500 text-sm">
              Yes, all PGs near Sohna Road, Sector 48, and nearby areas are verified.
            </p>
          </div>
        </div>
      </section>

      {/* 🔥 FINAL CTA */}
      <section className="relative py-14 text-center text-white">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500" />
        <div className="absolute inset-0 bg-black/20" />

        <div className="relative z-10">
          <h2 className="text-2xl md:text-4xl font-bold">
            Ready to Find Your PG in Gurgaon?
          </h2>

          <p className="mt-3 text-gray-100">
            Browse verified PG near Sohna Road & Sector 48 now
          </p>

          <a
            href="/pg"
            className="inline-block bg-white text-blue-600 px-8 py-3 rounded-full mt-6 font-semibold shadow-lg hover:scale-105 transition"
          >
            Explore PGs
          </a>
        </div>
      </section>

    </main>
  );
}