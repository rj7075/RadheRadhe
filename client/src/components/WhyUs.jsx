export default function WhyUs() {
  const features = [
    {
      title: "Verified PG in Gurgaon",
      desc: "All PG listings near Sohna Road, Sector 48, and Badshahpur are verified with real photos and accurate details.",
      icon: "✅",
    },
    {
      title: "No Brokerage PG",
      desc: "Book PG accommodations in Gurgaon directly without paying any brokerage or hidden charges.",
      icon: "💸",
    },
    {
      title: "Instant PG Booking",
      desc: "Find and book PG near Genpact, Subhash Chowk, and Vatika Chowk instantly with a smooth process.",
      icon: "⚡",
    },
  ];

  return (
    <section className="bg-gradient-to-b from-white to-gray-50 py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-6 text-center">

        {/* 🔥 SEO Heading */}
        <h2 className="text-2xl md:text-4xl font-bold mb-4">
          Why Choose Our PG in Gurgaon?
        </h2>

        {/* 🔥 Subtext */}
        <p className="text-gray-600 max-w-2xl mx-auto mb-10">
          Discover the best PG accommodations in Gurgaon near Sohna Road, Sector 48,
          Badshahpur, and nearby areas with verified listings, zero brokerage,
          and instant booking options.
        </p>

        {/* 🔥 Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {features.map((item, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300 hover:-translate-y-1"
            >
              {/* Icon */}
              <div className="text-3xl mb-3">{item.icon}</div>

              {/* Title */}
              <h3 className="text-lg font-semibold mb-2">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}