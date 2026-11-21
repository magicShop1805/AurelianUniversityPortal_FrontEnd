// import { useEffect, useState } from "react";
// import axios from "axios";
// import "./Dashboard.css";

// export default function Dashboard() {

//   const [student, setStudent] = useState(null);

//   useEffect(() => {

//     const loggedInStudent =
//       JSON.parse(localStorage.getItem("student"));

//     if (loggedInStudent) {

//       axios
//         .get(
//           `http://localhost:8080/students/${loggedInStudent.id}`
//         )
//         .then((res) => {
//           setStudent(res.data);
//         });
//     }

//   }, []);

//   if (!student) {
//     return <h2 className="loading">Loading...</h2>;
//   }

//   return (
//     <div className="dashboard">

//       <div className="dashboard-sidebar">

//         <h1 className="dashboard-logo">Aurelian University</h1>

//         <div className="student-card">
//           <h2>{student.name}</h2>

//           <p>{student.email}</p>

//           <p>
//             Department:
//             <strong> {student.department}</strong>
//           </p>
//         </div>

//       </div>

//       <div className="dashboard-main">

//         <h1 className="welcome-title">Welcome back, {student.name}</h1>

//         <div className="dashboard-section">

//           <h2>Academic Overview</h2>

//           <p>
//             Your scholarly journey continues through
//             the ancient halls of Aurelian University.
//           </p>

//         </div>

//         <div className="dashboard-section">

//           <h2>Current Research Interests</h2>

//           <ul>
//             <li>Artificial Cognition</li>
//             <li>Philosophy of Systems</li>
//             <li>Computational Theory</li>
//           </ul>

//         </div>

//       </div>
//     </div>
//   );
// }


import { useEffect, useState } from "react";
import axios from "axios";
import "./Dashboard.css";

import libraryImage from "../assets/library.jpg";
import moocImage from "../assets/mooc.jpg";
import studentImage from "../assets/student.jpg";
import textureImage from "../assets/darkFog.png";
import cityBg from "../assets/citybg.jpg";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts";

