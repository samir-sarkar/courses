  import { useState } from "react";
  import YouTube from 'react-youtube';
  import { IoPlaySharp } from "react-icons/io5";
  import { LiaAngleRightSolid } from "react-icons/lia";
  import { CiCircleCheck } from "react-icons/ci";
  import { FaCheck } from "react-icons/fa";
  import classNames from "classnames";

  import styles from "./CourseContent.module.scss";

  // Import all video files from the assets folder

  const CoursesContent = (props) => {
    const {data} = props;
    const videosArray = data ? data.items : []

    const videoTitles  = data && data.items ? data.items.map(item => {return item.snippet.title}) : []
    const [currentVideo, setCurrentVideo] = useState(0)
    const [completed, setCompleted] = useState(Array(videosArray.length).fill(false) || [])
    const [isStarted, setStarted] = useState(false);

    const handleStartCourse = () => {
      setStarted(true);
    }
    
    const handleNext = () => {
      if(currentVideo < (videosArray.length -1)) {
        setCurrentVideo(currentVideo + 1)
      }
    }

    const handleListItem = (index) => {
      if(currentVideo !== index) {
        setCurrentVideo(index)
      } 
    }

    const toggleMarkComplete = (index) => {
      if(isStarted) {
        setCompleted(prevCompleted => {
          const updatedArray = [...prevCompleted]; 
          updatedArray[index] = !updatedArray[index]; 
          return updatedArray; 
        });
      }
    };
  
    const opts = {
      // height: '480',
      // width: '640',
      playerVars: {
          autoplay: 0
      }
    };

    const progressBar = (
      <div className={styles.progressBarOuter}>
        <div className={styles.progressBar}>
          <div className={styles.progress} style={{ width: `${(completed.filter(Boolean).length / videosArray.length) * 100}%` }}></div>
        </div>
        <p>{`${completed.filter(Boolean).length}/${videosArray.length}`} completed</p>
      </div>
    );

    const startButton = (
      <div className={styles.blueBtnContainer}>
        <button onClick={handleStartCourse} className={styles.blueBtn}>
          <span>Start Course</span>
          <IoPlaySharp />
        </button>
      </div>
    )

    const credit = (
      <div>
        <div className={styles.text2}>
          <h3>
            {videosArray[currentVideo]?.snippet?.videoOwnerChannelTitle}
            <span className={styles.badge}>Beta</span>
          </h3>
        </div>
        <p className={styles.text3}>YouTube playlists curated by {videosArray[currentVideo]?.snippet?.videoOwnerChannelTitle} </p>
      </div>
    )
    

    return (
      <div className={styles.container}>
        <section id="content-playlist" className={styles.playlistSection}>
          {videoTitles && videoTitles.length ? videoTitles.map((title, index)  => {
            return (
              <li
                key={index}
                className={classNames({
                  [styles.playlist]: true,
                  [styles.activeItem]: index === currentVideo
                })}
              >
                <button className={classNames({
                    [styles.itemCount]: true,
                    [styles.selected]: index === currentVideo
                  })}
                  onClick={() => handleListItem(index)}
                >
                  {index + 1}
                </button>
                <p onClick={() => handleListItem(index)}>{title}</p>
                <button 
                  className={classNames({
                    [styles.roundBtn]: true,
                    [styles.active]: index === currentVideo,
                    [styles.completed]: completed[index]
                  })}
                  onClick={() => toggleMarkComplete(index)}
                >
                  {completed[index] && <FaCheck />}
                </button>
              </li>
            )
          }) :  null}
        </section>
        <section id="selected-content" className={styles.content}>
          <div className={styles.mediasSection}>
            <div className={styles.mediaControl}>
              {
                isStarted ? progressBar : startButton  
              }
              <div className={styles.controllerNav}>
                <button onClick={handleNext} className={styles.greyBtn}>
                  <span>Next</span>
                  <LiaAngleRightSolid />
                </button>
              </div>
            </div>
            <div className={styles.media}>
              {
                <div className={styles.media}>
                  {videosArray.map((video, index) => (
                    <div key={index}>
                      {index === currentVideo && video.snippet && video.snippet.resourceId && (
                        <YouTube videoId={video.snippet.resourceId.videoId} opts={opts} />
                      )}
                    </div>
                  ))}
                </div>
              }
            </div>
            <div className={styles.mediaInfo}>
              <div className={styles.infoWrapper}>
                <header className={styles.infoHeader}>
                <p className={styles.infoCount}>{currentVideo + 1} <i>of</i> {videosArray.length}</p>
                  { completed && completed[currentVideo] ?
                    <div
                      className={styles.complete}
                    >
                      <span>
                        <CiCircleCheck />
                        Completed
                      </span>
                      <button
                        className={styles.undoComplete}
                        onClick={() => toggleMarkComplete(currentVideo)}
                      >
                        undo
                      </button>
                    </div> :
                    <button
                    className={styles.icnBtn}
                    onClick={() => toggleMarkComplete(currentVideo)}
                  >
                    <CiCircleCheck />
                    <span>Mark Completed</span>
                  </button> 
                  }
                  
                </header>
                <div className={styles.infoTitle}>
                  <h1>{videoTitles[currentVideo]}</h1>
                </div>
                <div></div>
              </div>
              {credit}
            </div>
          </div>
        </section>
      </div>
    )
  }

  export default CoursesContent;
