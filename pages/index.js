import { Fragment } from 'react';
import FeaturedPosts from '../components/homepage/featuredPosts';

import Hero from '../components/homepage/hero';

const DUMMY_POSTS = [
  {
    slug: 'getting-started-with-next-js',
    title: 'Getting Started With NextJS',
    image: 'getting-started-nextjs.png',
    excerpt: 'NextJs is the React Framework for production - it makes building fullstack React apps and sites a breeze and ships with built-in SSR.',
    date: '2022-02-10'
  },
  {
    slug: 'getting-started-with-next-js2',
    title: 'Getting Started With NextJS',
    image: 'getting-started-nextjs.png',
    excerpt: 'NextJs is the React Framework for production - it makes building fullstack React apps and sites a breeze and ships with built-in SSR.',
    date: '2022-02-10'
  },
  {
    slug: 'getting-started-with-next-js3',
    title: 'Getting Started With NextJS',
    image: 'getting-started-nextjs.png',
    excerpt: 'NextJs is the React Framework for production - it makes building fullstack React apps and sites a breeze and ships with built-in SSR.',
    date: '2022-02-10'
  },
  {
    slug: 'getting-started-with-next-js4',
    title: 'Getting Started With NextJS',
    image: 'getting-started-nextjs.png',
    excerpt: 'NextJs is the React Framework for production - it makes building fullstack React apps and sites a breeze and ships with built-in SSR.',
    date: '2022-02-10'
  }
];

function HomePage() {
  return (
    <Fragment>
      <Hero />
      <FeaturedPosts posts={DUMMY_POSTS} />
    </Fragment>
  );
}

export default HomePage;