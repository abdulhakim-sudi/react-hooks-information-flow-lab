// src/App.js
import React, { useState } from "react";
import Header from "./components/Header";
import ShoppingList from "./components/ShoppingList";
import itemData from "./data/items"; // Or wherever your item data is stored

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  function handleDarkModeClick() {
    setIsDarkMode((prevMode) => !prevMode);
  }

  return (
    <div className={isDarkMode ? "App dark" : "App light"}>
      <Header onDarkModeClick={handleDarkModeClick} isDarkMode={isDarkMode} />
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
