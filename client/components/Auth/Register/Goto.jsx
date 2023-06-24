import React from 'react';
import Link from 'next/link';

export default function GotoRegister() {
    return (
        <>
            <div className="register-section">
                <form action className="form-section" style={{ marginRight: '2rem' }}>
                    {/* Form Label */}
                    <div className="form-label">
                        <h1 className="text-capitalize mb-4">register for first time user?</h1>
                        <p className="mb-4">
                            If you havn't any "MaiThai" account, you can register from here. And login with your account. You can
                            follow our terms here: <mark><a href="termsPolicy.html">termsPolicy@Maithai.uk</a></mark>
                        </p>
                    </div>
                    {/* Register Button */}
                    <div className="form-group">
                        {/* Button trigger modal */}
                        <Link href="/register" className="btn btn-lg btn-warning register-btn text-capitalize">
                            continue to register
                        </Link>
                    </div>
                </form>
            </div>
        </>
    )
}
