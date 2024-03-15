import Summary from "../../Components/Summary/Summary"
import CourseDetails from "../../Components/CourseDetail/CourseDetails"

import styles from "./LeftPanel.module.scss";

const LeftPanel = (props) => {
  const {data} = props
  return (
    <div className={styles.containerBox}>
      <Summary data={data}/>
      <CourseDetails data={data}/>
    </div>
  )
};

export default LeftPanel;