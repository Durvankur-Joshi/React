
function TaskCard(props) {

    const { title, onDelete } = props;
    return (
        <>
            <div className="task-card">
                <p>{title}</p>
                <button className="delete-btn bg-red-600 hover:bg-red-900 text-white w-20 rounded-2xl h-10 mt-5" onClick={onDelete}>
                    Delete
                </button>
            </div>
        </>
    )

}

export default TaskCard;