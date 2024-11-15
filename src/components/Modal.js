import React from 'react';
import './Modal.css';

const Modal = ({ onClose, content }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
      <button className="close-button" onClick={onClose}>Stäng</button>
        {content.isError ? (
          <>
            <h2 className="modal-title">🎄 Vänta på rätt dag! 🎄</h2>
            <p className="modal-message">{content.message}</p>
            <p className="modal-tip"><strong>Tips:</strong> Titta på vår kalender och håll utkik efter nästa lucka!</p>
            <img className="modal-image" src="https://cdn.pixabay.com/photo/2017/11/07/19/23/santa-claus-2927962_1280.png" alt="Julbild" />
          </>
        ) : (
          <>
            <h2 className="modal-title">{content.title}</h2>
            <div className="modal-description">
              <ul>
                {content.description.map((step, index) => (
                  <li key={index}>{step}</li>
                ))}
              </ul>
            </div>
            <p className="modal-tip"><strong>Tips:</strong> {content.tips}</p>
            <img className="modal-image" src={content.imageUrl || "https://via.placeholder.com/200x200?text=Pysselbild"} alt="Pysselbild" />
          </>
        )}
       
      </div>
    </div>
  );
};

export default Modal;




