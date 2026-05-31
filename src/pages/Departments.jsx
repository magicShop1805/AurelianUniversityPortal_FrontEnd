import { useEffect, useState } from "react";
import axios from "axios";
import "./Departments.css";
import { Link } from "react-router-dom";

export default function Departments() {
  const [departments, setDepartments] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/departments")
      .then((res) => {
        setDepartments(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div className="index-departments-page">

      {/* Hero */}

      <section className="index-departments-hero">

        <div className="index-departments-overlay"></div>

        <div className="index-departments-hero-content">

          <span className="index-departments-subtitle">
            ACADEMIC DIVISIONS
          </span>

          <h1>
            Faculties of Aurelian
          </h1>

          <p>
            Explore centuries of scholarship through
            our distinguished academic departments.
          </p>

        </div>

      </section>

      {/* Stats */}

      <section className="index-departments-stats">

        <div className="dept-stat">
          <h3>18</h3>
          <p>Departments</p>
        </div>

        <div className="dept-stat">
          <h3>450+</h3>
          <p>Faculty Scholars</p>
        </div>

        <div className="dept-stat">
          <h3>12,000+</h3>
          <p>Students</p>
        </div>

        <div className="dept-stat">
          <h3>125+</h3>
          <p>Years of Heritage</p>
        </div>

      </section>


      {/* Tradition */}
      <section className="aurelian-tradition">

        <div className="tradition-overlay"></div>

        <div className="tradition-content">

          <span className="tradition-subtitle">
            THE AURELIAN TRADITION
          </span>

          <h2>
            More Than A University
          </h2>

          <p>
            Since 1894, generations of scholars have walked
            these halls in pursuit of wisdom, discovery,
            and intellectual excellence.
          </p>

          <blockquote>
            "Knowledge is not inherited; it must be sought."
          </blockquote>

        </div>

      </section>

      {/* Department Cards */}

      <section className="index-departments-grid">

        {departments.map((dept) => (

          <Link
            key={dept.id}
            to={`/departments/${dept.id}`}
            className="index-department-link"
          >

            <div className="index-department-card">

              <span className="index-department-label">
                Faculty
              </span>

              <h2>{dept.name}</h2>

              <p>{dept.description}</p>

              <span className="index-department-arrow">
                Explore →
              </span>

            </div>

          </Link>

        ))}

      </section>

    </div>
  );
}