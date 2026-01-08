import React from "react";

function FoodCard(props) {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: "10px",
        width: "230px",
        margin: "14px",
        backgroundColor: "#ffffff",
        boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
        fontFamily: "Arial, sans-serif",
        overflow: "hidden",
      }}
    >
      {/* Dish Image */}
      <img
        src={props.image}
        alt={props.dish}
        height="180px"
        width="100%"
        style={{ objectFit: "cover" }}
      />

      {/* Dish Info */}
      <div
        style={{
          padding: "12px",
          textAlign: "center",
          backgroundColor: "#fff7ed",
        }}
      >
        <h3 style={{ margin: "6px 0", color: "#1f2933" }}>{props.dish}</h3>

        <p
          style={{
            margin: "6px 0",
            color: "#16a34a",
            fontWeight: "bold",
            fontSize: "14px",
          }}
        >
          {props.offer}
        </p>

        <p
          style={{
            margin: "6px 0",
            color: "#e63946",
            fontWeight: "bold",
            fontSize: "16px",
          }}
        >
          Rs: {props.price}
        </p>

        <button
          style={{
            marginTop: "8px",
            padding: "8px 14px",
            backgroundColor: "#e63946",
            color: "#fff",
            border: "none",
            borderRadius: "20px",
            cursor: "pointer",
            fontWeight: "bold",
            fontSize: "13px",
          }}
        >
          ADD TO CART
        </button>
      </div>
    </div>
  );
}

export default FoodCard;
