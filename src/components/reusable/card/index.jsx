import PropTypes from "prop-types";
import "./card.css";

Card.propTypes = {
  card: PropTypes.object,
};

function Card({ card }) {
  return (
    <div className="card-container">
      <div className="d-flex align-items-center card-header">
        <div className="flex align-items-center justify-content-center">
          <card.icon
            className="card-icon"
            style={{ color: `${card.iconColor}` }}
          />
        </div>
        <h4 className="card-title">{card.title}</h4>
      </div>
      <p className="card-description">{card.description}</p>
      <button className="card-btn">{card.buttonText}</button>
    </div>
  );
}

export default Card;
