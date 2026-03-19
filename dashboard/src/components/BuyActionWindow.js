import React, { useState, useContext } from "react";
import axios from "axios";

import GeneralContext from "./GeneralContext";
import "./BuyActionWindow.css";

const BuyActionWindow = ({ uid }) => {
  const { closeBuyWindow } = useContext(GeneralContext);

  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleBuyClick = async () => {
    console.log("Buy button clicked for:", uid);
    
    // Validation
    const qty = Number(stockQuantity);
    const price = Number(stockPrice);

    if (!qty || qty <= 0) {
      setError("Quantity must be greater than 0");
      return;
    }

    if (!price || price <= 0) {
      setError("Price must be greater than 0");
      return;
    }

    setError("");
    setIsLoading(true);

    try {
      console.log("Sending order to backend:", { name: uid, qty, price, mode: "BUY" });
      
      const response = await axios.post("http://localhost:3002/newOrder", {
        name: uid,
        qty: qty,
        price: price,
        mode: "BUY",
      });

      // console.log("Order placed successfully:", response.data);
      // alert("Order placed successfully!");
      closeBuyWindow();
    } catch (error) {
      console.error("Order failed:", error.response?.data || error.message);
      setError(error.response?.data?.message || "Failed to place order. Try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleCancelClick = () => {
    console.log("Order cancelled");
    closeBuyWindow();
  };

  return (
    <div className="container" id="buy-window" draggable="true">
      <div className="regular-order">
        <div className="inputs">
          <fieldset>
            <legend>Qty.</legend>
            <input
              type="number"
              min="1"
              name="qty"
              id="qty"
              value={stockQuantity}
              onChange={(e) => setStockQuantity(e.target.value)}
              disabled={isLoading}
            />
          </fieldset>

          <fieldset>
            <legend>Price</legend>
            <input
              type="number"
              step="0.05"
              min="0"
              name="price"
              id="price"
              value={stockPrice}
              onChange={(e) => setStockPrice(e.target.value)}
              disabled={isLoading}
            />
          </fieldset>
        </div>
        {error && <p style={{ color: "red", fontSize: "0.9rem" }}>{error}</p>}
      </div>

      <div className="buttons">
        <span>Margin required ₹140.65</span>
        <div>
          <button 
            className="btn btn-blue" 
            onClick={handleBuyClick}
            disabled={isLoading}
          >
            {isLoading ? "Processing..." : "Buy"}
          </button>

          <button 
            className="btn btn-grey" 
            onClick={handleCancelClick}
            disabled={isLoading}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default BuyActionWindow;
