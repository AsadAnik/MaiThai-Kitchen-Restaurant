import React from 'react'

export default function Register() {
    return (
        <>
            <div className="register-section-2">
                <form action className="form-section" style={{ marginRight: '2rem' }}>
                    {/* Form Label */}
                    <div className="form-label">
                        <h1 className="text-capitalize mb-4">register now !</h1>
                    </div>
                    {/* First & Last Name */}
                    <div className="row">
                        <div className="form-group col-md-6">
                            <input type="text" className="form-control" placeholder="First Name" />
                        </div>
                        <div className="form-group col-md-6">
                            <input type="text" className="form-control" placeholder="Last Name" />
                        </div>
                    </div>
                    {/* Address On Regiser */}
                    <div className="form-group">
                        <textarea className="form-control" placeholder="Addresss" name id cols={30} rows={5} defaultValue={""} />
                    </div>
                    {/* Email On Register */}
                    <div className="form-group">
                        <input type="email" className="form-control" placeholder="Email" />
                    </div>
                    {/* Password On Register */}
                    <div className="form-group">
                        <input type="password" className="form-control" placeholder="Password" />
                    </div>
                    {/* Re_Password On Register */}
                    <div className="form-group">
                        <input type="password" className="form-control" placeholder="Re-password" />
                    </div>
                    {/* Number Register */}
                    <div className="form-group">
                        <input type="number" className="form-control" placeholder="Phone Number" />
                    </div>
                    {/* Register Button */}
                    <div className="form-group">
                        {/* Button trigger modal */}
                        <a href="register.html" className="btn btn-lg btn-warning register-btn text-capitalize">
                            Register
                        </a>
                    </div>
                </form>
            </div>
        </>
    )
}
