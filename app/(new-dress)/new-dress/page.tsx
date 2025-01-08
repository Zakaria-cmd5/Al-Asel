"use client";

import MultiValueInput from "@/components/new-dress-page/MultiValueInput";
import { CldUploadWidget } from "next-cloudinary";
import { useState } from "react";

const NewDressPage = () => {
  const [dressLengths, setDressLengths] = useState<string[]>([]);
  const [sizes, setSizes] = useState<string[]>([]);
  const [colors, setColors] = useState<string[]>([]);

  return (
    <form className="flex flex-col items-center mt-40 p-6 bg-white rounded-lg shadow-lg w-full max-w-md mx-auto">
      <h2 className="text-2xl font-bold text-amber-600 mb-6">Add New Dress</h2>

      <div className="w-full mb-4">
        <label htmlFor="name" className="block text-amber-700 font-medium mb-1">
          Name
        </label>
        <input
          type="text"
          name="name"
          placeholder="Enter dress name"
          className="w-full px-4 py-2 border border-amber-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-amber-400"
        />
      </div>

      {/* Changed to TextArea */}
      <div className="w-full mb-4">
        <label
          htmlFor="description"
          className="block text-amber-700 font-medium mb-1"
        >
          Description
        </label>
        <textarea
          name="description"
          placeholder="Enter description"
          rows={4} // Set the number of rows for the text area
          className="w-full px-4 py-2 border border-amber-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-amber-400"
        />
      </div>

      <div className="w-full mb-4">
        <label
          htmlFor="price"
          className="block text-amber-700 font-medium mb-1"
        >
          Price
        </label>
        <input
          type="number"
          name="price"
          placeholder="Enter price"
          className="w-full px-4 py-2 border border-amber-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-amber-400"
        />
      </div>

      <MultiValueInput
        label="Dress Lengths"
        placeholder="Enter dress length"
        onValuesChange={setDressLengths}
      />

      {/* Reusable MultiValueInput for sizes */}
      <MultiValueInput
        label="Sizes"
        placeholder="Enter size (e.g., S, M, L)"
        onValuesChange={setSizes}
      />

      {/* Reusable MultiValueInput for colors */}
      <MultiValueInput
        label="Colors"
        placeholder="Enter color (e.g., Red, Blue)"
        onValuesChange={setColors}
      />

      <CldUploadWidget
        uploadPreset="al-aseel"
        onSuccess={(result) => console.log(result)}
      >
        {({ open }) => {
          return (
            <div
              className="cursor-pointer mt-4 px-6 py-2 bg-amber-500 text-white font-bold rounded-lg hover:bg-amber-600 transition-all shadow-lg"
              onClick={() => open()}
            >
              Upload an Image
            </div>
          );
        }}
      </CldUploadWidget>

      <button
        type="submit"
        className="mt-4 px-6 py-2 w-full bg-amber-500 text-white font-bold rounded-lg hover:bg-amber-600 transition-all shadow-lg"
      >
        Add Dress
      </button>
    </form>
  );
};

export default NewDressPage;
