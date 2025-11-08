import { useRef } from 'react';

const Input = () => {
    const input = useRef(null);

    const focus = () => {
        input.current.focus()
        alert("focus in on the input box")
    }
    const clear = () => {
        input.current.value = " "
        alert("The input is cleared")
    }
    return (
        <>
            <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">

                <div className="w-full max-w-md p-6 bg-white rounded-2xl shadow-lg">

                    <input
                        ref={input}
                        className="w-full border border-gray-300 bg-gray-200 text-lg text-gray-800 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        type="text"
                        placeholder="This is useRef input"
                    />

                    <div className="flex gap-4 mt-6">
                        <button
                            className="flex-1 h-11 bg-red-500 rounded-lg text-white font-medium hover:bg-red-600 transition"
                            onClick={focus}
                        >
                            Focus
                        </button>

                        <button
                            className="flex-1 h-11 bg-green-500 rounded-lg text-white font-medium hover:bg-green-600 transition"
                            onClick={clear}
                        >
                            Clear
                        </button>
                    </div>

                </div>

            </div>

        </>
    )
}

export default Input