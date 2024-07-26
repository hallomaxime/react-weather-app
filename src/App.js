import React from "react";
import Weather from "./Weather";
import Footer from "./Footer";
import "./styles.css";

export default function App() {
  return (
    <div>
      <div className="App">
        <h1>Weather App</h1>
        <Weather />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
