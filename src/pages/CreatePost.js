import { useState } from "react";

function CreatePost() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, body }),
    })
      .then((res) => res.json())
      .then((data) => {
        alert("Post created!");
        console.log(data);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Create Post</h2>

      <input
        type="text"
        placeholder="Enter title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <textarea
        placeholder="Enter content"
        value={body}
        onChange={(e) => setBody(e.target.value)}
      ></textarea>

      <button type="submit">Submit</button>
    </form>
  );
}

export default CreatePost;
