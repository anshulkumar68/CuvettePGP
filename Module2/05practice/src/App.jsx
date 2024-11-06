import React, { useState } from "react";
import "./App.css";
function App() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleOpenPopup = () => {
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <div>
      <button onClick={handleOpenPopup}>+</button>

      {isPopupOpen && (
        <div className="overlay">
          <div className="popup">
            <h2>Pop-up Content</h2>
            <p>This is your centered pop-up content.</p>
            <button onClick={handleClosePopup}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
