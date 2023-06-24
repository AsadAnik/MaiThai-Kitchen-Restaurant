import React from 'react';
import Link from 'next/link';

export default function GotoLogin() {
    return (
        <>
            <div className="login-section-2 ml-2 mr-4">
                <div className="form-section" style={{ marginLeft: '2rem' }}>
                    {/* Labels for Login */}
                    <div className="form-label">
                        <h1 className="text-capitalize">already have an account ?</h1>
                    </div>
                    <div className="form-label mt-4 mb-4">
                        <p>
                            Go to login section to login now. If you are have already an account. You can know our users login &amp;
                            register policy. And follow our terms (Changing Or Accessing Your Information) of user registration &amp;
                            login from here: <mark><a href="termsPolicy.html">termsPolicy@Maithai.uk</a></mark>
                        </p>
                    </div>

                    {/* Button for Submit Login */}
                    <Link href="/login" className="btn login-btn">Go For Login</Link>
                </div>
            </div>
        </>
    )
}
