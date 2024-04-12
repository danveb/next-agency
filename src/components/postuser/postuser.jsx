import Image from "next/image";
import { fetchUser } from "@/lib/data";
import styles from "./postuser.module.css";

// API data fetching
// const fetchData = async (userId) => {
//   // fetchData async function to populate with external data
//   // use [slug]
//   const response = await fetch(
//     `https://jsonplaceholder.typicode.com/users/${userId}`,
//     {
//       cache: "no-store",
//     }
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

export default async function PostUser({ userId }) {
  // destructure userId for user data
  // const user = await fetchData(userId);
  // console.log(user);

  // with lib
  const user = await fetchUser(userId);

  return (
    <main className={styles.container}>
      <Image
        src={user.image ? user.image : "/no-avatar.svg"}
        alt="user avatar"
        height={50}
        width={50}
        className={styles.avatar}
      />
      <div className={styles.info}>
        <span className={styles.title}>Author</span>
        <span className={styles.name}>{user.username}</span>
      </div>
    </main>
  );
}
