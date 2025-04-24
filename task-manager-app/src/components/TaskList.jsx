import React from "react";

const TaskList = ({ tasks, onEdit, onDelete, onToggle }) => {
  if (!tasks || tasks.length === 0) {
    return <p>No tasks to show.</p>;
  }

  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id} style={{ marginBottom: "1rem" }}>
          <strong>{task.title}</strong> - {task.priority} -{" "}
          {task.completed ? "✅ Completed" : "❌ Incomplete"}
          <br />
          <button onClick={() => onEdit(task)}>Edit</button>
          <button onClick={() => onDelete(task.id)}>Delete</button>
          <button onClick={() => onToggle(task.id)}>Toggle Status</button>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
