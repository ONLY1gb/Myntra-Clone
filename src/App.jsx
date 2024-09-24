// App.jsx
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import Header from "./components/header";
import Footer from "./components/footer";
import Posts from "./components/posts";
import BagModal from "./components/bag_model";
import PaymentForm from "./components/PaymentForm"; // Import the PaymentForm component
import Login from "./components/login"; // Import the Login component

function App() {
  const [bagItems, setBagItems] = useState([]); // State to track items in the bag
  const [isBagOpen, setIsBagOpen] = useState(false); // State to track modal visibility
  const [showPaymentForm, setShowPaymentForm] = useState(false); // State to track payment form visibility
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track login status

  const handleAddToBag = (item) => {
    setBagItems((prevItems) => [...prevItems, item]); // Add new item to the bag
  };

  const handleRemoveFromBag = (itemToRemove) => {
    setBagItems((prevItems) =>
      prevItems.filter((item) => item.id !== itemToRemove.id)
    ); // Remove item from the bag
  };

  const handleBagClick = () => {
    setIsBagOpen(!isBagOpen); // Toggle the bag modal
  };

  const handlePurchaseClick = () => {
    setShowPaymentForm(true); // Show payment form when purchase button is clicked
    setIsBagOpen(false); // Close the bag modal
  };

  const handlePaymentSuccess = () => {
    alert("Payment successful!");
    setBagItems([]); // Clear the bag after successful payment
    setShowPaymentForm(false); // Hide the payment form
  };

  const totalAmount = bagItems.reduce((total, item) => total + item.price, 0);

  const handleLoginSuccess = () => {
    setIsLoggedIn(true); // Set login status to true
  };

  return (
    <>
      {!isLoggedIn ? ( // Show login if not logged in
        <Login onLoginSuccess={handleLoginSuccess} />
      ) : (
        <>
          <Header bagItemCount={bagItems.length} onBagClick={handleBagClick} />
          <Posts onAddToBag={handleAddToBag} />
          <Footer />
          {isBagOpen && (
            <BagModal
              bagItems={bagItems}
              totalAmount={totalAmount}
              onRemoveFromBag={handleRemoveFromBag} // Pass remove function
              onClose={handleBagClick}
              onPurchase={handlePurchaseClick} // Handle purchase button click
            />
          )}
          {showPaymentForm && (
            <PaymentForm totalAmount={totalAmount} onPaymentSuccess={handlePaymentSuccess} />
          )}
        </>
      )}
    </>
  );
}

export default App;













// import "./App.css";
// import "bootstrap/dist/css/bootstrap.min.css";
// import Header from "./components/header";
// import Footer from "./components/footer";
// import Posts from "./components/posts";


// function App() {
 

//   return (
//     <>
//     <Header></Header>
//     <Posts></Posts>
//     <Footer></Footer>
//     </>
//   )
// }

// export default App;
