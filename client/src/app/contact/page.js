import Map from "@/components/Map";

export const metadata = {
  title: "Contact Us | PG Finder",
  description:
    "Get in touch with PG Finder to find the best PG accommodation in Gurgaon & Delhi.",
};

export default function Contact() {
  return (
    <main className="bg-gray-50 min-h-screen">

      {/* 🔥 HERO */}
      <section className="bg-white text-center p-8 md:p-16 border-b">
        <h1 className="text-3xl md:text-4xl font-bold">
          Contact Us
        </h1>
        <p className="text-gray-600 mt-3">
          Need help finding a PG? We’re here to help you instantly.
        </p>
      </section>

      {/* 🔥 CONTACT OPTIONS */}
      <section className="p-6 md:p-10 grid md:grid-cols-3 gap-6 text-center">
        
        <a
          href="https://wa.me/919000000000"
          className="bg-white p-6 rounded shadow hover:shadow-md"
        >
          <h3 className="font-semibold text-lg">💬 WhatsApp</h3>
          <p className="text-gray-500 mt-1 text-sm">
            Chat instantly with our expert
          </p>
        </a>

        <a
          href="tel:+919000000000"
          className="bg-white p-6 rounded shadow hover:shadow-md"
        >
          <h3 className="font-semibold text-lg">📞 Call Us</h3>
          <p className="text-gray-500 mt-1 text-sm">
            Speak directly with our team
          </p>
        </a>

        <a
          href="mailto:support@pgfinder.com"
          className="bg-white p-6 rounded shadow hover:shadow-md"
        >
          <h3 className="font-semibold text-lg">📧 Email</h3>
          <p className="text-gray-500 mt-1 text-sm">
            Send us your query anytime
          </p>
        </a>
      </section>

      {/* 🔥 CONTACT FORM */}
      <section className="p-6 md:p-10 grid md:grid-cols-2 gap-6">
        
        <div className="bg-white p-6 rounded shadow">
          <h2 className="text-xl font-semibold mb-4">
            Send Us a Message
          </h2>

          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border p-3 rounded"
            />

            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full border p-3 rounded"
            />

            <input
              type="text"
              placeholder="Preferred Location (e.g. Gurgaon)"
              className="w-full border p-3 rounded"
            />

            <textarea
              placeholder="Your Requirement"
              className="w-full border p-3 rounded"
              rows="4"
            />

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded font-semibold"
            >
              Submit
            </button>
          </form>
        </div>

        {/* 🔥 MAP */}
        <div className="bg-white p-6 rounded shadow">
          <h2 className="text-xl font-semibold mb-4">
            Our Location
          </h2>
          <Map lat={28.4595} lng={77.0266} />
        </div>
      </section>

      {/* 🔥 FAQ */}
      <section className="p-6 md:p-10 bg-white">
        <h2 className="text-xl font-semibold mb-4">
          Frequently Asked Questions
        </h2>

        <div className="space-y-3 text-sm">
          <div>
            <p className="font-medium">Do you charge brokerage?</p>
            <p className="text-gray-500">No, we offer zero brokerage PG listings.</p>
          </div>

          <div>
            <p className="font-medium">How can I book a PG?</p>
            <p className="text-gray-500">
              You can book via WhatsApp or contact our team directly.
            </p>
          </div>

          <div>
            <p className="font-medium">Are listings verified?</p>
            <p className="text-gray-500">
              Yes, all PGs are verified before listing.
            </p>
          </div>
        </div>
      </section>

      {/* 🔥 FINAL CTA */}
      <section className="bg-blue-600 text-white text-center p-8">
        <h2 className="text-xl font-semibold">
          Ready to find your PG?
        </h2>

        <p className="text-sm mt-2">
          Browse verified PGs now and book instantly
        </p>

        <a
          href="/pg"
          className="inline-block bg-white text-blue-600 px-6 py-2 rounded mt-4 font-semibold"
        >
          Explore PGs
        </a>
      </section>

    </main>
  );
}