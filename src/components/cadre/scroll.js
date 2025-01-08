
import './scroll.css';
import React, { useRef } from 'react';
import { history } from '../../data/history';

const HorizontalScrollWithButtons = () => {
  const scrollContainerRef = useRef();

  const scrollLeft = () => {
    scrollContainerRef.current.scrollBy({
      left: -200, // Défilement vers la gauche de 200px
      behavior: 'smooth',
    });
  };

  const scrollRight = () => {
    scrollContainerRef.current.scrollBy({
      left: 200, // Défilement vers la droite de 200px
      behavior: 'smooth',
    });
  };

  return (
    <div className="scroll-wrapper">
      <button onClick={scrollLeft}>←</button>
      <div className="scroll-container" ref={scrollContainerRef}>
        {history.map((item, index) => (
          <div key={index} className="scroll-item">
            {item.prenom}
          </div>
        ))}
      </div>
      <button onClick={scrollRight}>→</button>
    </div>
  );
};

export default HorizontalScrollWithButtons;