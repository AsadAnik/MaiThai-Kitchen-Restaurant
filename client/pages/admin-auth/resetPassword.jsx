import React,{useState,useEffect} from 'react'
import styles from '../../styles/adminLogin.module.css' 
import { useDispatch, useSelector } from 'react-redux';
import { resetPasswordAuth } from '@/redux/actions/authActions';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { toast } from 'react-toastify';


const resetPassword = () => {

	const [adminLoginData, setAdminLoginData] = useState({
		password: '',
		confirmPassword: ''
	  })
	
	  const { loading, isAuth, message, error, } = useSelector((state) => state.resetPassword);
	  const [errors, setErrors] = useState({});
	  const route = useRouter()
	  const dispatch = useDispatch()
	
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
	
				route.push('admin-auth/login')
			}
		}, [isAuth, error, message]);

		const validateForm = () => {
			let newErrors = {};
			if (!adminLoginData.password) {
				newErrors.password = 'Password is required';
			} else if (!isValidPassword(adminLoginData.password)) {
				newErrors.password =
					'Password must be at least 8 characters long and contain at least one symbol, one number, one uppercase letter, and one lowercase letter';
			}
			if (!adminLoginData.confirmPassword) {
				newErrors.confirmPassword = 'Confirm password is required';
			} else if (adminLoginData.confirmPassword !== adminLoginData.password) {
				newErrors.confirmPassword = 'Passwords must match';
			}
	
			setErrors(newErrors);
	
			return Object.keys(newErrors).length === 0;
		};
	
		const isValidPassword = password => {
			// Regular expressions for password validation
			const symbolRegex = /[!@#$%^&*(),.?":{}|<>]/;
			const numberRegex = /[0-9]/;
			const upperCaseRegex = /[A-Z]/;
			const lowerCaseRegex = /[a-z]/;
			return (
				password.length >= 8 &&
				symbolRegex.test(password) &&
				numberRegex.test(password) &&
				upperCaseRegex.test(password) &&
				lowerCaseRegex.test(password)
			);
		};
	  
		 /**
		 * ===== Handle Change Auth Data =====
		 * @param {object} event 
		 */
	  const handleChangeAuthData = (event) => {
		const { value, name } = event.target;
		setErrors({ ...errors, [name]: '' });
		setAdminLoginData({ ...adminLoginData, [name]: value });

        if (name === 'password' || name === 'confirmPassword') {
          const otherField = name === 'password' ? 'confirmPassword' : 'password';
          if (value !== adminLoginData[otherField]) {
              setErrors({ ...errors, [otherField]: 'Passwords must match' });
          } else {
              setErrors({  [otherField]: '' });
          }
      	}
	  }

	  const handleBlur = event => {
        const { value, name } = event.target;
        // Show error with red border onBlur
        if (!value && !errors[name]) {
            setErrors({ ...errors, [name]: `${name} is required` });
        }
    };

    const inputClassName = fieldName => {
        return errors[fieldName] ? 'form-control input-error' : 'form-control';
    };
	
	   /**
		 * ===== Handle Submit Auth Data =====
		 * @param {object} event 
		 */
	  const handleSubmitAuthLogin = (event) => {
		event.preventDefault();
		const resetToken = localStorage.getItem('resetPasswordToken');
		console.log("Reqeusting for login -- ", adminLoginData, resetToken);
		// if(resetToken && adminLoginData.password && validateForm && isValidPassword){
		// 	dispatch(resetPasswordAuth({newPassword: adminLoginData?.password, resetToken }));
		// }

		if (resetToken && adminLoginData.password && validateForm() && isValidPassword(adminLoginData.password)) {
            dispatch(resetPasswordAuth({ newPassword: adminLoginData?.password, resetToken }));
        }
	};
	return (
		<div className={styles.main}>
			<div className={styles.login}>
				<img
					src="/logo/logo.png"
					alt="image"
					className={styles.login__bg}
				/>

				<form
					onSubmit={handleSubmitAuthLogin}
					action=""
					className={styles.login__form}
				>
					<h1 className={styles.login__title}>Reset</h1>

					<div className={styles.login__inputs}>
						<div className={styles.login__box}>
							<input
								type="password"
								name='password'
								placeholder="password"
								required
								value={adminLoginData.password}
								className={inputClassName('password')}
								onChange={handleChangeAuthData}
								onBlur={handleBlur}
							/>
							<i className="ri-mail-fill"></i>
                            {errors.password && <div className="error">{errors.password}</div>}
						</div>
						<div className={styles.login__box}>
							<input
								type="password"
								name='confirmPassword'
								placeholder="Conform Password"
								value={adminLoginData.confirmPassword}
								required
								className={inputClassName('confirmPassword')}
								onChange={handleChangeAuthData}
								onBlur={handleBlur}
							/>
							<i className="ri-mail-fill"></i>
                            {errors.confirmPassword && <div className="error">{errors.confirmPassword}</div>}
						</div>
					</div>

					<button type="submit" className={styles.login__button}>
						Submit
					</button>
				</form>
			</div>
		</div>
	)
}
export default resetPassword



