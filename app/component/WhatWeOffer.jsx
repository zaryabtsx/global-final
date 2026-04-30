const services = [
  {
    id: 1,
    title: "Doctor & Hematologist Consultations",
    description: "Free clinical consultations at every step of treatment with qualified specialists.",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=600&q=80",
    alt: "Doctor Consultation",
  },
  {
    id: 2,
    title: "Free Laboratory Services",
    description: "All diagnostic and follow-up lab investigations provided at no cost.",
    image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=600&q=80",
    alt: "Laboratory Services",
  },
  {
    id: 3,
    title: "Medicines & Iron Chelation",
    description: "Tailored treatment protocols including iron chelating agents completely free.",
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=600&q=80",
    alt: "Medicines",
  },
  {
    id: 4,
    title: "Blood Transfusion Therapy",
    description: "30–40 patients receive complimentary transfusions daily to maintain hemoglobin levels.",
    image: "https://images.unsplash.com/photo-1615461066841-6116e61059a6?w=600&q=80",
    alt: "Blood Transfusion",
  },
  {
    id: 5,
    title: "24/7 Blood Bank",
    description: "State-of-the-art facility with round-the-clock screened and safe blood supply.",
    image: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=600&q=80",
    alt: "Blood Bank",
  },
  {
    id: 6,
    title: "Awareness & Carrier Screening",
    description: "Family counseling, early diagnosis promotion, and preventive screening programs.",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&q=80",
    alt: "Carrier Screening",
  },
];

const ServiceCard = ({ title, description, image, alt }) => (
  <div className="bg-white rounded-lg overflow-hidden shadow-sm">
    <img
      src={image}
      alt={alt}
      className="w-full h-48 object-cover"
    />
    <div className="p-4">
      <h3 className="font-bold text-gray-900 text-base">{title}</h3>
      <p className="text-gray-500 text-sm mt-1">{description}</p>
    </div>
  </div>
);

export default function WhatWeOffer() {
  return (
    <section className="bg-gray-100 py-16 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-red-700">What We Offer</h2>
          <p className="text-gray-600 mt-1 text-lg">Comprehensive Care, All Under One Roof</p>
          <div className="w-10 h-1 bg-red-600 mx-auto mt-3 rounded" />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <ServiceCard key={service.id} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}