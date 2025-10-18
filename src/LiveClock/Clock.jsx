import { useState, useEffect } from "react";

function Clock() {
    const [time, setTime] = useState(new Date().toLocaleTimeString())
    const [running, setrunning] = useState(true)
  
    useEffect(() => {
        let timer

        if (running) {
            timer = setInterval(() => {
                setTime(new Date().toLocaleTimeString())
            }, 1000);
        }

        return () => {
            clearInterval(timer);
        }
    }, [running])

    return (
        <>
            <div className="bg-gray-500 h-50 w-100 mt-5 flex items-center justify-center flex-col p-5 rounded-3xl shadow-2xl ml-25">

                <h1 className="text-white text-4xl mb-5">This is Clock</h1>
                <p className="text-white text-2xl mb-5">{time}</p>
                <div className="flex gap-5">
                    <button
                        className=" bg-green-600 rounded-xl w-20 h-10 text-xl text-white"
                        onClick={() => setrunning(true)}
                    >Start</button>
                    <button
                    className=" bg-red-600 rounded-xl w-20 h-10 text-xl text-white"
                        onClick={() => setrunning(false)}>Stop</button>
                </div>
            </div>


        </>
    )

}
export default Clock;