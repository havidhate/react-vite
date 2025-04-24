// src/pages/AddTask.js
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../redux/tasksSlice";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const AddTask = () => {
  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState("Medium");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { currentUser } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newTask = {
      title,
      priority,
      completed: false,
      createdAt: Date.now(),
    };
    await dispatch(addTask({ uid: currentUser.uid, task: newTask }));
    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Task</h2>
      <input
        placeholder="Task Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <select value={priority} onChange={(e) => setPriority(e.target.value)}>
        <option>Low</option>
        <option>Medium</option>
        <option>High</option>
      </select>
      <button type="submit">Add Task</button>
    </form>
  );
};

export default AddTask;
