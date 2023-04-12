import React, { useState, useEffect } from "react";

function PostTable() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Fetch posts from API
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((posts) => setPosts(posts));
  }, []);

  const handleRemovePost = (postId) => {
    // Remove post from state
    setPosts(posts.filter((post) => post.id !== postId));

    // Send DELETE request to API endpoint to delete post
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
      method: "DELETE",
    });
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Index</th>
          <th>Users</th>
          <th>Email</th>
          <th>Remove</th>
        </tr>
      </thead>
      <tbody>
        {posts.map((post,index) => (
          <tr key={post.id}>
            <td>{index+1}</td>
            <td>{post.name}</td>
            <td>{post.email}</td>
            <td>
              <button onClick={() => handleRemovePost(post.id)}>Remove</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default PostTable;
