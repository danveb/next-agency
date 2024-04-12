import { Post, User } from "./models";
import { connectDB } from "./db";
import { unstable_noStore as noStore} from "next/cache";

export const fetchPosts = async () => {
  try {
    // connection to db 
    connectDB(); 
    const posts = await Post.find(); 
    return posts; 
  } catch(error) {
    console.log(error); 
    throw new Error("Failed to fetch posts"); 
  }
}

export const fetchPost = async (slug) => {
  try {
    connectDB(); 
    const post = await Post.findOne({ slug }); 
    return post; 
  } catch(error) {
    console.log(error); 
    throw new Error("Failed to fetch post"); 
  }
}

export const fetchUsers = async () => {
  try {
    connectDB(); 
    const users = await User.find(); 
    return users; 
  } catch(error) {
    console.log(error); 
    throw new Error("Failed to fetch users"); 
  }
}

export const fetchUser = async (id) => {
  // use noStore() to stop caching fetching user
  noStore(); 
  try {
    connectDB(); 
    const user = await User.findById(id); 
    return user; 
  } catch(error) {
    console.log(error); 
    throw new Error("Failed to fetch user"); 
  }
}