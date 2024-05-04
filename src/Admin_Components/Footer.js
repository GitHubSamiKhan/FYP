import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer" style={{ color: 'gray', borderTop: '1px solid gray' }}>
            <div className="footer-content">
                <div className="footer-text">
                    <small> Copyright &copy; 2024 - Abdul Wali Khan University Mardan | Alumni Tracking Platfrom.</small>
                </div>
                <div className="social-icons">
                    Add your social media icons here
                    <a href="#" className="social-icon">
                        <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="#" className="social-icon">
                        <i className="fab fa-twitter"></i>
                    </a>
                    <a href="#" className="social-icon">
                        <i className="fab fa-instagram"></i>
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

