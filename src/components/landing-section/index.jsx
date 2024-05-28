import About from "./About";
import Login from "./Login";
import "./landing-section.css";
function LandingPage() {
  return (
    <section className="section-landing">
      <div className="d-flex align-items-start justify-content-between">
        <About />
        <Login />
      </div>
      <img
        className="landing-people-group"
        src="/people-group.png"
        alt="people illustrations"
      />
    </section>
  );
}

export default LandingPage;
