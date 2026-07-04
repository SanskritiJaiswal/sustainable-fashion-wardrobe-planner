import { createContext, useEffect, useState } from "react";
import dummyWardrobe from "../data/dummyWardrobe";

export const WardrobeContext = createContext();

function WardrobeProvider({ children }) {
  const [clothes, setClothes] = useState(() => {
    const saved = localStorage.getItem("wardrobe");
    return saved ? JSON.parse(saved) : dummyWardrobe;
  });
  const [selectedItem, setSelectedItem] = useState(null);

  // ---------- Add ----------

  function addClothing(item) {
    setClothes((prev) => [item, ...prev]);
  }

  // ---------- Delete ----------

  function deleteClothing(id) {
    setClothes((prev) =>
      prev.filter((item) => item.id !== id)
    );
  }
  function editClothing(updatedItem) {
  setClothes((prev) =>
    prev.map((item) =>
      item.id === updatedItem.id ? updatedItem : item
    )
  );

  setSelectedItem(null);
}

  // ---------- Wear ----------

  function wearClothing(id) {
    setClothes((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              wearCount: (item.wearCount || 0) + 1,
              lastWorn: new Date().toLocaleDateString(),
            }
          : item
      )
    );
  }

  // ---------- Favourite ----------

  function toggleFavorite(id) {
    setClothes((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              favorite: !item.favorite,
            }
          : item
      )
    );
  }

  // ---------- Update ----------

  function updateClothing(updatedItem) {
    setClothes((prev) =>
      prev.map((item) =>
        item.id === updatedItem.id
          ? updatedItem
          : item
      )
    );
  }

  useEffect(() => {
    localStorage.setItem(
      "wardrobe",
      JSON.stringify(clothes)
    );
  }, [clothes]);

  return (
    <WardrobeContext.Provider
      value={{
        clothes,
        addClothing,
        deleteClothing,
         editClothing,
         selectedItem,
         setSelectedItem,
        wearClothing,
        toggleFavorite,
        updateClothing,
      }}
    >
      {children}
    </WardrobeContext.Provider>
  );
}

export default WardrobeProvider;