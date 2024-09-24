import { IoLogoInstagram } from "react-icons/io5";
import { ImFacebook2 } from "react-icons/im";
import { FaTwitter } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io5";

const Footer = () =>{
    return(
        
        <div className="container">
            <hr style={{ margin: '20px 0', border: '1px solid black', width:'100%' }} />
  <footer className="py-5 text-center">
    <div className="row ">
      <div className="col-6 col-md-2 mb-3">
        <h5>ONLINE SHOPPING</h5>
        <ul className="nav flex-column align-items-center">
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">MEN</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">WOMEN</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">KIDS</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">HOME & LIVING</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">STUDIO</a></li>
        </ul>
      </div>

      <div className="col-6 col-md-2 mb-3 text-center">
        <h5>CUSTOMER POLICIES</h5>
        <ul className="nav flex-column align-items-center">
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Contact Us</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">FAQ</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">T&C</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Terms Of Use</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Track Orders</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Shipping</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Cancellation</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Returns</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Privacy Policy</a></li>
        </ul>
      </div>

      <div className="col-6 col-md-2 mb-3">
        <h5>USEFUL LINKS</h5>
        <ul className="nav flex-column">
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Blog</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Careers</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Site Map</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Corporate Information</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Whitehat</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Cleartrip</a></li>
        </ul>
    </div>



    <div className="col-6 col-md-2 mb-3">
        <h5>PRODUCTS</h5>
        <ul className="nav flex-column">
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Clothes</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Watches</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Home Decore</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Electronics</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Mobile</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Accessories</a></li>
        </ul>
    </div>


      <div className="row mt-4">
          <div className="col text-center">
            <h4 className="mb-3">KEEP IN TOUCH</h4>
            <div className="d-flex justify-content-center">
              <IoLogoInstagram size={30} className="me-3" />
              <ImFacebook2 size={30} className="me-3" />
              <FaTwitter size={30} className="me-3" />
              <IoLogoYoutube size={30} className="me-3" />
            </div>
          </div>
        </div>



        




     
    </div>

    <div className="container">
    <hr style={{ margin: '20px 0', border: '1px solid black', width:'100%', marginRight:'50%' }} />
      <h5>© 2024 Gautam Bhawsar, Inc. All rights reserved.</h5>
      <ul className="list-unstyled d-flex">
        <li className="ms-3"><a className="link-body-emphasis" href="#"><svg className="bi" width="24" height="24"><use xlinkHref="#twitter"></use></svg></a></li>
        <li className="ms-3"><a className="link-body-emphasis" href="#"><svg className="bi" width="24" height="24"><use xlinkHref="#instagram"></use></svg></a></li>
        <li className="ms-3"><a className="link-body-emphasis" href="#"><svg className="bi" width="24" height="24"><use xlinkHref="#facebook"></use></svg></a></li>
      </ul>
    </div>
  </footer>
</div>


    )
}

export default Footer;