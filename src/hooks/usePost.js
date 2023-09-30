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

// const usePost = () => {
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

// export default usePost;
