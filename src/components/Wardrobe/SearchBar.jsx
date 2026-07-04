import { FaSearch } from "react-icons/fa";

function SearchBar({
  search,
  setSearch,
  selectedColor,
  setSelectedColor,
  selectedSeason,
  setSelectedSeason,
}) {
  return (
    <div className="bg-white rounded-3xl shadow-lg p-8 mb-10">

      <h2 className="text-2xl font-bold text-green-700 mb-6">
        🔍 Search Your Wardrobe
      </h2>

      <div className="grid md:grid-cols-3 gap-5">

        <div className="relative">

          <FaSearch className="absolute left-4 top-4 text-gray-400" />

          <input
            type="text"
            placeholder="Search by clothing name..."
            value={search}
            onChange={(e)=>setSearch(e.target.value)}
            className="w-full border rounded-xl py-3 pl-11 pr-4 focus:ring-2 focus:ring-green-500 outline-none"
          />

        </div>

        <select
          value={selectedColor}
          onChange={(e)=>setSelectedColor(e.target.value)}
          className="border rounded-xl p-3"
        >
          <option value="">All Colors</option>

          <option>Black</option>
          <option>White</option>
          <option>Blue</option>
          <option>Red</option>
          <option>Green</option>
          <option>Yellow</option>
          <option>Pink</option>
          <option>Grey</option>

        </select>

        <select
          value={selectedSeason}
          onChange={(e)=>setSelectedSeason(e.target.value)}
          className="border rounded-xl p-3"
        >
          <option value="">All Seasons</option>

          <option>Summer</option>
          <option>Winter</option>
          <option>Monsoon</option>
          <option>Spring</option>
          <option>Autumn</option>

        </select>

      </div>

    </div>
  );
}

export default SearchBar;