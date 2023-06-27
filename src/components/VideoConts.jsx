import React, { useState, useEffect } from 'react';
import ReactPlayer from 'react-player';
import { useParams } from 'react-router-dom';

const VideoConts = () => {
  const [videoDetail, setVideoDetail] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetch(
      `https://youtube.googleapis.com/youtube/v3/videos?part=snippet,statistics&id=${id}&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`
    )
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        setVideoDetail(result.items);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <section className="videoConts">
      <div className="container">
        <div className="video__sub">
          <div className="left">
            <div className="play">
              <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} />
            </div>
            {/* <div className="desc">{videoDetail.snippet.title}</div> */}
          </div>
          <div className="right"></div>
        </div>
      </div>
    </section>
  );
};

export default VideoConts;
