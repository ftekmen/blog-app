import Image from 'next/image';
import ReactMarkdown from 'react-markdown/react-markdown.min';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';

import PostHeader from './PostHeader';
import classes from './postContent.module.css';

function PostContent(props) {
  const { post } = props;

  const imagePath = `/images/posts/${post.slug}/${post.image}`;

  const customRenderers = {
    p: ({ node, ...props }) => {
      if (node.children[0].tagName === 'img') {
        const image = node.children[0].properties;

        return (
          <div className={classes.image}>
            <Image src={`/images/posts/${post.slug}/${image.src}`} alt={image.alt} width={600} height={300} />
          </div>
        );
      }

      return <p>{props.children}</p>;
    },
    code: ({ node }) => {
      // console.log(node);
      // console.log(SyntaxHighlighter.supportedLanguages);
      return <SyntaxHighlighter language="javascript" children={node.children[0].value} style={atomDark} />;
    }
  };

  return (
    <article className={classes.content}>
      <PostHeader title={post.title} image={imagePath} />
      <ReactMarkdown components={customRenderers}>{post.content}</ReactMarkdown>
    </article>
  );
}

export default PostContent;