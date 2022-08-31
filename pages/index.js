import React from "react";
import HomeHeader from "../components/HomeHeader";
import HomeLatestPosts from "../components/HomeLatestPosts";
import { fetcher } from "../lib/api";

function Home({ posts }) {
  return (
    <>
      <HomeHeader />
      <HomeLatestPosts posts={posts} />
    </>
  );
}

export default Home;

export async function getStaticProps() {
  // const postsRes = await fetch("http://localhost:1337/api/postsp");
  //const postsResData = await postsRes.json();
  
  const postsRes = await fetcher(`${process.env.NEXT_PUBLIC_STRAPI_URL}/postsp`);

  return {
    props: {
      posts: postsRes.data,
    },
  };
}

// https://www.youtube.com/watch?v=599ogMbXIyA&t=4088s&ab_channel=Devistry
