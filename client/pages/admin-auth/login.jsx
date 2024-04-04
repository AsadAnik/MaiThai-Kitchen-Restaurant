// LoginComponent.jsx

import React,{useState,useEffect} from 'react';
import styles from '../../styles/adminLogin.module.css'; 
import { useDispatch, useSelector } from 'react-redux';
import { loginAdminAuth } from '@/redux/actions/authActions';
import { useRouter } from 'next/router';
import Link from 'next/link';

const LoginComponent = () => {
  const dispatch = useDispatch();
  const route = useRouter()

  const [adminLoginData, setAdminLoginData] = useState({
    emailOrUserName: '',
    password: ''
  })

  const { loading, isAuth, message, error } = useSelector((state) => state.login);

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

            route.push('overview')
        }
    }, [isAuth, error, message]);

  
     /**
     * ===== Handle Change Auth Data =====
     * @param {object} event 
     */
  const handleChangeAuthData = (event) => {
    const { value, name } = event.target;
        setAdminLoginData({ ...loginAuthData, [name]: value });
  }

   /**
     * ===== Handle Submit Auth Data =====
     * @param {object} event 
     */
  const handleSubmitAuthLogin = (event) => {
    event.preventDefault();
    console.log("Reqeusting for login -- ");
    dispatch(loginAdminAuth({ emailOrUserName: adminLoginData.email, password: adminLoginData.password }));
};

  return (
    <div className={styles.main}>
      <div className={styles.login}>
        <img src="/logo/logo.png" alt="image" className={styles.login__bg} />

        <form onSubmit={handleSubmitAuthLogin} action="" className={styles.login__form}>
          <h1 className={styles.login__title}>Login</h1>

          <div className={styles.login__inputs}>
            <div className={styles.login__box}>
              <input onChange={handleChangeAuthData} type="email" placeholder="Email or Username" required className={styles.login__input} />
              <i className="ri-mail-fill"></i>
            </div>

            <div className={styles.login__box}>
              <input onChange={handleChangeAuthData} type="password" placeholder="Password" required className={styles.login__input} />
              <i className="ri-lock-2-fill"></i>
            </div>
          </div>

          <div className={styles.login__check}>
            <div className={styles.login__check__box}>
              <input type="checkbox" className={styles.login__check__input} id="user-check" />
              <label htmlFor="user-check" className={styles.login__check__label}>Remember me</label>
            </div>

            <a onClick={() => route.push('forgotPassword')} className={styles.login__forgot}>Forgot Password?</a>
          </div>

          <button type="submit" className={styles.login__button}>Login</button>
        </form>
      </div>
    </div>
  );
};

export default LoginComponent;
