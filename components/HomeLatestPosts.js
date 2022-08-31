import React, { useState, useEffect } from "react";
import PostPreview from "./PostPreview";

const HomeLatestPosts = ({ posts }) => {
    const [latestPosts, setLatestPosts] = useState([])

    console.log('posts',posts)
    
    useEffect(() => {
        setLatestPosts(posts.slice(0,5));
        console.log('setLatestPosts',setLatestPosts(posts.slice(0,5)))
    }, [posts]);

    function renderPostPreviews(){
        return latestPosts.map((post) => {
            return <PostPreview post={post} key={post.id} />
        });
    }

  return (
    <div>
      <h2>Latest Posts</h2>
      {renderPostPreviews()}
    </div>
  );
};

export default HomeLatestPosts;
