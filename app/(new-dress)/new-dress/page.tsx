/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { addDressAction } from "@/actions/addDressAction";
import FormSelect from "@/components/custom-ui/FormSelect";
import MultiValueInput from "@/components/new-dress-page/MultiValueInput";
import { CldUploadWidget } from "next-cloudinary";
import { useActionState, useState } from "react";

const NewDressPage = () => {
  const [dressLengths, setDressLengths] = useState<string[]>([]);
  const [sizes, setSizes] = useState<string[]>([]);
  const [colors, setColors] = useState<string[]>([]);
  const [image, setImage] = useState<any>(null);
  const [mainCategory, setMainCategory] = useState<string>("");
  const [subCategory, setSubCategory] = useState<string>("");

  const initState = { errors: {}, message: "" };

  const [formError, dispatch] = useActionState(
    async (_: any, payload: Parameters<typeof addDressAction>[0]) =>
      await addDressAction(payload),
    initState
  );

  const handleSubmit = (formData: FormData) => {
    const payload = {
      formData,
      image: image?.secure_url || "",
      colors,
      sizes,
      dressLengths,
      mainCategory,
      subCategory,
    };

    dispatch(payload);
  };

  return (
    <form
      action={handleSubmit}
      className="flex flex-col items-center mt-10 mb-2 p-6 bg-white rounded-lg shadow-lg w-full max-w-md mx-auto"
    >
      <h2 className="text-2xl font-bold text-amber-600 mb-6">Add New Item</h2>

      <div className="w-full mb-4">
        <label htmlFor="name" className="block text-amber-700 font-medium mb-1">
          Name
        </label>
        <input
          type="text"
          name="name"
          placeholder="Enter dress name"
          className="w-full px-4 py-2 border border-amber-300 rounded-lg shadow-sm focus:outline-none"
        />
        {formError.errors?.name && (
          <p className="text-red-500 text-sm mt-1">
            {formError.errors.name[0]}
          </p>
        )}
      </div>

      <div className="w-full mb-4">
        <label htmlFor="code" className="block text-amber-700 font-medium mb-1">
          Code
        </label>
        <input
          type="text"
          name="code"
          placeholder="Enter dress code"
          className="w-full px-4 py-2 border border-amber-300 rounded-lg shadow-sm focus:outline-none"
        />
        {formError.errors?.code && (
          <p className="text-red-500 text-sm mt-1">
            {formError.errors.code[0]}
          </p>
        )}
      </div>

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
          rows={4}
          className="w-full px-4 py-2 border border-amber-300 rounded-lg shadow-sm focus:outline-none"
        />
        {formError.errors?.description && (
          <p className="text-red-500 text-sm mt-1">
            {formError.errors.description[0]}
          </p>
        )}
      </div>

      <MultiValueInput
        label="Colors"
        placeholder="Enter color"
        onValuesChange={setColors}
      />
      {formError.errors?.colors && (
        <p className="text-red-500 text-sm mt-1">
          {formError.errors.colors[0]}
        </p>
      )}

      <MultiValueInput
        label="Sizes"
        placeholder="Enter size"
        onValuesChange={setSizes}
      />
      {formError.errors?.sizes && (
        <p className="text-red-500 text-sm mt-1">{formError.errors.sizes[0]}</p>
      )}

      <MultiValueInput
        label="Dress Lengths"
        placeholder="Enter dress length"
        onValuesChange={setDressLengths}
      />
      {formError.errors?.dressLength && (
        <p className="text-red-500 text-sm mt-1">
          {formError.errors.dressLength[0]}
        </p>
      )}

      <FormSelect
        mainCategoryValueChange={setMainCategory}
        subCategoryValueChange={setSubCategory}
      />
      {formError.errors?.mainCategory && (
        <p className="text-red-500 text-sm mt-1">
          {formError.errors.mainCategory[0]}
        </p>
      )}
      {formError.errors?.subCategory && (
        <p className="text-red-500 text-sm mt-1">
          {formError.errors.subCategory[0]}
        </p>
      )}

      <CldUploadWidget
        uploadPreset="al-aseel"
        onSuccess={(result) => setImage(result.info)}
      >
        {({ open }) => (
          <div
            className="cursor-pointer mt-4 px-6 py-2 bg-amber-500 text-white font-bold rounded-lg hover:bg-amber-600 transition-all shadow-lg"
            onClick={() => open()}
          >
            Upload an Image
          </div>
        )}
      </CldUploadWidget>
      {formError.errors?.image && (
        <p className="text-red-500 text-sm mt-1">{formError.errors.image[0]}</p>
      )}

      <button
        type="submit"
        className="mt-4 px-6 py-2 w-full bg-amber-500 text-white font-bold rounded-lg hover:bg-amber-600 transition-all shadow-lg"
      >
        Add Dress
      </button>
      {formError.message && (
        <p className="text-red-500 text-sm mt-4">{formError.message}</p>
      )}
    </form>
  );
};

export default NewDressPage;
