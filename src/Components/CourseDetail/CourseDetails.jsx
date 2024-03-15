
import styles from "./CourseDetails.module.scss";

const CourseDetails = (props) => {
  const {data} = props; 
  const chapters = data && data.items ? data.items.map(item => item.snippet.title) : []

  return (
    <div className={styles.container}>
      <section>
        <header>
          <h2>Overview</h2>
        </header>
        <div>
          <p>
            This course is a comprehensive overview of web security. The goal is to build an understanding of the most common web attacks and their countermeasures. Given the pervasive insecurity of the modern web landscape, there is a pressing need for programmers and system designers to improve their understanding of web security issues. We'll be covering the fundamentals as well as the state-of-the-art in web security.
          </p>
          <p>
            Topics include: Principles of web security, attacks and countermeasures, the browser security model, web app vulnerabilities, injection, denial-of-service, TLS attacks, privacy, fingerprinting, same-origin policy, cross site scripting, authentication, JavaScript security, emerging threats, defense-in-depth, and techniques for writing secure code. Course projects include writing security exploits, defending insecure web apps, and implementing emerging web standards. Instructor: Feross Aboukhadijeh (https://feross.org)
          </p>
        </div>
      </section>
      <section>
        <header>
          <h2>Syllabus</h2>
        </header>
        <div>
          <div>
            {chapters && chapters.length ? chapters.map((chapter, index) => {
              return (
                <p key={index}>{chapter}</p>
              )
            }) : ""}
          </div>
        </div>
      </section>
    </div>
  )
};


export default CourseDetails;