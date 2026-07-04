import {
  FaTrash,
  FaTag,
  FaPalette,
  FaCloudSun,
  FaGlassCheers,
  FaEdit,
  FaHeart,
  FaRegHeart,
} from "react-icons/fa";

function ClothingCard({
  item,
  deleteClothing,
  wearClothing,
  toggleFavorite,
  setSelectedItem
}) {
  return (
    <div className="group bg-white rounded-3xl shadow-lg border border-green-100 overflow-hidden hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">

      <div className="relative">

        {item.image ? (
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-64 bg-green-100 flex justify-center items-center">
            <span className="text-green-700 font-medium">
              No Image
            </span>
          </div>
        )}

        {item.wearCount >= 5 && (
          <div className="absolute top-4 right-4 bg-yellow-400 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
            🔥 Popular
          </div>
        )}

      </div>

      <div className="p-7">

        <h3 className="text-3xl font-bold text-gray-800 mb-5">
          {item.name}
        </h3>

        <div className="space-y-4 text-gray-700">

          <div className="flex items-center gap-2">
            <FaTag className="text-green-600" />
            <span>{item.category}</span>
          </div>

          <div className="flex items-center gap-2">
            <FaPalette className="text-green-600" />
            <span>{item.color}</span>
          </div>

          <div className="flex items-center gap-2">
            <FaCloudSun className="text-green-600" />
            <span>{item.season}</span>
          </div>

          <div className="flex items-center gap-2">
            <FaGlassCheers className="text-green-600" />
            <span>{item.occasion}</span>
          </div>

        </div>

        <div className="mt-6 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-5 border border-green-100">

          <p className="font-semibold text-green-700">
            👕 Worn
          </p>

          <p className="text-3xl font-bold mt-2">
            {item.wearCount || 0}
          </p>

          <p className="text-gray-500 mt-2">
            Last Worn: {item.lastWorn || "Never"}
          </p>
          <div className="mt-5 border-t pt-4 text-sm text-gray-600 space-y-2">

  <p>
    <strong>Purchased:</strong>{" "}
    {item.purchaseDate || "--"}
  </p>

  <p>
    <strong>Price:</strong>{" "}
    ₹{item.purchasePrice || "--"}
  </p>

</div>
          {item.purchasePrice && (
  <p className="text-gray-500 mt-2">
    💰 Price: ₹{item.purchasePrice}
  </p>
)}

{item.purchaseDate && (
  <p className="text-gray-500 mt-1">
    📅 Bought: {item.purchaseDate}
  </p>
)}

{item.purchasePrice && (
  <p className="text-green-700 font-semibold mt-3">
    Cost / Wear: ₹
    {item.wearCount > 0
      ? (item.purchasePrice / item.wearCount).toFixed(2)
      : item.purchasePrice}
  </p>
)}

        </div>

        <div className="mt-6 flex flex-col gap-3">

          <button
            onClick={() => toggleFavorite(item.id)}
            className={`w-full py-3 rounded-xl font-semibold transition flex justify-center items-center gap-2 ${
              item.favorite
                ? "bg-pink-500 text-white hover:bg-pink-600"
                : "border border-pink-500 text-pink-500 hover:bg-pink-50"
            }`}
          >
            {item.favorite ? <FaHeart /> : <FaRegHeart />}
            {item.favorite ? "Favourite" : "Add to Favourite"}
          </button>

          <button
            onClick={() => wearClothing(item.id)}
            className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl transition font-semibold"
          >
            👕 Wear Today
          </button>

          <div className="flex justify-between gap-3">

            <button
             onClick={() => setSelectedItem(item)}
             className="flex-1 flex justify-center items-center gap-2 border border-green-600 text-green-600 py-2 rounded-xl hover:bg-green-50 transition"
>
            <FaEdit />
             Edit
           </button>

            <button
              onClick={() => deleteClothing(item.id)}
              className="flex-1 flex justify-center items-center gap-2 bg-red-500 text-white py-2 rounded-xl hover:bg-red-600 transition"
            >
              <FaTrash />
              Delete
            </button>

          </div>

        </div>

      </div>

    </div>
  );
}

export default ClothingCard;