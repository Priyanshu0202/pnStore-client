import React from "react";
import "./Footer.scss";
import {FaLocationArrow, FaMobileAlt, FaEnvelope} from "react-icons/fa";
import Payment from "../../assets/payments.png"

const Footer = () => {
    return <footer className="footer">
        <div className="footer-content">
            <div className="col">
                <div className="title">About</div>
                <div className="text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus quam laboriosam itaque consequatur eius error quaerat saepe, nobis odio totam?Lorem ipsum dolor sit, amet consectetur adipisicing elit. At, molestiae?</div>
            </div>
            <div className="col">
                <div className="title">Content</div>
                <div className="c-item">
                    <FaLocationArrow />
                    <div className="text">
                        kayaloram Rd, Punnamada, Kottankulangara, Alappuzha, Mizoram, 890009
                    </div>
                </div>

                <div className="title">Content</div>
                <div className="c-item">
                    <FaMobileAlt />
                    <div className="text">
                        Phone: 0471 272 0261
                    </div>
                </div>

                <div className="title">Content</div>
                <div className="c-item">
                    <FaEnvelope />
                    <div className="text">
                        Email: pnstore@dev.com
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="title">Categories</div>

                <span className="text">Headphones</span>
                <span className="text">Smart Watches</span>
                <span className="text">Bluetooth Speaker</span>
                <span className="text">Wireless Earbuds</span>
                <span className="text">Home Theatre</span>
                <span className="text">Projectors</span>
            </div>
            <div className="col">
                <div className="title">Pages</div>
                <span className="text">Home</span>
                <span className="text">About</span>
                <span className="text">Privacy Policy</span>
                <span className="text">Returns</span>
                <span className="text">Terms & Conditions</span>
                <span className="text">Contact Us</span>
            </div>
        </div>
        <div className="bottom-bar">
            <div className="bottom-bar-content">
                <div className="text">
                    PNSTORE 2023 CREATED BY PRIYANSHU NEGI E-COMMERCE WEBSITE
                </div>
                <img src={Payment} alt="Payment image" />
            </div>
        </div>
    </footer>;
};

export default Footer;
