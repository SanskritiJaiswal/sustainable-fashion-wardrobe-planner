import { useContext, useState } from "react";
import categories from "../constants/categories";
import colors from "../constants/colors";
import seasons from "../constants/seasons";
import occasions from "../constants/occasions";
import DashboardOverview from "../components/Dashboard/DashboardOverview";
import Navbar from "../components/Navbar";
import AddClothingForm from "../components/Wardrobe/AddClothingForm";
import ClothingCard from "../components/Wardrobe/ClothingCard";

import { WardrobeContext } from "../context/WardrobeContext";

function Wardrobe() {
 const {
  clothes,
  addClothing,
  deleteClothing,
  wearClothing,
} = useContext(WardrobeContext);
 const [searchTerm, setSearchTerm] = useState("");
 const [selectedCategory, setSelectedCategory] = useState("");
const [selectedColor, setSelectedColor] = useState("");
const [selectedSeason, setSelectedSeason] = useState("");
const [selectedOccasion, setSelectedOccasion] = useState("");
 const filteredClothes = clothes.filter((item) => {
  const matchesSearch = item.name
    .toLowerCase()
    .includes(searchTerm.toLowerCase());

  const matchesCategory =
    selectedCategory === "" ||
    item.category === selectedCategory;

  const matchesColor =
    selectedColor === "" ||
    item.color === selectedColor;

  const matchesSeason =
    selectedSeason === "" ||
    item.season === selectedSeason;

  const matchesOccasion =
    selectedOccasion === "" ||
    item.occasion === selectedOccasion;

  return (
    matchesSearch &&
    matchesCategory &&
    matchesColor &&
    matchesSeason &&
    matchesOccasion
  );
});
  return (
    <>
      <Navbar />

      <div className="max-w-7xl mx-auto px-6 py-12">
        <h1 className="text-5xl font-bold mb-10">
          My Wardrobe
        </h1>
<DashboardOverview clothes={clothes} />
        <AddClothingForm addClothing={addClothing} />
        <div className="my-8">
  <input
    type="text"
    placeholder="🔍 Search your wardrobe..."
    value={searchTerm}
    onChange={(e) => setSearchTerm(e.target.value)}
    className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-500"
  />
  <div className="grid md:grid-cols-4 gap-4 mt-4">

  <select
    value={selectedCategory}
    onChange={(e) => setSelectedCategory(e.target.value)}
    className="border rounded-lg p-3"
  >
    <option value="">All Categories</option>

    {categories.map((item) => (
      <option key={item} value={item}>
        {item}
      </option>
    ))}
  </select>

  <select
    value={selectedColor}
    onChange={(e) => setSelectedColor(e.target.value)}
    className="border rounded-lg p-3"
  >
    <option value="">All Colors</option>

    {colors.map((item) => (
      <option key={item} value={item}>
        {item}
      </option>
    ))}
  </select>

  <select
    value={selectedSeason}
    onChange={(e) => setSelectedSeason(e.target.value)}
    className="border rounded-lg p-3"
  >
    <option value="">All Seasons</option>

    {seasons.map((item) => (
      <option key={item} value={item}>
        {item}
      </option>
    ))}
  </select>

  <select
    value={selectedOccasion}
    onChange={(e) => setSelectedOccasion(e.target.value)}
    className="border rounded-lg p-3"
  >
    <option value="">All Occasions</option>

    {occasions.map((item) => (
      <option key={item} value={item}>
        {item}
      </option>
    ))}
  </select>

</div>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

  {filteredClothes.length > 0 ? (

    filteredClothes.map((item) => (
      <ClothingCard
  key={item.id}
  item={item}
  deleteClothing={deleteClothing}
  wearClothing={wearClothing}
/>
    ))

  ) : (

    <div className="col-span-full text-center py-16">

      <h2 className="text-2xl font-semibold text-gray-600">
        No clothing found
      </h2>

      <p className="text-gray-500 mt-2">
        Try another search keyword.
      </p>

    </div>

  )}

</div>
        
      </div>
    </>
  );
}

export default Wardrobe;