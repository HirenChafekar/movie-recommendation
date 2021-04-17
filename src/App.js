import "./styles.css";
import React, { useState } from "react";

const moviedatabase = {
  Bollywood: [
    { name: "Zindagi na Milegi Dobara", rating: "5/5" },
    { name: "Yeh Jawani Hai Deewani", rating: "4.5/5" }
  ],

  Tollywood: [
    { name: "Baahubali", rating: "4.5/5" },
    { name: "KGF", rating: "4/5" }
  ],

  Hollywood: [
    { name: "John Wick 3", rating: "5/5" },
    { name: "Harry Potter 4", rating: "4.5/5" }
  ]
};

const types = Object.keys(moviedatabase);

export default function App() {
  const [selectedType, setType] = useState("Bollywood");

  function typeClickHandler(type) {
    setType(type);
  }

  return (
    <div className="App">
      <h1>
        <span role="img" aria-label="movie">
          📺
        </span>{" "}
        Movies Recommender
      </h1>
      <p style={{ fontSize: "23px" }}>Select a Movie Industry</p>
      {types.map((type) => (
        <button
          key={type}
          style={{
            margin: "1rem 0.3rem",
            cursor: "pointer",
            padding: "0.5rem 1rem",
            borderRadius: "0.5rem",
            border: "1px solid black"
          }}
          onClick={() => typeClickHandler(type)}
        >
          {type}
        </button>
      ))}
      <div style={{ textAlign: "left" }}>
        <ul
          style={{
            paddingInlineStart: "0"
          }}
        >
          {moviedatabase[selectedType].map((movie) => (
            <li
              key={movie.name}
              style={{
                listStyle: "none",
                padding: "1rem",
                border: "1px solid #D1D5DB",
                borderRadius: "0.5rem",
                width: "80%",
                margin: "1rem 0.5rem",
                fontWeight: "bold"
              }}
            >
              <div style={{ fontSize: "larger" }}>{movie.name}</div>
              <div style={{ fontSize: "smaller" }}>{movie.rating}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
