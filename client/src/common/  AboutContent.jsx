import { MdVerified } from "react-icons/md";
import { FaMoneyBillWave } from "react-icons/fa";
import { FiZap } from "react-icons/fi";

export default function AboutContent() {
  const features = [
    {
      icon: <MdVerified className="text-blue-600 text-3xl" />,
      title: "Verified PG Listings",
      desc: "All PGs near Sohna Road & Sector 48 are verified with real photos.",
    },
    {
      icon: <FaMoneyBillWave className="text-green-600 text-3xl" />,
      title: "Zero Brokerage",
      desc: "Book directly without hidden charges or middlemen.",
    },
    {
      icon: <FiZap className="text-yellow-500 text-3xl" />,
      title: "Instant Booking",
      desc: "Quickly book PG near Genpact & Subhash Chowk.",
    },
  ];

  return (
    <section className="py-12 bg-white">

      {/* 🔥 Mission */}
      <div className="text-center max-w-3xl mx-auto px-4 mb-12">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">
          Our Mission
        </h2>
        <p className="text-gray-600 leading-relaxed">
          We aim to simplify the process of finding the best{" "}
          <strong>PG in Gurgaon</strong> by offering verified listings,
          transparent pricing, and instant booking. Our goal is to remove
          middlemen and make PG search fast, easy, and reliable.
        </p>
      </div>

      {/* 🔥 Why Us */}
      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto px-4 mb-14">
        {features.map((item, i) => (
          <div
            key={i}
            className="bg-gray-50 p-6 rounded-2xl text-center shadow-sm hover:shadow-lg transition"
          >
            <div className="mb-4 flex justify-center">{item.icon}</div>
            <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
            <p className="text-gray-600 text-sm">{item.desc}</p>
          </div>
        ))}
      </div>

      {/* 🔥 Stats */}
      <div className="grid md:grid-cols-3 text-center gap-6 max-w-5xl mx-auto mb-12">
        <div>
          <p className="text-3xl font-bold text-blue-600">500+</p>
          <p className="text-gray-600">PG Listings</p>
        </div>
        <div>
          <p className="text-3xl font-bold text-blue-600">1000+</p>
          <p className="text-gray-600">Happy Users</p>
        </div>
        <div>
          <p className="text-3xl font-bold text-blue-600">0</p>
          <p className="text-gray-600">Brokerage</p>
        </div>
      </div>

      {/* 🔥 SEO Content */}
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h3 className="text-xl font-semibold mb-3">
          Best PG in Gurgaon Near Sohna Road & Sector 48
        </h3>

        <p className="text-gray-600 leading-relaxed">
          PG Finder helps you discover affordable and premium{" "}
          <strong>PG accommodations in Gurgaon</strong> near Sohna Road,
          Badshahpur, Subhash Chowk, Vatika Chowk, Sector 48, and Sector 69.
          Choose from boys, girls, and unisex PGs with modern amenities like
          WiFi, food, AC rooms, and security.
        </p>
      </div>

    </section>
  );
}