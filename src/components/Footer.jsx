import { FaGithub, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-green-700 text-white py-10 mt-20">

      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">

        <div>

          <h2 className="text-2xl font-bold">
            EcoWardrobe
          </h2>

          <p className="text-green-100 mt-2">
            Sustainable fashion starts with better choices.
          </p>

        </div>

        <div className="flex gap-6 text-2xl mt-6 md:mt-0">

          <FaGithub className="cursor-pointer hover:scale-110 transition" />

          <FaLinkedin className="cursor-pointer hover:scale-110 transition" />

        </div>

      </div>

      <p className="text-center text-green-100 mt-8">
        © 2026 EcoWardrobe. Built with React & Tailwind CSS.
      </p>

    </footer>
  );
}

export default Footer;