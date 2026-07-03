import { createContext, useEffect, useState } from "react";
import dummyWardrobe from "../data/dummyWardrobe";

export const WardrobeContext = createContext();

function WardrobeProvider({ children }) {

  const [clothes, setClothes] = useState(() => {

    const saved = localStorage.getItem("wardrobe");

    const data = saved ? JSON.parse(saved) : dummyWardrobe;

    // Ensure older clothes also have the new fields
    return data.map((item) => ({
      wearCount: 0,
      lastWorn: null,
      purchasePrice: "",
      purchaseDate: "",
      ...item,
    }));
  });

  function addClothing(item) {
    setClothes((prev) => [item, ...prev]);
  }

  function deleteClothing(id) {
    setClothes((prev) => prev.filter((item) => item.id !== id));
  }

  function wearClothing(id) {

    setClothes((prev) =>
      prev.map((item) => {

        if (item.id === id) {

          return {
            ...item,
            wearCount: item.wearCount + 1,
            lastWorn: new Date().toLocaleDateString(),
          };

        }

        return item;

      })
    );

  }

  useEffect(() => {
    localStorage.setItem("wardrobe", JSON.stringify(clothes));
  }, [clothes]);

  return (

    <WardrobeContext.Provider
      value={{
        clothes,
        addClothing,
        deleteClothing,
        wearClothing,
      }}
    >
      {children}
    </WardrobeContext.Provider>

  );

}

export default WardrobeProvider;