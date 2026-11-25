import { FormEvent, useState } from "react";

const A = "/assets";

const services = [
  "General Dentistry",
  "Cosmetic Dentistry",
  "Pediatric Dentistry",
  "Dental Implants",
];

const steps = [
  ["01", "Book Your", "Appointment"],
  ["02", "Consultation &", "Examination"],
  ["03", "Personalized", "Treatment Plan"],
  ["04", "Ongoing Care &", "Follow-Up"],
];

const reviews = [
  ["Neha Sharma", "Delhi, India"],
  ["Ravi Malhotra", "Mumbai, India"],
  ["Mira Singh", "Pune, India"],
  ["Aarav Kapoor", "Jaipur, India"],
];

function CoralButton({
  children,
  onClick,
  type = "button",
}: {
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit";
}) {
  return (
    <button className="coral-button" type={type} onClick={onClick}>
      {children}
    </button>
  );
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return <p className="eyebrow">{children}</p>;
}

function TickList() {
  return (
    <ul className="tick-list">
      {[1, 2, 3].map((item) => (
        <li key={item}>
          <img src={`${A}/4424d.svg`} alt="" />
          <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit</span>
        </li>
      ))}
    </ul>
  );
}

function Stats({ compact = false }: { compact?: boolean }) {
  return (
    <div className={compact ? "stats stats-compact" : "stats"}>
      <div>
        <strong>{compact ? "10+" : "4.9 ★"}</strong>
        <span>{compact ? "Skilled Doctors" : "Ratings"}</span>
      </div>
      <div>
        <strong>99%</strong>
        <span>Patient Satisfaction</span>
      </div>
      <div>
        <strong>20K+</strong>
        <span>Appointments Booked</span>
      </div>
    </div>
  );
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [booked, setBooked] = useState(false);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  const submitBooking = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setBooked(true);
  };

  return (
    <main>
      <nav className="nav-shell" aria-label="Main navigation">
        <button
          className="menu-button"
          onClick={() => setMenuOpen((value) => !value)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          <span />
          <span />
          <span />
        </button>
        <div className={`nav-links ${menuOpen ? "is-open" : ""}`}>
          <button onClick={() => scrollTo("home")}>Home</button>
          <button onClick={() => scrollTo("services")}>Services</button>
          <button onClick={() => scrollTo("feedback")}>Blogs</button>
          <button onClick={() => scrollTo("about")}>About Us</button>
        </div>
        <button className="brand" onClick={() => scrollTo("home")}>
          <span className="brand-mark">
            <i />
          </span>
          Dental Easy
        </button>
        <CoralButton onClick={() => scrollTo("booking")}>Book Now</CoralButton>
      </nav>

      <section className="hero section-wrap" id="home">
        <div className="hero-copy">
          <div className="trust-line">
            <img src={`${A}/f56a0.svg`} alt="" />
            <span>Trusted Dental Clinic Since 1987</span>
          </div>
          <h1>
            Your smile <strong>deserves</strong>
            <br />
            extraordinary <em>care.</em>
          </h1>
          <p className="lead">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
          </p>
          <div className="hero-actions">
            <CoralButton onClick={() => scrollTo("booking")}>Book Appointment</CoralButton>
            <button className="outline-button" onClick={() => scrollTo("services")}>
              View Services
            </button>
          </div>
          <Stats />
        </div>
        <div className="hero-visual">
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <img
            className="hero-photo"
            src={`${A}/49160.png`}
            alt="Dental professional examining a patient"
          />
          <div className="availability-card">
            <span className="mini-icon">✓</span>
            <p>
              <small>NEXT AVAILABLE</small>
              Tomorrow, 9:30 AM
            </p>
          </div>
          <div className="verified-card">
            <small>✓ VERIFIED</small>
            <strong>98%</strong>
            <span>Patient satisfaction</span>
          </div>
        </div>
      </section>

      <section className="about section-pad" id="about">
        <div className="section-wrap">
          <Eyebrow>ABOUT US</Eyebrow>
          <div className="split">
            <div className="collage collage-about">
              <img src={`${A}/bc4fc.png`} alt="Dentist with a patient" />
              <img src={`${A}/33af5.png`} alt="Dental consultation" />
            </div>
            <div className="section-copy">
              <h2>
                15 Years of Expertise
                <br />
                in Dental Care
              </h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim.
              </p>
              <TickList />
              <CoralButton onClick={() => scrollTo("services")}>Learn More</CoralButton>
            </div>
          </div>
        </div>
      </section>

      <section className="services section-pad" id="services">
        <div className="section-wrap">
          <Eyebrow>OUR SERVICES</Eyebrow>
          <div className="section-heading-row">
            <h2>
              A Wide Range of Services
              <br />
              For Your Best Smile
            </h2>
            <CoralButton onClick={() => scrollTo("booking")}>Explore All Services</CoralButton>
          </div>
          <div className="service-grid">
            {services.map((service, index) => (
              <article className="service-card" key={service}>
                <div className="service-image">
                  <img src={`${A}/454f8.png`} alt="Modern dental treatment" />
                  <img className="service-badge" src={`${A}/f21c4.svg`} alt="" />
                  <span>General Dentistry</span>
                </div>
                <div className="service-body">
                  <h3>{service}</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adi</p>
                  <button onClick={() => scrollTo("booking")}>
                    Learn more <span>→</span>
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="process section-pad">
        <div className="section-wrap centered">
          <Eyebrow>HOW IT WORKS</Eyebrow>
          <h2>The Path to Your Perfect Smile</h2>
          <div className="steps">
            {steps.map(([number, lineOne, lineTwo], index) => (
              <article className="step" key={number}>
                <div className="step-icon">
                  <img src={`${A}/0d446.svg`} alt="" />
                  <img src={`${A}/49d00.svg`} alt="" />
                  <b>{number}</b>
                </div>
                <h3>
                  {lineOne}
                  <br />
                  {lineTwo}
                </h3>
                <p>Lorem ipsum dolor sit amet, consectetur adi</p>
                {index < steps.length - 1 && <span className="step-line" />}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="why section-pad">
        <div className="section-wrap split why-split">
          <div className="section-copy">
            <Eyebrow>WHY CHOOSE US</Eyebrow>
            <h2>
              Your Path to a<br />
              Healthier Smile
            </h2>
            <Stats compact />
            <TickList />
            <CoralButton onClick={() => scrollTo("booking")}>Book an Appointment</CoralButton>
          </div>
          <div className="collage collage-why">
            <img src={`${A}/1bd95.png`} alt="Dentist speaking with a patient" />
            <img src={`${A}/46ece.png`} alt="Smiling dental professional" />
          </div>
        </div>
      </section>

      <section className="feedback section-pad" id="feedback">
        <div className="section-wrap centered">
          <Eyebrow>FEEDBACKS</Eyebrow>
          <h2>Hear Directly From Our Patients</h2>
          <div className="reviews">
            {reviews.map(([name, location]) => (
              <article className="review" key={name}>
                <div>
                  <img src={`${A}/avatar.png`} alt="" />
                  <p>
                    <strong>{name}</strong>
                    <span>{location}</span>
                  </p>
                </div>
                <p>
                  Message social group squad lunch live responsible space ui. Catching ideal request
                  reinvent requirements. All social bandwagon highlights.
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="booking section-pad" id="booking">
        <div className="section-wrap centered">
          <Eyebrow>BOOK AN APPOINTMENT</Eyebrow>
          <h2>Effortless Online Booking</h2>
          <form className="booking-form" onSubmit={submitBooking}>
            <label>
              Your Name
              <input name="name" placeholder="Ex. Sanju Singh" required />
            </label>
            <label>
              Phone Number
              <input name="phone" type="tel" placeholder="Enter Phone Number" required />
            </label>
            <label>
              Type of Appointment
              <select name="appointment" defaultValue="" required>
                <option value="" disabled>
                  Select
                </option>
                <option>General Checkup</option>
                <option>Dental Cleaning</option>
                <option>Cosmetic Dentistry</option>
              </select>
            </label>
            <label>
              Preferred Dentist
              <select name="dentist" defaultValue="Dr. David Brown">
                <option>Dr. David Brown</option>
                <option>Dr. Sarah Wilson</option>
              </select>
            </label>
            <label>
              Preferred Date
              <input name="date" type="date" required />
            </label>
            <label>
              Preferred Time
              <select name="time" defaultValue="" required>
                <option value="" disabled>
                  Select
                </option>
                <option>9:30 AM</option>
                <option>11:00 AM</option>
                <option>2:30 PM</option>
              </select>
            </label>
            <div className="form-action">
              <CoralButton type="submit">Book Now</CoralButton>
              {booked && <p role="status">Your appointment request has been received.</p>}
            </div>
          </form>
        </div>
      </section>

      <footer>
        <div className="section-wrap footer-grid">
          <div>
            <h4>Services</h4>
            <a href="#services">Teeth Whitening</a>
            <a href="#services">Dental Implants</a>
            <a href="#services">Braces & Aligners</a>
            <a href="#services">Root Canal Treatment</a>
          </div>
          <div>
            <h4>Pricing</h4>
            <a href="#booking">Plans & Pricing</a>
            <a href="#booking">Students</a>
            <h4 className="footer-subhead">Company</h4>
            <a href="#about">About us</a>
          </div>
          <div>
            <h4>Blog</h4>
            <a href="#feedback">Latest Dental Tips</a>
            <a href="#feedback">Your Smile Journal</a>
            <a href="#feedback">Tips for a Healthier Smile</a>
          </div>
          <div>
            <h4>Get in touch</h4>
            <a href="mailto:info@dentalcare.com">info@dentalcare.com</a>
          </div>
        </div>
        <div className="section-wrap footer-bottom">
          <span>© 2023 DentalCare</span>
          <span>Terms of Use · Security · Privacy</span>
          <div className="socials">
            {["03b83.svg", "18375.svg", "2b0d8.svg", "95261.svg"].map((icon) => (
              <span key={icon}>
                <img src={`${A}/${icon}`} alt="" />
              </span>
            ))}
          </div>
        </div>
      </footer>
    </main>
  );
}
