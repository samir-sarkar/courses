import { FaStar } from "react-icons/fa";
import { RiBookmarkLine, RiBookmarkFill } from "react-icons/ri";

import classNames from 'classnames';

import Breadcrumbs from "../../Components/Breadcrumbs/Breadcrumbs";
import styles from "./Summary.module.scss";
import { useState } from "react";

// const dummyData = {
//   courseRating: 5,
//   courseTitle: "Web Security",
//   rateCount: 19,
//   savedCount: 319,
//   breadcrumbItems: [
//     { text: 'Information Security (InfoSec)', url: '/home' },
//     { text: 'Cybersecurity', url: '/Cybersecurity' }
//   ]
// }

const Summary = (props) => {
  const {data} = props;
  const snippet = data&& data.items ? data.items[0].snippet : {title: ""}
  const [savedCount, setSavedCount ] = useState(data?.savedCount ? data.savedCount : 0)
  const [shouldAdd, setShouldAdd] = useState(true)
  const ratingArray = Array.from({ length: 5 }).fill(data?.courseRating ? data.courseRating : 3);

  const handleMarkComplete = () => {
    console.log("Clicked on Mark complete")
  }

  const handleAddToList = () => {
    console.log("Clicked on Add to List")
    setSavedCount(shouldAdd ? (savedCount + 1) : (savedCount - 1))
    setShouldAdd(!shouldAdd)
  }

  return (
    <div className={styles.conatiner}>
      {data?.breadcrumbItems?.length && <Breadcrumbs items={data.breadcrumbItems} />}
      <img src="universityLogo.png" alt="Logo" height={30}/>
      <h1>{snippet?.title}</h1>
      <div className={styles.rating}>
        {/* <span role="img" aria-label={`Five out of ${data?.courseRating} stars`} > */}
        <span role="img" aria-label={`Five out of  stars`} >
          {
            ratingArray.map((item, index) => {
              return (
                <FaStar
                  key={index}
                  className={classNames( {
                    [styles.empty]: true,
                    [styles.fill]: (index + 1) <= item
                  })}
                />
              )
            })
          }
        </span>
        <p>{data?.rateCount} ratings</p>
      </div>
      <div className={styles.actions}>
        <div  >
          {shouldAdd ? <RiBookmarkLine /> : <RiBookmarkFill />}
          <span>
            {savedCount && savedCount}
          </span>
        </div>
        <button onClick={handleAddToList}>Add to list</button>
        <button onClick={handleMarkComplete}>Mark Complete</button>
        <button className="btn-blue ">Write Review</button>
      </div>
    </div>
  )
}

export default Summary;
