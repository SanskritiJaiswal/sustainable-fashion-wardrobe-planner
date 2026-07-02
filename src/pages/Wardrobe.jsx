import { useState } from "react";
import Navbar from "../components/Navbar";
import ClothingCard from "../components/Wardrobe/ClothingCard";
import dummyWardrobe from "../data/dummyWardrobe";

function Wardrobe() {

  const [clothes] = useState(dummyWardrobe);

  return (
    <>
      <Navbar />

      <div className="max-w-7xl mx-auto px-6 py-12">

        <h1 className="text-5xl font-bold mb-10">
          My Wardrobe
        </h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {clothes.map((item) => (
            <ClothingCard
              key={item.id}
              item={item}
            />
          ))}

        </div>

      </div>

    </>
  );
}

export default Wardrobe;