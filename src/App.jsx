import { useState } from "react";

import Navbar from "./components/Navbar";
import Activity1 from "./components/Activity1";
import Activity2 from "./components/Activity2";
import Activity3 from "./components/Activity3";
import Activity4 from "./components/Activity4";

import profilePhoto from "./assets/home/profile-photo.png";

import "./App.css";


function App() {

  const [activePage, setActivePage] = useState("home");


  const goHome = () => {

    setActivePage("home");

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });

  };


  const openActivity = (activity) => {

    setActivePage(activity);

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });

  };


  return (
    <div className="app">

      {/* ================= NAVBAR ================= */}

      <Navbar
        activePage={activePage}
        setActivePage={setActivePage}
      />


      {/* ==================================================
          HOME PAGE
      ================================================== */}

      {activePage === "home" && (

        <main>

          {/* ================= HERO ================= */}

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
                <span>Sustainable Future.</span>
              </h1>


              <p className="hero-description">

                A digital portfolio documenting my activities,
                participation, learning and practical understanding
                of responsible e-waste management.

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
                  onClick={() =>
                    document
                      .getElementById("student-section")
                      .scrollIntoView({
                        behavior: "smooth"
                      })
                  }
                >
                  About Me
                </button>

              </div>

            </div>


            {/* PROFILE / E-WASTE VISUAL */}

            <div className="hero-visual">

              <div className="eco-orbit orbit-one"></div>

              <div className="eco-orbit orbit-two"></div>


              <div className="eco-core">

                <div className="profile-logo-wrapper">

                  <img
                    src={profilePhoto}
                    alt="Om Pawar"
                  />

                </div>

                <span>OM PAWAR</span>

                <strong>E-WASTE</strong>

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

                  <small>Subject</small>

                  <strong>E-Waste Management</strong>

                </div>

              </div>

            </div>

          </section>



          {/* ================= STUDENT ================= */}

          <section
            className="student-section section-container"
            id="student-section"
          >

            <div className="section-heading">

              <div>

                <p className="section-label">
                  01 / PROFILE
                </p>

                <h2>
                  Student <span>Information</span>
                </h2>

              </div>


              <p className="section-intro">

                A brief introduction to the student behind
                this e-portfolio.

              </p>

            </div>


            <div className="student-grid">


              <div className="profile-card">

                <div className="profile-avatar">

                  <img
                    src={profilePhoto}
                    alt="Om Pawar"
                  />

                </div>


                <div className="profile-name">

                  <h3>
                    Om Pawar
                  </h3>

                  <p>
                    Information Technology Engineering Student
                  </p>

                </div>


                <div className="profile-line"></div>


                <div className="profile-info">

                  <div>

                    <span>
                      ROLL NUMBER
                    </span>

                    <strong>
                      24101A0057
                    </strong>

                  </div>


                  <div>

                    <span>
                      DIVISION
                    </span>

                    <strong>
                      INFT-A
                    </strong>

                  </div>


                  <div>

                    <span>
                      COLLEGE
                    </span>

                    <strong>
                      Vidyalankar Institute of Technology
                    </strong>

                  </div>

                </div>

              </div>



              <div className="about-card">

                <div className="about-icon">
                  01
                </div>


                <div>

                  <p className="card-label">
                    ABOUT THIS PORTFOLIO
                  </p>


                  <h3>
                    Documenting action,
                    <br />
                    learning & responsibility.
                  </h3>


                  <p>

                    This e-portfolio presents my activities
                    completed as part of the E-Waste Management
                    subject. It provides evidence of my practical
                    work, observations, analysis and learning.

                  </p>

                </div>

              </div>

            </div>

          </section>



          {/* ================= SUBJECT ================= */}

          <section className="subject-section">

            <div className="section-container">

              <div className="subject-header">

                <div>

                  <p className="section-label">
                    02 / ACADEMIC
                  </p>

                  <h2>
                    E-Waste <span>Management</span>
                  </h2>

                </div>


                <div className="subject-number">

                  EW

                  <span>
                    01
                  </span>

                </div>

              </div>



              <div className="subject-content">

                <div className="subject-description">

                  <p>

                    E-Waste Management focuses on understanding
                    electronic waste, its environmental impact,
                    responsible disposal, recycling and recovery
                    of valuable materials.

                  </p>


                  <p>

                    This portfolio records the activities performed
                    during the subject and the knowledge gained
                    through practical and analytical work.

                  </p>

                </div>


                <div className="subject-facts">

                  <div className="fact">

                    <span>
                      SUBJECT
                    </span>

                    <strong>
                      E-Waste Management
                    </strong>

                  </div>


                  <div className="fact">

                    <span>
                      STUDENT
                    </span>

                    <strong>
                      Om Pawar
                    </strong>

                  </div>


                  <div className="fact">

                    <span>
                      DIVISION
                    </span>

                    <strong>
                      INFT-A
                    </strong>

                  </div>


                  <div className="fact">

                    <span>
                      ACTIVITIES
                    </span>

                    <strong>
                      04 Completed
                    </strong>

                  </div>

                </div>

              </div>

            </div>

          </section>



          {/* ================= ACTIVITIES ================= */}

          <section className="activities-section section-container">

            <div className="section-heading">

              <div>

                <p className="section-label">
                  03 / DOCUMENTATION
                </p>

                <h2>
                  My <span>Activities</span>
                </h2>

              </div>


              <p className="section-intro">

                Four activities documenting my practical
                understanding of e-waste management.

              </p>

            </div>



            <div className="activity-preview-grid">


              {/* ACTIVITY 1 */}

              <div
                className="activity-preview"
                onClick={() =>
                  openActivity("activity1")
                }
              >

                <div className="activity-number">
                  01
                </div>

                <div className="activity-symbol">
                  ♻
                </div>


                <div className="activity-preview-content">

                  <span>
                    ACTIVITY 01
                  </span>

                  <h3>
                    E-Waste Pledge
                  </h3>

                  <p>
                    A pledge activity promoting awareness and
                    responsible practices towards e-waste.
                  </p>

                  <button>
                    View Activity →
                  </button>

                </div>

              </div>



              {/* ACTIVITY 2 */}

              <div
                className="activity-preview"
                onClick={() =>
                  openActivity("activity2")
                }
              >

                <div className="activity-number">
                  02
                </div>

                <div className="activity-symbol">
                  ▶
                </div>


                <div className="activity-preview-content">

                  <span>
                    ACTIVITY 02
                  </span>

                  <h3>
                    Video Based Task
                  </h3>

                  <p>
                    Understanding e-waste collection, recycling
                    and industrial processing through a video.
                  </p>

                  <button>
                    View Activity →
                  </button>

                </div>

              </div>



              {/* ACTIVITY 3 */}

              <div
                className="activity-preview"
                onClick={() =>
                  openActivity("activity3")
                }
              >

                <div className="activity-number">
                  03
                </div>

                <div className="activity-symbol">
                  ⚙
                </div>


                <div className="activity-preview-content">

                  <span>
                    ACTIVITY 03
                  </span>

                  <h3>
                    Mouse Anatomy
                  </h3>

                  <p>
                    Disassembling a mouse and analysing its
                    components, materials and environmental impact.
                  </p>

                  <button>
                    View Activity →
                  </button>

                </div>

              </div>



              {/* ACTIVITY 4 */}

              <div
                className="activity-preview"
                onClick={() =>
                  openActivity("activity4")
                }
              >

                <div className="activity-number">
                  04
                </div>

                <div className="activity-symbol">
                  ◈
                </div>


                <div className="activity-preview-content">

                  <span>
                    ACTIVITY 04
                  </span>

                  <h3>
                    Global E-Waste Analysis
                  </h3>

                  <p>
                    Data analysis of e-waste generation across
                    different countries.
                  </p>

                  <button>
                    View Activity →
                  </button>

                </div>

              </div>

            </div>

          </section>



          {/* ================= STATS ================= */}

          <section className="stats-section">

            <div className="section-container">

              <div className="stats-grid">

                <div className="stat-item">

                  <strong>
                    04
                  </strong>

                  <span>
                    ACTIVITIES
                  </span>

                </div>


                <div className="stat-item">

                  <strong>
                    01
                  </strong>

                  <span>
                    SUBJECT
                  </span>

                </div>


                <div className="stat-item">

                  <strong>
                    07
                  </strong>

                  <span>
                    EVIDENCE IMAGES
                  </span>

                </div>


                <div className="stat-item">

                  <strong>
                    ∞
                  </strong>

                  <span>
                    LEARNING
                  </span>

                </div>

              </div>

            </div>

          </section>



          {/* ================= CLOSING ================= */}

          <section className="closing-section">

            <div className="closing-content">

              <p className="section-label">
                04 / CLOSING NOTE
              </p>


              <h2>

                Small actions.
                <br />

                <span>Meaningful impact.</span>

              </h2>


              <p>

                Responsible e-waste management begins with
                awareness and continues through action.

              </p>

            </div>

          </section>

        </main>

      )}



      {/* ================= ACTIVITIES ================= */}

      {activePage === "activity1" && (
        <Activity1 goHome={goHome} />
      )}


      {activePage === "activity2" && (
        <Activity2 goHome={goHome} />
      )}


      {activePage === "activity3" && (
        <Activity3 goHome={goHome} />
      )}


      {activePage === "activity4" && (
        <Activity4 goHome={goHome} />
      )}



      {/* ================= FOOTER ================= */}

      <footer className="footer">

        <div>

          <strong>
            ♻ E-WASTE PORTFOLIO
          </strong>

          <span>
            {" "} | Om Pawar
          </span>

        </div>


        <p>
          E-Waste Management • INFT-A • VIT Mumbai
        </p>

      </footer>

    </div>
  );
}

export default App;