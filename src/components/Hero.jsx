import { motion } from "framer-motion";

function Hero() {
  return (
    <section className="min-h-[85vh] flex items-center bg-green-50">

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >

          <h1 className="text-6xl font-bold text-gray-900 leading-tight">

            Dress Better.

            <span className="text-green-600">
              {" "}Live Greener.
            </span>

          </h1>

          <p className="mt-6 text-lg text-gray-600 leading-8">

            Organize your wardrobe, create beautiful outfits,
            reduce fashion waste, and build sustainable habits—
            all in one place.

          </p>

          <div className="mt-10 flex gap-5">

            <button className="bg-green-600 text-white px-7 py-3 rounded-full hover:bg-green-700 transition">

              Start Planning

            </button>

            <button className="border border-green-600 text-green-700 px-7 py-3 rounded-full hover:bg-green-100 transition">

              Learn More

            </button>

          </div>

        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >

          <img
            src="https://images.unsplash.com/photo-1483985988355-763728e1935b"
            alt="Fashion"
            className="rounded-3xl shadow-xl"
          />

        </motion.div>

      </div>

    </section>
  );
}

export default Hero;