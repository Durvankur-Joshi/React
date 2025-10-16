import TaskCard from "./TaskCard";
import { useState } from "react";
function Task() {


    const [taskText, setTaskText] = useState("");


    const [tasks, setTasks] = useState([]);


    const handleChange = (e) => {
        setTaskText(e.target.value);
    };


    const addTask = () => {
        if (taskText.trim() === "") return;
        setTasks([...tasks, taskText]);


        setTaskText("");
    };


    const deleteTask = (index) => {
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
    };

    return (
        <>
            <div className="task-container  border-2 h-50 w-100 m-auto mt-5 p-3 rounded-2xl">
                <h1 className=" flex justify-center text-2xl font-bold text-red-500">Task Manager</h1>

                <div className=" flex justify-center ">
                    <input
                        className="input-section w-90 border-2 rounded-2xl p-3 my-3 "
                        type="text"
                        value={taskText}
                        onChange={handleChange}
                        placeholder="Enter a new task..."
                    />
                </div>
                <div className="flex justify-center text-xl ">
                    <button className="border-2 w-40 h-12 mt-4 bg-green-700 rounded-3xl hover:bg-green-900 text-white " onClick={addTask}>Add Task</button>
                </div>


            </div>
            <div className="w-96  max-w-md mt-10 flex justify-center m-auto">
                {tasks.length === 0 ? (
                    <p className="no-task text-center text-gray-500 border-2 border-dashed border-gray-300 rounded-2xl p-5">
                        No tasks yet
                    </p>
                ) : (
                    <div className="task-list flex flex-col gap-3 border-2 border-indigo-300 rounded-2xl p-5 bg-white shadow-md">
                        {tasks.map((task, index) => (
                            <TaskCard
                                key={index}
                                title={task}
                                onDelete={() => deleteTask(index)}
                            />
                        ))}
                    </div>
                )}
            </div>
        </>
    )


}

export default Task;