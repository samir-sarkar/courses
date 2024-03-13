
import styles from "./CourseDetails.module.scss";

const CourseDetails = () => {
  const chapters = [
    "Web Security - Lecture 01 - What is Web Security? HTML & JavaScript Review.",
    "Web Security - Lecture 02 - HTTP, Cookies, Sessions.",
    "Web Security - Lecture 01 - What is Web Security? HTML & JavaScript Review.",
    "Web Security - Lecture 02 - HTTP, Cookies, Sessions.",
    "Web Security - Lecture 03 - Session Attacks.",
    "Web Security - Lecture 04 - Cross-Site Request Forgery, Same Origin Policy.",
    "Web Security - Lecture 05 - Exceptions to the Same Origin Policy.",
    "Web Security - Lecture 06 - Cross-Site Scripting (XSS).",
    "Web Security - Lecture 07 - Cross-Site Scripting Defenses.",
    "Web Security - Lecture 08 - Fingerprinting and Privacy on the Web - Pete Snyder.",
    "Web Security - Lecture 09 - Denial-of-service, Phishing, Side Channels.",
    "Web Security - Lecture 10 - Code Injection.",
    "Web Security - Lecture 11 - Transport Layer Security.",
    "Web Security - Lecture 12 - HTTPS in the Real World - Emily Stark & Chris Palmer.",
    "Web Security - Lecture 13 - Authentication.",
    "Web Security - Lecture 14 - WebAuthn - The future of user authentication - Lucas Garron.",
    "Web Security - Lecture 16 - Managing security concerns in a large Open Source project - Myles Borins.",
    "Web Security - Lecture 17 - Server security: Safe coding practices.",
    "Web Security - Lecture 18 - Local HTTP server security.",
    "Web Security - Lecture 19 - DNS rebinding attacks.Web Security - Lecture 20 - Browser architecture, Writing secure code."
  ]

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
            {chapters.map((chapter, index) => {
              return (
                <p key={index}>{chapter}</p>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
};


export default CourseDetails;