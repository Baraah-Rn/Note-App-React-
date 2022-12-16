import React from "react";

const Header = ({ handleDarkMode }) => {
  return (
    <div className="header-box">
      <h1>My Notes</h1>
      <button
        onClick={() => handleDarkMode((previousDarkMode) => !previousDarkMode)}
        className="btn"
      >
        Dark Mode
      </button>
    </div>
  );
};

export default Header;
