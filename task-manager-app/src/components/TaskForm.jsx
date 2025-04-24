import React, { useState, useEffect } from "react";

const TaskForm = ({ onSubmit, initialData = {} }) => {
  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState("Medium");
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    if (initialData.title) {
      setTitle(initialData.title);
      setPriority(initialData.priority || "Medium");
      setCompleted(initialData.completed || false);
    }
  }, [initialData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ title, priority, completed });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Task:
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </label>
      <br />
      <label>
        Priority:
        <select value={priority} onChange={(e) => setPriority(e.target.value)}>
          <option>Low</option>
          <option>Medium</option>
          <option>High</option>
        </select>
      </label>
      <br />
      <label>
        Completed:
        <input
          type="checkbox"
          checked={completed}
          onChange={() => setCompleted((prev) => !prev)}
        />
      </label>
      <br />
      <button type="submit">Save Task</button>
    </form>
  );
};

export default TaskForm;
