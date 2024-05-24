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
    setTasks((prevTasks) => {
      return prevTasks.map((task) => {
        if (task.id === id) {
          return { ...task, completed: !task.completed };
        }
        return task;
      });
    });
  };

  const removeTask = (id: string) => {
    setTasks((prevTasks) => {
      return prevTasks.filter((task) => task.id !== id);
    });
  };

  const addTask = (text: string) => {
    const newTask: TaskType = {
      id: Math.random().toString(),
      text,
      completed: false,
    };
    setTasks([...tasks, newTask]);
  };

  return (
    <div className="App">
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          onToggleCompletion={toggleTaskCompletion}
          onDelete={removeTask}
        />
      ))}
      <TaskForm onAddTask={addTask} />
    </div>
  );
};

export default App;
