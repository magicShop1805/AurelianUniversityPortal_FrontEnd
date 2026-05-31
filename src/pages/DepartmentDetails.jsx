import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./DepartmentDetails.css";
import {
  GraduationCap,
  Users,
  ScrollText,
  FlaskConical,
  BrainCircuit,
  ShieldCheck,
  Atom
} from "lucide-react";
import researchImage from "../assets/research.jpg";
import {
  NavLink
} from "react-router-dom";
import faculty1 from "../assets/faculty1.jpg";
import faculty2 from "../assets/faculty2.jpg";
import faculty3 from "../assets/faculty3.jpg";

export default function DepartmentDetails() {
  const { id } = useParams();

  const [department, setDepartment] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:8080/departments/${id}`)
      .then((res) => {
        setDepartment(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [id]);

  if (!department) {
    return <h2 className="loading">Loading...</h2>;
  }

  return (
    <div className="department-page">

      <nav className="department-navbar">

        <h2>Aurelian University</h2>

        <div className="nav-links">

          <NavLink to={`/departments/${id}`}>
            Overview
          </NavLink>

          <NavLink to={`/departments/${id}/faculty`}>
            Faculty
          </NavLink>

          <NavLink to={`/departments/${id}/research`}>
            Research
          </NavLink>

          <NavLink to={`/departments/${id}/courses`}>
            Courses
          </NavLink>

          <NavLink to={`/departments/${id}/admissions`}>
            Admissions
          </NavLink>

        </div>

      </nav>

      {/* Hero Section */}
      <div
        className="department-hero"
        style={{
          backgroundImage: `url(${department.imageUrl})`,
        }}
      >

        <div className="department-hero-overlay">

          <span className="department-hero-subtitle">
            Aurelian Academic Division
          </span>

          <h1>{department.name}</h1>

          <p>
            Advancing computational thought,
            artificial intelligence, and
            interdisciplinary systems research
            through immersive academic inquiry.
          </p>

        </div>

      </div>

      {/* Content */}
      <div className="department-content">

        <div className="info-card reveal delay-1">
          <h2>Department Overview</h2>
          <p>{department.description}</p>
        </div>

        <div className="info-grid">

          <div className="info-card reveal delay-1">
            <h3>Dean</h3>
            <p>{department.dean}</p>
          </div>

          <div className="info-card reveal delay-1">
            <h3>Building</h3>
            <p>{department.building}</p>
          </div>

          <div className="info-card reveal delay-1">
            <h3>Established</h3>
            <p>{department.establishedYear}</p>
          </div>

        </div>

        <div className="stats-grid">

          <div className="stat-card reveal delay-2">

            <GraduationCap
              size={34}
              className="stat-icon"
            />

            <h2>{department.facultyCount}</h2>

            <p>Faculty Researchers</p>

          </div>

          <div className="stat-card reveal delay-2">

            <Users
              size={34}
              className="stat-icon"
            />

            <h2>{department.studentCount}</h2>

            <p>Active Scholars</p>

          </div>

          <div className="stat-card reveal delay-2">

            <ScrollText
              size={34}
              className="stat-icon"
            />

            <h2>{department.publicationCount}</h2>

            <p>Research Publications</p>

          </div>

          <div className="stat-card reveal delay-2">

            <FlaskConical
              size={34}
              className="stat-icon"
            />

            <h2>{department.labCount}</h2>

            <p>Innovation Labs</p>

          </div>

        </div>

        <div className="achievements-section">

          <h2>Achievements & Recognition</h2>

          <div className="achievements-grid">

            <div className="achievement-card">
              <p>{department.achievementOne}</p>
            </div>

            <div className="achievement-card">
              <p>{department.achievementTwo}</p>
            </div>

            <div className="achievement-card">
              <p>{department.achievementThree}</p>
            </div>

          </div>

        </div>

        <div className="featured-research">

          <img
            src={department.featuredImage}
            alt={department.featuredTitle}
          />

          <div className="featured-overlay">

            <span className="research-tag">
              FEATURED INITIATIVE
            </span>

            <h2>{department.featuredTitle}</h2>

            <p>{department.featuredDescription}</p>

            <button className="research-button">
              Explore Research
            </button>

          </div>

        </div>

        <div className="labs-section">

          <h2>Research Laboratories</h2>

          <div className="labs-grid">

            {department.laboratories.map((lab) => (

              <div
                className="lab-card reveal"
                key={lab.id}
              >

                <h3>{lab.name}</h3>

                <p>{lab.description}</p>

              </div>

            ))}

          </div>

        </div>

        <div className="faculty-section">

          <h2>Distinguished Faculty</h2>

          <div className="faculty-grid">

            {department.faculty.map((member) => (

              <div
                className="faculty-card reveal"
                key={member.id}
              >

                <img
                  src={member.imageUrl}
                  alt={member.name}
                />

                <h3>{member.name}</h3>

                <span>
                  {member.specialization}
                </span>

                <p>{member.bio}</p>

              </div>

            ))}

          </div>

        </div>

        {/* Courses */}
        <div className="courses-section">
          <h2>Courses</h2>

          <div className="courses-grid">
            {department.courses.map((course) => (
              <div className="course-card reveal delay-4" key={course.id}>

                <span className="course-tag">
                  CORE MODULE
                </span>

                <h3>{course.title}</h3>

                <p>{course.description}</p>

                <button className="course-button">
                  Explore Course
                </button>

              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}