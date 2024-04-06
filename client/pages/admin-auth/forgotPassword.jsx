
import React, { useState,useEffect,useRef } from 'react'
import styles from '../../styles/adminLogin.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { forgotPasswordAuth } from '@/redux/actions/authActions';
import { adminOtpAuth } from '@/redux/actions/authActions';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';


const ForgotPassword = () => {
	
	const length = 6; // Assuming OTP length is 6 digits
    const [otp, setOtp] = useState(new Array(length).fill(''));
    const inputRef = useRef([]);

	const [adminForgotData, setAdminForgotData] = useState({
		email: ''
	  })
    

    const dispatch = useDispatch();
    const { loading, isAuth, message, error } = useSelector((state) => state.forgotPassword)
    const { isAuth: optAuth, message: otpMessage, error: otpError, loading: adminOtpLoading, resetPasswordToken:token } = useSelector((state) => state.adminOpt);
	const route = useRouter()
	console.log('this is token',token)
	console.log(optAuth)

    //     /**
    //  * ===== Handle Otp Request =====s
    //  * @param {object} event 
    //  */

    useEffect(() => {
        if (inputRef.current[0]) {
            inputRef.current[0].focus();
        }
    }, []);

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

            // route('resetPassword')
        }
    }, [isAuth, error, message]);

	useEffect(() => {
        if (error) {
            toast.error(`${error}`, {
                position: "top-center",
                autoClose: 2000,
            });
        }

        if (optAuth) {
            toast.success(`${message}`, {
                position: "top-center",
                autoClose: 2000,
            });

            route.push('resetPassword')
        }
    }, [optAuth, otpError, otpMessage]);

    const handleSubmit = (e) => {
		e.preventDefault();		
		dispatch(forgotPasswordAuth({email: adminForgotData.email}))
    }

	const handleVerify = () => {
		const otpPlaceholder = [...otp]; 
        const otpNumber = parseInt(otpPlaceholder.join(''))
		dispatch(adminOtpAuth(otpNumber))
	}

    const handleChange = (index, e) => {
        const {value, name} = e.target;
        if (isNaN(value)) return;

        const newOtp = [...otp];
        // allow only one input
        newOtp[index] = value.substring(value.length - 1);
        setOtp(newOtp);

        // move to next input if current field is filled
        if (value && index < length - 1 && inputRef.current[index + 1]) {
            inputRef.current[index + 1].focus();
        }

		// setAdminLoginData({ ...loginAuthData, [name]: value });
		setAdminForgotData({...adminForgotData, [name]: value})
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
				{!isAuth ? 
				
				<div className={styles.main}>
					<div className={styles.login}>
						<img
							src="/logo/logo.png"
							alt="image"
							className={styles.login__bg}
						/>

						<form
							action=""
							className={styles.login__form}
						>
							<h1 className={styles.login__title}>Login</h1>

							<div className={styles.login__inputs}>
								<div className={styles.login__box}>
									<input
										type="email"
										value={adminForgotData.email}
										placeholder="Email"
										required
										onChange={(e) => setAdminForgotData({ ...adminForgotData, email: e.target.value })}
										className={styles.login__input}
									/>
									<i className="ri-mail-fill"></i>
								</div>
							</div>

							<button
								disabled={loading? true: false}
								onClick={handleSubmit}
								type="submit"
								className={styles.login__button}
							>
								Submit
							</button>
						</form>
				</div>
			</div>
				:
			<div>
				<div className={styles.main}>
				<div className={styles.login}>
					<img
						src="/logo/logo.png"
						alt="image"
						className={styles.login__bg}
					/>
						<h1 className="text-capitalize">Verify Your Account</h1>
					<form
						action=""
						className={styles.login__form}
					>
						<h1 className={styles.login__title}>Verify</h1>

						<div className={styles.login__inputs}>
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
						</div>

						<button
							disabled={adminOtpLoading ? true: false}
							type="button"
							className={styles.login__button}
							onClick={handleVerify}
						>
							Veify
						</button>
					</form>
				</div>
				</div>
			</div>
			}
		</div>
	)
}

export default ForgotPassword
