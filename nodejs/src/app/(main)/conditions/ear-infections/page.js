import Link from "next/link";
import "./EarInfections.css";

export default function EarInfectionsPage() {
  return (
    <main className="ear-page">
                
      {/* =====================================================
          HERO
      ====================================================== */}
      
<section className="ear-hero">
  <div className="container">

    {/* FULL WIDTH TOP CONTENT */}
    <div className="hero-top">

      <h1>
        Ear Infection: Types, Symptoms, Causes, Treatment & When to See an ENT
        Doctor
      </h1>
    </div>

  </div>
</section>
<section className="ear-hero">
        <div className="container">
          <div className="hero-grid">
            <div className="hero-content">
              <p className="hero-intro">
                Ear infections can cause pain, blocked ears, discharge,
                hearing difficulty and sometimes dizziness. Understanding the
                cause and getting appropriate ENT evaluation can help prevent
                persistent or recurrent ear problems.
              </p>

              <div className="hero-actions">
                <Link href="/contact" className="primary-btn">
                  Book an ENT Consultation
                </Link>

                <Link href="/about" className="secondary-btn">
                  Meet Dr.(Prof.) Dhirendra Singh Kushwah
                </Link>
              </div>

              <div className="hero-points">
                <span>✓ ENT Evaluation</span>
                <span>✓ Hearing Assessment</span>
                <span>✓ Medical & Surgical Care</span>
              </div>
            </div>

            <div className="hero-image">
              <img
                src="/images/banner/dhirendra kushwah.webp"
                alt="Ear infection symptoms and ENT evaluation"
              />
            </div>

          </div>
        </div>
      </section>
	  

      {/* =====================================================
          WHAT IS EAR INFECTION
      ====================================================== */}
      <section className="content-section">
        <div className="container">

          <div className="split-section">

            <div className="split-image">
              <img
                src="/images/blog4.jpg"
                alt="Ear anatomy and ear infection"
                loading="lazy"
              />
            </div>

            <div className="split-content">

              <span className="section-label">
                Understanding Ear Infection
              </span>

              <h2>
                What Is an Ear Infection?
              </h2>

              <p>
                An ear infection occurs when part of the ear becomes infected
                or inflamed. Ear infections can affect the outer ear, middle
                ear or structures associated with the inner ear.
              </p>

              <p>
                Depending on the affected area and underlying cause, symptoms
                may include ear pain, blocked sensation, discharge, hearing
                difficulty, fever, ringing in the ear or balance problems.
              </p>

              <div className="highlight-box">
                <strong>
                  Persistent or recurrent ear symptoms should be evaluated
                  by an ENT specialist.
                </strong>
              </div>

            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          TYPES
      ====================================================== */}
      <section className="content-section section-soft">
        <div className="container">

          <div className="split-section reverse-mobile">

            <div className="split-content">

              <span className="section-label">
                Types
              </span>

              <h2>
                Types of Ear Infection
              </h2>

              <p>
                Ear infections can affect different parts of the ear.
                Identifying the affected area helps an ENT specialist
                determine the appropriate treatment approach.
              </p>

              <div className="number-list">

                <div className="number-item">
                  <span>01</span>
                  <div>
                    <h3>Outer Ear Infection</h3>
                    <p>
                      Also known as otitis externa, this affects the ear canal
                      and may be associated with water exposure, irritation or
                      infection.
                    </p>
                  </div>
                </div>

                <div className="number-item">
                  <span>02</span>
                  <div>
                    <h3>Middle Ear Infection</h3>
                    <p>
                      Otitis media affects the middle ear and may occur after
                      respiratory infections or eustachian tube problems.
                    </p>
                  </div>
                </div>

                <div className="number-item">
                  <span>03</span>
                  <div>
                    <h3>Inner Ear Problems</h3>
                    <p>
                      Problems involving the inner ear may be associated with
                      dizziness, balance problems or hearing changes.
                    </p>
                  </div>
                </div>

                <div className="number-item">
                  <span>04</span>
                  <div>
                    <h3>Chronic or Recurrent Infection</h3>
                    <p>
                      Repeated or persistent infections may indicate an
                      underlying ear or eustachian tube problem.
                    </p>
                  </div>
                </div>

              </div>

            </div>

            <div className="split-image">
              <img
                src="/images/img44.jpg"
                alt="Types of ear infections"
                loading="lazy"
              />
            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          SYMPTOMS
      ====================================================== */}
      <section className="content-section">
        <div className="container">

          <div className="split-section">

            <div className="split-image">
              <img
                src="/images/mastoidectomy.webp"
                alt="Common symptoms of ear infection"
                loading="lazy"
              />
            </div>

            <div className="split-content">

              <span className="section-label">
                Symptoms
              </span>

              <h2>
                Common Symptoms of Ear Infection
              </h2>

              <p>
                Symptoms can vary depending on the type and severity of the
                ear problem.
              </p>

              <div className="check-grid">

                <div>✓ Ear pain or discomfort</div>
                <div>✓ Blocked or full sensation</div>
                <div>✓ Reduced or muffled hearing</div>
                <div>✓ Fluid or discharge</div>
                <div>✓ Fever</div>
                <div>✓ Ringing in the ear</div>
                <div>✓ Dizziness or balance problems</div>
                <div>✓ Tenderness around the ear</div>

              </div>

            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          CAUSES
      ====================================================== */}
      <section className="content-section section-soft">
        <div className="container">

          <div className="split-section reverse-mobile">

            <div className="split-content">

              <span className="section-label">
                Causes
              </span>

              <h2>
                What Causes Ear Infections?
              </h2>

              <p>
                Ear infections can have different causes depending on the
                affected part of the ear and the patient's individual
                circumstances.
              </p>

              <div className="cause-list">

                <div>
                  <strong>01</strong>
                  <span>Bacterial or viral infections</span>
                </div>

                <div>
                  <strong>02</strong>
                  <span>Respiratory infections</span>
                </div>

                <div>
                  <strong>03</strong>
                  <span>Water exposure</span>
                </div>

                <div>
                  <strong>04</strong>
                  <span>Allergies and irritation</span>
                </div>

                <div>
                  <strong>05</strong>
                  <span>Eustachian tube problems</span>
                </div>

                <div>
                  <strong>06</strong>
                  <span>Underlying ear conditions</span>
                </div>

              </div>

              <p>
                Recurrent ear infections may require a detailed ENT
                evaluation to identify contributing factors.
              </p>

            </div>

            <div className="split-image">
              <img
                src="/images/mastoidectomy.webp"
                alt="Causes of ear infection"
                loading="lazy"
              />
            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          DIAGNOSIS
      ====================================================== */}
      <section className="content-section">
        <div className="container">

          <div className="split-section">

            <div className="split-image">
              <img
                src="/images/mastoidectomy.webp"
                alt="ENT doctor examining ear for infection"
                loading="lazy"
              />
            </div>

            <div className="split-content">

              <span className="section-label">
                Diagnosis
              </span>

              <h2>
                How Is an Ear Infection Diagnosed?
              </h2>

              <p>
                An ENT specialist evaluates your symptoms and examines the ear
                to determine the likely cause of the problem.
              </p>

              <div className="diagnosis-steps">

                <div>
                  <span>01</span>
                  <div>
                    <h3>Medical History</h3>
                    <p>
                      Understanding your symptoms, duration and previous ear
                      problems.
                    </p>
                  </div>
                </div>

                <div>
                  <span>02</span>
                  <div>
                    <h3>Ear Examination</h3>
                    <p>
                      Examination of the ear canal and eardrum helps identify
                      inflammation, fluid or other abnormalities.
                    </p>
                  </div>
                </div>

                <div>
                  <span>03</span>
                  <div>
                    <h3>Hearing Assessment</h3>
                    <p>
                      Hearing tests may be recommended when hearing loss or
                      persistent blockage is present.
                    </p>
                  </div>
                </div>

                <div>
                  <span>04</span>
                  <div>
                    <h3>Further Evaluation</h3>
                    <p>
                      Additional investigations may be considered when
                      symptoms are persistent or recurrent.
                    </p>
                  </div>
                </div>

              </div>

            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          TREATMENT
      ====================================================== */}
      <section className="content-section section-soft">
        <div className="container">

          <div className="split-section reverse-mobile">

            <div className="split-content">

              <span className="section-label">
                Treatment
              </span>

              <h2>
                Ear Infection Treatment
              </h2>

              <p>
                Treatment depends on the type of infection, severity of
                symptoms and underlying cause. An ENT specialist can assess
                the ear and recommend an appropriate treatment plan.
              </p>

              <div className="treatment-list">

                <article>
                  <span>01</span>
                  <div>
                    <h3>Medical Treatment</h3>
                    <p>
                      Depending on the diagnosis, appropriate medicines or
                      conservative treatment may be recommended.
                    </p>
                  </div>
                </article>

                <article>
                  <span>02</span>
                  <div>
                    <h3>Ear Care</h3>
                    <p>
                      Appropriate ear care and management of contributing
                      factors can support recovery.
                    </p>
                  </div>
                </article>

                <article>
                  <span>03</span>
                  <div>
                    <h3>Treatment of Underlying Problems</h3>
                    <p>
                      Recurrent infections may require evaluation of
                      underlying ear or eustachian tube problems.
                    </p>
                  </div>
                </article>

                <article>
                  <span>04</span>
                  <div>
                    <h3>Surgical Treatment When Required</h3>
                    <p>
                      Some chronic or complicated ear conditions may require
                      specialist surgical management.
                    </p>
                  </div>
                </article>

              </div>

            </div>

            <div className="split-image">
              <img
                src="/images/mastoidectomy.webp"
                alt="Ear infection treatment by ENT specialist"
                loading="lazy"
              />
            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          COMPLICATIONS
      ====================================================== */}
      <section className="content-section">
        <div className="container">

          <div className="split-section">

            <div className="split-image">
              <img
                src="/images/mastoidectomy.webp"
                alt="Complications of untreated ear infection"
                loading="lazy"
              />
            </div>

            <div className="split-content">

              <span className="section-label warning-label">
                Don't Ignore Persistent Symptoms
              </span>

              <h2>
                What Can Happen If an Ear Infection Is Not Treated?
              </h2>

              <p>
                Many ear infections resolve with appropriate management.
                However, persistent or recurrent ear problems should not be
                ignored.
              </p>

              <p>
                Depending on the underlying condition, untreated or
                inadequately treated ear problems may be associated with
                persistent discharge, hearing problems, recurrent infections
                or other complications.
              </p>

              <div className="warning-box">

                <strong>
                  Seek ENT evaluation if you have:
                </strong>

                <ul>
                  <li>Persistent or severe ear pain</li>
                  <li>Repeated ear infections</li>
                  <li>Ear discharge</li>
                  <li>Persistent hearing difficulty</li>
                  <li>Dizziness or balance problems</li>
                  <li>Symptoms that are getting worse</li>
                </ul>

              </div>

            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          DOCTOR
      ====================================================== */}
      <section className="doctor-section">
        <div className="container">

          <div className="doctor-card">

            <div className="doctor-image">
              <img
                src="/images/dhirendra kushwah.webp"
                alt="Dr.(Prof.) Dhirendra Singh Kushwah - ENT Specialist in Delhi"
                loading="lazy"
              />
            </div>

            <div className="doctor-content">

              <span className="section-label">
                Meet Your ENT Specialist
              </span>

              <h2>
                Dr.(Prof.) Dhirendra Singh Kushwah
              </h2>

              <h3>
                ENT Specialist & Otorhinolaryngology Surgeon in Delhi
              </h3>

              <p>
                Dr.(Prof.) Dhirendra Singh Kushwah is an experienced ENT specialist
                providing evaluation and treatment for a wide range of ear,
                nose and throat conditions.
              </p>

              <p>
                His areas of expertise include ear disorders,
                hearing-related conditions, cochlear implant procedures,
                endoscopic sinus surgery and head and neck surgery.
              </p>

              <div className="doctor-highlights">
                <span>25+ Years Experience</span>
                <span>ENT & Otorhinolaryngology</span>
                <span>Cochlear Implant</span>
                <span>Endoscopic Surgery</span>
              </div>

              <div className="doctor-actions">

                <Link
                  href="/about"
                  className="secondary-btn"
                >
                  About Dr.(Prof.) Dhirendra Singh Kushwah
                </Link>

                <Link
                  href="/contact"
                  className="primary-btn"
                >
                  Book Consultation
                </Link>

              </div>

            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          LOCAL SEO
      ====================================================== */}
      <section className="local-section">
        <div className="container">

          <div className="local-content">

            <span className="section-label">
              ENT Care in Delhi
            </span>

            <h2>
              Ear Infection Treatment in Delhi
            </h2>

            <p>
              If you are looking for an ENT specialist for ear infection
              treatment in Delhi, professional evaluation can help identify
              the underlying cause of persistent ear pain, discharge, hearing
              difficulty or recurrent infections.
            </p>

            <p>
              Dr.(Prof.) Dhirendra Singh Kushwah provides ENT consultation and
              treatment for patients from Delhi and the surrounding Delhi NCR
              region.
            </p>

            <p>
              The consultation focuses on identifying the cause of the ear
              problem and developing an appropriate treatment plan based on
              the patient's symptoms and clinical evaluation.
            </p>

            <Link
              href="/contact"
              className="primary-btn"
            >
              Book an ENT Consultation in Delhi
            </Link>

          </div>

        </div>
      </section>


      {/* =====================================================
          RELATED CONDITIONS
      ====================================================== */}
      <section className="related-section">
        <div className="container">

          <div className="section-heading">
            <span className="section-label">
              Explore More
            </span>

            <h2>
              Related ENT Conditions & Treatments
            </h2>
          </div>

          <div className="links-grid">

            <Link href="/conditions/hearing-loss">
              <strong>Hearing Loss</strong>
              <span>
                Learn about hearing loss evaluation and treatment.
              </span>
            </Link>

            <Link href="/conditions/tinnitus">
              <strong>Tinnitus</strong>
              <span>
                Understand ringing or buzzing sounds in the ears.
              </span>
            </Link>

            <Link href="/conditions/vertigo">
              <strong>Vertigo</strong>
              <span>
                Learn about dizziness and balance-related problems.
              </span>
            </Link>

            <Link href="/conditions/cholesteatoma">
              <strong>Cholesteatoma</strong>
              <span>
                Learn about this chronic middle-ear condition.
              </span>
            </Link>

            <Link href="/services/cochlear-implant">
              <strong>Cochlear Implant</strong>
              <span>
                Explore cochlear implant evaluation and treatment.
              </span>
            </Link>

            <Link href="/conditions">
              <strong>All ENT Conditions</strong>
              <span>
                Explore other ear, nose and throat conditions.
              </span>
            </Link>

          </div>

        </div>
      </section>


      {/* =====================================================
          FAQ
      ====================================================== */}
      <section className="faq-section">
        <div className="container">

          <div className="section-heading">
            <span className="section-label">
              FAQs
            </span>

            <h2>
              Frequently Asked Questions About Ear Infection
            </h2>
          </div>

          <div className="faq-list">

            <details>
              <summary>
                What are the common symptoms of an ear infection?
              </summary>
              <p>
                Common symptoms may include ear pain, blocked sensation,
                hearing difficulty, ear discharge, fever, ringing in the ear
                and sometimes dizziness or balance problems.
              </p>
            </details>

            <details>
              <summary>
                What causes an ear infection?
              </summary>
              <p>
                Ear infections can be associated with bacterial or viral
                infections, water exposure, allergies, respiratory
                infections, eustachian tube problems and other conditions
                affecting the ear.
              </p>
            </details>

            <details>
              <summary>
                Can an ear infection cause hearing loss?
              </summary>
              <p>
                Yes. Ear infections can sometimes cause temporary hearing
                difficulty because of inflammation, fluid or blockage.
                Persistent hearing loss should be evaluated by an ENT
                specialist.
              </p>
            </details>

            <details>
              <summary>
                When should I see an ENT doctor?
              </summary>
              <p>
                Consider an ENT evaluation when ear pain is severe or
                persistent, there is ear discharge, hearing loss, recurrent
                infection, dizziness or symptoms that are not improving.
              </p>
            </details>

            <details>
              <summary>
                How is an ear infection treated?
              </summary>
              <p>
                Treatment depends on the type, severity and underlying cause.
                An ENT specialist may recommend appropriate medicines,
                observation, ear care or other treatment when required.
              </p>
            </details>

          </div>

        </div>
      </section>


      {/* =====================================================
          FINAL CTA
      ====================================================== */}
      <section className="final-cta">
        <div className="container">

          <div className="cta-content">

            <span className="section-label">
              Expert ENT Care
            </span>

            <h2>
              Don't Ignore Persistent Ear Problems
            </h2>

            <p>
              If you are experiencing persistent ear pain, discharge, hearing
              difficulty or recurrent ear infections, consider an evaluation
              by an ENT specialist.
            </p>

            <div className="cta-actions">

              <Link
                href="/contact"
                className="primary-btn"
              >
                Book an Appointment
              </Link>

              <Link
                href="/facilities"
                className="secondary-btn"
              >
                Explore Our Facilities
              </Link>

            </div>

          </div>

        </div>
      </section>

    </main>
  );
}