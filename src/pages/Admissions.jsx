import { useState } from "react";
import axios from "axios";
import "./Admissions.css";
import { Link } from "react-router-dom";
import logo from "../assets/myLogo.png";

export default function Admissions() {
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    dateOfBirth: "",
    phone: "",
    nationality: "",
    address: "",
    studyLevel: "",
    department: "",
    course: "",
    intake: "",
    previousInstitution: "",
    qualification: "",
    graduationYear: "",
    grade: "",
    personalStatement: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedApplication, setSubmittedApplication] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isSubmitting) return;

    setIsSubmitting(true);
    setErrorMessage("");
    setSubmittedApplication(null);

    try {
      const response = await axios.post(
        "http://localhost:8080/admissions",
        {
          ...formData,
          graduationYear: formData.graduationYear
            ? Number(formData.graduationYear)
            : null
        }
      );

      setSubmittedApplication(response.data);
    } catch (error) {
      console.error("Application submission failed:", error);

      setErrorMessage(
        "Your application could not be submitted. Please check your details and try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };


  return (
    <main className="admissions-page">

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

      <section className="admissions-hero">
        <p className="admissions-eyebrow">
          LUX ET VERITAS · ADMISSIONS
        </p>

        <span className="admissions-divider"></span>

        <h1>
          YOUR STORY.
          <br />
          YOUR LEGACY.
        </h1>

        <p className="admissions-intro">
          Begin your journey at Aurelian University,
          where knowledge meets legacy.
        </p>

        <a className="admissions-hero-link" href="#apply">
          BEGIN YOUR APPLICATION <span>↓</span>
        </a>
      </section>

      <section className="admissions-content" id="apply">
        <div className="admissions-copy">
          <p className="admissions-section-label">
            THE FIRST CHAPTER
          </p>

          <h2>
            An education
            <br />
            worth remembering.
          </h2>

          <p>
            Every great story begins somewhere. Take the first
            step towards a future shaped by curiosity, scholarship,
            and the pursuit of truth.
          </p>

          <div className="admissions-note">
            <span>01</span>
            <div>
              <h3>Choose your path</h3>
              <p>Tell us which field of study calls to you.</p>
            </div>
          </div>

          <div className="admissions-note">
            <span>02</span>
            <div>
              <h3>Introduce yourself</h3>
              <p>Share your details with our admissions office.</p>
            </div>
          </div>
        </div>

        <div className="admissions-form-panel">
          <p className="admissions-section-label">
            APPLICATION FORM · 001
          </p>

          <h2>Begin here.</h2>
          
          {submittedApplication ? (
            <div className="admissions-success" role="status">
              <p className="admissions-section-label">
                APPLICATION RECEIVED
              </p>

              <h3>Your first chapter begins.</h3>

              <p>
                Your application has been submitted successfully.
                Keep your reference number safe to check your status later.
              </p>

              <p className="application-reference">
                {submittedApplication.applicationReference}
              </p>

              <p>
                Status: {submittedApplication.status}
              </p>

              <button
                type="button"
                onClick={() =>
                  navigator.clipboard.writeText(
                    submittedApplication.applicationReference
                  )
                }
              >
                COPY REFERENCE NUMBER
              </button>

              <button
                type="button"
                onClick={() => {
                  setSubmittedApplication(null);
                  setErrorMessage("");
                  setFormData({
                    name: "",
                    email: "",
                    dateOfBirth: "",
                    phone: "",
                    nationality: "",
                    address: "",
                    studyLevel: "",
                    department: "",
                    course: "",
                    intake: "",
                    previousInstitution: "",
                    qualification: "",
                    graduationYear: "",
                    grade: "",
                    personalStatement: ""
                  });
                }}
              >
                SUBMIT ANOTHER APPLICATION
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <label htmlFor="admission-name">Full legal name</label>
              <input
                id="admission-name"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />

              <label htmlFor="admission-dob">Date of birth</label>
              <input
                id="admission-dob"
                type="date"
                name="dateOfBirth"
                value={formData.dateOfBirth}
                onChange={handleChange}
                required
              />

              <label htmlFor="admission-email">Email address</label>
              <input
                id="admission-email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />

              <label htmlFor="admission-phone">Phone number</label>
              <input
                id="admission-phone"
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />

              <label htmlFor="admission-nationality">Nationality</label>
              <input
                id="admission-nationality"
                type="text"
                name="nationality"
                value={formData.nationality}
                onChange={handleChange}
                required
              />

              <label htmlFor="admission-address">Residential address</label>
              <textarea
                id="admission-address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                rows={3}
                required
              />

              
              <label htmlFor="admission-study-level">Level of study</label>
              <select
                id="admission-study-level"
                name="studyLevel"
                value={formData.studyLevel}
                onChange={handleChange}
                required
              >
                <option value="">Choose your level of study</option>
                <option value="Undergraduate">Undergraduate</option>
                <option value="Postgraduate">Postgraduate</option>
                <option value="Doctoral">Doctoral</option>
              </select>

              <label htmlFor="admission-department">Department</label>
              <select
                id="admission-department"
                name="department"
                value={formData.department}
                onChange={handleChange}
                required
              >
                <option value="">Choose a department</option>
                <option value="Computer Science">Computer Science</option>
                <option value="Business">Business</option>
                <option value="Arts and Humanities">Arts and Humanities</option>
                <option value="Natural Sciences">Natural Sciences</option>
              </select>

              <label htmlFor="admission-course">Programme of interest</label>
              <input
                id="admission-course"
                type="text"
                name="course"
                placeholder="Enter your intended programme"
                value={formData.course}
                onChange={handleChange}
                required
              />

              <label htmlFor="admission-intake">Preferred intake</label>
              <select
                id="admission-intake"
                name="intake"
                value={formData.intake}
                onChange={handleChange}
                required
              >
                <option value="">Choose an intake</option>
                <option value="January 2027">January 2027</option>
                <option value="September 2027">September 2027</option>
                <option value="January 2028">January 2028</option>
              </select>


              {errorMessage && (
                <p className="admissions-error" role="alert">
                  {errorMessage}
                </p>
              )}

              <button type="submit" disabled={isSubmitting}>
                {isSubmitting ? "SUBMITTING..." : "SUBMIT APPLICATION →"}
              </button>

              <p className="admissions-form-footnote">
                LUX ET VERITAS · KNOWLEDGE AND TRUTH
              </p>
            </form>
          )}


          {/* {submitted ? (
            <div className="admissions-success" role="status">
              <h3>Your first chapter begins.</h3>
              <p>
                Your application has been submitted successfully.
                Thank you for considering Aurelian University.
              </p>
              <button
                type="button"
                onClick={() => setSubmitted(false)}
              >
                SUBMIT ANOTHER APPLICATION
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <label htmlFor="admission-name">Full name</label>
              <input
                id="admission-name"
                type="text"
                name="name"
                placeholder="As written on your records"
                value={formData.name}
                onChange={handleChange}
                required
              />

              <label htmlFor="admission-email">Email address</label>
              <input
                id="admission-email"
                type="email"
                name="email"
                placeholder="you@example.com"
                value={formData.email}
                onChange={handleChange}
                required
              />

              <label htmlFor="admission-course">
                Programme of interest
              </label>
              <input
                id="admission-course"
                type="text"
                name="course"
                placeholder="Enter your intended course"
                value={formData.course}
                onChange={handleChange}
                required
              />

              {errorMessage && (
                <p className="admissions-error" role="alert">
                  {errorMessage}
                </p>
              )}

              <button type="submit" disabled={isSubmitting}>
                {isSubmitting
                  ? "SUBMITTING..."
                  : "SUBMIT APPLICATION  →"}
              </button>

              <p className="admissions-form-footnote">
                LUX ET VERITAS · KNOWLEDGE AND TRUTH
              </p>
            </form>
          )} */}
        </div>
      </section>
    </main>
  );
}

