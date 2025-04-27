import React, { useMemo } from "react";

const Post = ({ post, toggleVerify }) => {
  const backgroundColor = useMemo(() => {
    return `hsl(${Math.random() * 360}, 100%, 85%)`;
  }, []); // Only run once when the Post mounts

  console.log("Rendering Post:", post.id);

  return (
    <div
      style={{
        backgroundColor,
        margin: "10px 0",
        padding: "10px",
        borderRadius: "8px",
      }}
    >
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      <p>Status: {post.verifyPost ? "Verified" : "Not Verified"}</p>
      <button onClick={() => toggleVerify(post.id)}>
        {post.verifyPost ? "Unverify" : "Verify"}
      </button>
    </div>
  );
};

export default React.memo(Post); // 🚀 Memoized to prevent unnecessary re-render
