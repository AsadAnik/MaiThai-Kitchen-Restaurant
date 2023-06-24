import Link from 'next/link';
import { useRouter } from 'next/router';

const NavigationBar = () => {
    const router = useRouter();

    return (
        <nav className="navbar navbar-expand-lg navbar-dark sticky-top" >
            <div className="container">
                <button
                    className="navbar-toggler m-1"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon" />
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav m-auto">
                        {/* ----- HOME ----- */}
                        <li className={`nav-item ${router.pathname === '/' && 'active'}`}>
                            <Link
                                className={`nav-link ${router.pathname === '/' && 'active-now'}`}
                                href="/"
                            >
                                home
                            </Link>
                        </li>

                        {/* ---- FOOD ORDER ---- */}
                        <li className={`nav-item ${router.pathname === '/foodOrder' && 'active'}`}>
                            <Link
                                className={`nav-link ${router.pathname === '/foodOrder' && 'active-now'}`}
                                href="/foodOrder"
                            >
                                foods menu
                            </Link>
                        </li>

                        {/* ----- FOOD MENU ---- */}
                        <li className={`nav-item ${router.pathname === '/packageOrder' && 'active'}`}>
                            <Link
                                className={`nav-link ${router.pathname === '/packageOrder' && 'active-now'}`}
                                href="/packageOrder"
                            >
                                packages menu
                            </Link>
                        </li>

                        {/* ----- LOGIN & REGISTER ---- */}
                        <li className={`nav-item ${router.pathname === '/login' || router.pathname === '/register' ? 'active' : ''}`}>
                            <Link
                                className={`nav-link ${router.pathname === '/login' || router.pathname === '/register' ? 'active-now' : ''}`}
                                href="/login"
                            >
                                login &amp; register
                            </Link>
                        </li>

                        {/* ----- ABOUT US ---- */}
                        <li className={`nav-item ${router.pathname === '/aboutUs' && 'active'}`}>
                            <Link
                                className={`nav-link ${router.pathname === '/aboutUs' && 'active-now'}`}
                                href="/aboutUs"
                            >
                                about us
                            </Link>
                        </li>

                        {/* ----- CONTACT US ---- */}
                        <li className={`nav-item ${router.pathname === '/contactUs' && 'active'}`}>
                            <Link
                                className={`nav-link ${router.pathname === '/contactUs' && 'active-now'}`}
                                href="/contactUs"
                            >
                                contact us
                            </Link>
                        </li>

                        {/* ----- TERM & POLICY ---- */}
                        <li className={`nav-item ${router.pathname === '/termsPolicy' && 'active'}`}>
                            <Link
                                className={`nav-link ${router.pathname === '/termsPolicy' && 'active-now'}`}
                                href="/termsPolicy"
                            >
                                terms &amp; policy
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default NavigationBar;