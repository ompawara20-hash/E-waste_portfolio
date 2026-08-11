function Activity2({ goHome }) {

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
            ACTIVITY 02
          </p>

          <h1>
            E-Waste
            <span> Collection</span>
          </h1>

          <p>
            A practical activity focused on identifying, collecting
            and understanding the responsible handling of electronic
            waste.
          </p>

        </div>

        <div className="activity-big-number">
          02
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
            <strong>Practical Activity</strong>
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
              From disposal to
              <span> responsibility.</span>
            </h2>

            <p className="detail-text">
              The objective of this activity was to understand the
              practical process of collecting and handling electronic
              waste while encouraging responsible disposal practices.
            </p>

          </div>


          <div className="highlight-box">

            <span>KEY FOCUS</span>

            <h3>
              Collection
              <br />
              Segregation
              <br />
              Recycling
            </h3>

          </div>

        </div>


        <div className="activity-description">

          <p className="section-label">
            02 / ACTIVITY DESCRIPTION
          </p>

          <h2>
            The <span>Activity</span>
          </h2>

          <p>
            Add the actual description of Activity 2 here. Explain
            the process followed during the activity and describe
            your role and responsibilities.
          </p>

        </div>


        <div className="contribution-section">

          <p className="section-label">
            03 / MY CONTRIBUTION
          </p>

          <div className="contribution-grid">

            <div>
              <span>01</span>
              <h3>Collection</h3>
              <p>
                Participated in the collection and identification
                of electronic waste.
              </p>
            </div>

            <div>
              <span>02</span>
              <h3>Segregation</h3>
              <p>
                Understood the importance of separating electronic
                waste for appropriate processing.
              </p>
            </div>

            <div>
              <span>03</span>
              <h3>Documentation</h3>
              <p>
                Documented the activity through photographs and
                supporting evidence.
              </p>
            </div>

          </div>

        </div>


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
              Add photographs, reports, certificates or other
              supporting documents related to Activity 2.
            </p>

          </div>


          <div className="evidence-grid">

            <div className="evidence-card">
              <div className="evidence-placeholder">
                PHOTO 01
              </div>
              <span>Collection Photograph</span>
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
              Add your personal reflection about Activity 2 here.
              Explain what practical knowledge you gained and how
              the activity changed your understanding of e-waste
              management.
            </p>

          </div>

        </div>

      </section>

    </main>
  );
}

export default Activity2;