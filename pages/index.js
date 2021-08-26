import { Fragment } from 'react';
import Head from 'next/head';

import FeaturedPosts from '../components/homepage/featuredPosts';
import Hero from '../components/homepage/hero';
import { getFeaturedPosts } from '../lib/postsUtil';

function HomePage(props) {
  console.log(props.posts);
  return (
    <Fragment>
      <Head>
        <title>Welcome to My Blog</title>
        <meta name="description" content="I post about programming and web development." />
      </Head>
      <Hero />
      <FeaturedPosts posts={props.posts} />
    </Fragment>
  );
}

export function getStaticProps() {
  const featuredPosts = getFeaturedPosts();

  return {
    props: {
      posts: featuredPosts
    }
  };
}

export default HomePage;