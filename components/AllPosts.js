import React from "react";
import PostPreview from "./PostPreview";

const AllPosts = ({ posts }) => {
  function renderPostPreviews() {
    return posts.map((post) => {
      return <PostPreview post={post} key={post.id} />;
    });
  }

  return (
    <>
      <h2>Posts List</h2>
      {renderPostPreviews()}
    </>
  );
};

export default AllPosts;
