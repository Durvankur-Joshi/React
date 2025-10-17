import { useState } from "react";


function ColorPicker()

{
    const [color, setcolor] = useState("#FFFFFF");
    function handleOnchange(e)
    {
        setcolor(e.target.value);
    }
    return(
        <>
           <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 shadow-2xl ">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-80 text-center">
        <h1 className="text-2xl font-semibold mb-4"> Color Picker</h1>
        <div
          className="w-full h-32 rounded-lg mb-4 border-2"
          style={{ backgroundColor: color }}
        ></div>
        <input
          type="color"
          value={color}
          onChange={(e) => setcolor(e.target.value)}
          className="w-24 h-12 border rounded-md cursor-pointer"
        />
        <p className="mt-3 text-gray-700 font-medium">
          Selected Color: <span className="font-bold">{color}</span>
        </p>
      </div>
    </div>
        </>
 
    )


}

export default ColorPicker;