export default function Dashboard() {

  const [student, setStudent] = useState(null);
  const [time, setTime] = useState(new Date());
  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [lightMode, setLightMode] = useState(false);
  // const [scholarLog, setScholarLog] =
  // useState({

  //     courseId: "",

  //     studyHours: "",

  //     notes: ""

  // });
  // const handleSubmit = async () => {

  //     const student =
  //         JSON.parse(
  //             localStorage.getItem("student")
  //         );

  //     await axios.post(
  //         "http://localhost:8080/scholar-log",
  //         {
  //             student: {
  //                 id: student.id
  //             },

  //             course: {
  //                 id: scholarLog.courseId
  //             },

  //             studyHours:
  //                 scholarLog.studyHours,

  //             notes:
  //                 scholarLog.notes
  //         }
  //     );

  // };
  const enrolledCourses = [
    {
      id: 1,
      title: "Computational Theory",
      professor: "Prof. Evelina Voss"
    },
    {
      id: 2,
      title: "Artificial Cognition",
      professor: "Prof. Lucien Blackwood"
    },
    {
      id: 3,
      title: "Cryptography",
      professor: "Prof. Theodore Vale"
    }
  ];

  const performanceData = [
    { semester: "I", cgpa: 8.4 },
    { semester: "II", cgpa: 8.8 },
    { semester: "III", cgpa: 9.1 },
    { semester: "IV", cgpa: 9.2 },
  ];

  useEffect(() => {

    const loggedInStudent =
      JSON.parse(localStorage.getItem("student"));

    if (loggedInStudent) {

      axios
        .get(
          `http://localhost:8080/students/${loggedInStudent.id}`
        )
        .then((res) => {
          setStudent(res.data);
        });
    }

    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);

  }, []);

  if (!student) {
    return <h2 className="loading">Loading...</h2>;
  }

  return (

    <div
      className={
        lightMode
          ? "dashboard light-mode"
          : "dashboard"
      }
      style={{
        background: `
          linear-gradient(
            rgba(22, 16, 13, 0.77),
            rgba(22, 16, 13, 0.77)
          ),
          url(${cityBg})
        `,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed"
      }}
    >

      <aside className="dashboard-sidebar">

        <h1 className="dashboard-logo">
          Aurelian University
        </h1>

        <img
          src={studentImage}
          alt="student"
          className="profile-image"
          onClick={() => setShowProfile(true)}
        />

        <div className="student-card">

          <h2>{student.name}</h2>

          <p>{student.email}</p>

          <p>
            Department:
            <strong> {student.department}</strong>
          </p>

          <p>
            Academic Status:
            <strong> Honours Scholar</strong>
          </p>

          <p>
            MAR Points:
            <strong> 120</strong>
          </p>

          <p>
            CGPA:
            <strong> 9.2</strong>
          </p>
        
        </div>

        <div className="sidebar-links">
          <a>Dashboard</a>
          <a>Research</a>
          <a>Library</a>
          <a>Archives</a>
          <a>Settings</a>
        </div>

        <button
          className="theme-toggle"
          onClick={() => setLightMode(!lightMode)}
        >

          {
            lightMode
              ? "🌙 Dark Academia"
              : "☀ Light Academia"
          }

        </button>

      </aside>

      <main className="dashboard-main"> 
      {/* style={{
        background: `
          linear-gradient(rgba(13,9,7,0.18), rgba(13,9,7,0.18)),
          url(${textureImage})
        `,
        backgroundSize: "300px",
        backgroundAttachment: "fixed",
        backgroundBlendMode: "soft-light",
      }} */}

        <section className="hero-banner">

          <img
            src={libraryImage}
            alt="library"
          />

          <div className="hero-dark-overlay"></div>

          <div className="notification-wrapper">

            <button
              className="notification-bell"
              onClick={() =>
                setShowNotifications(!showNotifications)
              }
            >
              🔔
              <span className="notification-count">
                3
              </span>
            </button>

            {
              showNotifications && (

                <div className="notification-panel">

                  <div className="notification-item">
                    Symposium registrations close tomorrow.
                  </div>

                  <div className="notification-item">
                    Library return deadline approaching.
                  </div>

                  <div className="notification-item">
                    New MOOC module unlocked.
                  </div>

                </div>

              )
            }

          </div>

          <div className="hero-overlay">

            <div className="hero-content">

              <span className="hero-subtitle">
                Aurelian University Archives
              </span>

              <h1>
                Welcome Back,<br />
                {student.name}
              </h1>

              <p className="hero-quote">
                “Where scholarship lingers in candlelight
                and silence carries wisdom.”
              </p>

            </div>

          </div>

        </section>

        <section className="dashboard-grid">

          <div className="dashboard-section quote-card">
            <span className="section-label">ACADEMICS</span>

            <h2>Academic Overview</h2>

            <p>
              Your scholarly journey continues through
              the ancient halls of Aurelian University.
            </p>
          </div>

          <div className="dashboard-section mini-widget">

            <span className="section-label">PERFORMANCE</span>

            <h2>CGPA</h2>

            <p className="big-stat">9.2</p>

            <div className="progress-bar">
              <div className="progress-fill"></div>
            </div>

          </div>

          <div className="dashboard-section clock-card">

            <span className="section-label">
              AURELIAN TIME
            </span>

            <h2>
              {time.toLocaleDateString("en-GB", {
                day: "2-digit",
                month: "long",
                year: "numeric"
              })}
            </h2>

            <p className="live-time">
              {time.toLocaleTimeString()}
            </p>

            <p className="weather-text">
              Aurelian Grounds • Mist
            </p>

          </div>

          {/* <div className="dashboard-section actions-card">

            <span className="section-label">
              QUICK ACCESS
            </span>

            <h2>Scholar Actions</h2>

            <div className="actions-grid">

              <button className="action-button">
                Open Library
              </button>

              <button className="action-button">
                View Courses
              </button>

              <button className="action-button">
                Transcript
              </button>

              <button className="action-button">
                Research Archive
              </button>

            </div>

          </div> */}

          <div className="dashboard-section courses-card">

            <span className="section-label">
              CURRENT COURSES
            </span>

            <h2>Enrolled Courses</h2>

            <div className="courses-list">

              {enrolledCourses.map(course => (

                <div
                  key={course.id}
                  className="course-item"
                >

                  <h3>{course.title}</h3>

                  <p>{course.professor}</p>

                </div>

              ))}

            </div>

          </div>

          {/* <select
              value={scholarLog.courseId}
              onChange={(e) =>
                  setScholarLog({
                      ...scholarLog,
                      courseId: e.target.value
                  })
              }
          >

              <option value="">
                  Select Course
              </option>

              {courses.map(course => (

                  <option
                      key={course.id}
                      value={course.id}
                  >
                      {course.title}
                  </option>

              ))}

          </select> */}

          <div className="dashboard-section mini-widget">
            <span className="section-label">ENGAGEMENT</span>

            <h2>MAR Points</h2>
            <p className="big-stat">120</p>
          </div>

          <div className="dashboard-section">

            <span className="section-label">MOOCS</span>

            <h2>MOOC Progress</h2>

            <img
              src={moocImage}
              alt="mooc"
              className="section-image"
            />

            {/* <ul>
              <li>Machine Learning Foundations</li>
              <li>Philosophy of Artificial Intelligence</li>
              <li>Ancient Literature Archives</li>
            </ul> */}

            <div className="mooc-list">

              <div className="mooc-item">

                <div className="mooc-header">
                  <span>Machine Learning Foundations</span>
                  <span>78%</span>
                </div>

                <div className="mooc-progress">
                  <div
                    className="mooc-fill"
                    style={{ width: "78%" }}
                  ></div>
                </div>

              </div>

              <div className="mooc-item">

                <div className="mooc-header">
                  <span>AI Philosophy</span>
                  <span>45%</span>
                </div>

                <div className="mooc-progress">
                  <div
                    className="mooc-fill"
                    style={{ width: "45%" }}
                  ></div>
                </div>

              </div>

              <div className="mooc-item">

                <div className="mooc-header">
                  <span>Ancient Literature</span>
                  <span>92%</span>
                </div>

                <div className="mooc-progress">
                  <div
                    className="mooc-fill"
                    style={{ width: "92%" }}
                  ></div>
                </div>

              </div>

            </div>

          </div>

          <div className="dashboard-section announcement-card">

            <span className="section-label">
              ANNOUNCEMENTS
            </span>

            <h2>Archive Notice</h2>

            <div className="announcement-content">

              <p className="announcement-title">
                Winter Research Symposium
              </p>

              <p className="announcement-text">
                Registrations close in 3 days.
                Final-year scholars are requested
                to submit research abstracts to
                the Faculty Council.
              </p>

              <span className="announcement-date">
                23 MAY 2026
              </span>

            </div>

          </div>

          <div className="dashboard-section timeline-card">

            <span className="section-label">
              RECENT ACTIVITY
            </span>

            <h2>Scholar Timeline</h2>

            <div className="timeline">

              <div className="timeline-item">
                <div className="timeline-dot"></div>

                <div className="timeline-content">
                  <h3>
                    Completed MOOC
                  </h3>

                  <p>
                    Philosophy of Artificial Intelligence
                  </p>

                  <span>2 hours ago</span>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-dot"></div>

                <div className="timeline-content">
                  <h3>
                    Borrowed Archive Text
                  </h3>

                  <p>
                    The Architecture of Silence
                  </p>

                  <span>Yesterday</span>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-dot"></div>

                <div className="timeline-content">
                  <h3>
                    Submitted Research Draft
                  </h3>

                  <p>
                    Cryptography & Symbolic Systems
                  </p>

                  <span>3 days ago</span>
                </div>
              </div>

            </div>

          </div>

          <div className="dashboard-section analytics-card">

            <span className="section-label">
              ANALYTICS
            </span>

            <h2>Academic Performance</h2>

            <div className="chart-container">

              <ResponsiveContainer
                width="100%"
                height={300}
              >

                <LineChart data={performanceData}>

                  <XAxis
                    dataKey="semester"
                    stroke="#9c7b63"
                  />

                  <YAxis
                    stroke="#9c7b63"
                    domain={[7.5, 10]}
                  />

                  <Tooltip />

                  <Line
                    type="monotone"
                    dataKey="cgpa"
                    stroke="#d6c3a3"
                    strokeWidth={3}
                    dot={{
                      r: 6,
                      fill: "#d6c3a3"
                    }}
                  />

                </LineChart>

              </ResponsiveContainer>

            </div>

          </div>

          <div className="dashboard-section results-card">

            <span className="section-label">RESULTS</span>

            <h2>Semester Results</h2>

            <table>
              <thead>
                <tr>
                  <th>Subject</th>
                  <th>Grade</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>Computational Theory</td>
                  <td>A+</td>
                </tr>

                <tr>
                  <td>Philosophy of Systems</td>
                  <td>A</td>
                </tr>

                <tr>
                  <td>Cryptography</td>
                  <td>A+</td>
                </tr>
              </tbody>
            </table>

          </div>

          <div className="dashboard-section">

            <span className="section-label">ACTIVITIES</span>

            <h2>Extracurricular Activities</h2>

            <ul>
              <li>Debate Society</li>
              <li>Literary Council</li>
              <li>Winter Research Symposium</li>
            </ul>

          </div>

        </section>

      </main>

      {
        showProfile && (

          <div
            className="profile-modal-overlay"
            onClick={() => setShowProfile(false)}
          >

            <div
              className="profile-modal"
              onClick={(e) => e.stopPropagation()}
            >

              <img
                src={studentImage}
                alt="student"
                className="modal-profile-image"
              />

              <h2>{student.name}</h2>

              <p>{student.email}</p>

              <div className="modal-details">

                <div>
                  <span>Student ID</span>
                  <p>AUR-2048</p>
                </div>

                <div>
                  <span>Department</span>
                  <p>{student.department}</p>
                </div>

                <div>
                  <span>Semester</span>
                  <p>IV</p>
                </div>

                <div>
                  <span>Scholarship</span>
                  <p>Winter Merit Scholar</p>
                </div>

                <div>
                  <span>Faculty Mentor</span>
                  <p>Prof. Evelina Voss</p>
                </div>

                <div>
                  <span>Academic Standing</span>
                  <p>Top 5%</p>
                </div>

              </div>

              <button
                className="close-modal"
                onClick={() => setShowProfile(false)}
              >
                Close
              </button>

            </div>

          </div>

        )
      }

    </div>
  );
}