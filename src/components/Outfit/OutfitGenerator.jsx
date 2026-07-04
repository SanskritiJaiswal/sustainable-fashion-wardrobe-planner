import { useState } from "react";

function OutfitGenerator({ clothes }) {
  const [season, setSeason] = useState("");
  const [occasion, setOccasion] = useState("");
  const [outfit, setOutfit] = useState([]);

  function generateOutfit() {
    let filtered = clothes.filter((item) => {
      const seasonMatch =
        season === "" || item.season === season;

      const occasionMatch =
        occasion === "" || item.occasion === occasion;

      return seasonMatch && occasionMatch;
    });

    if (filtered.length === 0) {
      setOutfit([]);
      return;
    }

    filtered = [...filtered].sort(() => Math.random() - 0.5);

    setOutfit(filtered.slice(0, Math.min(filtered.length, 4)));
  }

  return (
    <div className="bg-white rounded-3xl shadow-lg border border-green-100 p-8 mb-14">

      <div className="flex items-center justify-between mb-6">

        <div>

          <h2 className="text-3xl font-bold text-green-700">
            ✨ Outfit Generator
          </h2>

          <p className="text-gray-500 mt-2">
            Generate an outfit based on season and occasion.
          </p>

        </div>

      </div>

      <div className="grid md:grid-cols-3 gap-5">

        <select
          value={season}
          onChange={(e)=>setSeason(e.target.value)}
          className="border rounded-xl p-3"
        >
          <option value="">Any Season</option>
          <option>Summer</option>
          <option>Winter</option>
          <option>Spring</option>
          <option>Autumn</option>
          <option>Monsoon</option>
        </select>

        <select
          value={occasion}
          onChange={(e)=>setOccasion(e.target.value)}
          className="border rounded-xl p-3"
        >
          <option value="">Any Occasion</option>
          <option>Casual</option>
          <option>Formal</option>
          <option>Party</option>
          <option>Travel</option>
          <option>Sports</option>
        </select>

        <button
          onClick={generateOutfit}
          className="bg-green-600 hover:bg-green-700 text-white rounded-xl font-semibold transition"
        >
          Generate Outfit
        </button>

      </div>

      {outfit.length > 0 && (

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mt-8">

          {outfit.map((item)=>(

            <div
              key={item.id}
              className="border rounded-2xl p-4 bg-green-50"
            >

              {item.image && (
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-40 object-cover rounded-xl mb-4"
                />
              )}

              <h3 className="font-bold">
                {item.name}
              </h3>

              <p className="text-sm text-gray-500 mt-2">
                {item.category}
              </p>

              <p className="text-sm text-gray-500">
                {item.color}
              </p>

            </div>

          ))}

        </div>

      )}

      {outfit.length === 0 && (

        <div className="text-center text-gray-400 mt-8">

          Generate an outfit to see suggestions.

        </div>

      )}

    </div>
  );
}

export default OutfitGenerator;