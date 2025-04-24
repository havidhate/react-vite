// src/pages/EditTask.js
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { db } from "../firebase";
import { ref, update, get } from "firebase/database";
import { useAuth } from "../context/AuthContext";

const EditTask = () => {
  const { id } = useParams();
  const { currentUser } = useAuth();
  const [task, setTask] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const taskRef = ref(db, `tasks/${currentUser.uid}/${id}`);
    get(taskRef).then((snapshot) => {
      if (snapshot.exists()) {
        setTask(snapshot.val());
      } else {
        navigate("/");
      }
    });
  }, [id, currentUser.uid, navigate]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    const taskRef = ref(db, `tasks/${currentUser.uid}/${id}`);
    await update(taskRef, task);
    navigate("/");
  };

  if (!task) return <p>Loading...</p>;

  return (
    <form onSubmit={handleUpdate}>
      <h2>Edit Task</h2>
      <input
        value={task.title}
        onChange={(e) => setTask({ ...task, title: e.target.value })}
      />
      <select
        value={task.priority}
        onChange={(e) => setTask({ ...task, priority: e.target.value })}
      >
        <option>Low</option>
        <option>Medium</option>
        <option>High</option>
      </select>
      <button type="submit">Update Task</button>
    </form>
  );
};

export default EditTask;
