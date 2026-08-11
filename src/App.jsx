import { useState } from "react";
import Navbar from "./components/Navbar";
import Activity1 from "./components/Activity1";
import Activity2 from "./components/Activity2";
import Activity3 from "./components/Activity3";
import "./App.css";

function App() {
  const [activePage, setActivePage] = useState("home");

  const goHome = () => {
    setActivePage("home");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const openActivity = (activity) => {
    setActivePage(activity);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="app">

      {/* Navigation */}
      <Navbar
        activePage={activePage}
        setActivePage={setActivePage}
      />

      {/* ================= HOME PAGE ================= */}
      {activePage === "home" && (
        <main>

          {/* HERO SECTION */}
          <section className="hero">

            <div className="hero-background-circle circle-one"></div>
            <div className="hero-background-circle circle-two"></div>

            <div className="hero-content">

              <div className="hero-badge">
                <span className="pulse-dot"></span>
                E-WASTE MANAGEMENT • E-PORTFOLIO
              </div>

              <p className="hero-small-text">
                INFORMATION TECHNOLOGY ENGINEERING
              </p>

              <h1>
                Responsible Technology.
                <span> Sustainable Future.</span>
              </h1>

              <p className="hero-description">
                A digital portfolio documenting my activities, participation,
                learning and contributions towards responsible e-waste
                management and environmental sustainability.
              </p>

              <div className="hero-buttons">

                <button
                  className="primary-button"
                  onClick={() => openActivity("activity1")}
                >
                  Explore Activities
                  <span>→</span>
                </button>

                <button
                  className="secondary-button"
                  onClick={() => {
                    document
                      .getElementById("student-section")
                      .scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  About Me
                </button>

              </div>

            </div>

            <div className="hero-visual">

              <div className="eco-orbit orbit-one"></div>
              <div className="eco-orbit orbit-two"></div>

              <div className="eco-core">
                <div className="eco-icon">♻</div>
                <span>E-WASTE</span>
                <strong>MANAGEMENT</strong>
              </div>

              <div className="floating-card card-top">
                <span>♻</span>
                <div>
                  <small>Focus</small>
                  <strong>Sustainability</strong>
                </div>
              </div>

              <div className="floating-card card-bottom">
                <span>🌱</span>
                <div>
                  <small>Goal</small>
                  <strong>Responsible Future</strong>
                </div>
              </div>

            </div>

          </section>


          {/* STUDENT INFORMATION */}
          <section
            className="student-section section-container"
            id="student-section"
          >

            <div className="section-heading">

              <div>
                <p className="section-label">01 / PROFILE</p>
                <h2>Student <span>Information</span></h2>
              </div>

              <p className="section-intro">
                A brief introduction to the student behind this
                e-portfolio.
              </p>

            </div>


            <div className="student-grid">

              {/* PROFILE CARD */}
              <div className="profile-card">

                <div className="profile-avatar">
                  OP
                </div>

                <div className="profile-name">
                  <h3>Om Pawar</h3>
                  <p>Information Technology Engineering Student</p>
                </div>

                <div className="profile-line"></div>

                <div className="profile-info">

                  <div>
                    <span>ROLL NUMBER</span>
                    <strong>24101A0057</strong>
                  </div>

                  <div>
                    <span>DIVISION</span>
                    <strong>INFT-A</strong>
                  </div>

                  <div>
                    <span>COLLEGE</span>
                    <strong>Vidyalankar Institute of Technology</strong>
                  </div>

                </div>

              </div>


              {/* ABOUT CARD */}
              <div className="about-card">

                <div className="about-icon">01</div>

                <div>
                  <p className="card-label">ABOUT THIS PORTFOLIO</p>

                  <h3>
                    Documenting action,
                    <br />
                    learning & responsibility.
                  </h3>

                  <p>
                    This e-portfolio presents the activities completed
                    as part of the E-Waste Management subject. It serves
                    as a structured record of participation, practical
                    work, evidence and learning outcomes.
                  </p>

                </div>

              </div>

            </div>

          </section>


          {/* SUBJECT SECTION */}
          <section className="subject-section">

            <div className="section-container">

              <div className="subject-header">

                <div>
                  <p className="section-label">02 / ACADEMIC</p>

                  <h2>
                    E-Waste <span>Management</span>
                  </h2>
                </div>

                <div className="subject-number">
                  EW
                  <span>01</span>
                </div>

              </div>


              <div className="subject-content">

                <div className="subject-description">

                  <p>
                    E-waste management focuses on understanding the
                    environmental, social and technological challenges
                    associated with electronic waste and promoting
                    responsible practices for its reduction, reuse,
                    recycling and disposal.
                  </p>

                  <p>
                    This portfolio documents my academic activities
                    and practical involvement throughout the subject.
                  </p>

                </div>


                <div className="subject-facts">

                  <div className="fact">
                    <span>SUBJECT</span>
                    <strong>E-Waste Management</strong>
                  </div>

                  <div className="fact">
                    <span>STUDENT</span>
                    <strong>Om Pawar</strong>
                  </div>

                  <div className="fact">
                    <span>DIVISION</span>
                    <strong>INFT-A</strong>
                  </div>

                  <div className="fact">
                    <span>ACADEMIC YEAR</span>
                    <strong>2026–27</strong>
                  </div>

                </div>

              </div>

            </div>

          </section>


          {/* ACTIVITIES */}
          <section className="activities-section section-container">

            <div className="section-heading">

              <div>
                <p className="section-label">03 / DOCUMENTATION</p>

                <h2>
                  My <span>Activities</span>
                </h2>
              </div>

              <p className="section-intro">
                Explore the activities performed as part of the
                E-Waste Management subject.
              </p>

            </div>


            <div className="activity-preview-grid">

              <div
                className="activity-preview"
                onClick={() => openActivity("activity1")}
              >

                <div className="activity-number">01</div>

                <div className="activity-symbol">♻</div>

                <div className="activity-preview-content">

                  <span>ACTIVITY 01</span>

                  <h3>E-Waste Awareness</h3>

                  <p>
                    Awareness and understanding of responsible
                    e-waste management practices.
                  </p>

                  <button>View Activity →</button>

                </div>

              </div>


              <div
                className="activity-preview"
                onClick={() => openActivity("activity2")}
              >

                <div className="activity-number">02</div>

                <div className="activity-symbol">♨</div>

                <div className="activity-preview-content">

                  <span>ACTIVITY 02</span>

                  <h3>E-Waste Collection</h3>

                  <p>
                    Practical activity related to collection,
                    segregation and responsible handling.
                  </p>

                  <button>View Activity →</button>

                </div>

              </div>


              <div
                className="activity-preview"
                onClick={() => openActivity("activity3")}
              >

                <div className="activity-number">03</div>

                <div className="activity-symbol">◉</div>

                <div className="activity-preview-content">

                  <span>ACTIVITY 03</span>

                  <h3>Survey & Reflection</h3>

                  <p>
                    Documentation of observations, findings and
                    learning from the subject.
                  </p>

                  <button>View Activity →</button>

                </div>

              </div>

            </div>

          </section>


          {/* PORTFOLIO STATS */}
          <section className="stats-section">

            <div className="section-container">

              <div className="stats-grid">

                <div className="stat-item">
                  <strong>03</strong>
                  <span>ACTIVITIES</span>
                </div>

                <div className="stat-item">
                  <strong>01</strong>
                  <span>SUBJECT</span>
                </div>

                <div className="stat-item">
                  <strong>∞</strong>
                  <span>LEARNING</span>
                </div>

                <div className="stat-item">
                  <strong>01</strong>
                  <span>MISSION</span>
                </div>

              </div>

            </div>

          </section>


          {/* FINAL MESSAGE */}
          <section className="closing-section">

            <div className="closing-content">

              <p className="section-label">04 / CLOSING NOTE</p>

              <h2>
                Small actions.
                <br />
                <span>Meaningful impact.</span>
              </h2>

              <p>
                Responsible e-waste management begins with awareness
                and continues through action.
              </p>

            </div>

          </section>

        </main>
      )}


      {/* ================= ACTIVITY PAGES ================= */}

      {activePage === "activity1" && (
        <Activity1 goHome={goHome} />
      )}

      {activePage === "activity2" && (
        <Activity2 goHome={goHome} />
      )}

      {activePage === "activity3" && (
        <Activity3 goHome={goHome} />
      )}


      {/* FOOTER */}
      <footer className="footer">

        <div>
          <strong>♻ E-WASTE PORTFOLIO</strong>
          <span> | Om Pawar</span>
        </div>

        <p>
          E-Waste Management • INFT-A • VIT Mumbai
        </p>

      </footer>

    </div>
  );
}

export default App;