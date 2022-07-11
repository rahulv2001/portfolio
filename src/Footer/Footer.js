// eslint-disable-next-line
import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer(){
    return (
        <div>
            <div className="footer">
                <div className="footer-container">
                    <div className="message-for-users">
                        <span>
                        Please contact me in any way <br /> you like.
                        </span>
                    </div>
                    <div className="social-links">
                        <div className="social-links-h">
                            Social
                        </div>
                        <div className="social-links-items">
                            <a rel="noreferrer" href="https://www.facebook.com" target='_blank'>Facebook</a>
                            <a rel="noreferrer" href="https://www.twitter.com" target='_blank'>Twitter</a>
                            <a rel="noreferrer" href="https://www.linkedin.com" target='_blank'>LinkedIn</a>
                            <a rel="noreferrer" href="https://www.instagram.com" target='_blank'>Instagram</a>
                            <a rel="noreferrer" href="https://www.github.com" target='_blank'>Github</a>
                            <a rel="noreferrer" href="https://www.youtube.com" target='_blank'>YouTube</a>
                        </div>
                    </div>
                    <div className="social-links">
                        <div className="social-links-h">
                            Contact
                        </div>
                        <div className="social-links-items">
                            <a rel="noreferrer" href="mailto: rahulsaidupur232103@gmail.com" target='_blank'>Mail</a>
                            <a rel="noreferrer" href="https://telegram.org" target='_blank'>Telegram</a>
                            <Link to="">Whatsapp</Link>
                            <Link to="">+91 638 7039974</Link>
                        </div>
                    </div>
                    <div className="footer-menu social-links">
                        <div className="footer-menu-h social-links-h">
                            Other Menu
                        </div>
                        <div className="footer-menu-links social-links-items">
                            <p className="footer-menu-links-items">Home.</p>
                            <p className="footer-menu-links-items">About.</p>
                            <p className="footer-menu-links-items">Projects.</p>
                            <p className="footer-menu-links-items">Contact.</p>
                        </div>
                    </div>
                    <div className="footer-btn">
                        <Link to="/" className="footer-btn-a">Get Started!</Link>
                    </div>
                </div>
                <div className="footer-bottom">
                    <div className="left-footer-bottom">
                        <p>India</p>
                    </div>
                    <div className="right-footer-bottom">
                        <p>2022. Rahul Vishwakarma. ALL RIGHT RESERVED.</p>
                    </div>
                </div>
            </div>
            {/* <div className="footer-ticker">
                <div className="footer-ticker-item">&nbsp; - Rahul Vishwakarma</div>
                <div className="footer-ticker-item">&nbsp; - Rahul Vishwakarma</div>
                <div className="footer-ticker-item">&nbsp; - Rahul Vishwakarma</div>
                <div className="footer-ticker-item">&nbsp; - Rahul Vishwakarma</div>
                <div className="footer-ticker-item">&nbsp; - Rahul Vishwakarma</div>
                <div className="footer-ticker-item">&nbsp; - Rahul Vishwakarma</div>
                <div className="footer-ticker-item">&nbsp; - Rahul Vishwakarma</div>
                <div className="footer-ticker-item">&nbsp; - Rahul Vishwakarma</div>
                <div className="footer-ticker-item">&nbsp; - Rahul Vishwakarma</div>
                <div className="footer-ticker-item">&nbsp; - Rahul Vishwakarma</div>
                <div className="footer-ticker-item">&nbsp; - Rahul Vishwakarma</div>
                <div className="footer-ticker-item">&nbsp; - Rahul Vishwakarma</div>
                <div className="footer-ticker-item">&nbsp; - Rahul Vishwakarma</div>
                <div className="footer-ticker-item">&nbsp; - Rahul Vishwakarma</div>
                <div className="footer-ticker-item">&nbsp; - Rahul Vishwakarma</div>
                <div className="footer-ticker-item">&nbsp; - Rahul Vishwakarma</div>
                <div className="footer-ticker-item">&nbsp; - Rahul Vishwakarma</div>
                <div className="footer-ticker-item">&nbsp; - Rahul Vishwakarma</div>
                <div className="footer-ticker-item">&nbsp; - Rahul Vishwakarma</div>
                <div className="footer-ticker-item">&nbsp; - Rahul Vishwakarma</div>
            </div> */}
        </div>
    )
}

export default Footer;