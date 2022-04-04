import React, { useState, useEffect } from "react";
import axios from "axios";

function DataFetching() {
  const [posts, setPost] = useState([]);

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/comments`).then((res) => {
      console.log(res);
      setPost(res.data);
    });
  }, []);

  return (
    <div>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.name}</li>
        ))}
      </ul>
    </div>
  );
}
export default DataFetching;

// .get(`https://jsonplaceholder.typicode.com/comments`) .then .catch  res   setPosts
