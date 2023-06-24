import Header from "@/components/Header";
import NavigationBar from "@/components/Nav";
import Footer from "@/components/Footer";


const Layout = (WrappedComponent) => {
    return (props) => (
        <>  
            <Header />
            <NavigationBar />   
            <WrappedComponent {...props} />
            <Footer />
        </>
    );
};

export default Layout;