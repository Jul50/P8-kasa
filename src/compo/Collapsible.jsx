import React, { useState } from "react";
import "./Collapsible.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

function Collapsible(props) {
  const { sections } = props;
  const [openSection, setOpenSection] = useState(null);

  const handleCollapsibleClick = (index) => {
    setOpenSection((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="collapsible__container">
      {sections.map((section, index) => (
        <div key={index}>
          <button
            className={`collapsible ${openSection === index ? "active" : ""}`}
            onClick={() => handleCollapsibleClick(index)}
          >
            {section.title}
            <FontAwesomeIcon icon={faChevronDown} />
          </button>
          <div className={`content ${openSection === index ? "open" : ""}`}>
            <p>{section.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Collapsible;
