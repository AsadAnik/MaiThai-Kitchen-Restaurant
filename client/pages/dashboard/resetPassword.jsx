import React from 'react'
import styles from '../../styles/adminLogin.module.css'


const resetPassword = () => {
	return (
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
								type="NEW PASSWORD"
								placeholder="password"
								required
								className={styles.login__input}
							/>
							<i className="ri-mail-fill"></i>
						</div>
						<div className={styles.login__box}>
							<input
								type="CONFORM PASSWORD"
								placeholder="password"
								required
								className={styles.login__input}
							/>
							<i className="ri-mail-fill"></i>
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