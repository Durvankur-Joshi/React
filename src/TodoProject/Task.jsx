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
            <div className="app">
                <h1>Task Manager</h1>

                {/* Input Section */}
                <div className="input-section">
                    <input
                        type="text"
                        value={taskText}
                        onChange={handleChange}
                        placeholder="Enter a new task..."
                    />
                    <button onClick={addTask}>Add Task</button>
                </div>

                {/* Conditional Rendering */}
                {tasks.length === 0 ? (
                    <p className="no-task">No tasks yet</p>
                ) : (
                    <div className="task-list">
                        {/* Render list of tasks */}
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