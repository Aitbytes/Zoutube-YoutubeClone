import { useState } from "react";
import "./VideoDetails.css";

function VideoDetails(props) {
  const { videoID } = props;
  return (
    <div>
      <iframe
        className="video"
        title="Youtube player"
        sandbox="allow-same-origin allow-forms allow-popups allow-scripts allow-presentation"
        src={`https://youtube.com/embed/${videoID}?autoplay=0`}
      ></iframe>
    </div>
  );
}

export default VideoDetails;
