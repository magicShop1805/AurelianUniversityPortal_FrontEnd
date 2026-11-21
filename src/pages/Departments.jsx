import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Departments.css";
import { Link } from "react-router-dom";
import logo from "../assets/myLogo.png";

export default function Departments() {
  const [departments, setDepartments] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [degreeFilter, setDegreeFilter] = useState("all");
  const almanacEntries = [
  {
    year: "1894",
    reference: "AU-1894-001",
    roman: "I",
    title: "Foundation of Aurelian University",
    description: "The university opens its doors to its first scholars.",
    image: "https://images.unsplash.com/photo-1666115836285-078a645e983e",
    caption: "Founding Charter Chamber, 1894"
  },
  {
    year: "1908",
    reference: "AU-1908-002",
    roman: "II",
    title: "Hall of Sciences Established",
    description: "A new era of scientific inquiry begins.",
    image: "https://images.unsplash.com/photo-1636751179475-516561a802c4",
    caption: "Hall of Sciences, 1908"
  },
  {
    year: "1921",
    reference: "AU-1921-003",
    roman: "III",
    title: "Faculty of Medicine Founded",
    description: "Advancing healthcare through research and teaching.",
    image: "https://images.unsplash.com/photo-1769203905875-35dde16b5d34",
    caption: "Anatomical Theatre, 1921"
  },
  {
    year: "1957",
    reference: "AU-1957-004",
    roman: "IV",
    title: "Royal Observatory Commissioned",
    description: "Expanding humanity's understanding of the cosmos.",
    image: "https://images.unsplash.com/photo-1615639991657-ad2354113581",
    caption: "Royal Observatory Dome, 1957"
  },
  {
    year: "2025",
    reference: "AU-2025-005",
    roman: "V",
    title: "The Chronicle Continues",
    description: "Twelve faculties united under the Aurelian Charter.",
    image: "https://images.unsplash.com/photo-1535397957853-a9b683256949",
    caption: "The Grand Reading Room, Present Day"
  }
];
  const filteredDepartments = departments.filter((dept) =>
    dept.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  const filteredCatalogue = filteredDepartments.filter((dept) => {

    if (degreeFilter === "all") return true;

    if (degreeFilter === "ug")
      return dept.ugDegrees;

    if (degreeFilter === "pg")
      return dept.pgDegrees;

    if (degreeFilter === "phd")
      return dept.doctorateDegrees;

    if (degreeFilter === "postdoc")
      return dept.postdoctorateDegrees;

    return true;
  });

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

      {/* Navbar */}
      <nav className="navbar">
    
        <div className="index-university-brand">
          <img
            src={logo}
            alt="Aurelian University"
            className="index-brand-logo"
          />

            <h1>
              AURELIAN UNIVERSITY
            </h1>
          
        </div>

        <div className="navbar-links">
          <Link to="/">Home</Link>
          <Link to="/departments">Departments</Link>
          <Link to="/admissions">Admissions</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </div>
      </nav>

      {/* Hero */}

      <section className="index-departments-hero">

        <div className="index-departments-overlay"></div>

        <div className="index-departments-hero-content">

          <span className="index-departments-subtitle">
            ACADEMIC DIVISIONS
          </span>

          <div class = "index-hero-divider"></div>

          <h1>
            Faculties of Aurelian
          </h1>


          <p>
            Explore centuries of scholarship through
            our distinguished academic departments.
          </p>

          <div className="hero-department-search-section">

            <input
              type="text"
              placeholder="Search departments..."
              value={searchTerm}
              onChange={(e) =>
                setSearchTerm(e.target.value)
              }
              className="department-search"
            />

            <button 
              className="search-go-btn"
              onClick={() => {
                document.getElementById("academic-catalog-start")?.scrollIntoView({ behavior: "smooth" });
              }}
              aria-label="Scroll to catalog"
            >
              Search
            </button>

          </div>

          <div className="hero-trending-tags">
            <span>Jump to Section:</span>
            
            <button 
              type="button" 
              onClick={() => document.getElementById("stats-section")?.scrollIntoView({ behavior: "smooth" })}
            >
              Stats
            </button>
            
            <button 
              type="button" 
              onClick={() => document.getElementById("academic-catalog-start")?.scrollIntoView({ behavior: "smooth" })}
            >
              Academic Catalog
            </button>
            
            <button 
              type="button" 
              onClick={() => document.getElementById("almanac-section")?.scrollIntoView({ behavior: "smooth" })}
            >
              Almanac
            </button>
            
            <button 
              type="button" 
              onClick={() => document.getElementById("index-footer-section")?.scrollIntoView({ behavior: "smooth" })}
            >
              Footer
            </button>
          </div>

        </div>

      </section>


      {/* Hero Divider */}

      {/* <div className="hero-divider">
        ✦
      </div> */}

      {/* Stats */}

      <section className="index-departments-stats" id = "stats-section">

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


      {/* Almanac */}

      <section className="aurelian-almanac" id = "almanac-section">

          <div className="almanac-header">

            <span className="tradition-subtitle">
              THE AURELIAN ALMANAC
            </span>

            <h2>Chronicles of Scholarship</h2>

            <p>
              More than a century of discovery,
              innovation, and intellectual pursuit.
            </p>

          </div>

          {/* <div className="almanac-timeline">

            <div className="almanac-item">
              <span className="almanac-year">1894</span>
              <div className="almanac-dot"></div>
              <div className="almanac-content">
                <h3>Foundation of Aurelian University</h3>
                <p>The university opens its doors to its first scholars.</p>
              </div>
            </div>

            <div className="almanac-item">
              <span className="almanac-year">1908</span>
              <div className="almanac-dot"></div>
              <div className="almanac-content">
                <h3>Hall of Sciences Established</h3>
                <p>A new era of scientific inquiry begins.</p>
              </div>
            </div>

            <div className="almanac-item">
              <span className="almanac-year">1921</span>
              <div className="almanac-dot"></div>
              <div className="almanac-content">
                <h3>Faculty of Medicine Founded</h3>
                <p>Advancing healthcare through research and teaching.</p>
              </div>
            </div>

            <div className="almanac-item">
              <span className="almanac-year">1957</span>
              <div className="almanac-dot"></div>
              <div className="almanac-content">
                <h3>Royal Observatory Commissioned</h3>
                <p>Expanding humanity's understanding of the cosmos.</p>
              </div>
            </div>

            <div className="almanac-item">
              <span className="almanac-year">2025</span>
              <div className="almanac-dot"></div>
              <div className="almanac-content">
                <h3>A Global Academic Community</h3>
                <p>18 faculties, 12,000 students, and countless discoveries.</p>
              </div>
            </div>

          </div> */}

          <div className="almanac-timeline">

            {almanacEntries.map((item, index) => (

              <div className={`almanac-item ${index % 2 === 0 ? "left" : "right"}`}>

                <div className="almanac-photo">
                  <img src={item.image} alt={item.title} />
                  <span>{item.caption}</span>
                </div>

                <div className="almanac-dot">
                  <span>{item.year}</span>
                </div>

                <div className="almanac-content">
                  <span className="archive-ref">{item.ref}</span>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>

              </div>

            ))}

          </div>

          <div className="almanac-ending">
            <h3>Lux et Veritas</h3>
            <p>
              The pursuit of truth continues beyond every generation.
            </p>
          </div>

      </section>

      {/* Reading Room */}

      <section className="reading-room">

        <div className="reading-room-overlay"></div>

        <div className="reading-room-content">

          <span className="reading-room-subtitle">
            THE READING ROOM
          </span>

          <h2>
            Where Silence Becomes Scholarship
          </h2>

          <p>
            Beneath vaulted ceilings and among
            centuries of collected works, scholars
            gather to pursue questions that shape
            the future.
          </p>

          <blockquote>
            “In silence, knowledge speaks.”
          </blockquote>

        </div>

      </section>


      {/* Faculties showcase */}

      {/* <section className="index-faculties-showcase">

        <div className="index-faculties-header">

          <span className="index-faculties-subtitle">
            FACULTIES OF AURELIAN
          </span>

          <h2>
            Explore Our Academic Schools
          </h2>

        </div>

        <div className="index-faculties-grid">

          {filteredDepartments.map((dept) => (

            <Link
              key={dept.id}
              to={`/departments/${dept.id}`}
              className="index-faculty-link"
            >

              <article className="index-faculty-card">

                <img
                  src={dept.imageUrl}
                  alt={dept.name}
                />

                <div className="index-faculty-overlay">

                  <span className="index-faculty-label">
                    Faculty
                  </span>

                  <h3>{dept.name}</h3>

                  <p>{dept.description}</p>

                  <span className="index-faculty-arrow">
                    Explore →
                  </span>

                </div>

              </article>

            </Link>

          ))}

        </div>

      </section> */}


      {/* Bookshelf */}

      {/* <section className="bookshelf-section">

        <div className="bookshelf">

          {filteredDepartments.map((dept) => (

            <Link
              key={dept.id}
              to={`/departments/${dept.id}`}
              className="book-link"
            >

              <div className="book-spine">

                <span className="book-title">
                  {dept.name}
                </span>

              </div>

            </Link>

          ))}

        </div>

      </section> */}


      {/* Search */}

      {/* <section className="department-search-section">

        <input
          type="text"
          placeholder="Search departments..."
          value={searchTerm}
          onChange={(e) =>
            setSearchTerm(e.target.value)
          }
          className="department-search"
        />

      </section> */}

      {/* Degree Filters */}
      <section className="degree-filter-section">

        <div className="degree-filter">

          <button onClick={() => setDegreeFilter("all")}>
            All
          </button>

          <button onClick={() => setDegreeFilter("ug")}>
            Undergraduate
          </button>

          <button onClick={() => setDegreeFilter("pg")}>
            Postgraduate
          </button>

          <button onClick={() => setDegreeFilter("phd")}>
            Doctorate
          </button>

          <button onClick={() => setDegreeFilter("postdoc")}>
            Postdoctoral
          </button>

        </div>
      </section>

      {/* Catalog divider */}

      <div className="catalog-divider" id = "academic-catalog-start">
        <span>Academic Catalogue</span>
      </div>

      {/* Catalog Count */}

      <p className="catalogue-count">
        XII Faculties Recorded
      </p>

      {/* Index of faculties */}

      <section className="index-faculties">

        {/* <span className="index-faculties-subtitle">
          INDEX OF FACULTIES
        </span> */}

        <div className="index-faculties-list">

          {filteredCatalogue.map((dept, index) => (
            <React.Fragment key={dept.id}>

              <a
                href={`#faculty-${dept.id}`}
                className="index-faculty-link"
              >
                {dept.name}
              </a>

              {/* {index !== filteredDepartments.length - 1 && (
                <span className="index-divider-circle"></span>
              )} */}

            </React.Fragment>
          ))}

        </div>

      </section>


      {/* Editorial Catalog */}

      <section className="editorial-catalogue">

        {filteredCatalogue.map((dept, index) => (

          <div
            key={dept.id}
            id={`faculty-${dept.id}`}
            className={`catalogue-entry ${
              index % 2 === 0 ? "normal" : "reverse"
            }`}
          >

            <div className="catalogue-image">

              <img
                src={dept.imageUrl}
                alt={dept.name}
              />

            </div>

            <div className="catalogue-content">

              <span className="catalogue-roman">

                {
                  [
                    "I","II","III","IV",
                    "V","VI","VII","VIII",
                    "IX","X","XI","XII"
                  ][index]
                }

              </span>

              <span className="catalogue-label">
                Faculty
              </span>

              <h2>{dept.name}</h2>

              <p className="catalogue-description">
                {dept.description}
              </p>

              <div className="catalogue-meta">

                <div>
                  <span>Dean</span>
                  <p>{dept.dean}</p>
                </div>

                <div>
                  <span>Building</span>
                  <p>{dept.building}</p>
                </div>

                <div>
                  <span>Established</span>
                  <p>{dept.establishedYear}</p>
                </div>

              </div>

              <div className="catalogue-research">

                <span>Research Areas</span>

                <p>{dept.researchAreas}</p>

              </div>

              {/* <div className="catalogue-degrees">

                <span>Academic Programs</span>

                <p>{dept.ugDegrees}</p>

                <p>{dept.pgDegrees}</p>

                <p>{dept.doctorateDegrees}</p>

              </div> */}

              <div className="catalogue-programs">

                <div className="program-pill">
                  Undergraduate
                </div>

                <div className="program-pill">
                  Postgraduate
                </div>

                <div className="program-pill">
                  Doctoral
                </div>

                <div className="program-pill">
                  Postdoctoral
                </div>

              </div>

              <Link
                to={`/departments/${dept.id}`}
                className="catalogue-link"
              >
                Explore Faculty →
              </Link>

            </div>

          </div>

        ))}

        {filteredCatalogue.length === 0 && (
          <p className="no-results">
            No departments found.
          </p>
        )}

      </section>

      {/* Department Cards */}

      {/* <section className="index-departments-grid">

        {filteredDepartments.map((dept, index) => (

          <Link
            key={dept.id}
            to={`/departments/${dept.id}`}
            className="index-department-link"
          >

            <div
              id={`faculty-${dept.id}`}
              style={{
                animationDelay: `${index * 0.15}s`
              }}
              className="index-department-card"
            >

              <div className="index-department-image">

                <img
                  src={dept.imageUrl}
                  alt={dept.name}
                />

              </div>

              <div className="index-department-content">

                <span className="index-department-number">
                  {String(dept.id).padStart(2, "0")}
                </span>

                <div className="index-department-front">

                  <span className="index-department-label">
                    Faculty
                  </span>

                  <h2>{dept.name}</h2>

                  <p>{dept.description}</p>

                  <span className="index-department-arrow">
                    View Faculty
                  </span>

                </div>

                <div className="index-department-archive">

                  <div className="archive-item">
                    <span>Dean</span>
                    <p>{dept.dean}</p>
                  </div>

                  <div className="archive-item">
                    <span>Founded</span>
                    <p>{dept.establishedYear}</p>
                  </div>

                  <div className="archive-item">
                    <span>Building</span>
                    <p>{dept.building}</p>
                  </div>

                </div>

              </div>

            </div>

          </Link>

        ))}

        {filteredDepartments.length === 0 && (
          <p className="no-results">
            No departments found.
          </p>
        )}

      </section> */}

      {/* Footer */}

      <footer className="footer" id = "index-footer-section">

        <div className="footer-top">

          <h2>AURELIAN UNIVERSITY</h2>

          <p>
            Lux et Veritas • Light and Truth
          </p>

        </div>

        <div className="footer-divider"></div>

        <div className="footer-grid">

          <div>

            <h3>Academics</h3>

            <a href="#">Departments</a>
            <a href="#">Research</a>
            <a href="#">Faculty</a>

          </div>

          <div>

            <h3>Admissions</h3>

            <a href="#">Undergraduate</a>
            <a href="#">Graduate</a>
            <a href="#">Scholarships</a>

          </div>

          <div>

            <h3>Campus Life</h3>

            <a href="#">Library</a>
            <a href="#">Student Life</a>
            <a href="#">Events</a>

          </div>

          <div>

            <h3>Contact</h3>

            <p>Aurelian University</p>
            <p>Founded 1894</p>
            <p>Lux et Veritas</p>

          </div>

        </div>

        <div className="footer-bottom">

          © 2026 Aurelian University

        </div>

      </footer>

    </div>
  );
}