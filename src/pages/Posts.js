import useFetch from "../hooks/useFetch";
import PostCard from "../components/PostCard";

function Posts() {
  const { data: posts, loading } = useFetch(
    "https://jsonplaceholder.typicode.com/posts"
  );

  return (
    <div>
      <h1>Posts</h1>

      {loading && <p>Loading...</p>}

      {posts.slice(0, 10).map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
}

export default Posts;
