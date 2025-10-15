import React, { useState } from "react";

function OnChange() {
  const [text, setText] = useState("");

  const handleOnChange = (e) => {
    setText(e.target.value);
  };

  const toUpperCase = () => {
    setText(text.toUpperCase());
  };

  const toLowerCase = () => {
    setText(text.toLowerCase());
  };

  return (
    <>
      <h1>This is on Change</h1>
      <input
        value={text}
        type="text"
        placeholder="Enter the text"
        onChange={handleOnChange}
        className="border p-2 rounded"
      />
      <div className="mt-3">
        <button onClick={toUpperCase} className="bg-blue-500 text-white px-3 py-1 rounded mr-2">
          Uppercase
        </button>
        <button onClick={toLowerCase} className="bg-green-500 text-white px-3 py-1 rounded">
          Lowercase
        </button>
      </div>
      <p className="mt-2">Text: {text}</p>
    </>
  );
}

export default OnChange;
