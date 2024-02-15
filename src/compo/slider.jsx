import { useState } from "react";
import "../styles/slider.css";
import {
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Slider({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  function nextImage() {
    setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
  }

  function prevImage() {
    setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
  }

  return (
    <section className="ContainerSlider">
      {images.length > 1 && (
        <>
          <p className="SliderCount">
            {currentIndex + 1} / {images.length}
          </p>
          <FontAwesomeIcon
            className="ArrowSliderLeft"
            icon={faChevronRight}
            alt="Flèche gauche"
            onClick={nextImage}
          />
          <FontAwesomeIcon
            className="ArrowSliderRight"
            icon={faChevronLeft}
            alt="Flèche droite"
            onClick={prevImage}
          />
        </>
      )}
      <img className="ImgSlider" src={images[currentIndex]} alt="Logement" />
    </section>
  );
}

export default Slider;
