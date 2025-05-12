import Image from 'next/image';
import classes from './post-content.module.css';
import PostHeader from './post-header';
import ReactMarkdown from 'react-markdown';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import atomDark from 'react-syntax-highlighter/dist/cjs/styles/prism/atom-dark';
import js from 'react-syntax-highlighter/dist/cjs/languages/prism/javascript';
import css from 'react-syntax-highlighter/dist/cjs/languages/prism/css';

SyntaxHighlighter.registerLanguage('js',js);
SyntaxHighlighter.registerLanguage('css',css);


function PostContent(props) {
    const { post } = props;
    const imagePath = `/images/posts/${post.slug}/${post.image}`;

    const customRenderers = {
        p(paragraph) {
            const { node } = paragraph;

            if (node.children[0]?.tagName === 'img') {
                const image = node.children[0];
                return (
                    <div className={classes.image}>
                        <Image
                            src={`/images/posts/${post.slug}/${image.properties.src}`}
                            alt={image.properties.alt}
                            width={600}
                            height={300}
                        />
                    </div>
                );
            }

            return <p>{paragraph.children}</p>;
        },

        code({ node, inline, className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || '');
            return !inline && match ? (
                <SyntaxHighlighter
                    style={atomDark}
                    language={match[1]}
                    PreTag="div"
                    {...props}
                >
                    {String(children).replace(/\n$/, '')}
                </SyntaxHighlighter>
            ) : (
                <code className={className} {...props}>
                    {children}
                </code>
            );
        }
    };

    return (
        <article className={classes.content}>
            <PostHeader image={imagePath} title={post.title} />
            <ReactMarkdown components={customRenderers}>
                {post.content}
            </ReactMarkdown>
        </article>
    );
}

export default PostContent;
