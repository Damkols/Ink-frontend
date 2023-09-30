import { Dialog, Transition } from "@headlessui/react";
import React, { Fragment, useState } from "react";
import { supportedChains } from "../constants";
import { toast } from "react-toastify";
import { useConnection } from "../context/connection";
import useCreatePost from "../hooks/useCreatePost";

const CreateCampaign = () => {
 let [isOpen, setIsOpen] = useState(false);
 const [content, setContent] = useState("");
 //  const [goal, setGoal] = useState(0.5);
 //  const [duration, setDuration] = useState(1);
 const [sendingTx, setSendingTx] = useState(false);
 const { connect, isActive, isRegistered, account, switchToChain } =
  useConnection();

 //  const proposeCampaign = useProposeCampaign();
 const createPost = useCreatePost();

 function closeModal() {
  if (sendingTx) return;
  setIsOpen(false);
 }

 function openModal() {
  setIsOpen(true);
 }

 const handleCreatePost = async () => {
  if (!content) return toast.info("Please add content");
  if (!isActive) return toast.info("please, connect");
  //   if (!isRegistered) return toast.info("Your are not registered");
  try {
   setSendingTx(true);
   const tx = await createPost(content);
   const receipt = await tx.wait();
   if (receipt.status === 0) return toast.error("tx failed");

   toast.success("Post created!!");
   setIsOpen(false);
   console.log(receipt);
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
  <Fragment>
   <button
    onClick={openModal}
    className="w-[fit-content] block rounded-md mx-auto my-10 bg-blue-400 px-4 py-4 text-sm font-medium text-white hover:bg-opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
   >
    Create a Post
   </button>

   <Transition appear show={isOpen} as={Fragment}>
    <Dialog as="div" className="relative z-10" onClose={closeModal}>
     <Transition.Child
      as={Fragment}
      enter="ease-out duration-300"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="ease-in duration-200"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
     >
      <div className="fixed inset-0 bg-black bg-opacity-50" />
     </Transition.Child>
     <div className="fixed inset-0 overflow-y-auto">
      <div className="flex min-h-full items-center justify-center p-4 text-center">
       <Transition.Child
        as={Fragment}
        enter="ease-out duration-300"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="ease-in duration-200"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
       >
        <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
         <Dialog.Title
          as="h3"
          className="text-lg font-medium leading-6 text-gray-900"
         >
          Create Post
         </Dialog.Title>
         <div className="mt-2">
          <p className="text-sm text-gray-500">
           Lorem ipsum dolor sit amet consectetur adipisicing elit.
           Consequuntur, numquam.
          </p>
         </div>
         <form className="mt-4 space-y-4">
          <div className="flex flex-col">
           <label className="font-bold">Your Post</label>
           <input
            value={content}
            onChange={(e) => setContent(e.target.value)}
            type="text"
            className="outline-0 py-2 px-1 rounded-lg mt-2 border border-blue-400"
           />
          </div>

          {isActive ? (
           <div
            onClick={handleCreatePost}
            className="cursor-pointer w-full rounded-md bg-blue-400 p-3 text-sm font-medium text-white hover:bg-opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 text-center"
           >
            {sendingTx ? "Creating post..." : "Create Post"}
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
         </form>
        </Dialog.Panel>
       </Transition.Child>
      </div>
     </div>
    </Dialog>
   </Transition>
  </Fragment>
 );
};

export default CreateCampaign;
