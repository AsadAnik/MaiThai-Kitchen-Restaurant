import 'bootstrap/dist/css/bootstrap.min.css';
import '@/styles/globals.css';
import '@/styles/foodOrder.css';
import '@/styles/loginRegister.css';
import '@/styles/aboutUs.css';
import '@/styles/termsPolicy.css';
import '@/styles/dashboard.css';
import '@/styles/pagination.css';
import '@/styles/sidebar.css';
import '@/styles/cart.css';
import '@/styles/cartItem.css';

import {Provider} from 'react-redux';
import store from '@/redux/store';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function App({Component, pageProps}) {
    return (
        <Provider store={store}>
            <Component {...pageProps} />

            <ToastContainer
                position="bottom-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </Provider>
    )
}
