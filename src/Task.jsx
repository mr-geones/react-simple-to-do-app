export const Task = props => {
  return (
    <div className='taskWrapper'>
      <span className='task' style={{ textDecoration: props.completed ? "line-through" : "none" }}>
        {props.taskName}
      </span>
      <button type='button' onClick={() => props.completeTask(props.id)}>
        Complete
      </button>
      <button type='button' onClick={() => props.deleteTask(props.id)}>
        Delete
      </button>
    </div>
  );
};
