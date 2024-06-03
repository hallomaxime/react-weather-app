import React from "react";
import SearchEngine from "./SearchEngine";
import "./styles.css";

export default function App() {
  return (
    <div>
      <div className="App">
        <h1>Weather App</h1>
        <SearchEngine />
      </div>
      <div>
        <footer>
          This project was coded by Maxime Spithorst 🙋🏼‍♀️, is open sourced on{" "}
          <a
            href="https://www.github.com/hallomaxime"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>{" "}
          and hosted on{" "}
          <a
            href="https://graceful-douhua-be3de5.netlify.app"
            target="_blank"
            rel="noreferrer"
          >
            Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}
