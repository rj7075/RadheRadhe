"use client"
import Map from "@/components/Map";
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { useState } from "react";
import toast from "react-hot-toast";


export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    location: "",
    requirement: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formURL =
      "https://docs.google.com/forms/d/e/1FAIpQLSdI8IsNvhIeqAfJ827SBe9h3rF6E2K2cPxIAh_S9YM4gWAxAw/formResponse";

    const formBody = new FormData();
    formBody.append("entry.1041701266", formData.name);        // Name
    formBody.append("entry.618747833", formData.phone);       // Phone
    formBody.append("entry.1248971333", formData.location);    // Location
    formBody.append("entry.1590349924", formData.requirement); // Requirement

    fetch(formURL, {
      method: "POST",
      body: formBody,
      mode: "no-cors", // IMPORTANT
    })
      .then(() => {
        toast.success("Form submitted successfully!");
        setFormData({
          name: "",
          phone: "",
          location: "",
          requirement: "",
        });
      })
      .catch(() => {
        toast.error("Something went wrong!");
      });
  };

  return (
    <main className="bg-black text-white min-h-screen">

      {/* 🔥 HERO */}
      <section className="py-16 text-center bg-gradient-to-br from-gray-900 via-black to-gray-950">
        <h1 className="text-3xl md:text-5xl font-bold">
          Contact{" "}
          <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
            Radhe Radhe PG
          </span>
        </h1>

        <p className="text-gray-300 mt-4 max-w-2xl mx-auto text-sm md:text-lg">
          Looking for the best <strong>PG in Gurgaon</strong> near Sohna Road,
          Sector 48, or Badshahpur? Contact us directly and get instant PG options.
        </p>

        <p className="text-sm text-gray-400 mt-3">
          Direct Owner • Zero Brokerage • Instant Response
        </p>
      </section>

      {/* 🔥 CONTACT OPTIONS */}
      <section className="px-4 md:px-10 grid sm:grid-cols-2 md:grid-cols-3 gap-6 text-center py-10">

        <a
          href="https://wa.me/919838692186"
          className="bg-white/5 border border-white/10 backdrop-blur-lg p-6 rounded-2xl hover:shadow-2xl transition hover:-translate-y-1"
        >
          <FaWhatsapp className="text-green-400 text-3xl mx-auto mb-3" />
          <h3 className="font-semibold text-lg">WhatsApp</h3>
          <p className="text-gray-400 text-sm mt-1">
            Instant PG suggestions
          </p>
        </a>

        <a
          href="tel:9838692186"
          className="bg-white/5 border border-white/10 backdrop-blur-lg p-6 rounded-2xl hover:shadow-2xl transition hover:-translate-y-1"
        >
          <FaPhoneAlt className="text-blue-400 text-3xl mx-auto mb-3" />
          <h3 className="font-semibold text-lg">Call Now</h3>
          <p className="text-gray-400 text-sm mt-1">
            Speak directly with owner
          </p>
        </a>

        <a
          href="mailto:rj7075yadav@gmail.com"
          className="bg-white/5 border border-white/10 backdrop-blur-lg p-6 rounded-2xl hover:shadow-2xl transition hover:-translate-y-1"
        >
          <MdEmail className="text-red-400 text-3xl mx-auto mb-3" />
          <h3 className="font-semibold text-lg">Email</h3>
          <p className="text-gray-400 text-sm mt-1">
            Send your query anytime
          </p>
        </a>

      </section>

      {/* 🔥 FORM + MAP */}
      <section className="px-4 md:px-10 grid md:grid-cols-2 gap-6 pb-12">

        {/* FORM */}
        <div className="bg-white/5 border border-white/10 backdrop-blur-lg p-6 rounded-2xl">
          <h2 className="text-xl font-semibold mb-4">
            Get PG Suggestions Instantly
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">

            <input
              name="name" 
              onChange={handleChange}
              value={formData.name}
              type="text"
              placeholder="Your Name"
              className="w-full bg-transparent border border-white/20 p-3 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
            />

            <input
              name="phone" 
              onChange={handleChange}
              value={formData.phone} // ❌ you had name here before
              type="tel"
              placeholder="Phone Number"
              className="w-full bg-transparent border border-white/20 p-3 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
            />

            <input
              name="location" 
              onChange={handleChange}
              value={formData.location}
              type="text"
              placeholder="Preferred Location (e.g. Sector 48)"
              className="w-full bg-transparent border border-white/20 p-3 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
            />

            <textarea
              name="requirement" 
              onChange={handleChange}
              value={formData.requirement}
              placeholder="Your Requirement (Budget, Food, AC, etc.)"
              className="w-full bg-transparent border border-white/20 p-3 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
              rows="4"
            />

            <button
              type="submit"
              className="w-full bg-gradient-to-r cursor-pointer from-blue-500 to-cyan-400 text-white py-3 rounded-lg font-semibold hover:scale-[1.02] transition"
            >
              Get PG Suggestions
            </button>

          </form>
        </div>

        {/* MAP */}
        <div className="bg-white/5 border border-white/10 backdrop-blur-lg p-6 rounded-2xl">
          <h2 className="text-xl font-semibold mb-4">
            Our PG Locations
          </h2>

          <Map lat={28.4595} lng={77.0266} />

          <p className="text-gray-400 text-sm mt-3">
            Sohna Road • Sector 48 • Badshahpur • Subhash Chowk • Genpact
          </p>
        </div>

      </section>

      {/* 🔥 SEO CONTENT */}
      <section className="relative px-4 md:px-10 py-10 bg-gradient-to-br from-gray-900 via-black to-gray-950 text-center overflow-hidden">

  {/* Overlay */}
  <div className="absolute inset-0 bg-black/20" />

  {/* Content */}
  <div className="relative z-10 max-w-3xl mx-auto">

    <h2 className="text-xl md:text-2xl font-semibold mb-4">
      PG in Gurgaon Near Sohna Road & Sector 48
    </h2>

    <p className="text-gray-300 text-sm md:text-base mb-6">
      Contact us to find the best <strong>PG in Gurgaon</strong> near 
      Sohna Road, Badshahpur, Sector 48, Subhash Chowk, and Genpact. 
      We offer direct owner PG with zero brokerage and modern amenities 
      like food, WiFi, AC rooms, and security.
    </p>

    <h3 className="text-2xl md:text-4xl font-bold">
      Need Help Finding a PG?
    </h3>

    <p className="mt-3 text-gray-100">
      Chat with us instantly and get the best options
    </p>

    <a
      href="https://wa.me/919838692186"
      className="inline-flex items-center gap-2 bg-white text-green-600 px-8 py-3 rounded-full mt-6 font-semibold shadow-lg hover:scale-105 transition"
    >
      <FaWhatsapp />
      Chat on WhatsApp
    </a>

  </div>

</section>

  
      

    </main>
  );
}