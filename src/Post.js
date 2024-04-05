import React from 'react';

const Post = ({ post }) => {
  const { title, content, author, date } = post;

  return (
    <div className="post">
      <h2>{title}</h2>
      <p>{content}</p>
      <div className="post-details">
        <p>Author: {author}</p>
        <p>Date: {date}</p>
      </div>
    </div>
  );
};

export default Post;
