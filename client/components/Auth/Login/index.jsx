import React from 'react'

export default function Login() {
    return (
        <>
            {/*---------- Login Div Column -------*/}
            <div className="login-section ml-2 mr-4">
                <form action className="form-section" style={{ marginLeft: '2rem' }}>
                    {/* Labels for Login */}
                    <div className="form-label">
                        <h1 className="text-capitalize">user login</h1>
                    </div>
                    {/* Email On Login */}
                    <div className="form-group mt-4">
                        <input type="email" className="form-control" placeholder="Email" />
                    </div>
                    {/* Password On Login */}
                    <div className="form-group">
                        <input type="password" className="form-control" placeholder="password" />
                    </div>
                    {/* Remember Me Checkbox! */}
                    <div className="form-group form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                        <label className="form-check-label" htmlFor="exampleCheck1">Remember me!</label>
                    </div>
                    {/* Button for Submit Login */}
                    <button type="submit" className="btn login-btn">login</button>
                </form>
            </div>
        </>
    )
}
