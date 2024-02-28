import React,{useState,useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import { registerAuth } from '@/redux/actions/authActions'

export default function Register() {
    const dispatch = useDispatch();
    const [registerAuthData, setRegisterAuthData] = useState({
        fitstName: '',
        lastName: '',
        address: '',
        email: '',
        password: '',
        rePassword: '',
        phoneNumber: ''
    })

    const { loading, isAuth, message, error } = useSelector((state) => state.register);


 /**
     * ===== Handle Change Auth Data =====
     * @param {object} event 
     */
    const handleChangeAuthData = (event) => {
        const {value, name} = event.target;
        setRegisterAuthData({ ...registerAuthData, [name]: value});
    }

 /**
     * ===== Handle Submit Auth Data =====
     * @param {object} event 
     */
    const handleSubmitAuthRegister = (event) => {
        event.preventDefault();
        console.log('Request for register');
        dispatch(registerAuth({
            firstName: registerAuthData.firstName,
            lastName: registerAuthData.lastName,
            address: registerAuthData.address,
            email: registerAuthData.email,
            password: registerAuthData.password,
            rePassword: registerAuthData.rePassword,
            phoneNumber: registerAuthData.phoneNumber
        }))
    }

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
                            <input name='firstName' type="text" className="form-control" placeholder="First Name" onChange={handleChangeAuthData} />
                        </div>
                        <div className="form-group col-md-6">
                            <input name='lastName' type="text" className="form-control" placeholder="Last Name" onChange={handleChangeAuthData} />
                        </div>
                    </div>
                    {/* Address On Regiser */}
                    <div className="form-group">
                        <textarea onChange={handleChangeAuthData} className="form-control" placeholder="Addresss" name='address' id cols={30} rows={5} defaultValue={""} />
                    </div>
                    {/* Email On Register */}
                    <div className="form-group">
                        <input name='email' type="email" className="form-control" placeholder="Email" onChange={handleChangeAuthData} />
                    </div>
                    {/* Password On Register */}
                    <div className="form-group">
                        <input name='password' type="password" className="form-control" placeholder="Password" onChange={handleChangeAuthData} />
                    </div>
                    {/* Re_Password On Register */}
                    <div className="form-group">
                        <input name='rePassword' type="password" className="form-control" placeholder="Re-password" onChange={handleChangeAuthData} />
                    </div>
                    {/* Number Register */}
                    <div className="form-group">
                        <input name='phoneNumber' type="number" className="form-control" placeholder="Phone Number" onChange={handleChangeAuthData} />
                    </div>
                    {/* Register Button */}
                    <div className="form-group">
                        {/* Button trigger modal */}
                        <button className="btn btn-lg btn-warning register-btn text-capitalize">
                            Register
                        </button>
                    </div>
                </form>
            </div>
        </>
    )
}
