
import { LiaArrowCircleRightSolid } from "react-icons/lia";

import styles from "./SideContent.module.scss";

const SideContent = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.innerWrapper}>
        <div>
          <img src="/video_thumb.png" alt="video_thmb" className={styles.thumbImage}/>
        </div>
        <div >
          <button className="btn-blue btn-w100">
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
  )
};

export default SideContent;