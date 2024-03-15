import { useState } from "react";
import YouTube from 'react-youtube';

import styles from "./CourseContent.module.scss";

// Import all video files from the assets folder

const CoursesContent = (props) => {
  const {data} = props;
  const videosArray = data ? data.items : []

  const videoTitles  = data && data.items ? data.items.map(item => item.snippet.title) : []
  const [currentVideo, setCurrentVideo] = useState(0)


  const handlePrevious = () => {
    if(currentVideo !== 0) {
      setCurrentVideo(currentVideo - 1)
    }
  }
  
  const handleNext = () => {
    if(currentVideo < (videosArray.length -1)) {
      setCurrentVideo(currentVideo + 1)
    }
  }

  const opts = {
    // height: '200',
    // width: '100%',
    playerVars: {
        autoplay: 0
    }
  };

  return (
    <div>
      <section className={styles.playlistSection}>
        <ul>
          {videoTitles && videoTitles.length && videoTitles.map((title, index)  => {
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
        </ul>
      </section>
      <div>
        {
          videosArray && videosArray.map((video, index) => {
            if(index === currentVideo) {
              const vId = video && video.snippet &&  video.snippet.resourceId && video.snippet.resourceId.videoId
              return (
                <>
                {vId ? <YouTube videoId={vId} opts={opts} /> : ""}
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
