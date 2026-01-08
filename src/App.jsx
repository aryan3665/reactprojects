import React from "react";

import Food from "./comp/Food.jsx";
import Header from "./comp/Header.jsx";
import Footer from "./comp/Footer.jsx";
import arr from "./assets/dummy.js";

import { useState } from "react";

function App() {
  let [A, setA] = useState(arr);

    function sortit() {
    A.sort((a, b) => a.price - b.price);
    setA([...A]);
  }

  // function filtr() {
  //   const B = arr.filter((value) => value.price > 10);
  //   setA(B);
  // }
  return (
    <div>
      <Header></Header>
      <br></br>
      {/* <button onClick={filtr}>filter by price</button> */}
      <br></br>
      <button onClick={sortit}>sort by price</button>

      <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
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

      <Footer></Footer>
    </div>
  );
}

export default App;
