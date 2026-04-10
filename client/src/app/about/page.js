

import AboutContent from "@/common/  AboutContent";
import AboutHero from "@/common/  AboutHero";
import CTASection from "@/components/CTASection";


export const metadata = {
  title: "About PG Finder | Best PG in Gurgaon",
  description:
    "Find verified PG in Gurgaon near Sohna Road, Sector 48 & Badshahpur with zero brokerage.",
};

export default function AboutPage() {
  return (
    <main className="bg-gray-50">
      <AboutHero/>
       <AboutContent/>
      <CTASection/>
    </main>
  );
}