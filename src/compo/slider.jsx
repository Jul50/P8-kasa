import { useState } from "react";
import "../styles/slider.css";
import ArrowLeft from "../asset/chevron-right-solid.svg";
import ArrowRight from "../asset/chevron-left-solid.svg";

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

          <img
            className="ArrowSliderLeft"
            src={ArrowLeft}
            alt="Flèche gauche"
            onClick={nextImage}
          />
          <img
            className="ArrowSliderRight"
            src={ArrowRight}
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
