import { CgProfile } from "react-icons/cg";
import { FaRegHeart } from "react-icons/fa6";
import { MdOutlineShoppingBag } from "react-icons/md";

const Header = ({ bagItemCount, onBagClick }) => {
  return (
    <header
      className="p-3 text-bg-white"
      style={{ width: "100vw", height: "80px", marginBottom: "50px" }}
    >
      <div className="container-fluid">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <a href="#">
            <img
              src="public/myntra.png"
              alt="Myntra Logo"
              className="myntra-logo"
              style={{ width: "150px", height: "auto", marginRight: "25px" }}
            />
          </a>

          <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
            {/* MEN Dropdown */}
            <li className="nav-item dropdown">
              <a
                href="#"
                className="nav-link px-2 text-dark changeble dropdown-toggle"
                style={{ fontSize: "20px", fontWeight: "bold", marginRight: "20px" }}
                id="menDropdown"
                data-bs-toggle="dropdown"
              >
                MEN
              </a>
              <ul className="dropdown-menu" aria-labelledby="menDropdown">
                <li><a className="dropdown-item" href="#">T-Shirts</a></li>
                <li><a className="dropdown-item" href="#">Shirts</a></li>
                <li><a className="dropdown-item" href="#">Jeans</a></li>
              </ul>
            </li>

            {/* WOMEN Dropdown */}
            <li className="nav-item dropdown">
              <a
                href="#"
                className="nav-link px-2 text-dark changeble dropdown-toggle"
                style={{ fontSize: "20px", fontWeight: "bold", marginRight: "20px" }}
                id="womenDropdown"
                data-bs-toggle="dropdown"
              >
                WOMEN
              </a>
              <ul className="dropdown-menu" aria-labelledby="womenDropdown">
                <li><a className="dropdown-item" href="#">Dresses</a></li>
                <li><a className="dropdown-item" href="#">Tops</a></li>
                <li><a className="dropdown-item" href="#">Skirts</a></li>
              </ul>
            </li>

            {/* KIDS Dropdown */}
            <li className="nav-item dropdown">
              <a
                href="#"
                className="nav-link px-2 text-dark changeble dropdown-toggle"
                style={{ fontSize: "20px", fontWeight: "bold", marginRight: "20px" }}
                id="kidsDropdown"
                data-bs-toggle="dropdown"
              >
                KIDS
              </a>
              <ul className="dropdown-menu" aria-labelledby="kidsDropdown">
                <li><a className="dropdown-item" href="#">T-Shirts</a></li>
                <li><a className="dropdown-item" href="#">Shoes</a></li>
                <li><a className="dropdown-item" href="#">Accessories</a></li>
              </ul>
            </li>

            {/* HOME & LIVING Dropdown */}
            <li className="nav-item dropdown">
              <a
                href="#"
                className="nav-link px-2 text-dark changeble dropdown-toggle"
                style={{ fontSize: "20px", fontWeight: "bold", marginRight: "20px" }}
                id="homeDropdown"
                data-bs-toggle="dropdown"
              >
                HOME & LIVING
              </a>
              <ul className="dropdown-menu" aria-labelledby="homeDropdown">
                <li><a className="dropdown-item" href="#">Furniture</a></li>
                <li><a className="dropdown-item" href="#">Decor</a></li>
                <li><a className="dropdown-item" href="#">Bedding</a></li>
              </ul>
            </li>

            {/* STUDIO Dropdown */}
            <li className="nav-item dropdown">
              <a
                href="#"
                className="nav-link px-2 text-dark changeble dropdown-toggle"
                style={{ fontSize: "20px", fontWeight: "bold", marginRight: "20px" }}
                id="studioDropdown"
                data-bs-toggle="dropdown"
              >
                STUDIO
              </a>
              <ul className="dropdown-menu" aria-labelledby="studioDropdown">
                <li><a className="dropdown-item" href="#">Collections</a></li>
                <li><a className="dropdown-item" href="#">Latest Trends</a></li>
              </ul>
            </li>
          </ul>

          <form
            className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3"
            role="search"
          >
            <input
              type="search"
              className="form-control form-control-dark text-bg-white"
              placeholder="Search for product, brands and more.."
              aria-label="Search"
              style={{ width: "400px", marginLeft: "20px", height: "50px" }}
            />
          </form>

          <div className="text-end d-flex flex-row align-items-center">
            <div style={{ margin: "0 10px" }}>
              <CgProfile size={30} />
              <br />
              <h5>Profile</h5>
            </div>

            <div style={{ margin: "10px" }}>
              <FaRegHeart size={30} />
              <br />
              <h5>Wishlist</h5>
            </div>

            <div style={{ margin: "10px", position: "relative", cursor: "pointer" }} onClick={onBagClick}>
              <MdOutlineShoppingBag size={30} />
              <span
                style={{
                  position: "absolute",
                  top: "-10px",
                  right: "-10px",
                  backgroundColor: "red",
                  borderRadius: "50%",
                  padding: "5px",
                  color: "white",
                  fontSize: "12px",
                }}
              >
                {bagItemCount}
              </span>
              <br />
              <h5>Bag</h5>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;




















// import { CgProfile } from "react-icons/cg";
// import { FaRegHeart } from "react-icons/fa6";
// import { MdOutlineShoppingBag } from "react-icons/md";
// const Header = ({bagItemsCount}) => {
    
//     return(
//         <header className="p-3 text-bg-white" style={{width: '100vw', height: '80px', marginBottom: '50px'}}>
//     <div className="container-fluid">
//       <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
//       <a href="#">
//       <img src="public/myntra.png" alt="Myntra Logo" className="myntra-logo" style={{ width: '150px', height: 'auto', marginRight: '25px' }}/>
//       </a>

//         <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0 ">
//           <li><a href="#" className="nav-link px-2 text-dark changeble" style={{ fontSize: '20px',fontWeight: 'bold', marginRight: '20px' }}>MEN</a></li>
//           <li><a href="#" className="nav-link px-2 text-dark changeble"style={{ fontSize: '20px',fontWeight: 'bold', marginRight: '20px' }}>WOMEN</a></li>
//           <li><a href="#" className="nav-link px-2 text-dark changeble"style={{ fontSize: '20px',fontWeight: 'bold', marginRight: '20px' }}>KIDS</a></li>
//           <li><a href="#" className="nav-link px-2 text-dark changeble"style={{ fontSize: '20px', fontWeight: 'bold', marginRight: '20px'}}>HOME & LIVING</a></li>
//           <li><a href="#" className="nav-link px-2 text-dark changeble"style={{ fontSize: '20px', fontWeight: 'bold', marginRight: '20px' }}>STUDIO</a></li>
//         </ul>

//         <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search" >
//           <input type="search" className="form-control form-control-dark text-bg-white" placeholder="Search for product, brands and more.." aria-label="Search" style={{ width: '400px', marginLeft:'20px', height: '50px' }}/>
//         </form>

//         <div className="text-end d-flex flex-row align-items-center">

//         <div style={{ margin: '0 10px' }}>
//               <CgProfile size={30} /><br />
//               <h5>Profile</h5>
//             </div>

//             <div style={{ margin: '10px' }}>
//               <FaRegHeart size={30} /><br />
//               <h5>Whislist</h5>
//             </div>
        
//             <div style={{ margin: ' 10px' }}>
//               <MdOutlineShoppingBag size={30} /><br />
//               <h5>Bag</h5>
//               <span style={{ position: "absolute", top: 0, right: 0, backgroundColor: "red", color: "white", borderRadius: "50%", padding: "2px 5px", fontSize: "12px" }}>
//                 {bagItemsCount}
//               </span>
//             </div>
//         </div>
//       </div>
//     </div>
//   </header>
//     )
// }

// export default Header;