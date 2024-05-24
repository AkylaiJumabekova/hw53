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
      <span>{task.text}</span> {}
      <div>
        <button onClick={() => onToggleCompletion(task.id)} className={task.completed ? "restore" : "complete"}>
          {task.completed ? "Restore" : "Complete"}
        </button>
        <button onClick={() => onDelete(task.id)} className="delete">
          Delete
        </button>
      </div> {}
    </div>
  );
};



export default Task;
