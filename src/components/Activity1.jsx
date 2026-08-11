function Activity1({ goHome }) {

  return (

    <main className="activity-page">

      <div className="activity-hero">

        <div className="activity-hero-content">

          <button
            className="back-button"
            onClick={goHome}
          >
            ← Back to Home
          </button>

          <p className="activity-label">
            ACTIVITY 01
          </p>

          <h1>
            E-Waste
            <span> Awareness</span>
          </h1>

          <p>
            An activity focused on understanding the importance of
            responsible electronic waste management and spreading
            awareness about its environmental impact.
          </p>

        </div>

        <div className="activity-big-number">
          01
        </div>

      </div>


      <section className="activity-content section-container">

        <div className="activity-meta-grid">

          <div className="meta-box">
            <span>DATE</span>
            <strong>Add Date</strong>
          </div>

          <div className="meta-box">
            <span>LOCATION</span>
            <strong>VIT Mumbai</strong>
          </div>

          <div className="meta-box">
            <span>TYPE</span>
            <strong>Academic Activity</strong>
          </div>

          <div className="meta-box">
            <span>STATUS</span>
            <strong className="status">
              ✓ Completed
            </strong>
          </div>

        </div>


        <div className="activity-detail-grid">

          <div>

            <p className="section-label">
              01 / OBJECTIVE
            </p>

            <h2>
              Understanding the
              <span> importance.</span>
            </h2>

            <p className="detail-text">
              The objective of this activity was to develop awareness
              regarding electronic waste, its environmental impact,
              responsible disposal practices and the importance of
              recycling electronic products.
            </p>

          </div>


          <div className="highlight-box">

            <span>KEY FOCUS</span>

            <h3>
              Awareness
              <br />
              Responsibility
              <br />
              Sustainability
            </h3>

          </div>

        </div>


        <div className="activity-description">

          <p className="section-label">
            02 / ACTIVITY DESCRIPTION
          </p>

          <h2>
            What did I <span>do?</span>
          </h2>

          <p>
            Add the detailed description of your Activity 1 here.
            Explain what was performed, how it was conducted, who
            participated and what your individual contribution was.
          </p>

        </div>


        <div className="contribution-section">

          <p className="section-label">
            03 / MY CONTRIBUTION
          </p>

          <div className="contribution-grid">

            <div>
              <span>01</span>
              <h3>Participation</h3>
              <p>
                Actively participated in the activity and contributed
                towards its successful completion.
              </p>
            </div>

            <div>
              <span>02</span>
              <h3>Awareness</h3>
              <p>
                Learned and communicated important information
                related to responsible e-waste management.
              </p>
            </div>

            <div>
              <span>03</span>
              <h3>Documentation</h3>
              <p>
                Collected and organized supporting evidence of
                the activity.
              </p>
            </div>

          </div>

        </div>


        {/* EVIDENCE */}

        <div className="evidence-section">

          <div className="evidence-heading">

            <div>
              <p className="section-label">
                04 / PROOF
              </p>

              <h2>
                Activity <span>Evidence</span>
              </h2>
            </div>

            <p>
              Photographs, certificates, reports and other
              supporting documents can be displayed here.
            </p>

          </div>


          <div className="evidence-grid">

            <div className="evidence-card">
              <div className="evidence-placeholder">
                PHOTO 01
              </div>
              <span>Activity Photograph</span>
            </div>

            <div className="evidence-card">
              <div className="evidence-placeholder">
                PHOTO 02
              </div>
              <span>Activity Photograph</span>
            </div>

            <div className="evidence-card">
              <div className="evidence-placeholder">
                DOCUMENT
              </div>
              <span>Supporting Document</span>
            </div>

          </div>

        </div>


        {/* LEARNING */}

        <div className="learning-section">

          <p className="section-label">
            05 / REFLECTION
          </p>

          <h2>
            What I <span>Learned</span>
          </h2>

          <div className="reflection-card">

            <div className="quote-mark">
              “
            </div>

            <p>
              Add your personal reflection about this activity.
              Mention what you learned, how your understanding
              changed and how the activity helped you understand
              the importance of responsible e-waste management.
            </p>

          </div>

        </div>

      </section>

    </main>
  );
}

export default Activity1;