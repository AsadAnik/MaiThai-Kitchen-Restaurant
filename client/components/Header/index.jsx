import Link from "next/link";
import { FaPhoneAlt, FaShoppingCart, FaClock } from 'react-icons/fa';

const Header = () => {
    return (
        <header>
            <div className="container">
                {/*--Left Side Of Header--*/}
                <div className="leftHeaderItem">
                    <img src="/logo/logo.png" alt="Mai Thai" />
                </div>

                {/*--Right Side Of Header--*/}
                <div className="d-flex rightHeaderItem">
                    <div className="items mr-4 rightHeaderItem">
                        {/* Top Menu */}
                        <div className="topMenu">
                            <ul>
                                <li><Link href="/contactUs" className="text-capitalize">request call back</Link></li>
                                <li><Link href="/register" className="text-capitalize">register</Link></li>
                                <li><Link href="/login" className="text-capitalize">login</Link></li>
                            </ul>
                        </div>

                        {/* Phone Contact */}
                        <div className="mt-3 top-contact">
                            <Link href="#bottom-footer">
                                <div className="phone-num-bar">
                                    <FaPhoneAlt size={18} color="rgb(210, 35, 42)" />
                                </div>
                            </Link>

                            {/* Carts Total */}
                            <Link href="/cart">
                                <div className="ml-3 cart-bar">
                                    <FaShoppingCart size={18} color="rgb(210, 35, 42)" />
                                    <span className="badge badge-light">4</span>
                                </div>
                            </Link>

                            {/* Clock for Opening and closing time */}
                            <Link href="#upper-footer">
                                <div className="ml-3 buisness-hour">
                                    <FaClock size={18} color="rgb(210, 35, 42)" />
                                </div>
                            </Link>
                        </div>
                    </div>

                    {/* QR-Code Section */}
                    <div className="qr-code">
                        <img className="img img-thumbnail img-qr-code img-fluid" src="/logo/qr-code.png" alt="QR-CODE" />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;