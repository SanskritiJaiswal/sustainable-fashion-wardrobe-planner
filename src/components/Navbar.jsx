import { FaLeaf } from "react-icons/fa";

function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <div className="flex items-center gap-2">
          <FaLeaf className="text-green-600 text-2xl" />
          <h1 className="text-2xl font-bold text-green-700">
            EcoWardrobe
          </h1>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex gap-8 text-gray-700 font-medium">
          <a href="#" className="hover:text-green-600 transition">
            Home
          </a>

          <a href="#" className="hover:text-green-600 transition">
            Wardrobe
          </a>

          <a href="#" className="hover:text-green-600 transition">
            Planner
          </a>

          <a href="#" className="hover:text-green-600 transition">
            Dashboard
          </a>
        </div>

        {/* CTA Button */}
        <button className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-full transition">
          Get Started
        </button>

      </div>
    </nav>
  );
}

export default Navbar;