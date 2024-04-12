import Image from "next/image";
import styles from "./page.module.css";
import PostUser from "@/components/postuser/postuser";
import { Suspense } from "react";
import { fetchPost } from "@/lib/data";

// API data fetching
// const fetchData = async (slug) => {
//   // fetchData async function to populate with external data
//   // use [slug]
//   const response = await fetch(
//     `https://jsonplaceholder.typicode.com/posts/${slug}`
//   );
//   // error check
//   if (!response.ok) {
//     // throw error
//     throw new Error("Something went wrong...");
//   }
//   const data = await response.json();
//   // console.log(data);
//   return data;
// };

export default async function BlogPost({ params }) {
  const { slug } = params;
  // console.log(slug); // 1 -> POST 1
  // const post = await fetchData(slug);

  // with lib
  const post = await fetchPost(slug);

  return (
    <main className={styles.container}>
      {post.image && (
        <div className={styles.img__container}>
          <Image
            src={post.image}
            alt="post image"
            fill
            className={styles.img}
          />
        </div>
      )}
      <div className={styles.text__container}>
        <h1>{post.title}</h1>
        <div className={styles.detail__container}>
          {post && (
            <Suspense fallback={<div>Loading...</div>}>
              <PostUser userId={post.userId} />
            </Suspense>
          )}
          <div className={styles.detail__text}>
            <span className={styles.detail__title}>Published</span>
            <span className={styles.detail__value}>
              {post.createdAt.toString().slice(4, 16)}
            </span>
          </div>
        </div>
        <div className={styles.content}>{post.description}</div>
      </div>
    </main>
  );
}
