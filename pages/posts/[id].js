import React from "react";
import MarkdownIt from 'markdown-it'
import { fetcher } from "../../lib/api";

const PostPage = ({ post }) => {
  const md = new MarkdownIt();
  const htmlContent = md.render(post.attributes.content);

  return (
    <article>
      <header>
        <h1>{post.attributes.title}</h1>
        <h4>{post.attributes.description}</h4>
      </header>
      <section dangerouslySetInnerHTML={{__html: htmlContent}}></section>
    </article>
  );
};

export default PostPage;

export async function getStaticProps({ params }) {
  // const postsRes = await fetch(`http://localhost:1337/api/postsp/${params.id}`);
  // const postsResData = await postsRes.json();
  
  const postsRes = await fetcher(`${process.env.NEXT_PUBLIC_STRAPI_URL}/postsp/${params.id}`);

  return {
    props: {
      post: postsRes.data,
    },
  };
}

export async function getStaticPaths() {
  // const postsRes = await fetch("http://localhost:1337/api/postsp");
  // const postsResData = await postsRes.json();
  const postsRes = await fetcher(`${process.env.NEXT_PUBLIC_STRAPI_URL}/postsp`);

  const paths = postsRes.data.map((post) => {
    return { params: { id: post.id.toString() } };
  });

  return {
    paths,
    fallback: false,
  };
}
