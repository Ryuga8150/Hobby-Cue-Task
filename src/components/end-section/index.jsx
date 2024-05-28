import "./end-section.css";
function EndSection() {
  return (
    <div className="end-section-container mt-5">
      <h2 className="secondary-heading">
        Explore your <span className="hobby">hobby </span> or{" "}
        <span className="passion">passion </span>
      </h2>
      <buttom className="end-section-btn">Get started</buttom>
      <img
        className="end-img"
        src="/end-people-group.png"
        alt="Group of People doing various activities"
      />
    </div>
  );
}

export default EndSection;
