import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { loginAuth } from '@/redux/actions/authActions';
import { useRouter } from 'next/router';


export default function Login() {
    const dispatch = useDispatch();
    const [loginAuthData, setLoginAuthData] = useState({
        email: '',
        password: '',
    });

    const { loading, isAuth, message, error } = useSelector((state) => state.login);
    const router = useRouter();

    useEffect(() => {
        if (error) {
            toast.error(`${error}`, {
                position: "top-center",
                autoClose: 2000,
            });
        }

        if (isAuth) {
            toast.success(`${message}`, {
                position: "top-center",
                autoClose: 2000,
            });

            router('/index')
        }
    }, [isAuth, error, message]);

    /**
     * ===== Handle Change Auth Data =====
     * @param {object} event 
     */
    const handleChangeAuthData = (event) => {
        const { value, name } = event.target;
        setLoginAuthData({ ...loginAuthData, [name]: value });
    };

    /**
     * ===== Handle Submit Auth Data =====
     * @param {object} event 
     */
    const handleSubmitAuthLogin = (event) => {
        event.preventDefault();
        console.log("Reqeusting for login -- ");
        dispatch(loginAuth({ email: loginAuthData.email, password: loginAuthData.password }));
    };


    return (
        <>
            {/*---------- Login Div Column ----------*/}
            <div className="login-section ml-2 mr-4">
                <form className="form-section" style={{ marginLeft: '2rem' }} onSubmit={handleSubmitAuthLogin}>
                    {/* Labels for Login */}
                    <div className="form-label">
                        <h1 className="text-capitalize">user login</h1>
                    </div>

                    {/* Email On Login */}
                    <div className="form-group mt-4">
                        <input
                            type="email"
                            name="email"
                            className="form-control"
                            placeholder="Email"
                            onChange={handleChangeAuthData}
                        />
                    </div>

                    {/* Password On Login */}
                    <div className="form-group">
                        <input
                            type="password"
                            name="password"
                            className="form-control"
                            placeholder="password"
                            onChange={handleChangeAuthData}
                        />
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
