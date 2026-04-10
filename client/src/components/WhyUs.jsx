import { MdVerified } from "react-icons/md";
import { FaMoneyBillWave } from "react-icons/fa";
import { FiZap } from "react-icons/fi";

export default function WhyUs() {
  const features = [
    {
      title: "Verified PG Listings",
      desc: "Find trusted PG in Gurgaon near Sohna Road, Sector 48 & Badshahpur with real photos.",
      icon: <MdVerified className="text-blue-600 text-3xl" />,
    },
    {
      title: "Zero Brokerage",
      desc: "Book PG directly without paying extra charges. 100% transparent pricing.",
      icon: <FaMoneyBillWave className="text-green-600 text-3xl" />,
    },
    {
      title: "Instant Booking",
      desc: "Quickly book PG near Genpact & Subhash Chowk with a smooth process.",
      icon: <FiZap className="text-yellow-500 text-3xl" />,
    },
  ];

  return (
    <section className="bg-gradient-to-b from-white to-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 text-center">

        <h2 className="text-2xl md:text-4xl font-bold mb-4">
          Why Choose Our PG in Gurgaon?
        </h2>

        <p className="text-gray-600 max-w-2xl mx-auto mb-10">
          Discover verified PG accommodations near Sohna Road, Sector 48,
          and Badshahpur with zero brokerage and premium amenities.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {features.map((item, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition hover:-translate-y-1"
            >
              <div className="mb-4 flex justify-center">{item.icon}</div>

              <h3 className="text-lg font-semibold mb-2">
                {item.title}
              </h3>

              <p className="text-gray-600 text-sm">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}