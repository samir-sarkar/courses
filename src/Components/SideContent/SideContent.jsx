import { LiaArrowCircleRightSolid } from "react-icons/lia";
// import { FaRegPlayCircle } from "react-icons/fa";
import YouTube from 'react-youtube';

import video1 from "../../assets/video1.mp4";
import styles from "./SideContent.module.scss";
import { useState } from "react";

const SideContent = (props) => {
  const {data} = props
  const [play,] = useState(false);
  const videoId = data && data.items && data.items[0] && data.items[0].snippet && data.items[0].snippet.resourceId && data.items[0].snippet.resourceId.videoId

  // const handleVideoPlay = () => {
  //   setPlay(!play); // Toggle the play state
  // };

  const opts = {
      height: '200',
      width: '100%',
      playerVars: {
          autoplay: 0
      }
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.innerWrapper}>
        <div className={styles.videoContainer}>
          {videoId && <YouTube videoId={videoId} opts={opts} />}
          {/* <video
            src={video1}
            autoPlay={play} // Start playing if play state is true
            muted={false}
            controls
            className={styles.thumbImage}
            alt="/videoThumb.png"
          ></video> */}
          {/* <div className={styles.playBtn} onClick={handleVideoPlay}>
            <FaRegPlayCircle />
          </div> */}
        </div>
        <div>
          <button to={`/course/${1}`} className="btn-blue btn-w100">
            <span>Start Learning</span>
            <LiaArrowCircleRightSolid />
          </button>
        </div>
        <ul className={styles.actions}>
          <li>You Tube</li>
          <li>Free Online Course</li>
          <li>English</li>
          <li>1 Day 1 hour</li>
          <li>On Demand</li>
          <p>Share this course</p>
        </ul>
      </div>
      <div className={styles.innerWrapper}>
        <header>
          <h2>Found in</h2>
        </header>
        <ul>
          <li>
            <p>Cybersecurity Courses</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideContent;
