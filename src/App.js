import React from "react";
import Weather from "./Weather";
import Footer from "./Footer";
import "./App.css";

export default function App() {
  return (
    <div className="container">
      <div className="App mt-3">
        <Weather defaultCity="London" />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
