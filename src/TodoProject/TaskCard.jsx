
function TaskCard(props) {

    const { title, onDelete } = props;
    return (
        <>
            <div className="task-card">
                <p>{title}</p>
                <button className="delete-btn" onClick={onDelete}>
                    Delete
                </button>
            </div>
        </>
    )

}

export default TaskCard;