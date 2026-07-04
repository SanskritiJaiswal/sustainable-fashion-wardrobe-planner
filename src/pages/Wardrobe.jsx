import OutfitGenerator from "../components/Outfit/OutfitGenerator";
import { useContext, useState } from "react";

import categories from "../constants/categories";
import colors from "../constants/colors";
import seasons from "../constants/seasons";
import occasions from "../constants/occasions";

import DashboardOverview from "../components/Dashboard/DashboardOverview";
import Navbar from "../components/Navbar";
import AddClothingForm from "../components/Wardrobe/AddClothingForm";
import ClothingCard from "../components/Wardrobe/ClothingCard";
import EditClothingModal from "../components/Wardrobe/EditClothingModal";

import { WardrobeContext } from "../context/WardrobeContext";

function Wardrobe() {
  const {
  clothes,
  addClothing,
  deleteClothing,
  wearClothing,
  toggleFavorite,
  setSelectedItem,
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

        {/* Page Header */}

        <div className="mb-12">

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            My Wardrobe
          </h1>

          <p className="text-gray-500 text-lg mt-2 max-w-3xl">
            Organize, track and style your clothing while promoting sustainable fashion.
          </p>

        </div>

        {/* Dashboard */}

        <div className="mb-16">
        <DashboardOverview clothes={clothes} />
       </div>
        <div className="h-8"></div>
        <OutfitGenerator clothes={clothes} />

        {/* Search & Filter */}

        <div className="mt-14 mb-14">

          <h2 className="text-3xl font-bold text-green-700 mb-6">
            🔍 Search & Filter
          </h2>

          <div className="bg-white rounded-3xl shadow-lg border border-green-100 p-6">

            <input
              type="text"
              placeholder="Search clothing by name..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full border border-green-200 bg-white rounded-2xl p-4 text-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition"
            />

            <div className="grid md:grid-cols-4 gap-4 mt-5">

              <select
                value={selectedCategory}
                onChange={(e) =>
                  setSelectedCategory(e.target.value)
                }
               className="border border-green-200 rounded-xl p-3 bg-white shadow-sm focus:ring-2 focus:ring-green-500 transition"
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
                onChange={(e) =>
                  setSelectedColor(e.target.value)
                }
                className="border border-green-200 rounded-xl p-3 bg-white shadow-sm focus:ring-2 focus:ring-green-500 transition"
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
                onChange={(e) =>
                  setSelectedSeason(e.target.value)
                }
                className="border border-green-200 rounded-xl p-3 bg-white shadow-sm focus:ring-2 focus:ring-green-500 transition"
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
                onChange={(e) =>
                  setSelectedOccasion(e.target.value)
                }
                className="border border-green-200 rounded-xl p-3 bg-white shadow-sm focus:ring-2 focus:ring-green-500 transition"
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

        </div>

        {/* Collection */}

        <div className="flex items-center justify-between mb-8">

          <div>

            <h2 className="text-3xl font-bold text-green-700">
              👕 Your Collection
            </h2>

            <p className="text-gray-500 mt-2">
              {filteredClothes.length} item(s) found
            </p>

          </div>

        </div>

        {/* Clothing Grid */}

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-10">

          {filteredClothes.length > 0 ? (

            filteredClothes.map((item) => (

              <ClothingCard
                key={item.id}
                item={item}
                deleteClothing={deleteClothing}
                wearClothing={wearClothing}
                 toggleFavorite={toggleFavorite}
                 setSelectedItem={setSelectedItem}

              />

            ))

          ) : (

            <div className="col-span-full text-center py-20">

              <h2 className="text-4xl font-bold text-gray-700">
                🧺 Your wardrobe is empty
              </h2>

             <p className="text-gray-500 mt-4 text-lg">
                Start by adding your first clothing item and build your digital wardrobe.
             </p>

            </div>

          )}

        </div>

        {/* Add Clothing */}

        <div className="mt-24">

          <AddClothingForm addClothing={addClothing} />

        </div>

      </div>

<EditClothingModal />

</>
  );
}

export default Wardrobe;