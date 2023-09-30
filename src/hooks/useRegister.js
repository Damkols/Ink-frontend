import { useCallback } from "react";
import { toast } from "react-toastify";
import { getInkContract, calculateGasMargin } from "../utils";
import { useConnection } from "../context/connection";

const useRegister = () => {
 const { isActive, provider } = useConnection();
 const register = useCallback(async () => {
  if (!isActive) return toast.info("please, connect");
  const contract = await getInkContract(provider, true);
  const estimatedGas = await contract.register.estimateGas();

  return contract.register({
   gasLimit: calculateGasMargin(estimatedGas),
  });
 }, [isActive, provider]);

 return register;
};

export default useRegister;
