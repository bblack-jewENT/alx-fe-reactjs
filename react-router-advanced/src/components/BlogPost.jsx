import { useParams } from "react-router-dom";

function BlogPost() {
  const { id } = useParams();

  return (
    <>
      <h1>Blog Post {id}</h1>
      <p>This is the content for blog post {id}.</p>
    </>
  );
}

export default BlogPost;
