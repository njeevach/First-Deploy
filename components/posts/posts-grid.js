import PostItem from './post-item';
import clases from './posts-grid.module.css';

function PostGrid(props) {
    const { posts } = props;

    return (
        <ul className={clases.grid}>
            {posts.map(post =>
                <PostItem key={post.slug} post={post} />)}
        </ul>
    )
}

export default PostGrid;