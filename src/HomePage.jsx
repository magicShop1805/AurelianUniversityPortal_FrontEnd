import { useMemo, useEffect, useState } from "react";
import axios from "axios";
import "./HomePage.css";
import { Link } from "react-router-dom";
import logo from "./assets/myLogo.png";

// @refresh reset
export default function HomePage() {

  const [departments, setDepartments] = useState([]);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  window.addEventListener(
    "scroll",
    handleScroll
  );

  return () =>
    window.removeEventListener(
      "scroll",
      handleScroll
    );

}, []);

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

  useEffect(() => {
  const reveals =
    document.querySelectorAll(".reveal");
  const observer =
    new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(
              "active"
            );
          }
        });
      },
      {
        threshold: 0.15,
      }
    );
  reveals.forEach((el) =>
    observer.observe(el)
  );
}, []);

  const features = useMemo(() => [
    {
      title: "Extensive Library",
      desc: "Access rare manuscripts and collections.",
      img: "https://plus.unsplash.com/premium_photo-1661297433665-870517c1cf6f",
    },
    {
      title: "World-Class Faculty",
      desc: "Learn from top scholars.",
      img: "https://plus.unsplash.com/premium_photo-1760018690381-a8a38d50b55a",
    },
    {
      title: "Historic Campus",
      desc: "Experience classical architecture.",
      img: "https://plus.unsplash.com/premium_photo-1732739135066-5519450e307e",
    },
    {
      title: "Classical Curriculum",
      desc: "Rooted in arts and sciences.",
      img: "https://images.unsplash.com/photo-1471624257787-362e0c864ab2",
    },
  ], []);

  return (
    <div className="container">

      {/* Navbar */}
      <nav className="navbar">
    
        <div className="university-brand">
          <img
            src={logo}
            alt="Aurelian University"
            className="brand-logo"
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
      <section className="hero">
        <div className="overlay"></div>
        <div className="hero-content">
          <span className="home-hero-subtitle">
            LUX ET VERITAS • FOUNDED 1894
          </span>
          <div className="hero-divider"></div>

          <h1>Where Knowledge Meets Legacy</h1>

          <p>
            Step into an institution rooted in tradition,
            scholarship and timeless inquiry.
          </p>
          <button className="hero-btn">
            Explore Programs <span>→</span>
          </button>
        </div>
      </section>

      {/* Stats */}
      <section className="university-stats reveal">

        <div className="stats-header">

          <span className="stats-subtitle">
            AURELIAN AT A GLANCE
          </span>

          <h2>
            A Legacy Built Over Generations
          </h2>

        </div>

        <div className="stats-grid">

          <div className="stat-item">
            <h3>125+</h3>
            <p>Years of Heritage</p>
          </div>

          <div className="stat-item">
            <h3>18</h3>
            <p>Academic Departments</p>
          </div>

          <div className="stat-item">
            <h3>450+</h3>
            <p>Faculty Scholars</p>
          </div>

          <div className="stat-item">
            <h3>12,000+</h3>
            <p>Students</p>
          </div>

        </div>

      </section>

      {/* Featured Departments */}
      <section className="featured-departments reveal">

        <span className="section-subtitle">
          ACADEMIC DIVISIONS
        </span>

        <h2>
          Explore Our Departments
        </h2>

        <div className="featured-departments-grid">

          {departments.map((dept) => (

            <Link
              to={`/departments/${dept.id}`}
              key={dept.id}
              className="featured-department-card"
            >

              <img
                src={dept.imageUrl}
                alt={dept.name}
              />

              <div className="featured-department-overlay">

                <h3>{dept.name}</h3>

                <p>{dept.description}</p>

                <span>
                  Explore Department →
                </span>

              </div>

            </Link>

          ))}

        </div>

      </section>

      {/* Features */}
      {/* <section className="features">
        {features.map((f, i) => (
          <div className="card" key={i}>
            <img src={f.img} alt={f.title} />
            <h3>{f.title}</h3>
            <p>{f.desc}</p>
          </div>
        ))}
      </section> */}

      {/* Why Aurelian */}
      <section className="why-aurelian reveal">

        <span className="section-subtitle">
          WHY AURELIAN
        </span>

        <h2>
          A Tradition of Excellence
        </h2>

        <div className="why-grid">

          <div className="why-card">

            <img
              src="https://images.unsplash.com/photo-1640476565512-862e60077d83"
              alt="Scholarship"
              className="why-image"
            />

            <div className="why-content">

              <span className="why-number">
                01
              </span>

              <div className="why-line"></div>

              <h3>Centuries of Scholarship</h3>

              <p>
                Rooted in intellectual tradition and
                rigorous academic inquiry.
              </p>

            </div>

          </div>

          <div className="why-card">

            <img
              src="https://images.unsplash.com/photo-1594396552580-4ef979578398"
              alt="Research"
              className="why-image"
            />

            <div className="why-content">

              <span className="why-number">
                02
              </span>

              <div className="why-line"></div>

              <h3>Research Without Boundaries</h3>

              <p>
                Advancing interdisciplinary innovation across science,
                 engineering and humanities.
              </p>

            </div>

          </div>

          <div className="why-card">

            <img
              src="https://images.unsplash.com/photo-1601759177959-9d4ea0748436"
              alt="Global Community"
              className="why-image"
            />

            <div className="why-content">

              <span className="why-number">
                03
              </span>

              <div className="why-line"></div>

              <h3>Global Academic Community</h3>

              <p>
                Bringing together scholars and students from around the world.
              </p>

            </div>

          </div>

          <div className="why-card">

            <img
              src="https://images.unsplash.com/photo-1718278864192-653a97424e2c"
              alt="Leadership"
              className="why-image"
            />

            <div className="why-content">

              <span className="why-number">
                04
              </span>

              <div className="why-line"></div>

              <h3>Leadership Through Knowledge</h3>

              <p>
                Preparing future researchers, innovators and leaders.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* About */}
      {/* <section className="about">
        <h2>A Tradition of Excellence</h2>
        <p>
          Aurelian University stands as a beacon of scholarly pursuit and timeless knowledge.
        </p>
      </section> */}


      {/* Research Showcase */}
      <section
        className="research-showcase"
        style={{
          backgroundPositionY: `${scrollY * 0.8}px`
        }}
      >

        <div className="research-overlay">

          <span className="research-subtitle">
            RESEARCH & INNOVATION
          </span>

          <h2>
            Shaping the Future Through Discovery
          </h2>

          <p>
            From artificial intelligence and
            computational sciences to emerging
            interdisciplinary fields, Aurelian
            researchers pursue knowledge that
            transforms industries and societies.
          </p>

          <button className="research-btn">
            Explore Research →
          </button>

        </div>

      </section>


      {/* Admissions Preview */}
      <section className="admissions-preview reveal">

        <div className="admissions-header">

          <span className="section-subtitle">
            ADMISSIONS
          </span>

          <h2>
            Begin Your Academic Journey
          </h2>

          <p>
            Discover pathways designed for future scholars,
            researchers and leaders.
          </p>

        </div>

        <div className="admissions-grid">

          <div className="admission-card">

            <span className="admission-tag">
              UNDERGRADUATE
            </span>

            <h3>
              Bachelor's Programs
            </h3>

            <p>
              Explore interdisciplinary learning,
              foundational research opportunities,
              and a transformative campus experience.
            </p>

            <button className="admission-btn">
              Explore Undergraduate →
            </button>

          </div>

          <div className="admission-card">

            <span className="admission-tag">
              GRADUATE
            </span>

            <h3>
              Master's & Doctoral Studies
            </h3>

            <p>
              Advance knowledge through specialized
              research, innovation laboratories,
              and expert faculty mentorship.
            </p>

            <button className="admission-btn">
              Explore Graduate →
            </button>

          </div>

        </div>

      </section>

      {/* Gallery */}
      {/* <section className="gallery">
        <h2>Campus Atmosphere</h2>
        <div className="gallery-grid">
          <img src="https://images.unsplash.com/photo-1762422410762-37e405d4a78b" />
          <img src="https://images.unsplash.com/photo-1503332132010-d1b77a049ddd" />
          <img src="https://images.unsplash.com/photo-1667696783752-278a9f869afa" />
        </div>
      </section> */}

      <section className="campus-experience">

        <div className="campus-header">

          <span className="section-subtitle">
            CAMPUS EXPERIENCE
          </span>

          <h2>
            Walk Through Aurelian
          </h2>

          <p>
            From historic halls to modern research
            facilities, discover the spaces where
            ideas flourish.
          </p>

        </div>

        <div className="campus-gallery">

          <div className="campus-card large">
            <img src="https://images.unsplash.com/photo-1556033368-8a5d814918f3" alt="library" />

            <div className="campus-overlay">

              <h3>The Grand Library</h3>

              <p>
                Home to centuries of scholarship,
                rare manuscripts and timeless study.
              </p>

            </div>
          </div>

          <div className="campus-card">
            <img src="https://images.unsplash.com/photo-1577566997011-307e150970dc" alt="courtyard" />

            <div className="campus-overlay">

              <h3>Scholars' Courtyard</h3>

              <p>
                A gathering place for conversation
                and reflection.
              </p>

            </div>

          </div>

          <div className="campus-card">
            <img src="https://images.unsplash.com/photo-1638219943722-d5daf8f7bf3d" alt="science" />

            <div className="campus-overlay">

              <h3>Hall of Sciences</h3>

              <p>
                Where innovation meets inquiry.
              </p>

            </div>

          </div>

          <div className="campus-card large">

            <img src="https://images.unsplash.com/photo-1762754104628-cb53c14d79b7" alt="bakery" />

            <div className="campus-overlay">

              <h3>The Aurelian Bakery</h3>

              <p>
                Fresh pastries, artisan coffee and
                warm conversations beneath vaulted
                stone arches.
              </p>

            </div>

          </div>

          <div className="campus-card wide">
            <img src="https://images.unsplash.com/photo-1639973549212-7bfd5172e000" alt="observatory" />

            <div className="campus-overlay">

              <h3>The Observatory</h3>

              <p>
                Looking beyond horizons through
                discovery and research.
              </p>

            </div>

          </div>


        </div>

      </section>

      {/* Footer */}
      {/* <footer>
        © 2026 Aurelian University
      </footer> */}

      <footer className="footer">

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

