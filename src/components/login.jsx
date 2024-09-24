// Login.jsx
import React, { useState } from "react";

const Login = ({ onLoginSuccess }) => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [generatedOtp, setGeneratedOtp] = useState("");
  const [step, setStep] = useState(1);

  const handleSendOtp = () => {
    if (phoneNumber) {
      const otp = Math.floor(100000 + Math.random() * 900000); // Generate 6-digit OTP
      setGeneratedOtp(otp);
      alert(`Your OTP is: ${otp}`); // Simulate sending OTP
      setStep(2);
    } else {
      alert("Please enter a valid phone number.");
    }
  };

  const handleVerifyOtp = () => {
    if (otp === generatedOtp.toString()) {
      onLoginSuccess(); // Call onLoginSuccess to proceed to the app
    } else {
      alert("Invalid OTP. Please try again.");
    }
  };

  return (
    <div className="login-background">
    <div className="login-container" style={{ padding: "20px", textAlign: "center" }}>
      <h2>Login</h2>
      {step === 1 ? (
        <>
          <input
            type="number"
            placeholder="Enter your phone number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            style={{ padding: "10px", width: "300px" }}
          />
          <button onClick={handleSendOtp} style={{ marginLeft: "10px" }}>
            Send OTP
          </button>
        </>
      ) : (
        <>
          <input
            type="text"
            placeholder="Enter OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            style={{ padding: "10px", width: "300px" }}
          />
          <button onClick={handleVerifyOtp} style={{ marginLeft: "10px" }}>
            Verify OTP
          </button>
        </>
      )}
    </div>
    </div>
  );
};

export default Login;
