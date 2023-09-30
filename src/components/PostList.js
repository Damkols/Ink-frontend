import React from "react";
import { Link } from "react-router-dom";

const PostList = ({ post }) => {
 return (
  <div className="bg-white w-[50%] sm:max-w-sm border-2 border-blue-200 shadow-lg rounded-xl overflow-hidden py-8">
   <Link to={`/post/${post.id}`}>
    {/* <Link to={/post/${post.id}} className=""> */}
    <div className="px-6 py-4">
     <h2 className="text-2xl text-blue-400 font-semibold mb-5">
      {post?.content.split(".")[0]}
     </h2>
     <p className="mt-2 font-bold text-gray-500">P{post?.content}</p>
    </div>
   </Link>
  </div>
 );
};

export default PostList;
