import LinkButton from "./../components/button";
import AddPostForm from "../components/addPostForm";

async function getPosts(): Promise<Post[]> {
  // TODO: this function isn't properly getting data from the database.
  console.log("\n\ngetPosts:");
  const response = await fetch(`http://localhost:3000/api/posts`);
  console.log("inbetween");
  const data = await response.json();
  console.log(data);
  console.log("\n\n");
  return data;
}

export default async function Home() {
  
  const posts: Post[] = await getPosts();

  return (
    <main className="h-screen flexContainer flex-col gap-4">
      
      <div className="p-4 blackBorder">
        Home
      </div>
      
      <LinkButton location={"/dashboard"} text={"Go to the dashboard"} />
      
      <div className="p-4 blackBorder">
        {
          posts.map((post: Post) => (
            <div key={post.id} className="p-4 blackBorder">
              {post.title}
            </div>
          ))
        }
      </div>

      <AddPostForm />

    </main>
  );

}
