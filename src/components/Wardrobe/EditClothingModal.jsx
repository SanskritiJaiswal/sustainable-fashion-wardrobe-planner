import { useContext, useEffect, useState } from "react";

import { WardrobeContext } from "../../context/WardrobeContext";

import categories from "../../constants/categories";
import colors from "../../constants/colors";
import seasons from "../../constants/seasons";
import occasions from "../../constants/occasions";

function EditClothingModal() {

  const {
    selectedItem,
    setSelectedItem,
    editClothing,
  } = useContext(WardrobeContext);

  const [formData, setFormData] = useState({});

  useEffect(() => {
    if (selectedItem) {
      setFormData(selectedItem);
    }
  }, [selectedItem]);

  if (!selectedItem) return null;

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    editClothing(formData);
  }

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex justify-center items-center z-50">

      <div className="bg-white rounded-3xl p-8 w-full max-w-2xl shadow-2xl">

        <h2 className="text-3xl font-bold mb-6">
          Edit Clothing
        </h2>

        <form
          onSubmit={handleSubmit}
          className="grid md:grid-cols-2 gap-5"
        >

          <input
            name="name"
            value={formData.name || ""}
            onChange={handleChange}
            className="border rounded-xl p-3"
            placeholder="Name"
          />

          <select
            name="category"
            value={formData.category || ""}
            onChange={handleChange}
            className="border rounded-xl p-3"
          >
            {categories.map(item => (
              <option key={item}>{item}</option>
            ))}
          </select>

          <select
            name="color"
            value={formData.color || ""}
            onChange={handleChange}
            className="border rounded-xl p-3"
          >
            {colors.map(item => (
              <option key={item}>{item}</option>
            ))}
          </select>

          <select
            name="season"
            value={formData.season || ""}
            onChange={handleChange}
            className="border rounded-xl p-3"
          >
            {seasons.map(item => (
              <option key={item}>{item}</option>
            ))}
          </select>

          <select
            name="occasion"
            value={formData.occasion || ""}
            onChange={handleChange}
            className="border rounded-xl p-3"
          >
            {occasions.map(item => (
              <option key={item}>{item}</option>
            ))}
          </select>

          <input
            name="purchasePrice"
            value={formData.purchasePrice || ""}
            onChange={handleChange}
            placeholder="Purchase Price"
            className="border rounded-xl p-3"
          />

          <input
            type="date"
            name="purchaseDate"
            value={formData.purchaseDate || ""}
            onChange={handleChange}
            className="border rounded-xl p-3"
          />

          <div className="md:col-span-2 flex justify-end gap-4 mt-4">

            <button
              type="button"
              onClick={() => setSelectedItem(null)}
              className="px-5 py-3 rounded-xl border"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="bg-green-600 text-white px-6 py-3 rounded-xl hover:bg-green-700"
            >
              Save Changes
            </button>

          </div>

        </form>

      </div>

    </div>
  );
}

export default EditClothingModal;