import { Fragment } from 'react';
import FeaturedPosts from '../components/homepage/featuredPosts';

import Hero from '../components/homepage/hero';
import { getFeaturedPosts } from '../lib/postsUtil';

function HomePage(props) {
  console.log(props.posts);
  return (
    <Fragment>
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