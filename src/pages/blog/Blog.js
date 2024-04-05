// Blog.js
import React from 'react';
import { Post } from './Post';
import './blog.scss'; // Import the CSS file
import posts from '../../posts.json';

export const Blog = () => {
  return (
    <div className="blog">
      {posts.map(post => (
        <Post
          key={post.id}
          id={post.id}
          title={post.title}
          image={post.image}
          content={post.content}
          date={post.date}
        />
      ))}
    </div>
  );
};
