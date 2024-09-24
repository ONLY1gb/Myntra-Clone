const Posts = ({ onAddToBag }) => {
    const products = [
      {
        id: 1,
        name: "H & M Shirt Style Top",
        price: 719,
        image: "public/shopping_1.webp",
      },
      {
        id: 2,
        name: "ALLEN SOLLY Casual Shirt",
        price: 799,
        image: "public/shopping_2.webp",
      },
      {
        id: 3,
        name: "RARE RABBIT Pure Cotton",
        price: 889,
        image: "public/shopping_8.webp",
      },

      {
        id: 3,
        name: "HIGHLANDER  Pure Cotton",
        price: 999,
        image: "public/shopping_4.webp",
      },

      {
        id: 3,
        name: "FOREVER 21 Pure Cotton",
        price: 529,
        image: "public/shopping_5.webp",
      },

      {
        id: 3,
        name: "PETER ENGLAND Pure Cotton",
        price: 529,
        image: "public/shopping_6.webp",
      },

      // Add more products as needed
    ];
  
    return (
      <div className="container">
        <div className="row">
          {products.map((product) => (
            <div className="col-md-4 mb-4" key={product.id}>
              <div className="card card-hover" style={{ width: "18rem" }}>
                <img
                  src={product.image}
                  className="card-img-top"
                  alt={product.name}
                />
                <div className="card-body">
                  <h5 className="card-title">{product.name}</h5>
                  <h6>MRP ₹{product.price}</h6>
                  <button
                    className="btn btn-danger"
                    onClick={() => onAddToBag(product)}
                  >
                    ADD
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Posts;
  
  
















































// const Posts = ({addItemToBag}) => {

//     const products = [{ id: 1, name: "H & M", description: "Shirt Style Top", price: 719, image: "public/shopping_1.webp" },
//         { id: 2, name: "ALLEN SOLLY", description: "Men Slim Fit Casual Shirt", price: 799, image: "public/shopping_2.webp" },
//         { id: 3, name: "VAN HEUSEN", description: "Solid Classic Pure Cotton", price: 529, image: "public/shopping_5.webp" },
//         { id: 4, name: "RARE RABBIT", description: "Pure Cotton Custom Shirt", price: 1039, image: "public/shopping_4.webp" },
//         { id: 5, name: "HIGHLANDER", description: "Slim Fit Cotton Casual Shirt", price: 471, image: "public/shopping_6.webp" },
//         { id: 6, name: "FOREVER 21", description: "Off-white checked casual shirt", price: 579, image: "public/shopping_7.webp" },
//     ];

//     return (


//       <div className="container">
//         <div className="row">
//             {products.map((product) =>(
                
//             ))}
//           <div className="col-md-4 mb-4">
//             <div className="card card-hover" style={{ width: "18rem" }}>
//               <img src="public/shopping_1.webp" className="card-img-top" alt="..." />
//               <div className="card-body">
//                 <h5 className="card-title">H & M</h5>
//                 <p>Shirt Style Top</p>
//                 <h6>MRP ₹719</h6>
//                 <a href="#" className="btn btn-danger">ADD</a>
//               </div>
//             </div>
//           </div>

  
//           <div className="col-md-4 mb-4">
//             <div className="card card-hover" style={{ width: "18rem" }}>
//               <img src="public/shopping_2.webp" className="card-img-top" alt="..." />
//               <div className="card-body">
//                 <h5 className="card-title">ALLEN SOLLY</h5>
//                 <p>Men Slim Fit Casual Shirt</p>
//                 <h6>MRP ₹799</h6>
//                 <a href="#" className="btn btn-danger">ADD</a>
//               </div>
//             </div>
//           </div>
  
//           <div className="col-md-4 mb-4">
//             <div className="card card-hover" style={{ width: "18rem" }}>
//               <img src="public/shopping_5.webp" className="card-img-top" alt="..." />
//               <div className="card-body">
//                 <h5 className="card-title">VAN HEUSEN</h5>
//                 <p>Solid Classic Pure Cotton</p>
//                 <h6>MRP ₹529</h6>
//                 <a href="#" className="btn btn-danger">ADD</a>
//               </div>
//             </div>
//           </div>
  
//           {/* Second Row */}
//           <div className="col-md-4 mb-4">
//             <div className="card card-hover" style={{ width: "18rem" }}>
//               <img src="public/shopping_4.webp" className="card-img-top" alt="..." />
//               <div className="card-body">
//                 <h5 className="card-title">RARE RABBIT</h5>
//                 <p>Pure Cotton Custom Shirt</p>
//                 <h6>MRP ₹1,039</h6>
//                 <a href="#" className="btn btn-danger">ADD</a>
//               </div>
//             </div>
//           </div>
  
//           <div className="col-md-4 mb-4">
//             <div className="card card-hover" style={{ width: "18rem" }}>
//               <img src="public/shopping_6.webp" className="card-img-top" alt="..." />
//               <div className="card-body">
//                 <h5 className="card-title">HIGHLANDER</h5>
//                 <p>Slim Fit Cotton Casual Shirt</p>
//                 <h6>MRP ₹471</h6>
//                 <a href="#" className="btn btn-danger">ADD</a>
//               </div>
//             </div>
//           </div>
  
//           <div className="col-md-4 mb-4">
//             <div className="card card-hover" style={{ width: "18rem" }}>
//               <img src="public/shopping_7.webp" className="card-img-top" alt="..." />
//               <div className="card-body">
//                 <h5 className="card-title">FOREVER 21</h5>
//                 <p>Off-white checked casual shirt</p>
//                 <h6>MRP ₹579</h6>
//                 <a href="#" className="btn btn-danger">ADD</a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   };
  
//   export default Posts;
  