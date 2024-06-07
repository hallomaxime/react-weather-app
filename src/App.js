import React from "react";
import SearchEngine from "./SearchEngine";
import Footer from "./Footer";
import "./styles.css";

export default function App() {
  return (
    <div>
      <div className="App">
        <h1>Weather App</h1>
        <SearchEngine />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
