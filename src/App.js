import React from "react";
import Weather from "./Weather";
import Footer from "./Footer";
import "./styles.css";

export default function App() {
  return (
    <div>
      <div className="App">
        <Weather defaultCity="London" />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
