import React, { useState } from "react";

import Food from "./comp/Food.jsx";
import Header from "./comp/Header.jsx";
import Footer from "./comp/Footer.jsx";
import arr from "./assets/dummy.js";

function App() {
  const [A, setA] = useState(arr);

  function sortit() {
    const sorted = [...A].sort((a, b) => a.price - b.price);
    setA(sorted);
  }

  function searchDish(e) {
    const value = e.target.value.toLowerCase();
    const searched = arr.filter((item) =>
      item.dish.toLowerCase().includes(value)
    );
    setA(searched);
  }

  return (
    <div>
      <Header />

      {/* Controls Section */}
      <div style={styles.controls}>
        <button style={styles.button} onClick={sortit}>
          Sort by Price
        </button>

        <input
          type="text"
          placeholder="Search dish..."
          onChange={searchDish}
          style={styles.input}
        />
      </div>

      {/* Food Cards */}
      <div style={styles.foodContainer}>
        {A.map((value, index) => (
          <Food
            key={index}
            image={value.image}
            dish={value.dish}
            offer={value.offer}
            price={value.price}
          />
        ))}
      </div>

      <Footer />
    </div>
  );
}

export default App;

/* ---------------- STYLES ---------------- */

const styles = {
  controls: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "12px",
    flexWrap: "wrap",
    margin: "20px",
  },

  button: {
    padding: "10px 20px",
    borderRadius: "6px",
    border: "none",
    backgroundColor: "#ff7a00",
    color: "#fff",
    fontSize: "16px",
    cursor: "pointer",
  },

  input: {
    padding: "10px",
    borderRadius: "6px",
    border: "1px solid #ccc",
    fontSize: "16px",
    width: "220px",
  },

  foodContainer: {
    display: "flex",
    gap: "10px",
    flexWrap: "wrap",
    justifyContent: "center",
  },
};
