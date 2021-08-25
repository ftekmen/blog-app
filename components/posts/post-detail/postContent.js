import ReactMarkdown from 'react-markdown/react-markdown.min';

import PostHeader from './PostHeader';
import classes from './postContent.module.css';

const DUMMY_POST = {
  slug: 'getting-started-with-nextjs',
  title: 'Getting Started With NextJS',
  image: 'getting-started-nextjs.png',
  excerpt: 'NextJs is the React Framework for production - it makes building fullstack React apps and sites a breeze and ships with built-in SSR.',
  date: '2022-02-10',
  content: '# This is a first post'
};

function PostContent() {
  const imagePath = `/images/posts/${DUMMY_POST.slug}/${DUMMY_POST.image}`;
  return (
    <article className={classes.content}>
      <PostHeader title={DUMMY_POST.title} image={imagePath} />
      <ReactMarkdown>{DUMMY_POST.content}</ReactMarkdown>
    </article>
  );
}

export default PostContent;