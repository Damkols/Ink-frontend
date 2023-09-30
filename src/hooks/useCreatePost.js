import { useCallback } from "react";
import { toast } from "react-toastify";
import { getInkContract, calculateGasMargin } from "../utils";
import { useConnection } from "../context/connection";

const useCreatePost = () => {
 const { isActive, provider } = useConnection();
 const createPost = useCallback(
  async (content) => {
   if (!content) return toast.info("Please provide Content");
   if (!isActive) return toast.info("please, connect");
   const contract = await getInkContract(provider, true);
   const estimatedGas = await contract.createPost.estimateGas(content);

   return contract.createPost(content, {
    gasLimit: calculateGasMargin(estimatedGas),
   });
  },
  [isActive, provider]
 );

 console.log(createPost);

 return createPost;
};

export default useCreatePost;
