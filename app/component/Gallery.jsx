const galleryItems = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=600&q=80",
    caption: "Mr Murtaza Ameer Ali Burhani known as a blood hero. He has donated blood over 170 times",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?w=600&q=80",
    caption: "Psychologist conducting activity sessions for mental relaxation of our patients",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1615461066841-6116e61059a6?w=600&q=80",
    caption: "Patients being managed at JSF",
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=600&q=80",
    caption: "Jamile Sultana Foundation thank our heroes who help us in saving lives",
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=600&q=80",
    caption: "Staff training sessions for better management and care of patients",
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&q=80",
    caption: "Psychologist conducting activity sessions for mental relaxation of our patients",
  },
  {
    id: 7,
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=600&q=80",
    caption: "Qualified doctors assessing donors eligibility and fitness for blood donation",
  },
  {
    id: 8,
    image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=600&q=80",
    caption: "Snippets of blood camps where donors are being registered and screening done to assess their general health",
  },
  {
    id: 9,
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=600&q=80",
    caption: "Collaborating with different organizations and groups to help spread our message, awareness and create a network of voluntary donors",
  },
  {
    id: 10,
    image: "https://images.unsplash.com/photo-1581093804475-577d72e13cfd?w=600&q=80",
    caption: "Lab staff working",
  },
  {
    id: 11,
    image: "https://images.unsplash.com/photo-1551884170-09fb70a3a2ed?w=600&q=80",
    caption: "Patients being managed at JSF",
  },
  {
    id: 12,
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=600&q=80",
    caption: "Qualified doctors available for free consultations",
  },
];

const GalleryCard = ({ image, caption }) => (
  <div className="relative rounded-lg overflow-hidden group cursor-pointer">
    <img
      src={image}
      alt={caption}
      className="w-full h-52 object-cover"
    />
    {/* Dark gradient overlay at bottom */}
    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
    {/* Caption */}
    <p className="absolute bottom-0 left-0 right-0 text-white text-xs px-3 py-2 leading-snug">
      {caption}
    </p>
  </div>
);

export default function Gallery() {
  return (
    <section className="bg-gray-100 py-16 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-red-700">Gallery</h2>
          <p className="text-gray-600 mt-1 text-base">Moments From Our Foundation</p>
          <div className="w-10 h-1 bg-red-600 mx-auto mt-3 rounded" />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {galleryItems.map((item) => (
            <GalleryCard key={item.id} image={item.image} caption={item.caption} />
          ))}
        </div>
      </div>
    </section>
  );
}