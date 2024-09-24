const BagModal = ({ bagItems, totalAmount, onRemoveFromBag, onClose, onPurchase }) => {
  return (
    <div className="modal" style={{ display: "block" }}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Your Shopping Bag</h5>
            <button type="button" className="btn-close" onClick={onClose}></button>
          </div>
          <div className="modal-body">
            {bagItems.length === 0 ? (
              <p>Your bag is empty.</p>
            ) : (
              <ul>
                {bagItems.map((item, index) => (
                  <li key={index} style={{ marginBottom: "10px" }}>
                    <img src={item.image} alt={item.name} style={{ width: "50px" }} />
                    <span>{item.name} - ₹{item.price}</span>
                    <button
                      className="btn btn-danger delete-btn"
                      style={{ marginLeft: "10px", width: '30%', alignSelf: 'center' }}
                      onClick={() => onRemoveFromBag(item)}
                    >
                      Delete
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div className="modal-footer">
            <h5>Total: ₹{totalAmount}</h5>
            <button type="button" className="btn btn-primary" onClick={onClose}>
              Close
            </button>
            {bagItems.length > 0 && (
              <button type="button" className="btn btn-success" onClick={onPurchase}>
                Purchase
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BagModal;
