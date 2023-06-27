import React from 'react';

const Videos = ({ videos }) => {
  console.log(videos);
  return (
    <div className="videos__inner">
      {videos.map((video, idx) => (
        <div key={idx}>
          <img
            src={video.snippet.thumbnails.medium.url}
            alt={video.snippet.title}
          />
          <h3>{video.snippet.title}</h3>
        </div>
      ))}
    </div>
  );
};

export default Videos;
