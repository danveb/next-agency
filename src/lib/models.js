import mongoose from "mongoose"; 

// create schemas
const userSchema = new mongoose.Schema({
  username: {
    type: String, 
    required: true, 
    unique: true, 
    min: 3, 
    max: 20, 
  }, 
  email: {
    type: String, 
    required: true, 
    unique: true, 
    max: 50, 
  }, 
  password: {
    type: String, 
    required: true, 
    min: 4, 
  }, 
  image: {
    type: String, 
  }, 
  isAdmin: {
    type: Boolean, 
    default: false, 
  }, 
}, {
  timestamps: true, 
}); 

const postSchema = new mongoose.Schema({
  title: {
    type: String, 
    required: true, 
  }, 
  description: {
    type: String, 
    required: true, 
  }, 
  image: {
    type: String, 
  }, 
  userId: {
    type: String, 
    required: true, 
  }, 
  slug: {
    type: String, 
    required: true, 
    unique: true, 
  }, 
}, {
  timestamps: true, 
}); 

// export models
export const User = mongoose.models?.User || mongoose.model("User", userSchema); 
export const Post = mongoose.models?.Post || mongoose.model("Post", postSchema); 