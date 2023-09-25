import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("mario");

  const [isPending, setIsPending] = useState(false);

  const redirect = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();

    const blog = { title, body, author };
    setIsPending(true);
    fetch("http://localhost:8000/blogs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog),
    }).then(() => {
      console.log("new blog added");
      redirect.push("/");
    });
  };

  return (
    <div className="create">
      <h2
        style={{
          color: "rgb(215, 25, 25)",
          textAlign: "center",
          marginBottom: "20px",
        }}
      >
        Add a blog
      </h2>

      <form onSubmit={handleSubmit}>
        <label>Blog Title</label>
        <input
          type="text"
          placeholder="Title"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Blog Body</label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
          cols="30"
          rows="10"
          placeholder="Body..."
        ></textarea>
        <label>Blog Author</label>
        <select value={author} onChange={(e) => setAuthor(e.target.value)}>
          <option value="mario">Mario</option>
          <option value="yoshi">Yoshi</option>
        </select>
        <div>{}</div>

        {!isPending && <button>Add Blog</button>}
        {isPending && <button>Adding...</button>}
      </form>
    </div>
  );
};

export default Create;
