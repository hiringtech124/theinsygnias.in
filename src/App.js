import React from "react";
import "./App.css"; // Importing the styles

function ComingSoon() {
  return (
    <div className="coming-soon-container">
      <h1 className="coming-soon-text">&quot;We&apos;re Crafting a New Experience. Coming Soon!&quot;</h1>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <ComingSoon />
    </div>
  );
}

export default App;
