import {
  FaTrash,
  FaTag,
  FaPalette,
  FaEdit,
  FaSun,
  FaGlassMartiniAlt,
} from "react-icons/fa";

function ClothingCard({
  item,
  deleteClothing,
  wearClothing,
}) {
  return (
    <div className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 overflow-hidden border border-green-100">

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

      <div className="p-6">

        <h3 className="text-2xl font-bold text-gray-800 tracking-tight mb-5">
          {item.name}
        </h3>

        <div className="space-y-3 text-gray-700">

          <div className="flex items-center gap-2">
            <FaTag className="text-green-600" />
            <span>{item.category}</span>
          </div>

          <div className="flex items-center gap-2">
            <FaPalette className="text-green-600" />
            <span>{item.color}</span>
          </div>

          <div className="flex items-center gap-2">
            <FaSun className="text-green-600" />
            <span>{item.season}</span>
          </div>

          <div className="flex items-center gap-2">
            <FaGlassMartiniAlt className="text-green-600" />
            <span>{item.occasion}</span>
          </div>

        </div>

        <div className="mt-6 bg-green-50 rounded-xl p-4">

          <p className="font-semibold text-green-700">
            👕 Worn
          </p>

          <p className="text-3xl font-bold mt-2">
            {item.wearCount}
          </p>

          <p className="text-gray-500 mt-2">
            Last Worn: {item.lastWorn || "Never"}
          </p>

        </div>

        <div className="mt-6 flex flex-col gap-3">

          <button
            onClick={() => wearClothing(item.id)}
            className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl transition font-semibold"
          >
            👕 Wear Today
          </button>

          <div className="flex justify-between">

            <button
              className="flex items-center gap-2 border border-green-600 text-green-600 px-4 py-2 rounded-lg hover:bg-green-50 transition"
            >
              <FaEdit />
              Edit
            </button>

            <button
              onClick={() => deleteClothing(item.id)}
              className="flex items-center gap-2 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
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