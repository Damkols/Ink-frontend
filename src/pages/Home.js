import React from "react";
import CreatePost from "../components/CreatePost";
import AllPosts from "../components/AllPosts";
import Register from "../components/Register";
import { useConnection } from "../context/connection";
import Post from "./Post";

const Home = () => {
 const { isRegistered } = useConnection();
 console.log(isRegistered);

 return (
  //   <>
  //    {isRegistered ? (
  //     <>
  //      <CreatePost />
  //      <AllPosts />
  //     </>
  //    ) : (
  //     <Register />
  //    )}
  //   </>
  <>
   <Register />
   <>
    <CreatePost />
    <AllPosts />
   </>
  </>
 );
};

export default Home;
