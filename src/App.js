import React, { useState, useEffect } from "react";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";
import Login from "./components/Login";
import "./App.css";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [username, setUsername] = useState("");
  const [statusCounts, setStatusCounts] = useState({
    completed: 0,
    inProgress: 0,
    expired: 0,
  });

  const addTask = (task) => {
    setTasks([
      ...tasks,
      {
        ...task,
        status: "In Progress", // Default status for new tasks
        createdAt: new Date(),
      },
    ]);
  };

  const handleLogin = (username) => {
    setUsername(username);
  };

  const updateTaskStatus = (index, newStatus) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].status = newStatus;
    setTasks(updatedTasks);
  };

  useEffect(() => {
    const counts = { completed: 0, inProgress: 0, expired: 0 };
    const now = new Date();

    tasks.forEach((task) => {
      if (task.status === "Completed") {
        counts.completed += 1;
      } else if (task.status === "In Progress" && new Date(task.deadline) >= now) {
        counts.inProgress += 1;
      } else if (task.status === "Expired" || new Date(task.deadline) < now) {
        counts.expired += 1;
      }
    });

    setStatusCounts(counts);
  }, [tasks]);

  return (
    <div className="app">
      {!username ? (
        <Login onLogin={handleLogin} />
      ) : (
        <>
          <h1>{username}'s To-Do App</h1>
          <TaskInput onAddTask={addTask} />
          <TaskList tasks={tasks} onUpdateTaskStatus={updateTaskStatus} />
          <div className="task-status">
            <h2>Task Status</h2><br></br>
            <ul>
              <li>Completed: {statusCounts.completed}</li>
              <li>In Progress: {statusCounts.inProgress}</li>
              <li>Expired: {statusCounts.expired}</li>
            </ul>
          </div>
        </>
      )}
    </div>
  );
};

export default App;
