import withLayout from '@/layout';
import Register from '@/components/Auth/Register';
import GotoLogin from '@/components/Auth/Login/Goto';

const RegisterPage = () => {
    return (
        <>
            {/*------------------ Login and Register Form ----------------------*/}
            <section id="login-register" className="mt-5 mb-5">
                <div className="container">
                    <div className="formContainer">
                        <div className="row form-row d-flex">
                            {/*--------- Register Section -----------*/}
                            <Register />


                            {/*---------- Login Div Column -------*/}
                            <GotoLogin />
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
};

export default withLayout(RegisterPage);