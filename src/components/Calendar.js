import React, { useState, useEffect } from 'react';
import './Calendar.css';
import Modal from './Modal'; // Importera Modal-komponenten
import crafts from './Crafts'; // Importera pyssel-databasen

const Calendar = () => {
  const [openedDoors, setOpenedDoors] = useState(Array(24).fill(false));
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({});
  const [isDecember, setIsDecember] = useState(false);
  useEffect(() => {
    const snowContainer = document.querySelector('.snow-container');
    for (let i = 0; i < 50; i++) { // Justera antalet snöflingor om du vill ha fler eller färre
      const snowflake = document.createElement('div');
      snowflake.className = 'snowflake';
      snowflake.style.left = `${Math.random() * 100}vw`;
      snowflake.style.animationDuration = `${3 + Math.random() * 5}s`; // Varierande fallhastighet
      snowflake.style.opacity = Math.random();
      snowContainer.appendChild(snowflake);
    }
  }, []);
  // Kontrollera om det är december vid sidladdning
  useEffect(() => {
    const today = new Date();
    const isInDecember = today.getMonth() === 11; // 11 = December
    setIsDecember(isInDecember);

    // Hämta öppnade luckor från localStorage om det är december
    if (isInDecember) {
      const savedOpenedDoors = JSON.parse(localStorage.getItem('openedDoors')) || Array(24).fill(false);
      setOpenedDoors(savedOpenedDoors);
    }
  }, []);

  const openDoor = (index) => {
    if (!isDecember) {
      // Om det inte är december, visa ett meddelande
      setModalContent({ isError: true, message: "Julkalendern börjar den 1 december!" });
      setIsModalOpen(true);
      return;
    }

    const today = new Date().getDate();
    if (index + 1 <= today) {
      const updatedDoors = [...openedDoors];
      updatedDoors[index] = true;
      setOpenedDoors(updatedDoors);

      // Spara uppdaterade luckor i localStorage
      localStorage.setItem('openedDoors', JSON.stringify(updatedDoors));

      // Sätt modal-innehåll och öppna modalen
      setModalContent(crafts[index]);
      setIsModalOpen(true);
    } else {
      setModalContent({ isError: true, message: "Vänta till rätt dag för att öppna denna lucka!" });
      setIsModalOpen(true);
    }
  };

  return (
    <div className="container">
       <div className="snow-container"></div> 
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















