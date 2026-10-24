import Link from "next/link";
import "./sinusitis.css";

export const metadata = {
  title:
    "Sinusitis: Symptoms, Causes, Treatment & When to See an ENT | Dr.(Prof.) Dhirendra Singh Kushwah",
  description:
    "Learn about sinusitis symptoms, causes, risk factors, diagnosis, prevention and treatment. Consult Dr. Dhirendra Singh Kushwah, ENT Specialist & Surgeon in Delhi.",
  keywords: [
    "sinusitis",
    "sinusitis symptoms",
    "sinusitis causes",
    "sinusitis treatment",
    "sinus infection",
    "chronic sinusitis",
    "sinus surgery Delhi",
    "FESS surgery Delhi",
    "endoscopic sinus surgery Delhi",
    "ENT specialist for sinusitis Delhi",
  ],
};

export default function SinusitisPage() {
  return (
    <main className="sinus-page">

      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="sinus-hero">
        <div className="container">

          <div className="sinus-hero-content">

            <div className="sinus-hero-text">

              <span className="sinus-eyebrow">
                ENT CONDITION · SINUS &amp; NASAL HEALTH
              </span>

              <h1>
                Sinusitis: Symptoms, Causes, Treatment &amp; When to See an
                ENT Doctor
              </h1>

              <p className="sinus-hero-lead">
                Sinusitis is a common condition involving inflammation of the
                sinuses that can cause nasal blockage, facial pressure,
                headache, nasal discharge and reduced sense of smell.
              </p>

              <p>
                Persistent or recurrent sinus symptoms should not be ignored.
                An ENT evaluation can help identify whether allergies,
                infection, nasal polyps, a deviated septum or another nasal
                problem is contributing to your symptoms.
              </p>

              <div className="sinus-hero-actions">
                <Link href="/contact" className="sinus-btn sinus-btn-primary">
                  Book ENT Consultation
                </Link>

                <a
                  href="tel:+919311449825"
                  className="sinus-btn sinus-btn-secondary"
                >
                  Call Now
                </a>
              </div>

              <div className="sinus-trust-row">
                <div>
                  <strong>25+</strong>
                  <span>Years Experience</span>
                </div>

                <div>
                  <strong>ENT</strong>
                  <span>Specialist &amp; Surgeon</span>
                </div>

                <div>
                  <strong>FESS</strong>
                  <span>Endoscopic Sinus Surgery</span>
                </div>
              </div>

            </div>

            <div className="sinus-hero-image">
              <div className="sinus-image-card">
                <img
                  src="/images/vertigo.jpg"
                  alt="ENT doctor examining a patient with sinusitis symptoms"
                />

                <div className="sinus-image-badge">
                  <span>✓</span>
                  Comprehensive ENT Evaluation
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          QUICK OVERVIEW
      ====================================================== */}

      <section className="sinus-overview">
        <div className="container">

          <div className="section-heading">
            <span>UNDERSTANDING SINUSITIS</span>
            <h2>Sinusitis at a Glance</h2>
            <p>
              Sinusitis can be temporary or persistent. Understanding the
              symptoms and possible causes can help you seek appropriate ENT
              care at the right time.
            </p>
          </div>

          <div className="sinus-overview-grid">

            <div className="sinus-info-card">
              <div className="sinus-card-icon">🫁</div>
              <h3>What Is It?</h3>
              <p>
                Inflammation and swelling of the lining of the sinuses that
                can interfere with normal mucus drainage.
              </p>
            </div>

            <div className="sinus-info-card">
              <div className="sinus-card-icon">⚠️</div>
              <h3>Common Symptoms</h3>
              <p>
                Nasal blockage, facial pressure, headache, nasal discharge,
                postnasal drip and reduced smell.
              </p>
            </div>

            <div className="sinus-info-card">
              <div className="sinus-card-icon">🔍</div>
              <h3>Diagnosis</h3>
              <p>
                ENT examination, nasal evaluation and, when appropriate,
                nasal endoscopy or imaging.
              </p>
            </div>

            <div className="sinus-info-card">
              <div className="sinus-card-icon">🩺</div>
              <h3>Treatment</h3>
              <p>
                Treatment depends on the underlying cause and may include
                medicines, allergy management or surgery in selected cases.
              </p>
            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          WHAT IS SINUSITIS
      ====================================================== */}

      <section className="sinus-split-section">
        <div className="container">

          <div className="sinus-split-grid">

            <div className="sinus-split-image">
              <img
                src="/images/sinusitis.png"
                alt="Sinus anatomy showing the location of the sinuses"
              />
            </div>

            <div className="sinus-split-content">

              <span className="section-label">
                WHAT IS SINUSITIS?
              </span>

              <h2>Understanding Sinusitis</h2>

              <p>
                Sinusitis occurs when the tissues lining the sinuses become
                inflamed or swollen. This inflammation can interfere with
                normal sinus drainage and lead to congestion and pressure.
              </p>

              <p>
                Sinusitis may occur after a cold or respiratory infection.
                Allergies, nasal polyps, a deviated septum and other nasal
                conditions can also contribute to persistent or recurrent
                sinus symptoms.
              </p>

              <div className="sinus-highlight-box">
                <strong>Important:</strong>
                <span>
                  Not every case of sinusitis is caused by bacteria, and not
                  every patient needs antibiotics or surgery.
                </span>
              </div>

            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          HOW TO IDENTIFY
      ====================================================== */}

      <section className="sinus-split-section sinus-light-section">
        <div className="container">

          <div className="sinus-split-grid reverse-mobile">

            <div className="sinus-split-content">

              <span className="section-label">
                KNOW THE WARNING SIGNS
              </span>

              <h2>How Can You Identify Sinusitis?</h2>

              <p>
                Sinusitis can sometimes resemble a common cold or allergy.
                Persistent, recurrent or worsening symptoms may indicate that
                an ENT evaluation is appropriate.
              </p>

              <ul className="sinus-check-list">
                <li>Persistent nasal blockage</li>
                <li>Facial pressure or pain</li>
                <li>Thick nasal discharge</li>
                <li>Postnasal drip</li>
                <li>Reduced sense of smell</li>
                <li>Repeated sinus infections</li>
              </ul>

              <Link
                href="/contact"
                className="text-link"
              >
                Talk to an ENT Specialist →
              </Link>

            </div>

            <div className="sinus-split-image">
              <img
                src="/images/sinusitis-Desc.png"
                alt="Patient experiencing sinusitis symptoms"
              />
            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          SYMPTOMS
      ====================================================== */}

      <section className="sinus-symptoms">
        <div className="container">

          <div className="section-heading">
            <span>COMMON SYMPTOMS</span>
            <h2>Symptoms of Sinusitis</h2>
            <p>
              Sinusitis symptoms can vary depending on the cause, severity
              and duration of inflammation.
            </p>
          </div>

          <div className="sinus-symptoms-grid">

            <div className="symptom-card">
              <h3>Nasal Congestion</h3>
              <p>
                Difficulty breathing comfortably through the nose due to
                swelling and blockage.
              </p>
            </div>

            <div className="symptom-card">
              <h3>Facial Pressure</h3>
              <p>
                Pressure or discomfort around the cheeks, forehead, nose or
                eyes.
              </p>
            </div>

            <div className="symptom-card">
              <h3>Nasal Discharge</h3>
              <p>
                Increased or thick nasal mucus may occur with sinus
                inflammation.
              </p>
            </div>

            <div className="symptom-card">
              <h3>Reduced Smell</h3>
              <p>
                Inflammation and blockage can temporarily reduce the ability
                to smell.
              </p>
            </div>

            <div className="symptom-card">
              <h3>Postnasal Drip</h3>
              <p>
                Mucus draining from the nose toward the back of the throat.
              </p>
            </div>

            <div className="symptom-card">
              <h3>Headache</h3>
              <p>
                Some people experience pressure-related headache or facial
                discomfort.
              </p>
            </div>

            <div className="symptom-card">
              <h3>Tooth Discomfort</h3>
              <p>
                Pressure in the upper jaw can sometimes cause discomfort in
                the upper teeth.
              </p>
            </div>

            <div className="symptom-card">
              <h3>Bad Breath</h3>
              <p>
                Persistent nasal and sinus inflammation can sometimes be
                associated with unpleasant breath.
              </p>
            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          CAUSES
      ====================================================== */}

      <section className="sinus-split-section">
        <div className="container">

          <div className="sinus-split-grid">

            <div className="sinus-split-image">
              <img
                src="/images/Sinusitis-Cause.jpg"
                alt="Illustration showing common causes of sinusitis"
              />
            </div>

            <div className="sinus-split-content">

              <span className="section-label">
                WHY DOES IT HAPPEN?
              </span>

              <h2>What Causes Sinusitis?</h2>

              <p>
                Sinusitis can develop for different reasons. Identifying the
                underlying cause is important because treatment should be
                tailored to the individual patient.
              </p>

              <div className="cause-list">

                <div>
                  <strong>01 · Viral Infection</strong>
                  <p>
                    Colds and other respiratory infections can temporarily
                    inflame the sinus lining.
                  </p>
                </div>

                <div>
                  <strong>02 · Allergies</strong>
                  <p>
                    Allergic inflammation can cause nasal swelling and affect
                    sinus drainage.
                  </p>
                </div>

                <div>
                  <strong>03 · Nasal Polyps</strong>
                  <p>
                    Polyps can obstruct normal airflow and drainage pathways.
                  </p>
                </div>

                <div>
                  <strong>04 · Deviated Septum</strong>
                  <p>
                    Structural narrowing inside the nose may contribute to
                    recurrent symptoms.
                  </p>
                </div>

              </div>

            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          RISK FACTORS
      ====================================================== */}

      <section className="sinus-risk-section">
        <div className="container">

          <div className="section-heading">
            <span>RISK FACTORS</span>
            <h2>Factors That May Lead to Sinusitis</h2>
          </div>

          <div className="risk-grid">

            <div className="risk-card">
              <span>01</span>
              <h3>Allergic Rhinitis</h3>
              <p>
                Ongoing nasal allergy can cause swelling and congestion.
              </p>
            </div>

            <div className="risk-card">
              <span>02</span>
              <h3>Frequent Colds</h3>
              <p>
                Repeated respiratory infections may increase sinus
                inflammation.
              </p>
            </div>

            <div className="risk-card">
              <span>03</span>
              <h3>Smoking</h3>
              <p>
                Tobacco smoke can irritate the nose and respiratory passages.
              </p>
            </div>

            <div className="risk-card">
              <span>04</span>
              <h3>Air Pollution</h3>
              <p>
                Environmental irritants can aggravate nasal inflammation.
              </p>
            </div>

            <div className="risk-card">
              <span>05</span>
              <h3>Nasal Polyps</h3>
              <p>
                Polyps may interfere with normal sinus drainage.
              </p>
            </div>

            <div className="risk-card">
              <span>06</span>
              <h3>Deviated Septum</h3>
              <p>
                Nasal structural problems may contribute to recurrent
                blockage.
              </p>
            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          DIAGNOSIS
      ====================================================== */}

      <section className="sinus-split-section sinus-light-section">
        <div className="container">

          <div className="sinus-split-grid reverse-mobile">

            <div className="sinus-split-content">

              <span className="section-label">
                ENT DIAGNOSIS
              </span>

              <h2>How Is Sinusitis Diagnosed?</h2>

              <p>
                A proper diagnosis helps determine whether symptoms are
                related to infection, allergy, inflammation or structural
                problems inside the nose and sinuses.
              </p>

              <div className="diagnosis-steps">

                <div>
                  <div>
                    <h3>Medical History</h3>
                    <p>
                      Symptoms, duration, recurrence and previous treatment
                      are reviewed.
                    </p>
                  </div>
                </div>

                <div>
                  <div>
                    <h3>ENT Examination</h3>
                    <p>
                      The nose, throat and related ENT structures are
                      examined.
                    </p>
                  </div>
                </div>

                <div>
                  <div>
                    <h3>Nasal Endoscopy</h3>
                    <p>
                      An endoscope may be used to examine the nasal passages
                      and sinus drainage areas.
                    </p>
                  </div>
                </div>

                <div>
                  <div>
                    <h3>Imaging When Required</h3>
                    <p>
                      CT imaging may be recommended in selected chronic or
                      complicated cases.
                    </p>
                  </div>
                </div>

              </div>

            </div>

            <div className="sinus-split-image">
              <img
                src="/images/nasal-endoscopy.png"
                alt="ENT specialist performing nasal endoscopy"
              />
            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          PREVENTION
      ====================================================== */}

      <section className="sinus-split-section">
        <div className="container">

          <div className="sinus-split-grid">

            <div className="sinus-split-image">
              <img
                src="/images/nasal-endoscopy.png"
                alt="Healthy habits that may help prevent sinus problems"
              />
            </div>

            <div className="sinus-split-content">

              <span className="section-label">
                PREVENTION &amp; SELF-CARE
              </span>

              <h2>How Can You Prevent Sinusitis?</h2>

              <p>
                While every episode cannot be prevented, certain habits may
                help reduce nasal irritation and the risk of recurrent
                symptoms.
              </p>

              <ul className="sinus-check-list">
                <li>Manage allergies appropriately</li>
                <li>Avoid smoking and second-hand smoke</li>
                <li>Reduce exposure to known irritants</li>
                <li>Maintain good hydration</li>
                <li>Practice regular hand hygiene</li>
                <li>Follow appropriate nasal-care advice</li>
              </ul>

            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          TREATMENT
      ====================================================== */}

      <section className="sinus-treatment">
        <div className="container">

          <div className="section-heading">
            <span>SINUSITIS TREATMENT</span>
            <h2>Treatment for Sinusitis</h2>
            <p>
              The right treatment depends on the underlying cause, duration
              and severity of sinusitis.
            </p>
          </div>

          <div className="treatment-grid">

            <div className="treatment-card">
              <span className="treatment-number"></span>
              <h3>Medical Management</h3>
              <p>
                Depending on the condition, treatment may include saline
                nasal care, nasal corticosteroids, allergy management and
                other appropriate medicines.
              </p>
            </div>

            <div className="treatment-card">
              <span className="treatment-number"></span>
              <h3>Allergy Management</h3>
              <p>
                If allergies contribute to nasal inflammation, controlling
                the allergic condition may help improve symptoms.
              </p>
            </div>

            <div className="treatment-card">
              <span className="treatment-number"></span>
              <h3>Antibiotics When Indicated</h3>
              <p>
                Antibiotics are not required for every sinus infection. They
                may be considered when bacterial infection is suspected.
              </p>
            </div>

            <div className="treatment-card treatment-featured">
              <span className="treatment-number"></span>
              <h3>Endoscopic Sinus Surgery</h3>
              <p>
                Selected patients with chronic or recurrent sinus disease
                that does not respond adequately to appropriate medical
                treatment may be considered for FESS.
              </p>

              <Link href="/treatments/fess" className="text-link">
                Learn About FESS →
              </Link>
            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          FESS
      ====================================================== */}

      <section className="sinus-split-section sinus-fess-section">
        <div className="container">

          <div className="sinus-split-grid reverse-mobile">

            <div className="sinus-split-content">

              <span className="section-label">
                ENDOSCOPIC SINUS SURGERY
              </span>

              <h2>Functional Endoscopic Sinus Surgery (FESS)</h2>

              <p>
                Functional Endoscopic Sinus Surgery is an endoscopic
                procedure used in selected patients with chronic or
                recurrent sinus disease when appropriate medical treatment
                has not provided sufficient improvement.
              </p>

              <p>
                The procedure aims to improve sinus drainage and address
                anatomical blockage while preserving as much normal tissue
                as possible.
              </p>

              <Link
                href="/treatments/fess"
                className="sinus-btn sinus-btn-primary"
              >
                Explore FESS Treatment
              </Link>

            </div>

            <div className="sinus-split-image">
              <img
                src="/images/fess-surgery.png"
                alt="Functional endoscopic sinus surgery concept"
              />
            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          WHEN TO VISIT ENT
      ====================================================== */}

      <section className="sinus-warning">
        <div className="container">

          <div className="warning-content">

            <div className="warning-icon">!</div>

            <div>
              <span>WHEN TO SEE AN ENT</span>

              <h2>
                When Should You Visit an ENT Doctor for Sinusitis?
              </h2>

              <p>
                Consider an ENT consultation if symptoms are persistent,
                recurrent, worsening or interfering with your daily life.
              </p>

              <div className="warning-list">

                <span>✓ Persistent nasal blockage</span>
                <span>✓ Recurrent sinus infections</span>
                <span>✓ Persistent facial pressure or pain</span>
                <span>✓ Reduced sense of smell</span>
                <span>✓ Symptoms that keep returning</span>
                <span>✓ Symptoms that worsen after initial improvement</span>

              </div>

            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          EMERGENCY WARNING
      ====================================================== */}

      <section className="sinus-emergency">
        <div className="container">

          <div className="emergency-box">

            <strong>Seek urgent medical attention if you develop:</strong>

            <div>
              <span>Severe headache</span>
              <span>Swelling around the eyes</span>
              <span>Vision changes</span>
              <span>Forehead swelling</span>
              <span>Confusion or severe illness</span>
            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          WHY DR KUSHWAH
      ====================================================== */}

      <section className="sinus-doctor">
        <div className="container">

          <div className="doctor-grid">

            <div className="doctor-image">
              <img
                src="/images/DrDhirendraSinghKushawh-ENT-Surgeon.webp"
                alt="Dr. Dhirendra Singh Kushwah ENT Specialist and Surgeon"
              />

              <div className="doctor-experience">
                <strong>25+</strong>
                <span>Years of ENT Experience</span>
              </div>
            </div>

            <div className="doctor-content">

              <span className="section-label">
                YOUR ENT CARE PARTNER
              </span>

              <h2>
                Why Choose Dr. (Prof.) Dhirendra Singh Kushwah for Sinusitis
                Treatment?
              </h2>

              <p>
                Persistent sinus symptoms can have different underlying
                causes. A comprehensive ENT assessment can help determine
                whether the problem is related to infection, allergy,
                inflammation or structural blockage.
              </p>

              <div className="doctor-points">

                <div>
                  <span>✓</span>
                  <div>
                    <strong>25+ Years of Experience</strong>
                    <p>
                      Extensive experience in ENT and otorhinolaryngology.
                    </p>
                  </div>
                </div>

                <div>
                  <span>✓</span>
                  <div>
                    <strong>Endoscopic Sinus Expertise</strong>
                    <p>
                      Specialized experience in endoscopic sinus procedures
                      and evaluation.
                    </p>
                  </div>
                </div>

                <div>
                  <span>✓</span>
                  <div>
                    <strong>Individualized Treatment</strong>
                    <p>
                      Treatment is selected according to the patient's
                      symptoms, examination and clinical needs.
                    </p>
                  </div>
                </div>

                <div>
                  <span>✓</span>
                  <div>
                    <strong>Comprehensive ENT Care</strong>
                    <p>
                      Evaluation and management of a wide range of ear, nose
                      and throat conditions.
                    </p>
                  </div>
                </div>

              </div>

              <div className="doctor-actions">

                <Link
                  href="/about"
                  className="sinus-btn sinus-btn-secondary"
                >
                  About Dr. Kushwah
                </Link>

                <Link
                  href="/contact"
                  className="sinus-btn sinus-btn-primary"
                >
                  Book Consultation
                </Link>

              </div>

            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          FAQ
      ====================================================== */}

      <section className="sinus-faq">
        <div className="container">

          <div className="section-heading">
            <span>FREQUENTLY ASKED QUESTIONS</span>
            <h2>Sinusitis FAQs</h2>
          </div>

          <div className="faq-list">

            <details>
              <summary>
                Is sinusitis the same as a common cold?
              </summary>
              <p>
                No. A common cold can cause temporary nasal congestion and
                drainage, while sinusitis involves inflammation of the
                sinuses. The symptoms can overlap, so persistent or recurrent
                symptoms may require an ENT evaluation.
              </p>
            </details>

            <details>
              <summary>
                Can sinusitis go away without antibiotics?
              </summary>
              <p>
                Many acute sinus infections are viral and may improve without
                antibiotics. Antibiotics should only be used when clinically
                indicated by a healthcare professional.
              </p>
            </details>

            <details>
              <summary>
                Can allergies cause sinusitis?
              </summary>
              <p>
                Allergic inflammation can cause swelling and congestion in
                the nose and may contribute to sinus problems.
              </p>
            </details>

            <details>
              <summary>
                Does chronic sinusitis require surgery?
              </summary>
              <p>
                Not necessarily. Treatment depends on the underlying cause.
                Surgery may be considered for selected patients who continue
                to have significant symptoms despite appropriate medical
                treatment.
              </p>
            </details>

            <details>
              <summary>
                What is FESS?
              </summary>
              <p>
                FESS stands for Functional Endoscopic Sinus Surgery. It is an
                endoscopic surgical procedure used for selected patients with
                chronic or recurrent sinus disease.
              </p>
            </details>

            <details>
              <summary>
                When should I see an ENT specialist?
              </summary>
              <p>
                An ENT consultation is appropriate when symptoms persist,
                repeatedly return, become worse or significantly affect your
                daily life.
              </p>
            </details>

          </div>

        </div>
      </section>


      {/* =====================================================
          FINAL CTA
      ====================================================== */}

      <section className="sinus-final-cta">
        <div className="container">

          <div className="final-cta-content">

            <span>
              PERSISTENT SINUS PROBLEMS?
            </span>

            <h2>
              Get the Right Diagnosis and Personalized ENT Care
            </h2>

            <p>
              Don't keep treating recurring sinus symptoms without knowing
              the underlying cause. Schedule an ENT consultation for a
              detailed evaluation.
            </p>

            <div className="sinus-hero-actions">

              <Link
                href="/contact"
                className="sinus-btn sinus-btn-white"
              >
                Book ENT Consultation
              </Link>

              <a
                href="tel:+919311449825"
                className="sinus-btn sinus-btn-outline-white"
              >
                Call Now
              </a>

            </div>

          </div>

        </div>
      </section>

    </main>
  );
}