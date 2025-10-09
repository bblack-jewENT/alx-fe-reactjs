// Data fetching component created
import { useState } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";

const PostsComponent = () => {
  const queryClient = useQueryClient();
  const [lastRefetchAt, setLastRefetchAt] = useState(null);

  // Custom fetchPosts function
  const fetchPosts = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    if (!response.ok) throw new Error("Network response was not ok");
    return response.json();
  };

  const {
    data,
    isLoading,
    error,
    isFetching,
    refetch,
    isError, // explicitly include isError from useQuery
  } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
    staleTime: 1000 * 60 * 5,
    cacheTime: 1000 * 60 * 10,
    refetchOnWindowFocus: false,
  });

  if (isLoading) return <div>Loading...</div>;
  if (isError)
    return (
      <div>
        <div>Error: {error.message}</div>
        <button onClick={() => refetch()}>Retry</button>
      </div>
    );

  const hasCache = !!queryClient.getQueryData(["posts"]);

  return (
    <div>
      <h1>Posts</h1>
      <div style={{ marginBottom: 8 }}>
        <button
          onClick={() =>
            refetch().then(() => {
              setLastRefetchAt(new Date().toLocaleTimeString());
            })
          }
        >
          Refetch Posts
        </button>
        <button
          style={{ marginLeft: 8 }}
          onClick={() => queryClient.invalidateQueries(["posts"])}
        >
          Invalidate Cache
        </button>
      </div>

      <div style={{ marginBottom: 8 }}>
        <strong>Cache present:</strong> {hasCache ? "yes" : "no"} |{" "}
        <strong>Fetching:</strong> {isFetching ? "yes" : "no"}
        {lastRefetchAt ? <span> | last refetch: {lastRefetchAt}</span> : null}
      </div>

      <ul>
        {data?.map((post) => (
          <li key={post.id} style={{ marginBottom: 12 }}>
            <h2 style={{ margin: 0 }}>{post.title}</h2>
            <p style={{ margin: "4px 0 0" }}>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostsComponent;
