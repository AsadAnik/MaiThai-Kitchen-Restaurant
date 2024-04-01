// import React,{useState,useEffect} from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { toast } from 'react-toastify'
// import { registerAuth, } from '@/redux/actions/authActions'
// import { userOtp } from '@/redux/actions/userActions';



// export default function Register() {
//     const dispatch = useDispatch();
//     const [registerAuthData, setRegisterAuthData] = useState({
//         firstName: '',
//         lastName: '',
//         address: '',
//         email: '',
//         password: '',
//         rePassword: '',
//         phoneNumber: ''
//     })

//     const [errors, setErrors] = useState({});
//     const { loading, isAuth, message, error } = useSelector((state) => state.register);
//     const { loading: otpLoading } = useSelector((state) => state.userOtp);

    
//   const isValidEmail = (email) => {
//     // Regular expression for basic email validation
//     const emailRegex = /^\S+@\S+\.\S+$/;
//     return emailRegex.test(email);
//   };

//   useEffect(() => {
//     if (error) {
//         toast.error(`${error}`, {
//             position: "top-center",
//             autoClose: 2000,
//         });
//     }

//     if (isAuth) {
//         toast.success(`${message}`, {
//             position: "top-center",
//             autoClose: 2000,
//         });

//         route('/index')
//     }
// }, [isAuth, error, message]);

//   const isValidPassword = (password) => {
//     // Regular expressions for password validation
//     const symbolRegex = /[!@#$%^&*(),.?":{}|<>]/;
//     const numberRegex = /[0-9]/;
//     const upperCaseRegex = /[A-Z]/;
//     const lowerCaseRegex = /[a-z]/;
//     return (
//       password.length >= 8 &&
//       symbolRegex.test(password) &&
//       numberRegex.test(password) &&
//       upperCaseRegex.test(password) &&
//       lowerCaseRegex.test(password)
//     );
//   };

//     const validateForm = () => {
//         let newErrors = {};
    
//         if (!registerAuthData.firstName) {
//           newErrors.firstName = "First name is required";
//         }
//         if (!registerAuthData.lastName) {
//           newErrors.lastName = "Last name is required";
//         }
//         if (!registerAuthData.email) {
//           newErrors.email = "Email is required";
//         } else if (!isValidEmail(registerAuthData.email)) {
//           newErrors.email = "Invalid email format";
//         }
//         if (!registerAuthData.phoneNumber) {
//           newErrors.phoneNumber = "Phone number is required";
//         } else if (!isValidPhoneNumber(registerAuthData.phoneNumber)) {
//           newErrors.phoneNumber = "Phone number must be 10 digits";
//         }
//         if (!registerAuthData.password) {
//           newErrors.password = "Password is required";
//         } else if (!isValidPassword(registerAuthData.password)) {
//           newErrors.password =
//             "Password must be at least 8 characters long and contain at least one symbol, one number, one uppercase letter, and one lowercase letter";
//         }
//         if (!registerAuthData.rePassword) {
//           newErrors.rePassword = "Confirm password is required";
//         } else if (registerAuthData.rePassword !== registerAuthData.rePassword) {
//           newErrors.rePassword = "Passwords must match";
//         }
    
//         setErrors(newErrors);
    
//         return Object.keys(newErrors).length === 0;
//       };


//  /**
//      * ===== Handle Change Auth Data =====
//      * @param {object} event 
//      */
//     const handleChangeAuthData = (event) => {
//         const {value, name} = event.target;
//         setRegisterAuthData({ ...registerAuthData, [name]: value});
//     }


//  /**
//      * ===== Handle Submit Auth Data =====
//      * @param {object} event 
//      */
//     const handleSubmitAuthRegister = (event) => {
//         event.preventDefault();
//         console.log('Request for register');
//         dispatch(registerAuth({
//             firstName: registerAuthData.firstName,
//             lastName: registerAuthData.lastName,
//             address: registerAuthData.address,
//             email: registerAuthData.email,
//             password: registerAuthData.password,
//             rePassword: registerAuthData.rePassword,
//             phoneNumber: registerAuthData.phoneNumber
//         }))

//         const isValid = validateForm();
//     if (isValid) {
//       console.log("Form Submitted", registerAuthData);
//     } else {
//       console.log("Form Validation Failed");
//     }
//     }