// import React, { useState, useEffect } from 'react';
// import styles from '../../styles/adminLogin.module.css';
// import { useDispatch, useSelector } from 'react-redux';
// import { resetPasswordAuth } from '@/redux/actions/authActions';
// import { useRouter } from 'next/router';
// import Link from 'next/link';
// import { toast } from 'react-toastify';

// const ResetPassword = () => {
//     const [adminLoginData, setAdminLoginData] = useState({
//         password: '',
//         confirmPassword: ''
//     });

//     const { loading, isAuth, message, error } = useSelector((state) => state.resetPassword);
//     const [errors, setErrors] = useState({});
//     const route = useRouter();
//     const dispatch = useDispatch();

//     useEffect(() => {
//         if (error) {
//             toast.error(`${error}`, {
//                 position: 'top-center',
//                 autoClose: 2000,
//             });
//         }

//         if (isAuth) {
//             toast.success(`${message}`, {
//                 position: 'top-center',
//                 autoClose: 2000,
//             });

//             route.push('admin-auth/login');
//         }
//     }, [isAuth, error, message]);

//     const validateForm = () => {
//         let newErrors = {};
//         if (!adminLoginData.password) {
//             newErrors.password = 'Password is required';
//         } else if (!isValidPassword(adminLoginData.password)) {
//             newErrors.password =
//                 'Password must be at least 8 characters long and contain at least one symbol, one number, one uppercase letter, and one lowercase letter';
//         }
//         if (!adminLoginData.confirmPassword) {
//             newErrors.confirmPassword = 'Confirm password is required';
//         } else if (adminLoginData.confirmPassword !== adminLoginData.password) {
//             newErrors.confirmPassword = 'Passwords must match';
//         }

//         setErrors(newErrors);

//         return Object.keys(newErrors).length === 0;
//     };

//     const isValidPassword = (password) => {
//         const symbolRegex = /[!@#$%^&*(),.?":{}|<>]/;
//         const numberRegex = /[0-9]/;
//         const upperCaseRegex = /[A-Z]/;
//         const lowerCaseRegex = /[a-z]/;
//         return (
//             password.length >= 8 &&
//             symbolRegex.test(password) &&
//             numberRegex.test(password) &&
//             upperCaseRegex.test(password) &&
//             lowerCaseRegex.test(password)
//         );
//     };

//     const handleChangeAuthData = (event) => {
//         const { value, name } = event.target;
//         setErrors((prevErrors) => ({ ...prevErrors, [name]: '' }));
//         setAdminLoginData({ ...adminLoginData, [name]: value });
//     };

//     const handleBlur = (event) => {
//         const { value, name } = event.target;
//         if (!value && !errors[name]) {
//             setErrors((prevErrors) => ({ ...prevErrors, [name]: `${name} is required` }));
//         }
//     };

//     const inputClassName = (fieldName) => {
//         return errors[fieldName] ? 'form-control input-error' : 'form-control';
//     };

//     const handleSubmitAuthLogin = (event) => {
//         event.preventDefault();
//         const resetToken = localStorage.getItem('resetPasswordToken');
//         console.log('Requesting for login -- ', adminLoginData, resetToken);
//         if (resetToken && adminLoginData.password && validateForm() && isValidPassword(adminLoginData.password)) {
//             dispatch(resetPasswordAuth({ newPassword: adminLoginData?.password, resetToken }));
//         }
//     };

//     return (
//         <div className={styles.main}>
//             <div className={styles.login}>
//                 <img src="/logo/logo.png" alt="image" className={styles.login__bg} />

//                 <form onSubmit={handleSubmitAuthLogin} action="" className={styles.login__form}>
//                     <h1 className={styles.login__title}>Reset</h1>

//                     <div className={styles.login__inputs}>
//                         <div className={styles.login__box}>
//                             <input
//                                 type="password"
//                                 name="password"
//                                 placeholder="Password"
//                                 required
//                                 value={adminLoginData.password}
//                                 className={inputClassName('password')}
//                                 onChange={handleChangeAuthData}
//                                 onBlur={handleBlur}
//                             />
//                             {errors.password && <div className="error">{errors.password}</div>}
//                         </div>
//                         <div className={styles.login__box}>
//                             <input
//                                 type="password"
//                                 name="confirmPassword"
//                                 placeholder="Confirm Password"
//                                 value={adminLoginData.confirmPassword}
//                                 required
//                                 className={inputClassName('confirmPassword')}
//                                 onChange={handleChangeAuthData}
//                                 onBlur={handleBlur}
//                             />
//                             {errors.confirmPassword && <div className="error">{errors.confirmPassword}</div>}
//                         </div>
//                     </div>

//                     <button type="submit" className={styles.login__button}>
//                         Submit
//                     </button>
//                 </form>
//             </div>
//         </div>
//     );
// };

// export default ResetPassword;
