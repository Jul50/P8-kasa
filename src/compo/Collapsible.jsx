import React, { useState } from "react";
import "../styles/Collapsible.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

function Collapsible(props) {
  const [open, setOpen] = useState(false);
  console.log(props);
  const handleCollapsibleClick = () => {
    setOpen(!open);
  };

  return (
    <div className="collapsible__container">
      <button
        className={`collapsible ${open ? "active" : ""}`}
        onClick={() => handleCollapsibleClick()}
      >
        {props.title}
        <FontAwesomeIcon icon={open ? faChevronUp : faChevronDown} />
      </button>
      <div className={`content ${open ? "open" : ""}`}>
        <p>{props.content}</p>
      </div>
    </div>
  );
}

export default Collapsible;
