import "./Footer.css";
import plant from "../../assets/plant.svg";
import applePay from "../../assets/applePay.svg";
import discover from "../../assets/discover.svg";
import mastercard from "../../assets/mastercard.svg";
import securePayment from "../../assets/securePayment.svg";
import visa from "../../assets/visa.svg";
const Footer = function () {
    return <div className="footer">
        <div className="footerContent">
            <div className="description">
              <div className="footerLogo">
                <img className="footerPlantLogo" src={plant}/>
                <h3>Ecobazar</h3>
              </div>
              <div className="footerLogoDescription">
                <p>Morbi cursus porttitor enim lobortis molestie. Duis gravida turpis dui, eget bibendum magna congue nec.</p>
              </div>
              <div className="footerContact">
                <div className="footerPhone">(219) 555-0114</div>
                <span>or</span>
                <div className="footerEmail">Proxy@gmail.com</div>
              </div>

            </div>
            <div className="myAccount col">
            <h5><a>My Account</a></h5>
                <ul>
                    <li><a>My Account</a></li>
                    <li><a>Order History</a></li>
                    <li><a>Shopping Cart</a></li>
                    <li><a>Wishlist</a></li>
                </ul>
            </div>
            <div className="helps col">
                <h5><a>Helps</a></h5>
                <ul>
                    <li><a>Contact</a></li>
                    <li><a>Faqs</a></li>
                    <li><a>Terms & Conditions</a></li>
                    <li><a>Privacy Policy</a></li>
                </ul></div>
            <div className="proxy col">
            <h5><a>Proxy</a></h5>
                <ul>
                    <li><a>About</a></li>
                    <li><a>Shop</a></li>
                    <li><a>Product</a></li>
                    <li><a>Track Order</a></li>
                </ul>
            </div>
            <div className="categories col">
            <h5><a>Categories</a></h5>
                <ul>
                    <li><a>Fruit & Vegetables</a></li>
                    <li><a>Meat & Fish</a></li>
                    <li><a>Bread & Bakery</a></li>
                    <li><a>Beauty & Health</a></li>
                </ul>
            </div>
        </div>
        <div className="copyright">
            <div className="copyrightText">
                <p>Ecobazar eCommerce © 2021. All Rights Reserved</p>
            </div>
            <div className="copyrightImages">
                <img src={applePay}/>
                <img src={visa}/>
                <img src={discover}/>
                <img src={mastercard}/>
                <img src={securePayment}/>
            </div>
        </div>
    </div>
};

export default Footer;