//     return (
//         <>
//             <div className="register-section-2">
//                 <form action className="form-section" style={{ marginRight: '2rem' }} onSubmit={handleSubmitAuthRegister}>
//                     {/* Form Label */}
//                     <div className="form-label">
//                         <h1 className="text-capitalize mb-4">register now !</h1>
//                     </div>
//                     {/* First & Last Name */}
//                     <div className="row">
//                         <div className="form-group col-md-6">
//                             <input name='firstName' type="text" className="form-control" placeholder="First Name" onChange={handleChangeAuthData} />
//                             {errors.firstName && <div className='error'>{errors.firstName}</div>}
//                         </div>
//                         <div className="form-group col-md-6">
//                             <input name='lastName' type="text" className="form-control" placeholder="Last Name" onChange={handleChangeAuthData} />
//                             {errors.lastName && <div className='error'>{errors.lastName}</div>}

//                         </div>
//                     </div>
//                     {/* Address On Regiser */}
//                     <div className="form-group">
//                         <textarea onChange={handleChangeAuthData} className="form-control" placeholder="Addresss" name='address' id cols={30} rows={5} defaultValue={""} />
                        

//                     </div>
//                     {/* Email On Register */}
//                     <div className="form-group">
//                         <input name='email' type="email" className="form-control" placeholder="Email" onChange={handleChangeAuthData} />
//                         {errors.email && <div className='error'>{errors.email}</div>}
//                     </div>
//                     {/* Password On Register */}
//                     <div className="form-group">
//                         <input name='password' type="password" className="form-control" placeholder="Password" onChange={handleChangeAuthData} />
//                         {errors.password && <div className='error'>{errors.password}</div>}

//                     </div>
//                     {/* Re_Password On Register */}
//                     <div className="form-group">
//                         <input name='rePassword' type="password" className="form-control" placeholder="Re-password" onChange={handleChangeAuthData} />
//                         {errors.rePassword && (
//                         <div className='error'>{errors.rePassword}</div>
//                         )}  
//                     </div>
//                     {/* Number Register */}
//                     <div className="form-group">
//                         <input name='phoneNumber' type="number" className="form-control" placeholder="Phone Number" onChange={handleChangeAuthData} />
//                     </div>
//                     {/* Register Button */}
//                     <div className="form-group">
//                         {/* Button trigger modal */}
//                         <button disabled={loading ? true : false} className="btn btn-lg btn-warning register-btn text-capitalize">
//                             Register
//                         </button> 
//                     </div>
//                 </form>
//             </div>
//         </>
//     )
// }


import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { registerAuth } from '@/redux/actions/authActions';
import { userOtp } from '@/redux/actions/userActions';

