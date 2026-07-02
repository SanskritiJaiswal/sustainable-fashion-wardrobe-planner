function ClothingCard({ item }) {
  return (
    <div className="bg-white rounded-xl shadow-md p-5 hover:shadow-lg transition">

      {item.image ? (
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-56 object-cover rounded-xl mb-5"
        />
      ) : (
        <div className="w-full h-56 bg-green-100 rounded-xl flex justify-center items-center mb-5">
          <span className="text-green-700 font-medium">
            No Image
          </span>
        </div>
      )}

      <h3 className="text-xl font-semibold">
        {item.name}
      </h3>

      <div className="mt-4 space-y-2 text-gray-600">

        <p>
          <strong>Category:</strong> {item.category}
        </p>

        <p>
          <strong>Color:</strong> {item.color}
        </p>

        <p>
          <strong>Season:</strong> {item.season}
        </p>

        <p>
          <strong>Occasion:</strong> {item.occasion}
        </p>

      </div>

    </div>
  );
}

export default ClothingCard;