import React, { useState } from 'react';
import './post.scss';

export const Post = ({ title, image, content, date }) => {
  const [showFullContent, setShowFullContent] = useState(false);

  return (
    <div className="post">
      <div className="post-image-container">
        <img src={require(`../../assets/${image}`)} alt={title} className="post-image" />
      </div>
      <div className='post-text'>
        <h2 className="post-title">{title}</h2>
        <p className={`post-content ${showFullContent ? 'expanded' : ''}`}>
          {showFullContent ? content : content.slice(0, 200)}
        </p>
        {showFullContent && (
          <button className="show-button" onClick={() => setShowFullContent(false)}>
            Show Less
          </button>
        )}
        {!showFullContent && content.length > 200 && (
          <button className="show-button" onClick={() => setShowFullContent(true)}>
            Show more
          </button>
        )}
        <p className="post-date">{date}</p>
      </div>
    </div>
  );
};
