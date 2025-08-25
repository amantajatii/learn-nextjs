import CardList from "../components/posts/CardList";
import ViewUserButton from "../components/posts/ViewUserButton";

const base_url = "https://jsonplaceholder.typicode.com/posts";

interface Iposts {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const Posts = async () => {
  const response = await fetch(base_url, {
    cache: "no-store",
  });
  const posts: Iposts[] = await response.json();

  return (
    <div>
      <p>{new Date().toLocaleTimeString()}</p>
      <h1>Posts Page</h1>
      {posts.map((post) => {
        return (
          <CardList key={post.id}>
            <p>{post.title}</p>
            <p>{post.body}</p>
            <p>{post.userId}</p>
            <p>{post.id}</p>
            <ViewUserButton userId={post.userId}/>
          </CardList>
        );
      })}
    </div>
  );
};

export default Posts;