export default function Register() {
    const dispatch = useDispatch();
    const [registerAuthData, setRegisterAuthData] = useState({
        firstName: '',
        lastName: '',
        address: '',
        email: '',
        password: '',
        rePassword: '',
        phoneNumber: ''
    });

    const [errors, setErrors] = useState({});
    const { loading, isAuth, message, error } = useSelector(state => state.register);
    const { loading: otpLoading } = useSelector(state => state.userOtp);

    const isValidEmail = email => {
        // Regular expression for basic email validation
        const emailRegex = /^\S+@\S+\.\S+$/;
        return emailRegex.test(email);
    };

    useEffect(() => {
        if (error) {
            toast.error(`${error}`, {
                position: 'top-center',
                autoClose: 2000
            });
        }

        if (isAuth) {
            toast.success(`${message} and go to your email`, {
                position: 'top-center',
                autoClose: 2000
            });

            // route('/index');
        }
    }, [isAuth, error, message]);

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

    const validateForm = () => {
        let newErrors = {};

        if (!registerAuthData.firstName) {
            newErrors.firstName = 'First name is required';
        }
        if (!registerAuthData.lastName) {
            newErrors.lastName = 'Last name is required';
        }
        if (!registerAuthData.email) {
            newErrors.email = 'Email is required';
        } else if (!isValidEmail(registerAuthData.email)) {
            newErrors.email = 'Invalid email format';
        }
        // if (!registerAuthData.phoneNumber) {
        //     newErrors.phoneNumber = 'Phone number is required';
        // } else if (!isValidPhoneNumber(registerAuthData.phoneNumber)) {
        //     newErrors.phoneNumber = 'Phone number must be 10 digits';
        // }
        if (!registerAuthData.password) {
            newErrors.password = 'Password is required';
        } else if (!isValidPassword(registerAuthData.password)) {
            newErrors.password =
                'Password must be at least 8 characters long and contain at least one symbol, one number, one uppercase letter, and one lowercase letter';
        }
        if (!registerAuthData.rePassword) {
            newErrors.rePassword = 'Confirm password is required';
        } else if (registerAuthData.rePassword !== registerAuthData.password) {
            newErrors.rePassword = 'Passwords must match';
        }

        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;
    };

    const handleChangeAuthData = event => {
        const { value, name } = event.target;
        // Clear errors when the user starts typing
        setErrors({ ...errors, [name]: '' });
        setRegisterAuthData({ ...registerAuthData, [name]: value });

        if (name === 'password' || name === 'rePassword') {
          const otherField = name === 'password' ? 'rePassword' : 'password';
          if (value !== registerAuthData[otherField]) {
              setErrors({ ...errors, [otherField]: 'Passwords must match' });
          } else {
              setErrors({ ...errors, [otherField]: '' });
          }
      }
    };

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

    const handleSubmitAuthRegister = event => {
        event.preventDefault();
        console.log('Request for register');
        dispatch(
            registerAuth({
                firstName: registerAuthData.firstName,
                lastName: registerAuthData.lastName,
                address: registerAuthData.address,
                email: registerAuthData.email,
                password: registerAuthData.password,
                rePassword: registerAuthData.rePassword,
                phoneNumber: registerAuthData.phoneNumber
            })
        );

        const isValid = validateForm();
        if (isValid) {
            console.log('Form Submitted', registerAuthData);
        } else {
            console.log('Form Validation Failed');
        }
    };

    return (
        <>
            <div className="register-section-2">
                <form action className="form-section" style={{ marginRight: '2rem' }} onSubmit={handleSubmitAuthRegister}>
                    {/* Form Label */}
                    <div className="form-label">
                        <h1 className="text-capitalize mb-4">register now !</h1>
                    </div>
                    {/* First & Last Name */}
                    <div className="row">
                        <div className="form-group col-md-6">
                            <input
                                name="firstName"
                                type="text"
                                className={inputClassName('firstName')}
                                placeholder="First Name"
                                onChange={handleChangeAuthData}
                                onBlur={handleBlur}
                            />
                            {errors.firstName && <div className="error">{errors.firstName}</div>}
                        </div>
                        <div className="form-group col-md-6">
                            <input
                                name="lastName"
                                type="text"
                                className={inputClassName('lastName')}
                                placeholder="Last Name"
                                onChange={handleChangeAuthData}
                                onBlur={handleBlur}
                            />
                            {errors.lastName && <div className="error">{errors.lastName}</div>}
                        </div>
                    </div>
                    {/* Address On Regiser */}
                    <div className="form-group">
                        <textarea
                            onChange={handleChangeAuthData}
                            className={inputClassName('address')}
                            placeholder="Addresss"
                            name="address"
                            id
                            cols={30}
                            rows={5}
                            defaultValue={''}
                        />
                    </div>
                    {/* Email On Register */}
                    <div className="form-group">
                        <input
                            name="email"
                            type="email"
                            className={inputClassName('email')}
                            placeholder="Email"
                            onChange={handleChangeAuthData}
                            onBlur={handleBlur}
                        />
                        {errors.email && <div className="error">{errors.email}</div>}
                    </div>
                    {/* Password On Register */}
                    <div className="form-group">
                        <input
                            name="password"
                            type="password"
                            className={inputClassName('password')}
                            placeholder="Password"
                            onChange={handleChangeAuthData}
                            onBlur={handleBlur}
                        />
                        {errors.password && <div className="error">{errors.password}</div>}
                    </div>
                    {/* Re_Password On Register */}
                    <div className="form-group">
                        <input
                            name="rePassword"
                            type="password"
                            className={inputClassName('rePassword')}
                            placeholder="Re-password"
                            onChange={handleChangeAuthData}
                            onBlur={handleBlur}
                        />
                        {errors.rePassword && <div className="error">{errors.rePassword}</div>}
                    </div>
                    {/* Number Register */}
                    <div className="form-group">
                        <input
                            name="phoneNumber"
                            type="number"
                            className={inputClassName('phoneNumber')}
                            placeholder="Phone Number"
                            onChange={handleChangeAuthData}
                            onBlur={handleBlur}
                        />
                        {errors.phoneNumber && <div className="error">{errors.phoneNumber}</div>}
                    </div>
                    {/* Register Button */}
                    <div className="form-group">
                        {/* Button trigger modal */}
                        <button disabled={loading ? true : false} className="btn btn-lg btn-warning register-btn text-capitalize">
                            Register
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
}
