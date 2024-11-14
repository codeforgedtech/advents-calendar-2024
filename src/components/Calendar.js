import React, { useState } from 'react';
import './Calendar.css';
import Modal from './Modal'; // Importera Modal-komponenten
import crafts from './Crafts'; // Importera pyssel-databasen

const Calendar = () => {
  const [openedDoors, setOpenedDoors] = useState(Array(24).fill(false));
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({});

  const openDoor = (index) => {
    const today = new Date().getDate();

    if (index + 1 <= today) {
      const updatedDoors = [...openedDoors];
      updatedDoors[index] = true;
      setOpenedDoors(updatedDoors);
      // Set modal content based on the clicked door
      setModalContent(crafts[index]);
      setIsModalOpen(true);
    } else {
      alert("Vänta till rätt dag för att öppna denna lucka!");
    }
  };

  return (
    <div className="container">
      <h1 className="title">Julkalender</h1>
      <div className="calendar">
        {Array.from({ length: 24 }, (_, index) => {
          const day = index + 1;
          return (
            <div
              key={day}
              className={`door ${openedDoors[index] ? 'open' : ''}`}
              onClick={() => openDoor(index)}
            >
              <div className="day-number">{day}</div>
              {openedDoors[index] && <div className="message">{crafts[index].title}</div>}
            </div>
          );
        })}
      </div>
      {isModalOpen && <Modal content={modalContent} onClose={() => setIsModalOpen(false)} />}
    </div>
  );
};

export default Calendar;









