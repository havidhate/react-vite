// src/pages/Home.js
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTasks } from "../redux/tasksSlice";
import { db } from "../firebase";
import { ref, onValue } from "firebase/database";
import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";

const ITEMS_PER_PAGE = 5;

const Home = () => {
  const dispatch = useDispatch();
  const { currentUser } = useAuth();
  const tasks = useSelector((state) => state.tasks.list);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const taskRef = ref(db, `tasks/${currentUser.uid}`);
    const unsubscribe = onValue(taskRef, () => {
      dispatch(fetchTasks(currentUser.uid));
    });
    return () => unsubscribe();
  }, [currentUser.uid, dispatch]);

  const paginatedTasks = tasks.slice(
    (page - 1) * ITEMS_PER_PAGE,
    page * ITEMS_PER_PAGE
  );
  const totalPages = Math.ceil(tasks.length / ITEMS_PER_PAGE);

  return (
    <div>
      <h2>📝 Task Manager</h2>
      <Link to="/add">Add New Task</Link>
      <ul>
        {paginatedTasks.map((task) => (
          <li key={task.id}>
            {task.title} ({task.priority})
            <Link to={`/edit/${task.id}`}> ✏️ Edit</Link>
          </li>
        ))}
      </ul>
      <div>
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            onClick={() => setPage(i + 1)}
            disabled={page === i + 1}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Home;
