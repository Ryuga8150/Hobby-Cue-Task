import "./App.css";
import AddTestimonialSection from "./components/add-testimonial-section";
import EndSection from "./components/end-section";
import FeatureSection from "./components/feature-section";
import Footer from "./components/footer";
import LandingPage from "./components/landing-section";
import Navbar from "./components/navbar";
import TestimonialSection from "./components/testimonial-section";

function App() {
  return (
    <div className="max-w-container bg-white">
      <Navbar />

      <LandingPage />
      <FeatureSection />
      <AddTestimonialSection />
      <TestimonialSection />
      <EndSection />
      <Footer />
    </div>
  );
}

export default App;
