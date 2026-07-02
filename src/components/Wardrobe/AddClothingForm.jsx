import { useState } from "react";

import categories from "../../constants/categories";
import colors from "../../constants/colors";
import seasons from "../../constants/seasons";
import occasions from "../../constants/occasions";

function AddClothingForm({ addClothing }) {
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    color: "",
    season: "",
    occasion: "",
    image: "",
  });

  const [preview, setPreview] = useState("");

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  function handleImageChange(e) {
    const file = e.target.files[0];

    if (!file) return;

    const imageURL = URL.createObjectURL(file);

    setPreview(imageURL);

    setFormData({
      ...formData,
      image: imageURL,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.category ||
      !formData.color ||
      !formData.season ||
      !formData.occasion
    ) {
      alert("Please fill all fields.");
      return;
    }

    addClothing({
      id: Date.now(),
      ...formData,
    });

    setFormData({
      name: "",
      category: "",
      color: "",
      season: "",
      occasion: "",
      image: "",
    });

    setPreview("");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-xl shadow-md mb-10"
    >
      <h2 className="text-2xl font-semibold mb-6">
        Add Clothing
      </h2>

      <div className="grid md:grid-cols-2 gap-5">

        <input
          type="text"
          name="name"
          placeholder="Clothing Name"
          value={formData.name}
          onChange={handleChange}
          className="border rounded-lg p-3"
        />

        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
          className="border rounded-lg p-3"
        >
          <option value="">Category</option>
          {categories.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>

        <select
          name="color"
          value={formData.color}
          onChange={handleChange}
          className="border rounded-lg p-3"
        >
          <option value="">Color</option>
          {colors.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>

        <select
          name="season"
          value={formData.season}
          onChange={handleChange}
          className="border rounded-lg p-3"
        >
          <option value="">Season</option>
          {seasons.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>

        <select
          name="occasion"
          value={formData.occasion}
          onChange={handleChange}
          className="border rounded-lg p-3"
        >
          <option value="">Occasion</option>
          {occasions.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>

        <div className="md:col-span-2">
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="border rounded-lg p-3 w-full"
          />
        </div>

        {preview && (
          <div className="md:col-span-2">
            <img
              src={preview}
              alt="Preview"
              className="w-44 h-44 object-cover rounded-xl shadow"
            />
          </div>
        )}

      </div>

      <button
        type="submit"
        className="mt-6 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition"
      >
        Add Clothing
      </button>

    </form>
  );
}

export default AddClothingForm;