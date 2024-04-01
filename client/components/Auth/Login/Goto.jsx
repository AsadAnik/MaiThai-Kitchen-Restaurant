import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import Link from 'next/link';
import { userOtp } from '@/redux/actions/userActions'

export default function GotoLogin() {
    const length = 6; // Assuming OTP length is 6 digits
    const [otp, setOtp] = useState(new Array(length).fill(''));
    const inputRef = useRef([]);
    

    const dispatch = useDispatch();
    const { loading: otpLoading } = useSelector((state) => state.userOtp); 
    const { isAuth } = useSelector((state) => state.register);

        /**
     * ===== Handle Otp Request =====s
     * @param {object} event 
     */

    useEffect(() => {
        if (inputRef.current[0]) {
            inputRef.current[0].focus();
        }
    }, []);

    const handleSubmit = () => {
        const otpPlaceholder = [...otp]; 
        const otpNumber = parseInt(otpPlaceholder.join(''))
        dispatch(userOtp(otpNumber))
        
    }

    const handleChange = (index, e) => {
        const value = e.target.value;
        if (isNaN(value)) return;

        const newOtp = [...otp];
        // allow only one input
        newOtp[index] = value.substring(value.length - 1);
        setOtp(newOtp);

        // move to next input if current field is filled
        if (value && index < length - 1 && inputRef.current[index + 1]) {
            inputRef.current[index + 1].focus();
        }
    };

    const handleClick = (index) => {
        inputRef.current[index].setSelectionRange(1, 1);

        if (index > 0 && !otp[index - 1]) {
            inputRef.current[index - 1].focus();
        }
    };

    const handleKeyDown = (index, e) => {
        if (e.key === 'Backspace' && !otp[index] && index > 0 && inputRef.current[index - 1]) {
            inputRef.current[index - 1].focus();
        }
    };

    return (
        <div>
        {isAuth ? (
            <div className='form-section container'>
                    <div className="login-section-2 ml-2 mr-4">
                        <div className="form-label">
                            <h1 className="text-capitalize">Verify Your Account</h1>
                        </div>
                            {otp.map((value, index) => (
                                <input
                                    key={index}
                                    type="text"
                                    ref={(input) => (inputRef.current[index] = input)}
                                    value={value}
                                    onChange={(e) => handleChange(index, e)}
                                    onClick={() => handleClick(index)}
                                    onKeyDown={(e) => handleKeyDown(index, e)}
                                    style={{ width: '40px', height: '40px', margin: '10px', textAlign: 'center', fontSize: '1.2em' }}
                                />
                            ))}
                        <button onClick={handleSubmit} style={{backgroundColor: '#FFC107', display: 'flex', width: '62%', justifyContent: 'center'}} className="btn login-btn">Verify</button>
                    </div>
               </div>
            ) : (
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
                
            )}
        </div>
    );
}
