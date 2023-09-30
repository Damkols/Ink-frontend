import useAllPosts from "../hooks/useAllPosts";
import PostList from "./PostList";

const AllPosts = () => {
 const posts = useAllPosts();
 console.log(posts);

 return (
  <div className="grid grid-cols-3 gap-12 px-5 py-10">
   {!!posts &&
    posts.map((post, index) => (
     <>
      <PostList key={index} post={post} />
     </>
    ))}
  </div>
 );
};

export default AllPosts;
