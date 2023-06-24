import { FaFacebookF, FaInstagram, FaYoutube, FaTwitter } from 'react-icons/fa';

export default function Footer() {
    return (
        <footer className="footer text-light">
            {/*-------- TOP black FOOTER ------*/}
            <div id="upper-footer" className="p-5">
                <div className="container">
                    {/* Footers Top Menu */}
                    <div className="row mb-4">
                        <div className="col-md-12 text-center">
                            <ul className="footer-top-menu">
                                <li>
                                    <a href="aboutUs.html">About</a>
                                    <span className="ml-2 mr-2 line"> - </span>
                                </li>
                                <li>
                                    <a href="termsPolicy.html">Refund Policy</a>
                                    <span className="ml-2 mr-2 line"> - </span>
                                </li>
                                <li>
                                    <a href="contactUs.html">Contact Us</a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div style={{ borderBottom: '1px dotted gray' }} />
                    {/* Two Section */}
                    {/* Address */}
                    <div className="row mb-2 footer-list-1st-heading mt-5">
                        <div className="col-md-12">
                            <h5 className="text-light text-capitalize">address :</h5>
                        </div>
                    </div>
                    <div className="row mb-4 footer-list-1st-row">
                        <div className="col-md-4 text-capitalize">
                            <ul>
                                <li>35 High street Cheshunt, Waltham Cross</li>
                                <li>EN80BS, UK.</li>
                            </ul>
                        </div>
                        <div className="col-md-4">
                            <ul>
                                <li>Phone: 01992 641133</li>
                                <li>E-mail: maithaikitchen@hotmail.com</li>
                            </ul>
                        </div>
                        <div className="col-md-4">
                            <ul>
                                <li>Company Registration Number: 12333551</li>
                                <li>VAT: 340075044</li>
                            </ul>
                        </div>
                    </div>
                    <br />

                    <div style={{ borderBottom: '1px dotted gray' }} />
                    {/* After Footers One Section */}
                    <div className="row mt-5 footer-list-2nd-row mb-5">
                        <div className="col-md-4 business-hour" id="time-table-bookmark">
                            <h5 className="text-capitalize mb-3">opening time:</h5>
                            <ul>
                                <li>
                                    <span>Sunday - Saturday (Everyday)</span>
                                </li>
                                <li>
                                    <span>Lunch Time</span>
                                    <div className="dotted-dateline ml-3 mr-3" />
                                    <span>12pm - 3pm</span>
                                </li>
                                <li>
                                    <span>Dinner Time</span>
                                    <div className="dotted-dateline ml-3 mr-3" />
                                    <span>5pm - 10pm</span>
                                </li>
                            </ul>
                        </div>

                        <div className="col-md-4 business-hour" id="time-table-bookmark">
                            <h5 className="text-capitalize mb-3">delivery time:</h5>
                            <ul>
                                <li>
                                    <span>Everyday</span>
                                    <div className="dotted-dateline ml-3 mr-3" />
                                    <span>5pm - 10pm</span>
                                </li>
                            </ul>
                        </div>

                        {/* The Footers Business Card's  */}
                        <div className="col-md-4">
                            <h5 className="text-capitalize mb-3">Payment Methods:</h5>
                            <ul className="d-flex business-logo-section">
                                <li className="business-logo">
                                    <img className="paypal" src="/logo/paypal.png" alt />
                                </li>
                                <li className="business-logo">
                                    <img className="visa" src="/logo/visa.png" alt />
                                </li>
                                <li className="business-logo">
                                    <img className="master" src="/logo/master.png" alt />
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div style={{ borderBottom: '1px dotted gray' }} />
                    <div className="row mt-5">
                        <div className="col-md-12 text-center">
                            <span className="text-muted">
                                <small>© Copyright {new Date().getFullYear()}, Mai Thai Kitchen. All Rights Reserved</small>
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            {/*----- BOTTOM tomato FOOTER ------*/}
            <div id="bottom-footer" className="p-2">
                <div className="container">
                    <div className="row">
                        {/* Footer App Logo */}
                        <div className="col-md-4">
                            <div className="logo">
                                <img src="/logo/logo.png" alt />
                            </div>
                        </div>
                        {/* Footer SOCIAL ICONS */}
                        <div className="col-md-4 footer-social-icons" style={{ display: 'inline-flex', justifyContent: 'center' }}>
                            <div className="d-flex mt-4">
                                <a href="https://www.facebook.com/mai1thaikitchen" className="ml-4">
                                    <span className='icon-bg'>
                                        <FaFacebookF size={18} color="rgb(210, 35, 42)" />
                                    </span>
                                </a>
                                <a href="https://www.instagram.com/maithaikitchencheshunt" className="ml-4">
                                    <span className='icon-bg'>
                                        <FaInstagram size={18} color="rgb(210, 35, 42)" />
                                    </span>
                                </a>
                                <a href="https://youtube.com/channel/UCDHzPwaAsL3CORkpLSf-JEQ" className="ml-4">
                                    <span className='icon-bg'>
                                        <FaYoutube size={18} color="rgb(210, 35, 42)" />
                                    </span>
                                </a>
                                <a href className="ml-4">
                                    <span className='icon-bg'>
                                        <FaTwitter size={18} color="rgb(210, 35, 42)" />
                                    </span>
                                </a>
                            </div>
                        </div>
                        {/* QR-CODE Section */}
                        <div className="col-md-4 footer-qr-code" style={{ display: 'inline-flex', justifyContent: 'flex-end' }}>
                            <img className="img img-fluid img-qr-code img-thumbnail" src="/logo/qr-code.png" alt="QR-CODE" />
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
