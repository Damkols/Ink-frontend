// import { useEffect, useState } from "react";
// import { useConnection } from "../context/connection";
// import {
//  getInkContractWithProvider,
//  getInkInterface,
//  getMulticall2ContractWithProvider,
// } from "../utils";
// import { inkContractAddress } from "../constants/addresses";
// import usePostCount from "./usePost";

// // postIndex;

// const useAllPosts = () => {
//  const [posts, setPosts] = useState([]);
//  const { provider } = useConnection();
//  const postCount = usePostCount();

//  useEffect(() => {
//   const fetchAllPosts = async () => {
//    if (!postCount) return;
//    try {
//     const multicall2Contract = getMulticall2ContractWithProvider(provider);

//     const postsKeys = Array.from(
//      { length: Number(postCount) },
//      (_, i) => i + 1
//     );

//     const inkInterface = getInkInterface();

//     const postCalls = postsKeys.map((id) => ({
//      target: inkContractAddress,
//      callData: inkInterface.encodeFunctionData("postIndex", [id]),
//     }));

//     //  const constributorsCall = postsKeys.map((id) => ({
//     //   target: inkContractAddress,
//     //   callData: inkInterface.encodeFunctionData("getContributors", [id]),
//     //  }));

//     //  const calls = postCalls.concat(constributorsCall);
//     const multicallResults = (
//      await multicall2Contract.aggregate.staticCall(postCalls)
//     )[1].toArray();

//     //  const campaignMulticallResult = multicallResults.slice(
//     //   0,
//     //   multicallResults.length / 2
//     //  );
//     //  const contributorsMulticallResult = multicallResults.slice(
//     //   multicallResults.length / 2
//     //  );

//     const decodedPostResults = multicallResults.map((result) =>
//      inkInterface.decodeFunctionResult("postIndex", result).toArray()
//     );

//     //  const decodedContributorsResults = contributorsMulticallResult.map(
//     //   (result) =>
//     //    inkInterface
//     //     .decodeFunctionResult("getContributors", result)
//     //     .toArray()
//     //  );

//     const postDetails = decodedPostResults.map((posts, index) => ({
//      id: postsKeys[index],
//      poster: posts[0],
//      content: posts[1],
//      timePosted: Number(posts[2]),
//      tips: posts[3],
//     }));

//     setPosts(postDetails.reverse());
//    } catch (error) {
//     console.error("Error fetching posts:", error);
//    }
//   };

//   fetchAllPosts();
//  }, [postCount, provider]);

//  //  useEffect(() => {
//  //   // Listen for event
//  //   const handleProposeCampaignEvent = (id, title, amount, duration) => {
//  //    setPosts([
//  //     {
//  //      id,
//  //      title,
//  //      fundingGoal: amount,
//  //      durationTime: Number(duration),
//  //      isActive: true,
//  //      fundingBalance: 0,
//  //      contributors: [],
//  //     },
//  //     ...posts,
//  //    ]);
//  //   };
//  //   const contract = getInkContractWithProvider(provider);
//  //   contract.on("ProposeCampaign", handleProposeCampaignEvent);

//  //   return () => {
//  //    contract.off("ProposeCampaign", handleProposeCampaignEvent);
//  //   };
//  //  }, [posts, provider]);

//  return posts;
// };

// export default useAllPosts;

// import { formatEther } from "ethers";
// import React from "react";
// import { formatDate } from "../utils";
// import { Link } from "react-router-dom";
// import usePost from "../hooks/usePost";

// const Posts = ({ post }) => {
//  const post = usePost();
//  return (
//   <div className="bg-white w-[30%] sm:max-w-sm border-2 border-blue-200 shadow-lg rounded-xl overflow-hidden py-8">
//    <Link to={`/post/${post.id}`}>
//     <div className="px-6 py-4">
//      <h2 className="text-2xl text-blue-400 font-semibold mb-5">{post.title}</h2>
//      <p className="mt-2 font-bold text-gray-500">ID - {post?.id}</p>
//      <p className="mt-2 font-bold text-gray-500">Poster - {post?.poster} ETH</p>
//      <p className="mt-2 font-bold text-gray-500">
//       Posted at - {formatDate(post?.timePosted)}
//      </p>
//     </div>
//     <div className="flex flex-col gap-3 px-6 pt-2 pb-2">
//      <span className="w-fit bg-blue-400 text-white text-sm px-4 py-2 rounded-full">
//       tip {formatEther(post?.tips)} InkToken
//      </span>
//     </div>
//    </Link>
//   </div>
//  );
// };

// export default Posts;
