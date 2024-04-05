import { Post } from './Post';
import './blog.scss';
import posts from '../../posts.json';

export const Blog = () => {
  posts = posts.sort((a, b) => b.id - a.id);
  return (
    <div className="blog">
      <h2 className='blog-heading'>Recent Posts</h2>
      {posts.map(post => (
        <Post
          key={post.id}
          title={post.title}
          image={post.image}
          content={post.content}
          date={post.date}
        />
      ))}
    </div>
  );
};
