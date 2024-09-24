import { useState } from "react";

const PaymentForm = ({ totalAmount, onPaymentSuccess }) => {
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("card"); // New state to track payment method

  const handleSubmit = (e) => {
    e.preventDefault();
    if (paymentMethod === "card") {
      // Process card payment
      alert(`Card payment of ₹${totalAmount} processed successfully!`);
    } else if (paymentMethod === "qr") {
      // Handle QR code payment logic
      alert(`QR code payment of ₹${totalAmount} processed successfully!`);
    }
    onPaymentSuccess();
  };

  return (
    <div className="modal" style={{ display: "block" }}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Payment Form</h5>
            <button type="button" className="btn-close"></button>
          </div>
          <div className="modal-body">
            {/* Payment method selection */}
            <div className="mb-3">
              <label className="form-label">Choose Payment Method:</label>
              <div>
                <button
                  type="button"
                  className={`btn ${paymentMethod === "card" ? "btn-primary" : "btn-outline-primary"}`}
                  onClick={() => setPaymentMethod("card")}
                  style={{ marginRight: "10px" }}
                >
                  Card Payment
                </button>
                <button
                  type="button"
                  className={`btn ${paymentMethod === "qr" ? "btn-primary" : "btn-outline-primary"}`}
                  onClick={() => setPaymentMethod("qr")}
                >
                  QR Code Payment
                </button>
              </div>
            </div>

            {/* Card payment form */}
            {paymentMethod === "card" && (
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="cardNumber" className="form-label">Card Number</label>
                  <input
                    type="text"
                    className="form-control"
                    id="cardNumber"
                    value={cardNumber}
                    onChange={(e) => setCardNumber(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="expiry" className="form-label">Expiry Date</label>
                  <input
                    type="text"
                    className="form-control"
                    id="expiry"
                    value={expiry}
                    onChange={(e) => setExpiry(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="cvv" className="form-label">CVV</label>
                  <input
                    type="text"
                    className="form-control"
                    id="cvv"
                    value={cvv}
                    onChange={(e) => setCvv(e.target.value)}
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary">
                  Pay ₹{totalAmount}
                </button>
              </form>
            )}

            {/* QR code payment option */}
            {paymentMethod === "qr" && (
              <div style={{ textAlign: "center" }}>
                <p>Scan the QR code below to pay ₹{totalAmount}:</p>
                <img
                  src="QR.jpg" // Replace with actual QR code image or dynamically generated one
                  alt="QR Code"
                  style={{ width: "150px", height: "150px", marginBottom: "15px" }}
                />
                <p>Once payment is completed, click the button below.</p>
                <button className="btn btn-success" onClick={onPaymentSuccess}>
                  Confirm Payment
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentForm;
