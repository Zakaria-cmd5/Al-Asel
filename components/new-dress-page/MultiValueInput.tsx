import { useState } from "react";

interface Props {
  label: string; // Label for the input
  placeholder: string; // Placeholder for the input
  onValuesChange: (values: string[]) => void; // Callback to pass the updated values array to the parent
}

const MultiValueInput = ({ label, onValuesChange, placeholder }: Props) => {
  const [values, setValues] = useState<string[]>([]); // State for the array of values
  const [inputValue, setInputValue] = useState<string>(""); // State for the current input

  // Add a value to the list
  const addValue = () => {
    if (inputValue.trim() !== "" && !values.includes(inputValue.trim())) {
      const updatedValues = [...values, inputValue.trim()];
      setValues(updatedValues);
      onValuesChange(updatedValues); // Notify the parent about the change
      setInputValue("");
    }
  };

  // Remove a value from the list
  const removeValue = (value: string) => {
    const updatedValues = values.filter((v) => v !== value);
    setValues(updatedValues);
    onValuesChange(updatedValues); // Notify the parent about the change
  };

  return (
    <div className="w-full mb-4">
      <label className="block text-amber-700 font-medium mb-1">{label}</label>
      <div className="flex items-center gap-2">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder={placeholder}
          className="w-full px-4 py-2 border border-amber-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-amber-400"
        />
        <button
          type="button"
          onClick={addValue}
          className="px-4 py-2 bg-amber-500 text-white font-bold rounded-lg hover:bg-amber-600 transition-all shadow-lg"
        >
          Add
        </button>
      </div>

      {values.length > 0 && (
        <ul className="space-y-2 mt-2">
          {values.map((value, index) => (
            <li
              key={index}
              className="flex justify-between items-center bg-amber-100 px-4 py-2 rounded-lg shadow"
            >
              <span>{value}</span>
              <button
                type="button"
                onClick={() => removeValue(value)}
                className="text-red-500 font-bold hover:underline"
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MultiValueInput;
