import Summary from "../../Components/Summary/Summary"
import CourseDetails from "../../Components/CourseDetail/CourseDetails"

import styles from "./LeftPanel.module.scss";

const LeftPanel = () => {
  return (
    <div className={styles.containerBox}>
      <Summary />
      <CourseDetails />
    </div>
  )
};

export default LeftPanel;