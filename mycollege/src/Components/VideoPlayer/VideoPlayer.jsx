import './VideoPlayer.css';
import video from '../../assets/video.mp4';
import { useRef } from 'react';

const VideoPlayer = ({ playVideo, setPlayVideo }) => {
    const player = useRef();
    function handleClosePlayer(event) {
        if(event.target === player.current) {
            setPlayVideo(false);
        }
    }


  return (
    <div className={`video-player ${playVideo ? '' : 'hide'}`} ref={player} onClick={handleClosePlayer}>
      <video src={video} autoPlay={true} loop controls></video>
    </div>
  )
}

export default VideoPlayer
