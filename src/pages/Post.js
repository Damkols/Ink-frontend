// import React, { Fragment, useState } from "react";
// import { toast } from "react-toastify";

// // import usePost from "../hooks/usePost";
// import { useConnection } from "../context/connection";
// import usePost from "../hooks/usePost";

// const Post = () => {
//  const [postId, setPostId] = useState(false);
//  // const [newPost, setNewPost] = useState(false);
//  const [sendingTx, setSendingTx] = useState(false);
//  const { connect, isActive, isRegistered, account, switchToChain } =
//   useConnection();

//  const post = usePost();

//  const handleGetPost = async () => {
//   // if (!postId) return toast.info("Please add content");
//   if (!isActive) return toast.info("please, connect");
//   //   if (!isRegistered) return toast.info("Your are not registered");
//   try {
//    setSendingTx(true);
//    const tx = await post(postId);
//    const receipt = await tx.wait();
//    if (receipt.status === 0) return toast.error("query failed");

//    toast.success("Post gotten!!");
//    console.log(receipt);
//   } catch (error) {
//    console.log("error: ", error);
//    toast.error("something went wrong");
//   } finally {
//    setSendingTx(false);
//   }
//  };

//  return (
//   <div className="flex flex-wrap justify-center gap-10 px-5 py-10">
//    <div className="mt-2">
//     <p className="text-sm text-gray-500">Get Post</p>
//    </div>
//    <div className="flex flex-col">
//     <label className="font-bold">Your Post</label>
//     <input
//      value={postId}
//      onChange={(e) => setPostId(e.target.value)}
//      type="number"
//      className="outline-0 py-2 px-1 rounded-lg mt-2 border border-blue-400"
//     />
//    </div>
//    {isActive && (
//     <div
//      onClick={handleGetPost}
//      className="cursor-pointer w-full rounded-md bg-blue-400 p-3 text-sm font-medium text-white hover:bg-opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 text-center"
//     >
//      {sendingTx ? "getting post..." : "Get Post"}
//     </div>
//    )}
//    {/* {!!posts && posts.map((post, index) => <Posts key={index} post={post} />)} */}
//   </div>
//  );
// };

// export default Post;
