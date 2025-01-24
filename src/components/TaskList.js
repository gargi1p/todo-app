import React from "react";
import TaskItem from "./TaskItem";

const TaskList = ({ tasks, onUpdateTaskStatus }) => {
  return (
    <ul>
      {tasks.map((task, index) => (
        <TaskItem
          key={index}
          task={task}
          index={index}
          onUpdateStatus={onUpdateTaskStatus}
        />
      ))}
    </ul>
  );
};

export default TaskList;
