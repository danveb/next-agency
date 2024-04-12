import PostCard from "@/components/postcard/postcard";
import styles from "./page.module.css";
import { fetchPosts } from "@/lib/data";

// API data fetching
// const fetchData = async () => {
//   // fetchData async function to populate with external data
//   // by default Next.js will cache our async data
//   // add option to "no-store"
//   // it's slower but every time we use this page we'll get fresh data
//   const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
//     cache: "no-store",
//     // next: revalidate: 3600 // refresh every hour...
//   });
//   // error check
//   if (!response.ok) {
//     // throw error
//     throw new Error("Something went wrong...");
//   }
//   const data = await response.json();
//   // console.log(data);
//   return data;
// };

export default async function Blog() {
  // use fetchData async function for posts
  // const posts = await fetchData();

  // with lib
  const posts = await fetchPosts();

  return (
    <main className={styles.container}>
      {/* populate a PostCard with posts data */}
      {posts.map((post) => (
        <div className={styles.post} key={post.id}>
          <PostCard post={post} />
        </div>
      ))}
    </main>
  );
}
