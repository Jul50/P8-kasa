import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import "../styles/Rating.css";

function Rating({ rating }) {
  const stars = [];

  for (let i = 1; i <= 5; i++) {
    stars.push(
      <FontAwesomeIcon
        key={i}
        icon={faStar}
        className="Stars"
        style={{ color: i <= rating ? "#ff6060" : "#f6f6f6" }}
      />
    );
  }

  return <div>{stars}</div>;
}

export default Rating;
