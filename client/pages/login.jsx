import withLayout from '@/layout';
import Login from '@/components/Auth/Login';
import GotoRegister from '@/components/Auth/Register/Goto';

const LoginPage = () => {

    return (
        <>
            {/*------------------ Login and Register Form ----------------------*/}
            <section id="login-register" className="mt-5 mb-5">
                <div className="container">
                    <div className="formContainer">
                        <div className="row form-row d-flex">
                            {/*---------- Login Div Column -------*/}
                            <Login />

                            {/*--------- Register Section -----------*/}
                            <GotoRegister />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default withLayout(LoginPage);