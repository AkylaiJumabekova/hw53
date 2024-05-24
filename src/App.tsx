import "./App.css";
import Task from "./Task/Task";
import React, { useState } from "react";
import TaskForm from "./TaskForm/TaskForm";
import { Task as TaskType } from "./types";

const App = () => {
  const [tasks, setTasks] = useState<TaskType[]>([
    { id: "t1", text: "Learn React", completed: false },
    { id: "t2", text: "Finish my homework - 53", completed: true },
    { id: "t3", text: "Make commit", completed: false },
  ]);

  const toggleTaskCompletion = (id: string) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const removeTask = (id: string) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  const addTask = (text: string) => {
    const newTask: TaskType = {
      id: Math.random().toString(),
      text,
      completed: false,
    };
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  return (
    <div className="App">
      <TaskForm onAddTask={addTask} />
      <div className="task-columns">
        <div className="column">
          <h3 className="column-header">Active Tasks</h3>
          {tasks
            .filter((task) => !task.completed)
            .map((task) => (
              <Task
                key={task.id}
                task={task}
                onToggleCompletion={toggleTaskCompletion}
                onDelete={removeTask}
              />
            ))}
        </div>
        <div className="column">
          <h3 className="column-header">Completed Tasks</h3>
          {tasks
            .filter((task) => task.completed)
            .map((task) => (
              <Task
                key={task.id}
                task={task}
                onToggleCompletion={toggleTaskCompletion}
                onDelete={removeTask}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default App;
