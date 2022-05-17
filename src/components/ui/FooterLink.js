import React from "react";

const FooterLink = () => {
    return (
        <footer className="bg-white text-center text-lg-start bg-light text-muted">
            <section>
                <div className="container text-center text-md-start mt-5">
                    <div className="row mt-3">
                        <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mb-4">
                            <h6 className="text-uppercase fw-bold">PURPLLE</h6>
                            <p className="text-reset">
                                <a href="#!">About Us</a>
                            </p>
                            <p className="text-reset">
                                <a href="#!">Our Team</a>
                            </p>
                            <p className="text-reset">
                                <a href="#!">Careers</a>
                            </p>
                            <p className="text-reset">
                                <a href="#!">Press</a>
                            </p>
                            <p className="text-reset">
                                <a href="#!">Sitemap</a>
                            </p>
                        </div>

                        <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mb-4">
                            <h6 className="text-uppercase fw-bold">
                                PURPLLE BUSINESS
                            </h6>
                            <p className="text-reset">
                                <a href="#!">Sell on Purplle</a>
                            </p>
                        </div>

                        <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mb-4">
                            <h6 className="text-uppercase fw-bold">
                                POLICY INFO
                            </h6>
                            <p className="text-reset">
                                <a href="#!">Privacy policy</a>
                            </p>
                            <p className="text-reset">
                                <a href="#!">Terms of Use</a>
                            </p>
                            <p className="text-reset">
                                <a href="#!">Return and Cancellation Policy</a>
                            </p>
                        </div>
                        <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                            <h6 className="text-uppercase fw-bold">
                                NEED HELP?
                            </h6>
                            <p className="text-reset">
                                <a href="#!">FAQ'S</a>
                            </p>
                            <p className="text-reset">
                                <a href="#!">Contact Us</a>
                            </p>
                        </div>
                    </div>
                    <hr />
                    <div className="row mt-3">
                        <div className="col-md-1 col-lg-1 col-xl-1 mx-auto mb-4">
                            <h6 className="text-uppercase fw-bold">PAYMENT</h6>
                        </div>

                        <div className="col-md-5 col-lg-5 col-xl-5 mx-auto mb-4">
                            <img
                                className="banking-img"
                                src="images/banking.webp"
                                alt="banking"
                            />
                        </div>

                        <div className="col-md-1 col-lg-1 col-xl-1 mx-auto mb-4">
                            <h6 className="text-uppercase fw-bold">CONNECT</h6>
                        </div>
                        <div className="col-md-5 col-lg-5 col-xl-5 mx-auto mb-4">
                            <section className="mb-4">
                                <div className="nav-icons col-lg-3 col-md-3 col-sm-3 col-xs-3">
                                    <ul className="social-network social-circle">
                                        <li className="icons1">
                                            <a
                                                href="#!"
                                                className="icon-section icoFacebook"
                                                title="Facebook"
                                            >
                                                <i class="fa-brands fa-facebook"></i>
                                            </a>
                                        </li>
                                        <li className="icons1">
                                            <a
                                                href="#!"
                                                className="icon-section icoTwitter"
                                                title="Twitter"
                                            >
                                                <i class="fa-brands fa-twitter"></i>
                                            </a>
                                        </li>
                                        <li className="icons1">
                                            <a
                                                href="#!"
                                                className="icon-section icoGoogle"
                                                title="Wifi"
                                            >
                                                <i class="fa-brands fa-google-plus-g"></i>
                                            </a>
                                        </li>
                                        <li className="icons1">
                                            <a
                                                href="#!"
                                                className="icon-section icoLinkedin"
                                                title="Linkedin"
                                            >
                                                <i class="fa-brands fa-linkedin"></i>
                                            </a>
                                        </li>
                                        <li className="icons1">
                                            <a
                                                href="#!"
                                                className="icon-section icoPinterest"
                                                title="Wifi"
                                            >
                                                <i class="fa-brands fa-pinterest"></i>
                                            </a>
                                        </li>
                                        <li className="icons1">
                                            <a
                                                href="#!"
                                                className="icon-section icoEmail"
                                                title="Wifi"
                                            >
                                                <i class="fa-solid fa-envelope"></i>
                                            </a>
                                        </li>
                                        <li className="icons1">
                                            <a
                                                href="#!"
                                                className="icon-section icoYoutube"
                                                title="Wifi"
                                            >
                                                <i class="fa-brands fa-youtube"></i>
                                            </a>
                                        </li>
                                        <li className="icons1">
                                            <a
                                                href="#!"
                                                className="icon-section icoInstagram"
                                                title="Wifi"
                                            >
                                                <i class="fa-brands fa-instagram"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </section>
                        </div>
                    </div>
                    <div className="container row mt-3 copyright">
                        Copyright © 2020 Purplle. All rights reserved.
                    </div>
                </div>
            </section>
        </footer>
    );
};

export default FooterLink;
