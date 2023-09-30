import React, { useState } from "react";
import useRegister from "../hooks/useRegister";
import { supportedChains } from "../constants";
import { toast } from "react-toastify";
import { useConnection } from "../context/connection";

const Register = () => {
 const [sendingTx, setSendingTx] = useState(false);

 const {
  connect,
  isActive,
  account,
  switchToChain,
  isRegistered,
  handleIsRegistered,
 } = useConnection();

 const register = useRegister();

 const handleRegister = async () => {
  if (isRegistered) return;
  if (!isActive) return toast.info("please, connect");
  try {
   setSendingTx(true);
   const tx = await register();
   const receipt = await tx.wait();
   if (receipt.status === 0) return toast.error("tx failed");

   console.log(`Registered user: ${receipt}`);

   toast.success("Registered successfully!!");
   // const userAddress = await contract.signer.getAddress();
   // await contract.register();

   handleIsRegistered();
   console.log(isRegistered);
  } catch (error) {
   console.log("error: ", error);
   if (error.info.error.code === 4001) {
    return toast.error("You rejected the request");
   }
   toast.error("something went wrong");
  } finally {
   setSendingTx(false);
  }
 };
 return (
  <div>
   {isActive ? (
    <div
     onClick={handleRegister}
     className="cursor-pointer w-full rounded-md bg-blue-400 p-3 text-sm font-medium text-white hover:bg-opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 text-center"
    >
     {sendingTx ? "Registering..." : "Register"}
    </div>
   ) : account ? (
    <div
     onClick={() => switchToChain(supportedChains[0])}
     className="cursor-pointer w-full rounded-md bg-blue-400 p-3 text-sm font-medium text-white hover:bg-opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 text-center"
    >
     Switch to Goerli
    </div>
   ) : (
    <div
     onClick={connect}
     disabled={sendingTx}
     className="cursor-pointer w-full rounded-md bg-blue-400 p-3 text-sm font-medium text-white hover:bg-opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 text-center"
    >
     Connect
    </div>
   )}
  </div>
 );
};

export default Register;
