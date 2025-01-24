import React from "react";

const TaskItem = ({ task, index, onUpdateStatus }) => {
  return (
    <li className="task-item">
      <div>
        <strong><u>{task.task}</u></strong> 
        
        <br />
        <span>Priority: {task.priority}</span>
        <br />
        <span>Deadline: {task.deadline}</span> 
      </div>
      <div className="task-actions">
        <button onClick={() => onUpdateStatus(index, "Completed")}>Complete</button>
          {/* <button onClick={() => onUpdateStatus(index, "In Progress")}>In Progress</button> */}
        {/* <button onClick={() => onUpdateStatus(index, "Expired")}>Expire</button> */}
      </div>
    </li>
  );
};

export default TaskItem;
