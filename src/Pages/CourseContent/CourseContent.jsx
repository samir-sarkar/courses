import { useState } from "react";

import video1 from "../../assets/video1.mp4";
import video2 from "../../assets/video2.mp4";
import styles from "./CourseContent.module.scss";

// Import all video files from the assets folder
const importVideos = require.context('../../assets', false, /\.(mp4)$/);

const CoursesContent = () => {
  const videosArray = [video1, video2];

  const videoTitles = videosArray.map(el => {
    const title = el.toString().split("/").pop().split(".")[0]
    return title
  })
  const [currentVideo, setCurrentVideo] = useState(0)
  const [play, setPlay] = useState(false)

  const handlePrevious = () => {
    if(currentVideo !== 0) {
      setCurrentVideo(currentVideo - 1)
    }
  }

  const handleNext = () => {
    if(currentVideo < (importVideos.keys().length -1)) {
      setCurrentVideo(currentVideo + 1)
    }
  }
  return (
    <div>
      <section className={styles.playlistSection}>
        <ul>
          {videoTitles.map((title, index)  => {
            return (
              <li key={index}>
                <div className={styles.playlist}>
                  <button>{index + 1}</button>
                  <p>{title}</p>
                  <button className={styles.roundBtn}></button>
                </div>
              </li>
            )
          })}
          {/* {importVideos.keys().map((videoPath, index)  => {
            const originalFileName = videoPath.match(/[^/]+$/)[0]; // Extracts the file name from the path
            const videoTitle = originalFileName.replace(/\.[^.]+$/, ''); // Removes the file extension
            return (
              <li key={index}>
                <div className={styles.playlist}>
                  <button>{index + 1}</button>
                  <p>{videoTitle}</p>
                  <button className={styles.roundBtn}></button>
                </div>
              </li>
            )
          })} */}
        </ul>
      </section>
      {/* <div>
        {
          importVideos.keys().map((videoPath, index) => {
            if(index === currentVideo) {
              return (
                <>
                  <video controls autoplay={false} mutes={false} key={index}>
                    <source src={importVideos(videoPath).default} type="video/mp4" />
                  </video>
                  <video
                    src={videoPath}
                    autoPlay={play} // Start playing if play state is true
                    muted={false}
                    controls
                    className={styles.thumbImage}
                    alt="/videoThumb.png"
                  ></video>
                </>
              )
            }
            return <></>
          })
        }
      </div> */}
      <div>
        {
          videosArray.map((videoPath, index) => {
            if(index === currentVideo) {
              return (
                <>
                  <video
                    src={videoPath}
                    autoPlay={play} // Start playing if play state is true
                    muted={false}
                    controls
                    className={styles.thumbImage}
                    alt="/videoThumb.png"
                  ></video>
                </>
              )
            }
            return <></>
          })
        }
      </div>
      <button onClick={handlePrevious}>Previous</button>
      <button onClick={handleNext}>Next</button>
      <section>
        <div></div>
      </section>
    </div>
  )
}

export default CoursesContent;
