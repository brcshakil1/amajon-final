import { Outlet, useNavigation } from "react-router-dom";
import Footer from "../../pages/Footer/Footer";
import Header from "../../pages/Header/Header"
import Spinner from "../../component/Spinner/Spinner";

const MainLayout = () => {
    const navigation = useNavigation();

    return (
        <>
            <Header />
            {
                navigation.state === 'loading' ? 
                <div className="min-h-screen grid place-items-center">
                    <Spinner />
                </div>
                 : 
                <div className="min-h-screen">
                <Outlet />
                </div>
            }
            <Footer />
        </>
    );
};

export default MainLayout;