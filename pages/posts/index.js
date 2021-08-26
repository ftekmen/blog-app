import { Fragment } from 'react';
import Head from 'next/head';

import AllPosts from "../../components/posts/allPosts";
import { getAllPosts } from "../../lib/postsUtil";

function AllPostsPage(props) {
  return (
    <Fragment>
      <Head>
        <title>All Posts</title>
        <meta name="description" content="A list of all programming-related tutoarials and posts!" />
      </Head>
      <AllPosts posts={props.posts} />
    </Fragment>
  );
}

export function getStaticProps() {
  const allPosts = getAllPosts();

  return {
    props: {
      posts: allPosts
    }
  };
}

export default AllPostsPage;