// import React, { useState } from "react"; // move this up to app

// accept the state (that we lifted up) from the parent as props here
const Header = ({ onToggleDarkMode, isDarkMode }) => {
  // console.log('onToggleDarkMode', onToggleDarkMode)
  // const [isDarkMode, setIsDarkMode] = useState(true);// move this up to app

  
  // const toggleDarkMode = () => { // move this up to app
  //   setIsDarkMode(isDarkMode => !isDarkMode)
  // }

  const handleToggleDarkMode = (e) => {
    onToggleDarkMode();
  }

  console.log('Header: render')
  return (
    <header>
      <h1>
        <span className="logo">{"//"}</span>
        Project Showcase
      </h1>
      <button onClick={handleToggleDarkMode}>{isDarkMode ? "Light Mode" : "Dark Mode"}</button>
    </header>
  );
}

export default Header;
