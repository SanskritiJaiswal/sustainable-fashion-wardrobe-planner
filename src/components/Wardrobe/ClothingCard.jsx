function ClothingCard({ item }) {
  return (
    <div className="bg-white rounded-xl shadow-md p-5 hover:shadow-lg transition">

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