import React, { useState, ChangeEvent } from "react";

interface TaskFormProps {
  onAddTask: (text: string) => void;
}

const TaskForm: React.FC<TaskFormProps> = ({ onAddTask }) => {
  const [taskText, setTaskText] = useState("");

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTaskText(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (taskText.trim() !== "") {
      onAddTask(taskText);
      setTaskText("");
    }
  };

  return (
    <form className="taskForm" onSubmit={handleSubmit}>
      <h4>Create Task</h4>
      <label>
        Task:
        <input
          type="text"
          name="taskText"
          value={taskText}
          onChange={handleInputChange}
        />
      </label>
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskForm;
