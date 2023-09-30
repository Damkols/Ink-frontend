import { useEffect, useState } from "react";
import { useConnection } from "../context/connection";
import { getInkContract } from "../utils";

const useAllPosts = () => {
 const [posts, setPosts] = useState([]);
 const { provider } = useConnection();

 useEffect(() => {
  const fetchPosts = async () => {
   try {
    const contract = await getInkContract(provider, false);
    const Posts = await contract.getPosts(0, 100);
    const allPosts = Posts.filter((post) => post[2] !== "");
    // console.log(validPosts.length);
    setPosts(allPosts);
   } catch (error) {
    console.error("Error fetching post count:", error);
   }
  };

  fetchPosts();
 }, [provider]);
 return posts;
};

export default useAllPosts;
