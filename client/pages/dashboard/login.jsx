// LoginComponent.jsx
import React from 'react';
import styles from '../../styles/adminLogin.module.css'; // Import the CSS module

const LoginComponent = () => {
  return (
    <div className={styles.main}>
      <div className={styles.login}>
        <img src="/logo/logo.png" alt="image" className={styles.login__bg} />

        <form action="" className={styles.login__form}>
          <h1 className={styles.login__title}>Login</h1>

          <div className={styles.login__inputs}>
            <div className={styles.login__box}>
              <input type="email" placeholder="Email or Username" required className={styles.login__input} />
              <i className="ri-mail-fill"></i>
            </div>

            <div className={styles.login__box}>
              <input type="password" placeholder="Password" required className={styles.login__input} />
              <i className="ri-lock-2-fill"></i>
            </div>
          </div>

          <div className={styles.login__check}>
            <div className={styles.login__check__box}>
              <input type="checkbox" className={styles.login__check__input} id="user-check" />
              <label htmlFor="user-check" className={styles.login__check__label}>Remember me</label>
            </div>

            <a href="#" className={styles.login__forgot}>Forgot Password?</a>
          </div>

          <button type="submit" className={styles.login__button}>Login</button>

          <div className={styles.login__register}>
            Don't have an account
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginComponent;
