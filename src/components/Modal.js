import React from 'react';
import './Modal.css'; // Styla modalen med CSS

const Modal = ({ content, onClose }) => {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>X</button>
        <h2>{content.title}</h2>
        <div className="modal-body">
          <h3>Steg:</h3>
          <ul>
            {content.description.map((step, index) => (
              <li key={index}>{step}</li> // Visar varje steg på en ny rad
            ))}
          </ul>
          <p><strong>Tips:</strong> {content.tips}</p>
          {content.imageUrl && <img src={content.imageUrl} alt={content.title} className="craft-image" />}
        </div>
      </div>
    </div>
  );
};

export default Modal;


