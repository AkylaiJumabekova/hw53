import React from "react";
import { Task as TaskType } from "../types";

interface TaskProps {
  task: TaskType;
  onToggleCompletion: (id: string) => void;
  onDelete: (id: string) => void;
}

const Task: React.FC<TaskProps> = ({ task, onToggleCompletion, onDelete }) => {
  return (
    <div className="task">
      <span className={task.completed ? "completed" : ""}>{task.text}</span>
      <button onClick={() => onToggleCompletion(task.id)}>
        {task.completed ? "Restore" : "Complete"}
      </button>
      <button onClick={() => onDelete(task.id)}>Delete</button>
    </div>
  );
};

export default Task;
