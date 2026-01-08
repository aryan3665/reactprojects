
import React from "react";

function Footer() {
  return (
    <div
      style={{
        backgroundColor: "#1f2933",
        color: "#ffffff",
        padding: "40px 60px",
        marginTop: "40px",
      }}
    >
      {/* Top Section */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "30px",
        }}
      >
        {/* Brand */}
        <div style={{ maxWidth: "250px" }}>
          <h2 style={{ color: "#e63946", marginBottom: "10px" }}>
            FoodExpress
          </h2>
          <p style={{ fontSize: "14px", lineHeight: "1.6", color: "#cbd5e1" }}>
            Delicious food delivered at your doorstep. Fresh ingredients, fast
            delivery and best taste guaranteed.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 style={{ marginBottom: "10px" }}>Quick Links</h4>
          <p style={{ fontSize: "14px", color: "#cbd5e1" }}>Menu</p>
          <p style={{ fontSize: "14px", color: "#cbd5e1" }}>Offers</p>
          <p style={{ fontSize: "14px", color: "#cbd5e1" }}>Order Now</p>
          <p style={{ fontSize: "14px", color: "#cbd5e1" }}>Contact Us</p>
        </div>

        {/* Contact */}
        <div>
          <h4 style={{ marginBottom: "10px" }}>Contact</h4>
          <p style={{ fontSize: "14px", color: "#cbd5e1" }}>
            📍 New Delhi, India
          </p>
          <p style={{ fontSize: "14px", color: "#cbd5e1" }}>
            📞 +91 98765 43210
          </p>
          <p style={{ fontSize: "14px", color: "#cbd5e1" }}>
            ✉️ support@foodexpress.com
          </p>
        </div>

        {/* Timing */}
        <div>
          <h4 style={{ marginBottom: "10px" }}>Opening Hours</h4>
          <p style={{ fontSize: "14px", color: "#cbd5e1" }}>
            Mon – Fri: 10 AM – 11 PM
          </p>
          <p style={{ fontSize: "14px", color: "#cbd5e1" }}>
            Sat – Sun: 9 AM – 12 AM
          </p>
        </div>
      </div>

      {/* Bottom Section */}
      <div
        style={{
          borderTop: "1px solid #374151",
          marginTop: "30px",
          paddingTop: "15px",
          textAlign: "center",
          fontSize: "13px",
          color: "#9ca3af",
        }}
      >
        © 2026 FoodExpress. All rights reserved.
      </div>
    </div>
  );
}

export default Footer;
