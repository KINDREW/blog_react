import { useParams } from "react-router-dom";
import useFetch from "./usefetch";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const BlogDetails = () => {
  const { id } = useParams();
  const {
    data: blogs,
    isPending,
    error,
  } = useFetch("http://localhost:8000/blogs/" + id);
  const redirect = useHistory();
  const handleDelete = () => {
    fetch("http://localhost:8000/blogs/" + blogs.id, {
      method: "DELETE",
    }).then(() => {
      redirect.push("/");
    });
  };

  return (
    <div
      className="blog-details"
      style={{
        marginLeft: "35px",
        marginRight: "35px",
      }}
    >
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {blogs && (
        <article>
          <h2
            style={{
              textTransform: "uppercase",
            }}
          >
            {blogs.title}
          </h2>
          <p>Written by {blogs.author}</p>
          <div
            style={{
              marginTop: "15px",
            }}
          >
            {blogs.body}
          </div>
        </article>
      )}

      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default BlogDetails;
