// /lib/seo.js
export const generateSEO = ({ title, description }) => ({
  title,
  description,
  openGraph: {
    title,
    description,
    type: "website",
  },
});