import { FaTshirt, FaRecycle, FaCalendarAlt } from "react-icons/fa";

function Features() {
  const features = [
    {
      icon: <FaTshirt className="text-5xl text-green-600" />,
      title: "Smart Wardrobe",
      description:
        "Digitally organize your clothes by category, season, and color.",
    },
    {
      icon: <FaCalendarAlt className="text-5xl text-green-600" />,
      title: "Outfit Planner",
      description:
        "Plan outfits for work, college, travel, and special occasions.",
    },
    {
      icon: <FaRecycle className="text-5xl text-green-600" />,
      title: "Sustainability Insights",
      description:
        "Track clothing usage and reduce unnecessary fashion purchases.",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-4">
          Why Choose EcoWardrobe?
        </h2>

        <p className="text-center text-gray-500 mb-14">
          Build a smarter wardrobe while making sustainable fashion choices.
        </p>

        <div className="grid md:grid-cols-3 gap-8">

          {features.map((feature, index) => (

            <div
              key={index}
              className="rounded-2xl p-8 shadow-md hover:shadow-xl transition duration-300 text-center"
            >

              <div className="flex justify-center mb-6">
                {feature.icon}
              </div>

              <h3 className="text-2xl font-semibold mb-4">
                {feature.title}
              </h3>

              <p className="text-gray-600">
                {feature.description}
              </p>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Features;