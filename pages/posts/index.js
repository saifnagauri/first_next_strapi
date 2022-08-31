import React from "react";
import AllPosts from "../../components/AllPosts";

const Posts = ({ posts }) => {
  return (
    <>
      <AllPosts posts={posts} />
    </>
  );
};

export default Posts;

export async function getStaticProps() {
  const postsRes = await fetch("http://localhost:1337/api/postsp");
  const postsResData = await postsRes.json();
  
  return {
    props: {
      posts: postsResData.data,
    },
  };
}
